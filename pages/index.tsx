import type { NextPage } from "next"
import Head from "next/head"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { analyzeText } from "../lib/analyzeText"
import { DataTable } from "../src/components/DataTable"

interface AnalyzeFormData {
	text: string
}

const exampleText = `Having had some time at my disposal when in London, I had visited the British Museum, and made search among the books and maps in the library regarding Transylvania; it had struck me that some foreknowledge of the country could hardly fail to have some importance in dealing with a nobleman of that country. I find that the district he named is in the extreme east of the country, just on the borders of three states, Transylvania, Moldavia and Bukovina, in the midst of the Carpathian mountains; one of the wildest and least known portions of Europe. I was not able to light on any map or work giving the exact locality of the Castle Dracula, as there are no maps of this country as yet to compare with our own Ordnance Survey maps; but I found that Bistritz, the post town named by Count Dracula, is a fairly well-known place. I shall enter here some of my notes, as they may refresh my memory when I talk over my travels with Mina.`

const Home: NextPage = () => {
	const { handleSubmit, register } = useForm<AnalyzeFormData>({
		defaultValues: {
			text: exampleText,
		},
	})
	const analysisMutation = useMutation((values: AnalyzeFormData) =>
		analyzeText(values.text)
	)

	return (
		<main className="p-2">
			<Head>
				<title>Grammalyzer</title>
				<meta
					name="description"
					content="Experimenting with natural language processing."
				/>
			</Head>
			<form
				className="flex flex-col gap-2 max-w-3xl mx-auto my-10"
				onSubmit={handleSubmit((values) => analysisMutation.mutate(values))}
			>
				<h1 className="text-2xl">Grammalyzer</h1>
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="text"
				>
					Enter below the text you want to analyze
				</label>
				<textarea
					{...register("text")}
					id="text"
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					cols={30}
					rows={10}
				></textarea>
				<button
					type="submit"
					className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
				>
					Analyze Text
				</button>
				{analysisMutation.isLoading && (
					<div>Analysis in progress, please wait...</div>
				)}
				{analysisMutation.isError && (
					<div className="text-red-500">
						{JSON.stringify(analysisMutation.error)}
					</div>
				)}
				<DataTable data={analysisMutation.data} />
			</form>
		</main>
	)
}

export default Home
