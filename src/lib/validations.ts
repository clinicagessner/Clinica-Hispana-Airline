// zod/mini: misma validación, sin cargar la API encadenable de zod en el navegador
// (el chunk del formulario pesaba ~400 KB sin comprimir en la home).
import * as z from 'zod/mini';
import { SERVICES } from '@/lib/constants';

export const contactFormSchema = z.object({
  nombre: z.string().check(
    z.minLength(2, "El nombre debe tener al menos 2 caracteres"),
    z.maxLength(100, "El nombre no puede exceder 100 caracteres"),
  ),
  telefono: z.string().check(
    z.minLength(10, "Ingrese un número de teléfono válido"),
    z.regex(
      /^[\d\s\-\(\)\+]+$/,
      "El teléfono solo puede contener números, espacios, guiones y paréntesis"
    ),
  ),
  email: z.union([z.optional(z.email("Ingrese un correo válido")), z.literal("")]),
  servicio: z.string().check(z.minLength(1, "Seleccione un servicio")),
  mensaje: z.union([
    z.optional(z.string().check(z.maxLength(500, "El mensaje no puede exceder 500 caracteres"))),
    z.literal(""),
  ]),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const serviceOptions = [
  ...SERVICES.map((service) => ({
    value: service.id,
    label: service.title,
  })),
  { value: "otro", label: "Otro Servicio" },
];

export const contactFormSchemaEn = z.object({
  nombre: z.string().check(
    z.minLength(2, "Name must be at least 2 characters"),
    z.maxLength(100, "Name cannot exceed 100 characters"),
  ),
  telefono: z.string().check(
    z.minLength(10, "Please enter a valid phone number"),
    z.regex(
      /^[\d\s\-\(\)\+]+$/,
      "Phone can only contain numbers, spaces, hyphens and parentheses"
    ),
  ),
  email: z.union([z.optional(z.email("Please enter a valid email")), z.literal("")]),
  servicio: z.string().check(z.minLength(1, "Please select a service")),
  mensaje: z.union([
    z.optional(z.string().check(z.maxLength(500, "Message cannot exceed 500 characters"))),
    z.literal(""),
  ]),
});
