import { useQuery } from "@tanstack/react-query";
import { OutlineButton } from "./ui/outline-button";
import { Plus } from "lucide-react";
import { getPendingGoals } from "../http/get-pending-goals";

export const PendingGoals = () => {
  const { data } = useQuery({
    queryKey: ["pending-goals"],
    queryFn: getPendingGoals,
  });

  if (!data) {
    return null;
  }
  
  return (
    <div className="flex flex-wrap gap-3">
      {data.map((goal) => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
          >
            <Plus className="size-4 text-zinc-400" />
            Meditar
          </OutlineButton>
        );
      })}
    </div>
  );
};
