declare namespace _default {
  // export { App };
  // export { Assessor };
  // export { ContentAssessor };
  // export { TaxonomyAssessor };
  // export { Pluggable };
  // export { Researcher };
  // export { SnippetPreview };
  export { Paper };
  export { PaperAttributes };
  export { Analysis };
  export { AssessmentResult };
  export { AnalysisWebWorker };
  export { AnalysisWorkerWrapper };
  export { InitializeAnalysisWorkerConfiguration };
  export { createWorker };
  export { assessments };
  // export { bundledPlugins };
  export { config };
  export { helpers };
  export { markers };
  export { string };
  export { interpreters };
}

export default _default;

// import App from "./src/app";
// import Assessor from "./src/assessor";
// import ContentAssessor from "./src/contentAssessor";
// import SeoAssessor from "./src/seoAssessor";
// import TaxonomyAssessor from "./src/taxonomyAssessor";
// import Pluggable from "./src/pluggable";
// import Researcher from "./src/researcher";
// import SnippetPreview from "./src/snippetPreview";
import Paper from "./src/values/Paper";
import PaperAttributes from "./src/values/PaperAttributes";
import Analysis from "./src/values/Analysis";
import AssessmentResult from "./src/values/AssessmentResult";
import Assessment from "./src/assessment";
import { AnalysisWebWorker } from "./src/worker";
import { AnalysisWorkerWrapper } from "./src/worker";
import { InitializeAnalysisWorkerConfiguration } from "./src/worker";
import { createWorker } from "./src/worker";
import * as assessments from "./src/assessments";
// import * as bundledPlugins from "./src/bundledPlugins";
import * as config from "./src/config";
import * as helpers from "./src/helpers";
import * as markers from "./src/markers";
import * as string from "./src/stringProcessing";
import * as interpreters from "./src/interpreters";

export {
  AnalysisWebWorker,
  AnalysisWorkerWrapper,
  InitializeAnalysisWorkerConfiguration,
  // App,
  Assessment,
  AssessmentResult,
  assessments,
  // Assessor,
  // bundledPlugins,
  config,
  // ContentAssessor,
  createWorker,
  helpers,
  interpreters,
  markers,
  Paper,
  PaperAttributes,
  Analysis,
  // Pluggable,
  // Researcher,
  // SeoAssessor,
  // SnippetPreview,
  string,
  // TaxonomyAssessor,
};
