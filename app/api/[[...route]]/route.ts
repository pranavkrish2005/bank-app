import { Hono } from "hono";
import type { NextRequest } from "next/server";

import accounts from "./accounts";
import categories from "./categories";
import summary from "./summary";
import transactions from "./transactions";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app
  .route("/accounts", accounts)
  .route("/categories", categories)
  .route("/summary", summary)
  .route("/transactions", transactions);

export function GET(request: NextRequest) {
  return app.fetch(request);
}

export const POST = GET;
export const PATCH = GET;
export const DELETE = GET;

export type AppType = typeof routes;
