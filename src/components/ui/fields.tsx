import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-950 shadow-sm transition-colors placeholder:text-slate-400 focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-600/20 aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/20";

export function Input({
  className,
  ref,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  ref?: React.Ref<HTMLInputElement>;
}) {
  return <input ref={ref} className={cn(fieldBase, className)} {...props} />;
}

export function Textarea({
  className,
  ref,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  ref?: React.Ref<HTMLTextAreaElement>;
}) {
  return (
    <textarea
      ref={ref}
      className={cn(fieldBase, "min-h-28 resize-y", className)}
      {...props}
    />
  );
}

export function Select({
  className,
  ref,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  ref?: React.Ref<HTMLSelectElement>;
}) {
  return (
    <select ref={ref} className={cn(fieldBase, "pr-9", className)} {...props}>
      {children}
    </select>
  );
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">
      {message}
    </p>
  );
}

export function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-sm font-medium text-navy-950"
    >
      {children}
      {required ? (
        <span className="ml-0.5 text-accent-600" aria-hidden>
          *
        </span>
      ) : (
        <span className="ml-1.5 text-xs font-normal text-slate-400">
          (optional)
        </span>
      )}
    </label>
  );
}
