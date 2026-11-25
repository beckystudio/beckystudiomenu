import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Evita que `next dev` genere AGENTS.md en la raíz del repo.
  agentRules: false,
  // Las URLs de WordPress terminan en "/" (p. ej. /catalogo/corte/); se conservan igual.
  trailingSlash: true,
};

export default nextConfig;
