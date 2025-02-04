import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"

export default function Explanation() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>How It Works</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="server-actions">
            <AccordionTrigger>Server Actions</AccordionTrigger>
            <AccordionContent>
              Server Actions process the input on the server-side. When the form is submitted, the 'submitName' action
              is called, which runs on the server and returns the greeting or an error message.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="shadcn-ui">
            <AccordionTrigger>Shadcn UI Components</AccordionTrigger>
            <AccordionContent>
              We use Shadcn UI components like Input, Button, Card, and Accordion for consistent styling. These
              components are built on top of Radix UI and Tailwind CSS, providing accessible and customizable UI
              elements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="next-js-features">
            <AccordionTrigger>Next.js 15.1 Features</AccordionTrigger>
            <AccordionContent>
              This app leverages Next.js 15.1 features such as the App Router, Server Components, and Server Actions.
              The App Router provides an intuitive file-based routing system, while Server Components allow for
              efficient server-side rendering and reduced client-side JavaScript.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

