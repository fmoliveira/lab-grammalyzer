import { StyledElement } from "../lib/helperTypes"

type Props = StyledElement<"label">

export default function Label(props: Props) {
	return (
		<label className="block text-gray-700 text-sm font-bold mb-2" {...props} />
	)
}
