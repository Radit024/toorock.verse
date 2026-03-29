import { useState, useRef, useCallback } from "react";
import { Upload, X, Loader2 } from "lucide-react";
import { uploadArticleImage } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  onUploaded?: (url: string) => void;
}

const ImageUpload = ({ value, onChange, onUploaded }: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadFile = useCallback(async (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast({ title: "Error", description: "Please select an image file", variant: "destructive" });
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      toast({ title: "Error", description: "Image must be under 2MB", variant: "destructive" });
      return;
    }

    setUploading(true);
    try {
      const publicUrl = await uploadArticleImage(file);
      onChange(publicUrl);
      onUploaded?.(publicUrl);
      toast({ title: "Uploaded", description: "Image ready" });
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      toast({ title: "Upload failed", description: msg, variant: "destructive" });
    } finally {
      setUploading(false);
    }
  }, [onChange, onUploaded]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) uploadFile(file);
  }, [uploadFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const handleClear = () => {
    onChange("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="space-y-2">
      <label className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground block">
        Image
      </label>

      {value ? (
        <div className="relative inline-block">
          <img src={value} alt="Preview" className="w-full max-w-xs h-32 object-cover border border-border" />
          <button
            type="button"
            onClick={handleClear}
            className="absolute top-1 right-1 bg-background/80 p-1 border border-border hover:bg-destructive hover:text-destructive-foreground transition-colors"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => inputRef.current?.click()}
          className={`w-full max-w-xs h-32 border-2 border-dashed bg-secondary flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${
            dragOver
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary"
          } ${uploading ? "opacity-50 pointer-events-none" : ""}`}
        >
          {uploading ? (
            <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />
          ) : (
            <>
              <Upload className={`h-5 w-5 ${dragOver ? "text-primary" : "text-muted-foreground"}`} />
              <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground text-center px-4">
                {dragOver ? "Drop image here" : "Drag & drop or click to upload"}
              </span>
            </>
          )}
        </div>
      )}

      <input ref={inputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-secondary border border-border px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
        placeholder="Or paste image URL..."
      />
    </div>
  );
};

export default ImageUpload;
