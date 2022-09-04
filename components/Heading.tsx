import { StyledElement } from "../lib/helperTypes"

type Kind = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type Props = StyledElement<Kind> & { kind: Kind }

const styleKinds: Record<Kind, string> = {
	h1: "text-2xl",
	h2: "text-xl",
	h3: "text-lg",
	h4: "text-md",
	h5: "text-sm",
	h6: "text-xs",
}

export default function Heading({ kind: Tag, ...props }: Props) {
	return <Tag className={styleKinds[Tag]} {...props} />
}
