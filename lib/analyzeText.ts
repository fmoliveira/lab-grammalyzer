const importNlp = () => import("compromise/two")

async function nlp(text: string) {
	const importedModule = await importNlp()
	return importedModule.default(text)
}

export async function analyzeText(text: string) {
	const doc = await nlp(text)
	const penn = doc.compute("penn").json()

	return penn.flatMap((i: any) => {
		return i.terms.map((t: any) => {
			const { index, text, tagRank, penn } = t
			return { index, text, tagRank, penn, type: pennMapping[penn] }
		})
	})
}

// penn mapping source: <https://observablehq.com/@spencermountain/compromise-tags>
const pennMapping: Record<string, string> = {
	CC: "Conjunction",
	CD: "Cardinal",
	DT: "Determiner",
	EX: "Preposition", //Existential there
	FW: "Expression",
	IN: "Preposition",
	JJ: "Adjective",
	JJR: "Comparative",
	JJS: "Superlative",
	MD: "Modal",
	NN: "Noun",
	NNS: "Plural",
	NNP: "Singular",
	NNPS: " Plural",
	POS: "Possessive",
	PRP: "Pronoun",
	RB: "Adverb",
	RBR: "Comparative",
	RBS: "Superlative",
	RP: "PhrasalVerb",
	PDT: "Determiner",
	SYM: "Expression",
	TO: "Conjunction",
	UH: "Expression",
	VB: "Verb",
	VBD: "PastTense",
	VBG: "Gerund",
	VBN: "Participle", // past participle
	VBP: "PresentTense", // non-3rd person singular present
	VBZ: "PresentTense", // 3rd person singular present
	PRP$: "Pronoun",
	WP$: "Possessive",
	WDT: "Determiner",
	WP: "Pronoun",
	WRB: "Adverb",
}
