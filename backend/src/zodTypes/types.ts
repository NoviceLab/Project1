import z, { string } from "zod"

export const loginInputs = z.object({
    email: string().email(),
    password: string()
})

