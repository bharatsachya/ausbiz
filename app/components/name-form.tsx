"use client"

import { useState } from "react"
import { submitName } from "../actions"
import { Input } from "./ui/input"
import { Button } from "./ui/buttons"

export default function NameForm() {
  const [greeting, setGreeting] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    const result = await submitName(formData)
    if ("error" in result) {
      setError(result.error || "")
      setGreeting(null)
    } else {
      setGreeting(result.greeting)
      setError(null)
    }
  }

  return (
    <div className="mb-8">
      <form action={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <Input type="text" name="name" placeholder="Enter your name" className="flex-grow" />
        <Button type="submit">Submit</Button>
      </form>
      {greeting && <p className="mt-4 text-lg">{greeting}</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  )
}

