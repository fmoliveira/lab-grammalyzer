import { Fragment } from "react"

type SingleValue = string | number
type ArrayValue = SingleValue[]
type Value = SingleValue | ArrayValue
type DataItem = Record<string, Value> & { id: string }

type Props = {
	data: DataItem[]
}

export default function DataTable({ data }: Props) {
	if (typeof data !== "object" || !Array.isArray(data) || data.length === 0) {
		return null
	}

	const headers = Object.keys(data[0]).filter((i) => i !== "id")

	return (
		<table className="table-auto w-full">
			<thead>
				<tr>
					{headers.map((h) => (
						<Fragment key={h}>
							<th className="text-left uppercase text-sm text-gray-500">{h}</th>
						</Fragment>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((dataItem) => (
					<Fragment key={dataItem.id}>
						<tr>
							{headers.map((cell) => (
								<Fragment key={`${dataItem.id}_${cell}`}>
									<td>{displayValue(dataItem[cell])}</td>
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
