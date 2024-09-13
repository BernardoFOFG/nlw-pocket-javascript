import fastify from "fastify";
import { createGoal } from "../functions/create-goal";
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import z from "zod";

const app = fastify().withTypeProvider<ZodTypeProvider>(); // Essas linhas servem para passar habilitar o plugin do zod validar as informações passadas no corpo da requisição
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.post(
  "/goals",
  {
    schema: {
      // Aqui eu passo o schema de validação dentro da rota!
      body: z.object({
        title: z.string(),
        desiredWeeklyFrequency: z.number().int().min(1).max(7),
      }),
    },
  },
  async (request) => {
    const { title, desiredWeeklyFrequency } = request.body; // Destruturando os valores do corpo e passando para a função de inserção no banco
    await createGoal({
      title: title,
      desiredWeeklyFrequency: desiredWeeklyFrequency,
    });
  }
);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server running!");
  });
