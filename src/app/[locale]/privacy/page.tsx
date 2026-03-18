import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Política de Privacidad y Aviso HIPAA",
    description: `Política de privacidad y aviso de prácticas de privacidad HIPAA de ${SITE_CONFIG.name}`,
  };
}

export default async function PrivacyPage() {
  const t = await getTranslations("footer");

  return (
    <div className="pt-24 pb-16 md:pb-24 bg-red-warm min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-dark mb-8">
            {t("privacy")}
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 prose prose-slate max-w-none">
            <p className="text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2>1. Información que Recopilamos</h2>
            <p>
              En {SITE_CONFIG.name}, recopilamos información personal que usted nos proporciona
              directamente, incluyendo:
            </p>
            <ul>
              <li>Nombre completo</li>
              <li>Número de teléfono</li>
              <li>Dirección de correo electrónico</li>
              <li>Información médica relacionada con su consulta</li>
              <li>Información de contacto de emergencia</li>
            </ul>

            <h2>2. Cómo Utilizamos su Información</h2>
            <p>Utilizamos la información recopilada para:</p>
            <ul>
              <li>Proporcionar servicios médicos y de atención de salud</li>
              <li>Comunicarnos con usted sobre citas y servicios</li>
              <li>Procesar pagos y facturación</li>
              <li>Cumplir con requisitos legales y regulatorios</li>
              <li>Mejorar nuestros servicios</li>
            </ul>

            <h2>3. Protección de su Información</h2>
            <p>
              Implementamos medidas de seguridad técnicas, administrativas y físicas diseñadas
              para proteger su información personal contra acceso no autorizado, alteración,
              divulgación o destrucción.
            </p>

            <h2 id="hipaa">4. Aviso de Prácticas de Privacidad HIPAA</h2>
            <p>
              Este aviso describe cómo la información médica sobre usted puede ser usada y
              divulgada, y cómo usted puede obtener acceso a esta información. Por favor
              revíselo cuidadosamente.
            </p>

            <h3>Sus Derechos</h3>
            <p>Bajo HIPAA, usted tiene derecho a:</p>
            <ul>
              <li>Obtener una copia de sus registros médicos</li>
              <li>Solicitar correcciones a su información médica</li>
              <li>Solicitar comunicaciones confidenciales</li>
              <li>Solicitar restricciones sobre cómo usamos su información</li>
              <li>Obtener una lista de divulgaciones</li>
              <li>Obtener una copia de este aviso de privacidad</li>
              <li>Elegir a alguien para actuar en su nombre</li>
              <li>Presentar una queja si cree que sus derechos han sido violados</li>
            </ul>

            <h3>Nuestras Responsabilidades</h3>
            <p>Estamos obligados por ley a:</p>
            <ul>
              <li>Mantener la privacidad y seguridad de su información de salud protegida</li>
              <li>Notificarle inmediatamente si ocurre una violación que pueda haber comprometido su información</li>
              <li>Seguir los términos de este aviso actualmente en vigor</li>
              <li>No usar o divulgar su información de salud sin su autorización, excepto como se describe en este aviso</li>
            </ul>

            <h3>Uso y Divulgación de su Información</h3>
            <p>Podemos usar y compartir su información de salud para:</p>
            <ul>
              <li><strong>Tratamiento:</strong> Coordinar su atención médica</li>
              <li><strong>Pago:</strong> Facturar y obtener pago por servicios</li>
              <li><strong>Operaciones de Atención Médica:</strong> Mejorar la calidad de la atención</li>
              <li><strong>Según lo requiera la ley:</strong> Cumplir con leyes estatales y federales</li>
            </ul>

            <h2>5. Cookies y Tecnología de Seguimiento</h2>
            <p>
              Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar
              su experiencia de navegación y analizar el uso del sitio. Puede configurar su
              navegador para rechazar cookies.
            </p>

            <h2>6. Enlaces a Terceros</h2>
            <p>
              Nuestro sitio web puede contener enlaces a sitios de terceros. No somos
              responsables de las prácticas de privacidad de estos sitios externos.
            </p>

            <h2>7. Cambios a esta Política</h2>
            <p>
              Podemos actualizar esta política de privacidad periódicamente. Los cambios
              entrarán en vigor inmediatamente después de su publicación en este sitio web.
            </p>

            <h2>8. Contacto</h2>
            <p>
              Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos
              su información, contáctenos:
            </p>
            <ul>
              <li>
                <strong>Teléfono:</strong>{" "}
                <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phoneFormatted}</a>
              </li>
              <li>
                <strong>Correo:</strong>{" "}
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </li>
              <li>
                <strong>Dirección:</strong> {CONTACT_INFO.address}, {CONTACT_INFO.city},{" "}
                {CONTACT_INFO.state} {CONTACT_INFO.zip}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
