import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { SITE_CONFIG } from "@/lib/constants";

type Props = {
  /** Fecha de publicación en ISO (YYYY-MM-DD). Opcional en servicios. */
  published?: string;
  /** Fecha de la última revisión en ISO. */
  reviewed: string;
  locale: string;
  labels: {
    heading: string;
    /** Frase con {name}; nunca nombra a un médico concreto (§9 del playbook). */
    reviewedBy: string;
    published: string;
    lastReviewed: string;
  };
};

function fmt(date: string, locale: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Caja de revisión médica. Sin nombre y credenciales de un médico responsable,
 * el contenido se firma como "equipo médico de la clínica": §9 prohíbe
 * expresamente "el médico", "la doctora" o "nuestro doctor".
 *
 * Las fechas van en `<time datetime>` para que sean legibles por máquina, no
 * solo por personas.
 */
export function MedicalReview({ published, reviewed, locale, labels }: Props) {
  return (
    <aside className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-start gap-3">
        <ShieldCheck
          className="mt-0.5 size-5 shrink-0 text-red-primary"
          weight="duotone"
          aria-hidden="true"
        />
        <div className="text-sm text-slate-600">
          <p className="font-heading font-semibold text-slate-dark">
            {labels.heading}
          </p>
          <p className="mt-1">
            {labels.reviewedBy.replace("{name}", SITE_CONFIG.name)}
          </p>
          <p className="mt-2 text-xs text-slate-500">
            {published && (
              <>
                {labels.published}{" "}
                <time dateTime={published}>{fmt(published, locale)}</time>
                {" · "}
              </>
            )}
            {labels.lastReviewed}{" "}
            <time dateTime={reviewed}>{fmt(reviewed, locale)}</time>
          </p>
        </div>
      </div>
    </aside>
  );
}
