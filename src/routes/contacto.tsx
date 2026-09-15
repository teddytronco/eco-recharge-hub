import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/contacto")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "evaluacion", statusCode: 301 });
  },
});