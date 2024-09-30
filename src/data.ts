interface IVocabulary {
  name: string,
  meaning: string
}

const englishVocabularies: IVocabulary[] = [
  {
    name: "Aberration",
    meaning: "A departure from what is normal, usual, or expected, typically one that is unwelcome."
  },
  {
    name: "Capricious",
    meaning: "Given to sudden and unaccountable changes of mood or behavior; unpredictable."
  },
  {
    name: "Ephemeral",
    meaning: "Lasting for a very short time; fleeting."
  },
  {
    name: "Cacophony",
    meaning: "A harsh, discordant mixture of sounds."
  },
  {
    name: "Resilient",
    meaning: "Able to withstand or recover quickly from difficult conditions."
  },
  {
    name: "Ineffable",
    meaning: "Too great or extreme to be expressed or described in words."
  },
  {
    name: "Lethargic",
    meaning: "Affected by lethargy; sluggish and apathetic."
  },
  {
    name: "Serendipity",
    meaning: "The occurrence and development of events by chance in a happy or beneficial way."
  },
  {
    name: "Enigmatic",
    meaning: "Difficult to interpret or understand; mysterious."
  },
  {
    name: "Ostentatious",
    meaning: "Characterized by vulgar or pretentious display; designed to impress or attract notice."
  }
];


export type {
  IVocabulary
}

export {
  englishVocabularies
}