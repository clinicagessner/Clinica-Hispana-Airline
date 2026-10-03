// Validación del formulario de contacto en el navegador, sin zod.
// zod (incluso zod/mini) mete ~400 KB de JS sin comprimir en la home con Turbopack, porque sus
// índices reexportan el módulo entero (locales incluidos) y no se puede podar. El servidor sigue
// validando con zod en `validations.ts`; estas reglas son las mismas, con los mismos mensajes.
import { SERVICES } from "@/lib/constants";

export interface ContactFormData {
  nombre: string;
  telefono: string;
  email?: string;
  servicio: string;
  mensaje?: string;
}

export const serviceOptions = [
  ...SERVICES.map((service) => ({
    value: service.id,
    label: service.title,
  })),
  { value: "otro", label: "Otro Servicio" },
];

const PHONE = /^[\d\s\-\(\)\+]+$/;
// La misma expresión que usa zod para `.email()`.
const EMAIL = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;

/** Primer error de cada campo, o un objeto vacío si todo es válido. */
export function validateContactForm(v: ContactFormData): Partial<Record<keyof ContactFormData, string>> {
  const e: Partial<Record<keyof ContactFormData, string>> = {};
  const nombre = v.nombre ?? "";
  if (nombre.length < 2) e.nombre = "El nombre debe tener al menos 2 caracteres";
  else if (nombre.length > 100) e.nombre = "El nombre no puede exceder 100 caracteres";
  const telefono = v.telefono ?? "";
  if (telefono.length < 10) e.telefono = "Ingrese un número de teléfono válido";
  else if (!PHONE.test(telefono)) e.telefono = "El teléfono solo puede contener números, espacios, guiones y paréntesis";
  if (v.email && !EMAIL.test(v.email)) e.email = "Ingrese un correo válido";
  if (!v.servicio) e.servicio = "Seleccione un servicio";
  if (v.mensaje && v.mensaje.length > 500) e.mensaje = "El mensaje no puede exceder 500 caracteres";
  return e;
}
