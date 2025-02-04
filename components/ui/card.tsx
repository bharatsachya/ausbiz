import { cn } from "@/app/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return <div className={cn("rounded-2xl border shadow-sm p-4 bg-white", className)} {...props} />
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={cn("pb-2", className)} {...props} />
}

export function CardTitle({ className, ...props }: CardProps) {
  return <h2 className={cn("text-lg font-semibold", className)} {...props} />
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn("text-sm text-gray-600", className)} {...props} />
}
