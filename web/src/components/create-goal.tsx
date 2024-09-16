import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "./ui/radio-group";
import { desiredWeeklyList } from "../utils";
import { Button } from "./ui/button";
import { X } from "lucide-react";

export const CreateGoal = () => {
  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Cadastrar meta</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>
          <DialogDescription>
            Adicione atividades que te fazem bem e que você quer continuar
            praticando toda semana.
          </DialogDescription>
        </div>

        <form action="" className="flex flex-col justify-between flex-1">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Qual é a atividade?</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Praticar exercícios, meditar e etcs"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Quantas vezes na semana?</Label>
              <RadioGroup>
                {desiredWeeklyList.map((v) => (
                  <RadioGroupItem value={v.value} key={v.value}>
                    <RadioGroupIndicator />
                    <span className="text-zinc-300 text-sm font-meidum leading-none">
                      {v.value === "7"
                        ? "Todos os dias na semana"
                        : `${v.value}x na semana"`}
                    </span>
                    <span className="text-lg leading-none">{v.emoji}</span>
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button type="button" variant="secondary" className="flex-1">
                Fechar
              </Button>
            </DialogClose>
            <Button className="flex-1">Salvar</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  );
};
