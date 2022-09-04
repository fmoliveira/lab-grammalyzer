import { useFormContext } from "react-hook-form"
import { StyledFormElement } from "../lib/helperTypes"

type Props = StyledFormElement<"textarea">

export default function TextArea(props: Props) {
	const { register } = useFormContext()

	return (
		<textarea
			{...register(props.name)}
			id={props.name}
			className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			cols={30}
			rows={10}
		></textarea>
	)
}
