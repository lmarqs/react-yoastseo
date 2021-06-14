import { useMemo } from "react";
import { createWorker } from "yoastseo/src/worker";

export function useCreateWorker(script: string): Worker {
  return useMemo(() => createWorker(script), [script]);
}
