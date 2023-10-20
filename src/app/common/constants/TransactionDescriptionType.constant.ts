import { type SelectOption } from '../models'

const transactionDescriptionTypeIncome: SelectOption[] = [
  {
    value: 'Salary',
    label: 'Salario'
  },
  {
    value: 'Investments',
    label: 'Inversiones'
  },
  {
    value: 'Services',
    label: 'Servicios'
  },
  {
    value: 'Sales',
    label: 'Ventas'
  }
]
const transactionDescriptionTypeExpense: SelectOption[] = [
  {
    value: 'Gifts',
    label: 'Regalos'
  },
  {
    value: 'Food',
    label: 'Alimento'
  },
  {
    value: 'Shopping',
    label: 'Compras'
  },
  {
    value: 'Education',
    label: 'Educación'
  },
  {
    value: 'Health',
    label: 'Salud'
  },
  {
    value: 'VariousExpenses',
    label: 'gastos varios'
  }
]
export { transactionDescriptionTypeIncome, transactionDescriptionTypeExpense }
