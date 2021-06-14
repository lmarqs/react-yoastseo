import { useEffect, useState } from "react";
import { Analysis, AnalysisWorkerWrapper, Paper } from "yoastseo";

export function useAnalyze(analysisWorkerWrapper: AnalysisWorkerWrapper, initialized: boolean, paper: Paper): Analysis {
  const [analysis, setAnalysis] = useState<Analysis>({});

  useEffect(() => {
    if (initialized) {
      analysisWorkerWrapper.analyze(paper)
        .then(setAnalysis);
    }
  }, [paper, initialized, analysisWorkerWrapper, setAnalysis]);

  return analysis;
}
