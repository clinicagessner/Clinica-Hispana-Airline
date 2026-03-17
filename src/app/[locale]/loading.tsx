import { CircleNotch } from "@phosphor-icons/react/dist/ssr";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-warm">
      <div className="text-center">
        <CircleNotch
          className="size-12 text-blue-primary animate-spin mx-auto mb-4"
          weight="bold"
        />
        <p className="text-muted-foreground">Cargando...</p>
      </div>
    </div>
  );
}
