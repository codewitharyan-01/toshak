import type { SpecTable as SpecTableData } from "@/data/products/types";

export function SpecTable({ specs }: { specs: SpecTableData }) {
  return (
    <figure className="space-y-2">
      <div className="overflow-x-auto rounded-xl border border-navy-200/90 bg-white shadow-xs">
        <table className="w-full min-w-max border-collapse text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-navy-800 bg-navy-950 text-white">
              {specs.columns.map((col, idx) => (
                <th
                  key={col}
                  scope="col"
                  className={`whitespace-nowrap px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-wider ${
                    idx === 0 ? "text-accent-400" : "text-slate-300"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-100 font-mono text-xs">
            {specs.rows.map((row, i) => (
              <tr
                key={row[0] ?? i}
                className={
                  i % 2 === 1
                    ? "bg-navy-50/50 hover:bg-navy-100/60 transition-colors"
                    : "bg-white hover:bg-navy-50/60 transition-colors"
                }
              >
                {row.map((cell, j) => (
                  <td
                    key={`${row[0]}-${specs.columns[j]}`}
                    className="whitespace-nowrap px-4 py-3 text-navy-950"
                  >
                    <span className={j === 0 ? "font-bold text-navy-950" : "text-slate-600"}>
                      {cell}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {specs.note ? (
        <figcaption className="text-right font-mono text-[11px] text-slate-400">
          * {specs.note}
        </figcaption>
      ) : null}
    </figure>
  );
}
