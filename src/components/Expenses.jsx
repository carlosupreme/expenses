/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import repo from '../domain/Repository'
import { FormatMoney } from 'format-money-js'
import RadialChart from './RadialChart'

export function Expenses () {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    repo.getCredits().then((data) => setExpenses(data))
  }, [])

  const total = expenses.map((e) => e.total).reduce((a, b) => a + b, 0)
  const series = expenses.map((e) => Math.ceil(100 - (e.current_total * 100) / e.total))
  const labels = expenses.map((e) => e.name)

  return (<div className="p-2 w-full mb-20 bg-white dark:bg-gray-700">
    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-200">Progreso</h1>

    <RadialChart
      total={total}
      series={series}
      labels={labels}
    />

    <hr className="bg-gray-900"/>

    <h2 className="text-2xl font-light my-2">Proximos pagos</h2>
    <table className="table-auto w-full">
      <thead>
      <tr>
        <th>Nombre</th>
        <th>Fecha</th>
        <th>Monto</th>
      </tr>
      </thead>
      <tbody>
      {expenses.map((e) => (<tr key={e.name}>
        <td>{e.name}</td>
        <td>{Object.values(e.next_payment_on).join('/')}</td>
        <td>
          {new FormatMoney({ symbol: '$', decimals: 2 }).from(e.current_total)}
        </td>
      </tr>))}
      </tbody>
    </table>
  </div>)
}
