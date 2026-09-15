import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/cobertura/$slug")({
  beforeLoad: () => {
    throw redirect({ to: "/servicios", statusCode: 301 });
  },
});