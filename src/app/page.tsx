'use client'
import React from 'react'
import ingresos from '../assets/images/ingresos.png'
import gastos from '../assets/images/gastos.png'
import historico from '../assets/images/historico.png'
import { CardComponent } from './components'
import { RoutesApp } from '@/app/constants/routes'
import './page.css'

export default function Home (): React.JSX.Element {
  return (
    <div className="content-page">
      <div className="title-description">
        <h1 className="title-welcome">Bienvenido, Juan Carlos Colque!</h1>
        <p>Registrar tus ingresos nunca fue tan fácil</p>
        <p>
          Ahora podrás tener el control de tus finanzas en línea desde la comodidad de tu celular
        </p>
      </div>
      <div className="row">
        <CardComponent
          title={RoutesApp.INCOME_RECORDS.name}
          icon={ingresos}
          onCardClick={() => {
            console.log('here route of page')
          }}
          path={RoutesApp.INCOME_RECORDS.path}
        />
         <CardComponent
          title={RoutesApp.EXPENSE_RECORDS.name}
          icon={gastos}
          onCardClick={() => {
            console.log('here route of page')
          }}
          path={RoutesApp.EXPENSE_RECORDS.path}
        />
          <CardComponent
          title={RoutesApp.RECORDS_HISTORY.name}
          icon={historico}
          onCardClick={() => {
            console.log('here route of page')
          }}
          path={RoutesApp.RECORDS_HISTORY.path}
        />
      </div>
    </div>
  )
}
