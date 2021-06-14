import { useMemo } from "react";
import { Paper, PaperAttributes } from "yoastseo";

export function usePaper(text: string, attrs: PaperAttributes): Paper {
  return useMemo(() => new Paper(text, attrs), [
    text,
    attrs.keyword,
    attrs.synonyms,
    attrs.title,
    attrs.description,
    attrs.titleWidth,
    attrs.url,
    attrs.permalink,
    attrs.locale,
  ]);
}
