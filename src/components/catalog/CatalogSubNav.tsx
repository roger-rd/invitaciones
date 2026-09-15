import { Link, NavLink } from "react-router-dom";
import { categories } from "../../data/categories";
export default function CatalogSubNav() {
  return (
    <nav
      aria-label="Catálogos"
      className="landing-container flex flex-wrap items-center gap-x-6 gap-y-1 py-5"
    >
      <Link to="/" className="landing-navlink">
        ← Volver al inicio
      </Link>
      {categories.map((c) => (
        <NavLink
          key={c.id}
          to={c.path}
          className={({ isActive }) =>
            `landing-navlink ${isActive ? "font-bold underline underline-offset-8" : ""}`
          }
        >
          {c.shortLabel ?? c.label}
        </NavLink>
      ))}
    </nav>
  );
}
