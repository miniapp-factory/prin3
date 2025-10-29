import { cn } from "@/lib/utils";

export function GradientCard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl shadow-lg",
        className
      )}
      {...props}
    />
  );
}
