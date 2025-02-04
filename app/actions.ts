"use server"

export async function submitName(formData: FormData) {
  const name = formData.get("name")
  if (typeof name !== "string" || name.length === 0) {
    return { error: "Please enter a valid name" }
  }
  return { greeting: `Hello ${name}!` }
}

