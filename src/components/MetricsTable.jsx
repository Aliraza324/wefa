import {
  createColumnHelper,
  flexRender,
} from '@tanstack/react-table'

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor('channel', {
    header: 'Channel',
  }),
  columnHelper.accessor('leads', {
    header: 'Leads',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
  }),
]

export const MetricsTable = ({ data }) => (
  <table className="w-full border-collapse text-left text-sm">
    <thead className="text-slate-400">
      <tr>
        {columns.map((column) => (
          <th className="border-b border-white/10 px-3 py-2 font-medium" key={column.id}>
            {flexRender(column.columnDef.header, {})}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row) => (
        <tr key={row.channel}>
          {columns.map((column) => (
            <td className="border-b border-white/5 p-3" key={column.id}>
              {row[column.accessorKey]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)
