import { Routes, Route } from "react-router-dom";
import InvitationPage from "./pages/InvitationPage";

export default function App() {
  return (
    <Routes>
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
  );
}