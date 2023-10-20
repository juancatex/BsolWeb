'use client'
import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from '@nextui-org/table'
import './FormHistory.style.css'
import { OverlayLoader } from '@/app/components'
import { columns } from '../model/History.class'

export default function FormIncome (): React.JSX.Element {
  const [rows, setData] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)
  const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`
  React.useEffect(() => {
    void fetch(`${baseURL}`)
      .then(async (res) => await res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className='container'>
      <h1>Historico</h1>
      <h4>Listado general de registros de ingresos y gastos</h4>
      <OverlayLoader isLoading={isLoading} />
      <Table>
      <TableHeader columns={columns}>
        {(column: { key: any, label: any }) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item: { key: any }) => (
          <TableRow key={item.key}>
            {(columnKey: any) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
  )
}
