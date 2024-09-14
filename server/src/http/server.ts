import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import { getWeekPendingGoals } from "../functions/get-week-pending-goals";
import { createGoalRoute } from "./routes/create-goals";
import { createCompletionRoutes } from "./routes/create-completion";
import { getPendingGoalsRoutes } from "./routes/get-pending-goals";

const app = fastify().withTypeProvider<ZodTypeProvider>(); // Essas linhas servem para passar habilitar o plugin do zod validar as informações passadas no corpo da requisição
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// Criando as rotas como plugin do fastify
app.register(createGoalRoute);
app.register(createCompletionRoutes);
app.register(getPendingGoalsRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server running!");
  });
