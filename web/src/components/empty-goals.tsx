import logo from "../assets/logo-in-orbit.svg";
import letsStart from "../assets/lets-start-illustration.svg";
import { DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export const EmptyGoals = () => {
  return (
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
  );
};
