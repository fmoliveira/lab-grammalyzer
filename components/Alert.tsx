import { StyledElement } from "../lib/helperTypes"

type Props = StyledElement<"div"> & {
	if: boolean
}

export default function Alert({ if: visible, ...props }: Props) {
	if (!visible) {
		return null
	}

	return <div className="text-red-500" {...props} />
}
