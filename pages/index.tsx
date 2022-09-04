import type { NextPage } from "next"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"

import Alert from "../components/Alert"
import DataTable from "../components/DataTable"
import Form from "../components/Form"
import Heading from "../components/Heading"
import Label from "../components/Label"
import TextArea from "../components/TextArea"

import { analyzeText } from "../lib/analyzeText"
import Button from "../components/Button"
import { exampleText } from "../lib/exampleText"

interface AnalyzeFormData {
	text: string
}

const Home: NextPage = () => {
	const form = useForm<AnalyzeFormData>({})
	const analysisMutation = useMutation((values: AnalyzeFormData) =>
		analyzeText(values.text)
	)

	const showExampleText = () => {
		form.setValue("text", exampleText)
		analysisMutation.mutate({ text: exampleText })
	}

	return (
		<div
			className="grid w-screen h-screen"
			style={{ gridTemplateColumns: "2fr 1fr", gridTemplateRows: "4rem auto" }}
		>
			<header className="col-span-2 p-4 flex flex-row items-center justify-between bg-slate-900 text-slate-100">
				<Heading kind="h1">Grammalyzer</Heading>
				<Button kind="primary" type="button" onClick={showExampleText}>
					Show example text
				</Button>
			</header>
			<main className="p-4 flex flex-col">
				<Form
					form={form}
					onChange={form.handleSubmit((values) =>
						analysisMutation.mutate(values)
					)}
				>
					<Label htmlFor="text" visuallyHidden>
						Enter below the text you want to analyze
					</Label>
					<TextArea name="text" fullScreen />
				</Form>
			</main>
			<aside className="p-4 border-l-2 border-slate-900 overflow-y-auto">
				<Alert if={analysisMutation.isError}>
					{JSON.stringify(analysisMutation.error)}
				</Alert>
				<DataTable data={analysisMutation.data} />
			</aside>
		</div>
	)
}

export default Home
