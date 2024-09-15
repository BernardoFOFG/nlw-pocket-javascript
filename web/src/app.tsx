import logo from "../src/assets/logo-in-orbit.svg";
import letsStart from "../src/assets/lets-start-illustration.svg";
import { Plus, X } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "./components/ui/radio-group";
import { desiredWeeklyList } from "./utils";

export const App = () => {
  return (
    <Dialog>
      <div className="h-screen flex items-center flex-col justify-center gap-8">
        <img src={logo} alt="in.orbit" />
        <img src={letsStart} alt="in.orbit" />
        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          Voce ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
          mesmo?
        </p>
        <DialogTrigger asChild>
          <Button>
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

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
    </Dialog>
  );
};
