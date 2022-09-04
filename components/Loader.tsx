import { StyledElement } from "../lib/helperTypes"

type Props = StyledElement<"div"> & {
	if: boolean
}

export default function Loader({ if: visible, ...props }: Props) {
	if (!visible) {
		return null
	}

	return <div className="text-blue-500" {...props} />
}
