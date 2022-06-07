import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'
import { Button } from '@mui/material'
import { v4 as uuid } from 'uuid'

interface Props {
  dispatch: Function
}
function Formfield({ dispatch }: Props) {
  const [budgetAction, setBudgetAction] = useState('')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')

  const handleChangeBudget = (event: SelectChangeEvent) => {
    setBudgetAction(event.target.value)
  }
  const handleChangeAmount = (event: any) => {
    setAmount(event.target.value)
  }
  const handleChangeDescription = (event: any) => {
    setDescription(event.target.value)
  }

  const actionAdd = {
    type: 'add',
    payload: {
      id: uuid(),
      budgetAction,
      amount,
      description
    }
  }

  const handleAdd = (e: any) => {
    e.preventDefault()
    if (budgetAction === '' || amount === '' || description === '') {
      return
    }
    dispatch(actionAdd)
    setAmount('')
    setDescription('')
    setBudgetAction('')
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Budget to add</InputLabel>
        <Select value={budgetAction} onChange={handleChangeBudget}>
          <MenuItem value="ingress">Ingress</MenuItem>
          <MenuItem value="egress">Egress</MenuItem>
        </Select>
        <FormHelperText>Select an action to perform</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
          label="Amount"
          name="amount"
          type="number"
          value={amount}
          onChange={handleChangeAmount}
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
          name="description"
          value={description}
          onChange={handleChangeDescription}
          label="Description"
        />
      </FormControl>
      <Button
        onClick={handleAdd}
        style={{ marginTop: '20px' }}
        variant="contained"
        color="success"
      >
        Save
      </Button>{' '}
    </div>
  )
}

export default Formfield
