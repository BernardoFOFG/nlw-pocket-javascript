import { db } from "../db";
import { goals } from "../db/schema";

interface CreateGoalRequest {
  title: string;
  desiredWeeklyFrequency: number;
}

export async function createGoal(request: CreateGoalRequest) {
  const resultGoals = await db
    .insert(goals)
    .values({
      ...request,
    })
    .returning();

  const goal = resultGoals[0];

  return {
    goal,
  };
}
