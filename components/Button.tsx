import { RequiredField, StyledElement } from "../lib/helperTypes"

type Props = RequiredField<StyledElement<"button">, "type"> & {
	kind: "primary"
}

const styleKinds: Record<Props["kind"], string> = {
	primary: "bg-blue-600 hover:bg-blue-800 text-white",
}

export default function Button({ kind, ...props }: Props) {
	return (
		<button
			className={`${styleKinds[kind]} font-bold py-2 px-4 rounded`}
			{...props}
		/>
	)
}
