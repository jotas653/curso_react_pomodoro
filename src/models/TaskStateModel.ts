import type { TaskModel } from "./TaskModel";

// Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; //Histórico, MainForm
  secondsRemaining: number; //Home, Countdown, Histórico, MainForm, button
  formattedSecondsRemaining: string; // Título, Countdown
  activeTask: TaskModel | null; //Countdown, Histórico, MainForm, button
  currentCycle: number; // 1 a 8
  config: {
    workTime: number; //MainForm
    shortBreakTime: number; //MainForm
    longBreakTime: number; //MainForm
  };
};
