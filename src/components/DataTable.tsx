import { Fragment } from "react"

type SingleValue = string | number
type ArrayValue = SingleValue[]
type Value = SingleValue | ArrayValue

type Props = {
	data: Record<string, Value>
}

export function DataTable({ data }: Props) {
	if (typeof data !== "object" || !Array.isArray(data) || data.length === 0) {
		return null
	}

	const headers = Object.keys(data[0])

	return (
		<table>
			<thead>
				<tr>
					{headers.map((h) => (
						<Fragment key={h}>
							<th>{h}</th>
						</Fragment>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((d) => (
					<Fragment key={d}>
						<tr>
							{headers.map((c) => (
								<Fragment key={`${d}_${c}`}>
									<td>{displayValue(d[c])}</td>
								</Fragment>
							))}
						</tr>
					</Fragment>
				))}
			</tbody>
		</table>
	)
}

function displayValue(value: Value) {
	if (Array.isArray(value)) {
		return value.map((i) => i?.toString()).join(", ")
	}
	return value?.toString()
}
