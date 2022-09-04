import { FormProvider, UseFormReturn } from "react-hook-form"
import { StyledElement } from "../lib/helperTypes"

type Props = StyledElement<"form"> & {
	form: UseFormReturn<any>
}

export default function Form({ form, ...props }: Props) {
	return (
		<FormProvider {...form}>
			<form {...props} />
		</FormProvider>
	)
}
