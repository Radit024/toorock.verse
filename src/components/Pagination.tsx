const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-0 border-t border-border py-6">
      {["01", "02", "03", "04", "05"].map((page, i) => (
        <button
          key={page}
          className={`font-heading text-lg px-4 py-2 border border-border transition-colors ${
            i === 0
              ? "bg-primary text-primary-foreground border-primary"
              : "text-muted-foreground hover:text-foreground hover:border-foreground"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
