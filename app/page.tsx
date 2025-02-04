import { Suspense } from "react"
import NameForm from "@/components/name-form"
import Explanation from "@/components/explanation"

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to our Next.js Demo</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <NameForm /> 
      </Suspense>
      <Explanation />
    </main>
  )
}

