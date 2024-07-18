import { NavLink } from "@remix-run/react";

export default function Nav() {
  return (
    <nav className="flex gap-4 bg-slate-400 text-white max-w-screen-xl mx-auto p-3 rounded-lg">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
