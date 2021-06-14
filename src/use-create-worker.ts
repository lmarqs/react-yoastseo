import { createWorker } from "yoastseo/src/worker";

const workers: Record<string, Worker> = {};

export function useCreateWorker(script: string): Worker {
  return workers[script] = workers[script] ?? createWorker(script);
}
