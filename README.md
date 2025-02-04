# Name Greeting App

A simple web application built with **Next.js 15.1** that allows users to input their name and receive a personalized greeting. The app demonstrates the use of **Server Actions**, **Shadcn UI components**, and modern Next.js features like the **App Router** and **Server Components**.

---

## Features

- **User Input:** Users can enter their name in a form.
- **Personalized Greeting:** Upon submission, the server processes the input and returns a greeting message.
- **Error Handling:** Displays error messages if something goes wrong during submission.
- **Modern UI:** Built with **Shadcn UI** components for a clean and consistent design.
- **Server-Side Processing:** Utilizes Next.js **Server Actions** to handle form submissions securely on the server.

---

## Technologies Used

- **Next.js 15.1:** A React framework for building server-rendered applications.
- **Shadcn UI:** A collection of customizable and accessible UI components.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript for better developer experience.

---

## How It Works

### Code Functionality

1. **State Management:**
   - The app uses React's `useState` hook to manage two pieces of state:
     - `greeting`: Stores the greeting message returned from the server.
     - `error`: Stores any error messages that occur during form submission.

2. **Form Submission:**
  