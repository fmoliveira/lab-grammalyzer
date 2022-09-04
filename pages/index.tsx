import type { NextPage } from "next"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"

import Alert from "../components/Alert"
import Button from "../components/Button"
import DataTable from "../components/DataTable"
import Form from "../components/Form"
import Heading from "../components/Heading"
import Label from "../components/Label"
import Loader from "../components/Loader"
import TextArea from "../components/TextArea"

import { analyzeText } from "../lib/analyzeText"
import { exampleText } from "../lib/exampleText"

interface AnalyzeFormData {
	text: string
}

const Home: NextPage = () => {
	const form = useForm<AnalyzeFormData>({
		defaultValues: {
			text: exampleText,
		},
	})
	const analysisMutation = useMutation((values: AnalyzeFormData) =>
		analyzeText(values.text)
	)

	return (
		<main className="p-2 flex flex-col gap-2 max-w-3xl mx-auto my-10">
			<Form
				form={form}
				onSubmit={form.handleSubmit((values) =>
					analysisMutation.mutate(values)
				)}
			>
				<Heading kind="h1">Grammalyzer</Heading>
				<Label htmlFor="text">Enter below the text you want to analyze</Label>
				<TextArea name="text" cols={30} rows={10} />
				<Button kind="primary" type="submit">
					Analyze Text
				</Button>
				<Loader if={analysisMutation.isLoading}>
					Analysis in progress, please wait...
				</Loader>
				<Alert if={analysisMutation.isError}>
					{JSON.stringify(analysisMutation.error)}
				</Alert>
				<DataTable data={analysisMutation.data} />
			</Form>
		</main>
	)
}

export default Home
