'use client'
import { MenuItem, TextField } from '@mui/material'
import React from 'react'
import './FormIncome.component.css'

import { type Income } from '../model/Income.class'
import SaveIncome from '../service/Income.service'

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { transactionDescriptionTypeIncome } from '@/app/common/constants/TransactionDescriptionType.constant'
import { ModalSuccess, OverlayLoader } from '@/app/components'
import { Controller, useForm, type SubmitHandler } from 'react-hook-form'

import TypeModal from '@/app/common/enum/typeModal'
import SnackbarMessage from '@/app/components/Snackbar/SnackbarMessage.components'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { openModal, closeModal } from '@/redux/features/stateModal'
import { loadingOn, loadingOff } from '@/redux/features/stateLoading'
import { snackbarOn, snackbarOff } from '@/redux/features/stateSnackbar'

export default function FormIncome (): React.JSX.Element {
  const statemodal = useAppSelector(state => state.stateModalStore.open)
  const loading = useAppSelector(state => state.stateLoading.state)
  const isOpen = useAppSelector(state => state.stateSnackbar.state)
  const eventType = useAppSelector(state => state.stateSnackbar.type)

  const modaldispatch = useAppDispatch()
  const router = useRouter()
  const today = dayjs()
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Income>({
    mode: 'onChange',
    defaultValues: {
      userId: 100,
      expenseDate: today,
      type: 'Income'
    }
  })

  const toggleModal = (): void => {
    modaldispatch(closeModal())
  }

  const handleRedirect = (): void => {
    modaldispatch(closeModal())
    router.back()
  }

  const onSubmit: SubmitHandler<Income> = data => {
    modaldispatch(loadingOn())
    SaveIncome(data).then(
      result => {
        modaldispatch(openModal())
        modaldispatch(loadingOff())
        reset()
      },
      error => {
        modaldispatch(loadingOff())
        console.log('Error=>', error)
        modaldispatch(snackbarOn())
      }
    )
  }
  const handleClose = (): void => {
    modaldispatch(snackbarOff())
  }

  return (
    <div className="container">
      <h1>Registro de ingreso</h1>
      <h4>Ingresa la información que desea registrar</h4>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        className="form-content"
      >
        <TextField
          label="Descripcion del Ingreso"
          variant="standard"
          className="input"
          {...register('description', {
            required: { value: true, message: 'El nombre es requerido' },
            minLength: { value: 4, message: 'El minimo de caracteres es 4' }
          })}
          helperText={errors.description?.message}
        />

        <TextField
          select
          fullWidth
          variant="standard"
          label="Tipo de ingreso"
          className="input"
          defaultValue=""
          inputProps={register('expenseType', {
            required: { value: true, message: 'Selecione una opcion' }
          })}
          error={!(errors.expenseType == null)}
          helperText={errors.expenseType?.message}
        >
          <MenuItem value="">--Seleccione--</MenuItem>
          {transactionDescriptionTypeIncome.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Monto ingreso total en Bs."
          className="input"
          type="number"
          variant="standard"
          {...register('amount', {
            required: { value: true, message: 'El monto es requerido' },
            valueAsNumber: true
          })}
          helperText={errors.amount?.message}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name="expenseDate"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                label="Fecha de ingreso"
                format="DD/MM/YYYY"
                value={dayjs(value)}
                onChange={onChange}
                className="input"
                slotProps={{
                  textField: {
                    variant: 'standard'
                  }
                }}
              />
            )}
          />
          {!(errors?.expenseDate == null) &&
            errors.expenseDate.type === 'required' && (
              <span className="error-msg">La fecha es requerida</span>
          )}
        </LocalizationProvider>

        <button type="submit" className="btn-secondary">
          Continuar
        </button>

        <OverlayLoader isLoading={loading} />
        <ModalSuccess
          isOpen={statemodal}
          onClose={toggleModal}
          onRedirect={handleRedirect}
          typeTransaction="Ingreso"
          type={TypeModal.sucess}
          text="Registro Exitoso"
        />
      </form>
      <SnackbarMessage
        open={isOpen}
        eventType={eventType}
        onClose={handleClose}
      />
    </div>
  )
}
