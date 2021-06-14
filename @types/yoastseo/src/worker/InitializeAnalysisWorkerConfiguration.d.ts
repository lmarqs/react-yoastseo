export default InitializeAnalysisWorkerConfiguration;

declare interface InitializeAnalysisWorkerConfiguration {
  contentAnalysisActive?: boolean;
  keywordAnalysisActive?: boolean;
  useCornerstone?: boolean;
  useTaxonomy?: boolean;
  useKeywordDistribution?: boolean;
  locale?: string;
  translations?: Object;
  researchData?: Object;
  defaultQueryParams?: Object;
  logLevel?: string;
  enabledFeatures?: string[];
}
