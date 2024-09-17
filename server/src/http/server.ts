import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";

import { getWeekSummaryRoute } from "./routes/get-week-summary";
import { createGoalRoute } from "./routes/create-goals";
import { createGoalCompletionRoute } from "./routes/create-completion";
import { getWeekPendingGoalsRoute } from "./routes/get-pending-goals";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, { origin: "*" });

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createGoalRoute);
app.register(createGoalCompletionRoute);
app.register(getWeekSummaryRoute);
app.register(getWeekPendingGoalsRoute);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});
