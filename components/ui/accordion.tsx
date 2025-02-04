import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "@/app/lib/utils"
import { ChevronDown } from "lucide-react"

interface AccordionProps extends AccordionPrimitive.AccordionSingleProps {}

export function Accordion({ className, ...props }: AccordionProps) {
  return <AccordionPrimitive.Root className={cn("w-full", className)} {...props} />
}

interface AccordionItemProps extends AccordionPrimitive.AccordionItemProps {}

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return <AccordionPrimitive.Item className={cn("border-b", className)} {...props} />
}

interface AccordionTriggerProps extends AccordionPrimitive.AccordionTriggerProps {}

export function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Trigger
      className={cn(
        "flex justify-between items-center w-full py-2 text-left text-base font-medium transition-all hover:underline",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  )
}

interface AccordionContentProps extends AccordionPrimitive.AccordionContentProps {}

export function AccordionContent({ className, ...props }: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content className={cn("py-2 text-sm text-gray-600", className)} {...props} />
  )
}
