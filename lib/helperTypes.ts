export type RequiredField<T, P extends keyof T> = T & {
	[L in P]-?: T[L]
}

export type StyledElement<T extends keyof JSX.IntrinsicElements> = Omit<
	JSX.IntrinsicElements[T],
	"className"
>

export type StyledFormElement<T extends "input" | "textarea"> = Omit<
	StyledElement<T>,
	"id"
> & { name: string }
