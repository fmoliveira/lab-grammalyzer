import { useFormContext } from "react-hook-form"
import { classNames } from "../lib/classNames"
import { StyledFormElement } from "../lib/helperTypes"

type Props = StyledFormElement<"textarea"> & {
	fullScreen?: boolean
}

export default function TextArea({ fullScreen, ...props }: Props) {
	const { register } = useFormContext()

	return (
		<textarea
			{...register(props.name)}
			id={props.name}
			className={classNames(
				"shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
				{
					"border rounded": !fullScreen,
					"w-full h-full resize-none": fullScreen,
				}
			)}
			cols={30}
			rows={10}
		></textarea>
	)
}
