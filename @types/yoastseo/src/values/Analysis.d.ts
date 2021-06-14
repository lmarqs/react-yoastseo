import AssessmentResult from "./AssessmentResult";

export default Analysis;

declare interface Analysis {
  result?: {
    readability?: {
      score: number;
      results: AssessmentResult[];
    };
    seo?: {
      [""]: {
        score: number;
        results: AssessmentResult[];
      };
    };
  };
}
