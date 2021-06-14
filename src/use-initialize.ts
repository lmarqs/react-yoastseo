import { useEffect, useState } from "react";
import { AnalysisWorkerWrapper } from "yoastseo/src/worker";

type Initialize = AnalysisWorkerWrapper["initialize"];

export function useInitialize(wrapper: AnalysisWorkerWrapper, ...config: Parameters<Initialize>): boolean {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(false);
    wrapper.initialize(...config)
      .then(() => setInitialized(true));
  }, [wrapper]);

  return initialized;
}
