import { AnalysisWorkerWrapper, InitializeAnalysisWorkerConfiguration as Cfg } from "yoastseo";
import { useAnalysisWorkerWrapper } from "./use-analysis-worker-wrapper";
import { useCreateWorker } from "./use-create-worker";
import { useInitialize } from "./use-initialize";

export function useCreateAndInitializeAnalysisWorkerWrapper(script: string, cfg: Cfg): [AnalysisWorkerWrapper, boolean] {
  const worker = useCreateWorker(script);
  const analysisWorkerWrapper = useAnalysisWorkerWrapper(worker);
  const initialized = useInitialize(analysisWorkerWrapper, cfg);
  return [analysisWorkerWrapper, initialized];
}

