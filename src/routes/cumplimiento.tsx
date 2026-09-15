import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/cumplimiento")({
  beforeLoad: () => {
    throw redirect({ to: "/servicios", statusCode: 301 });
  },
});