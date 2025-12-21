interface IGlossEntryData {
  id: string;
  content: IGlossEntryContent;
}

interface IGlossEntryContent {
  title: string;
  translation: string;
  body: IGlossEntryBodySection[];
}

type IGlossEntryBodySection = IGlossEntryBodyParagsSection | IGlossEntryBodyQuoteSection;

interface IGlossEntryBodyParagsSection {
  parags: string[];
}

interface IGlossEntryBodyQuoteSection {
  quote: {
    source: string;
    parags: ISuttaBlock[];
  };
}
