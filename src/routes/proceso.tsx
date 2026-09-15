import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/proceso")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});