import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  http.post("/api/gakufu", async () => {
    return HttpResponse.json({ success: true }, { status: 200 });
  }),
];

export const server = setupServer(...handlers);
