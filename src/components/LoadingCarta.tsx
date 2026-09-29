export default function LoadingCarta() {
  return (
    <div role="status" aria-live="polite" className="flex min-h-screen items-center justify-center bg-cream p-8 text-ink">
      <span className="sr-only">Cargando…</span>
      <div className="loading-carta-scene" aria-hidden="true">
        <img className="loading-carta-letter" src="/favicon-carta.svg" alt="" width={112} height={112} />
        <span className="loading-carta-spark loading-carta-spark-one" />
        <span className="loading-carta-spark loading-carta-spark-two" />
        <span className="loading-carta-spark loading-carta-spark-three" />
      </div>
    </div>
  );
}
