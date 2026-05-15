import { useEffect, useMemo, useState } from "react";

type Option = { value: string; label: string };

interface Props {
  categories: Option[];
  contexts: Option[];
  labels: {
    category: string;
    context: string;
    all: string;
    clear: string;
    empty: string;
  };
}

const ALL = "__all__";

export default function ProjectFilters({ categories, contexts, labels }: Props) {
  const [categoria, setCategoria] = useState<string>(ALL);
  const [contexto, setContexto] = useState<string>(ALL);
  const [visibleCount, setVisibleCount] = useState<number>(0);

  const cardSelector = ".project-card";

  // Apply filters by toggling a `hidden` class on cards already in the DOM.
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(cardSelector);
    let shown = 0;
    cards.forEach((card) => {
      const matchesCategoria =
        categoria === ALL || card.dataset.categoria === categoria;
      const matchesContexto =
        contexto === ALL || card.dataset.contexto === contexto;
      const visible = matchesCategoria && matchesContexto;
      card.classList.toggle("hidden", !visible);
      if (visible) shown += 1;
    });
    setVisibleCount(shown);

    const empty = document.getElementById("projects-empty");
    if (empty) empty.classList.toggle("hidden", shown !== 0);
  }, [categoria, contexto]);

  const hasFilter = categoria !== ALL || contexto !== ALL;

  const categoryOptions = useMemo(
    () => [{ value: ALL, label: labels.all }, ...categories],
    [categories, labels.all],
  );
  const contextOptions = useMemo(
    () => [{ value: ALL, label: labels.all }, ...contexts],
    [contexts, labels.all],
  );

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <FilterGroup
          label={labels.category}
          value={categoria}
          options={categoryOptions}
          onChange={setCategoria}
        />
        <FilterGroup
          label={labels.context}
          value={contexto}
          options={contextOptions}
          onChange={setContexto}
        />
      </div>

      {hasFilter && (
        <button
          type="button"
          onClick={() => {
            setCategoria(ALL);
            setContexto(ALL);
          }}
          className="self-start rounded-md border border-border px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-fg-muted transition-colors hover:border-accent hover:text-accent sm:self-end"
        >
          {labels.clear}
        </button>
      )}
    </div>
  );
}

interface FilterGroupProps {
  label: string;
  value: string;
  options: Option[];
  onChange: (next: string) => void;
}

function FilterGroup({ label, value, options, onChange }: FilterGroupProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={
                "rounded-md border px-2.5 py-1 font-mono text-xs transition-colors " +
                (active
                  ? "border-accent bg-accent text-bg"
                  : "border-border bg-surface-2 text-fg-muted hover:border-accent hover:text-fg")
              }
              aria-pressed={active}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
