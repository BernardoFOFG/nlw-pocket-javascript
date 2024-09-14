import { z } from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { createGoal } from "../../functions/create-goal";

export const createGoalRoute: FastifyPluginAsyncZod = async (app) => {
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
};
