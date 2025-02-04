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
          <AccordionItem value="code-functionality">
            <AccordionTrigger>Code Functionality</AccordionTrigger>
            <AccordionContent>
              <p>
                The <strong>NameForm</strong> component is a simple form that allows users to input their name and receive a greeting message. Here's how it works step by step:
              </p>
              <ol className="list-decimal list-inside mt-2">
                <li>
                  <strong>State Management:</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      The component uses React's <code>useState</code> hook to manage two pieces of state:
                      <ul className="list-disc list-inside ml-6">
                        <li><code>greeting</code>: Stores the greeting message returned from the server.</li>
                        <li><code>error</code>: Stores any error messages that occur during form submission.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Form Submission:</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      When the form is submitted, the <code>handleSubmit</code> function is triggered. This function:
                      <ul className="list-disc list-inside ml-6">
                        <li>
                          Takes the form data as an argument and sends it to the <code>submitName</code> server action.
                        </li>
                        <li>
                          The <code>submitName</code> function processes the input on the server and returns either a greeting message or an error.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Handling Server Response:</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      If the server returns an error, the error message is displayed, and the greeting message is cleared.
                    </li>
                    <li>
                      If the server returns a greeting message, it is displayed, and any previous error message is cleared.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>UI Components:</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      The form uses Shadcn UI components like <code>Input</code> and <code>Button</code> for a consistent and modern design.
                    </li>
                    <li>
                      The greeting or error message is displayed below the form using conditional rendering.
                    </li>
                  </ul>
                </li>
              </ol>
              <p className="mt-2">
                This setup ensures a seamless user experience, with all the heavy lifting done on the server side, making the application both secure and efficient.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="server-actions">
            <AccordionTrigger>Server Actions</AccordionTrigger>
            <AccordionContent>
              <p>
                <strong>Server Actions</strong> are a powerful feature in Next.js that allow you to run code on the server directly from your React components. When you submit the form, the <code>submitName</code> function is executed on the server. This function processes the input data and returns either a greeting message or an error message.
              </p>
              <p className="mt-2">
                This approach ensures that sensitive logic or data processing happens securely on the server, reducing the risk of exposing critical information to the client-side.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="shadcn-ui">
            <AccordionTrigger>Shadcn UI Components</AccordionTrigger>
            <AccordionContent>
              <p>
                The user interface of this application is built using <strong>Shadcn UI</strong>, a collection of highly customizable and accessible UI components. These components are built on top of <strong>Radix UI</strong> and styled using <strong>Tailwind CSS</strong>.
              </p>
              <p className="mt-2">
                Components like <code>Input</code>, <code>Button</code>, <code>Card</code>, and <code>Accordion</code> are used to ensure a consistent and modern design across the application. Shadcn UI components are designed to be both developer-friendly and user-friendly, providing a seamless experience for both developers and end-users.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="next-js-features">
            <AccordionTrigger>Next.js 15.1 Features</AccordionTrigger>
            <AccordionContent>
              <p>
                This application takes full advantage of the latest features in <strong>Next.js 15.1</strong>, including:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  <strong>App Router:</strong> A file-based routing system that simplifies the creation of routes and nested layouts. It provides an intuitive way to structure your application.
                </li>
                <li>
                  <strong>Server Components:</strong> These components allow for efficient server-side rendering, reducing the amount of JavaScript sent to the client. This results in faster page loads and improved performance.
                </li>
                <li>
                  <strong>Server Actions:</strong> As mentioned earlier, Server Actions enable server-side logic to be executed directly from client components, enhancing security and performance.
                </li>
              </ul>
              <p className="mt-2">
                Together, these features make Next.js 15.1 a robust framework for building modern, scalable, and high-performance web applications.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}