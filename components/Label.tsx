import { classNames } from "../lib/classNames"
import { StyledElement } from "../lib/helperTypes"

type Props = StyledElement<"label"> & {
	visuallyHidden?: boolean
}

export default function Label({ visuallyHidden, ...props }: Props) {
	return (
		<label
			className={classNames("block text-gray-700 text-sm font-bold mb-2", {
				"sr-only": visuallyHidden,
			})}
			{...props}
		/>
	)
}
