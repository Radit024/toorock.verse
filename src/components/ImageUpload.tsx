import { useState, useRef } from "react";
import { Upload, X, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
}

const ImageUpload = ({ value, onChange }: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast({ title: "Error", description: "Please select an image file", variant: "destructive" });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast({ title: "Error", description: "Image must be under 5MB", variant: "destructive" });
      return;
    }

    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error } = await supabase.storage
      .from("article-images")
      .upload(path, file);

    if (error) {
      toast({ title: "Upload failed", description: error.message, variant: "destructive" });
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("article-images")
      .getPublicUrl(path);

    onChange(urlData.publicUrl);
    setUploading(false);
    toast({ title: "Uploaded", description: "Image ready" });
  };

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
          <img
            src={value}
            alt="Preview"
            className="w-full max-w-xs h-32 object-cover border border-border"
          />
          <button
            type="button"
            onClick={handleClear}
            className="absolute top-1 right-1 bg-background/80 p-1 border border-border hover:bg-destructive hover:text-destructive-foreground transition-colors"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="w-full max-w-xs h-32 border border-dashed border-border bg-secondary flex flex-col items-center justify-center gap-2 hover:border-primary transition-colors cursor-pointer disabled:opacity-50"
        >
          {uploading ? (
            <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />
          ) : (
            <>
              <Upload className="h-5 w-5 text-muted-foreground" />
              <span className="font-meta text-[10px] uppercase tracking-wider text-muted-foreground">
                Click to upload
              </span>
            </>
          )}
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="hidden"
      />

      {/* Fallback URL input */}
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
