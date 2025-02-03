import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(10, "Password must be at least 10 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirmation password must be the same as password",
    path: ["confirmPassword"], // Menentukan lokasi error pada confirmPassword
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
