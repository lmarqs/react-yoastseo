import { useMemo } from "react";
import { AnalysisWorkerWrapper } from "yoastseo";

export function useAnalysisWorkerWrapper(worker: Worker): AnalysisWorkerWrapper {
  return useMemo(() => new AnalysisWorkerWrapper(worker), [worker]);
}
