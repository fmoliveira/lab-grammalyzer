type ClassName = string | Record<string, boolean | undefined>

export function classNames(...values: ClassName[]) {
	return values
		.flatMap((v) => {
			if (typeof v === "object") {
				return Object.keys(v)
					.map((key) => {
						if (v[key] === true) {
							return key
						}
					})
					.filter(Boolean)
			}
		})
		.join(" ")
}
