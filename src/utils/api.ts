import { FormInputs } from "@/interfaces/contactForm";

export const sendContactForm = async (data: FormInputs) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return response;
}
