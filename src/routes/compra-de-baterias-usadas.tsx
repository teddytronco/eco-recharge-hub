import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/compra-de-baterias-usadas")({
  beforeLoad: () => {
    throw redirect({ to: "/servicios", hash: "evaluacion", statusCode: 301 });
  },
});