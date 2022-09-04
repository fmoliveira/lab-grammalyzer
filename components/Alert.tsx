import { StyledElement } from "../lib/helperTypes"

type Props = StyledElement<"div"> & {
	if: boolean
}

export default function Alert({ if: visible, children, ...props }: Props) {
	if (!visible) {
		return null
	}

	return (
		<div className="text-red-500" {...props}>
			<strong>Error:</strong> {children}
		</div>
	)
}
