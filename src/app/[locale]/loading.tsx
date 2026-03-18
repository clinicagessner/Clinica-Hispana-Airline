import { CircleNotch } from "@phosphor-icons/react/dist/ssr";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-warm">
      <div className="text-center">
        <CircleNotch
          className="size-12 text-red-primary animate-spin mx-auto mb-4"
          weight="bold"
        />
        <p className="text-muted-foreground">Cargando...</p>
      </div>
    </div>
  );
}
