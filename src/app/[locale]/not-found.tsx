import type { Metadata } from "next";
import Link from "next/link";
import { HouseLine, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404 - Página No Encontrada",
  description: "Lo sentimos, la página que busca no existe o ha sido movida. Visite la página principal de Clínica Hispana Airline.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-warm px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center size-20 rounded-full bg-red-light mb-8">
          <HouseLine className="size-10 text-red-primary" weight="duotone" />
        </div>

        <h1 className="text-6xl font-heading font-bold text-slate-dark mb-4">
          404
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Lo sentimos, la página que busca no existe o ha sido movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <HouseLine className="size-5" />
              Ir al Inicio
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href="/#contact">
              <ArrowLeft className="size-5" />
              Contactar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
