import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import InvitationPage from "./pages/InvitationPage";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));

export default function App() {
  return (
    <Suspense fallback={<div role="status" className="min-h-screen bg-cream p-8 text-ink">Cargando…</div>}>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cumpleanos" element={<CategoryPage category="birthday" />} />
      <Route path="/infantiles" element={<CategoryPage category="kids-birthday" />} />
      <Route path="/quince-anos" element={<CategoryPage category="quince" />} />
      <Route path="/matrimonios" element={<CategoryPage category="wedding" />} />
      <Route path="/:slug" element={<InvitationPage />} />
      <Route
        path="*"
        element={
          <main className="flex min-h-screen items-center justify-center px-6 text-center">
            <div>
              <h1 className="text-3xl font-bold">Invitación no encontrada</h1>
              <p className="mt-3 text-gray-600">
                Verifica el enlace o crea el evento en <code>events.ts</code>.
              </p>
            </div>
          </main>
        }
      />
    </Routes>
    </Suspense>
  );
}