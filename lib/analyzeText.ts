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
			const { index, text, tagRank } = t
			const id = index.join("_")
			return { id, text, tagRank }
		})
	})
}
