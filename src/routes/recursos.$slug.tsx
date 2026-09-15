import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/recursos/$slug")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});