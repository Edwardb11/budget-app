import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'
import { Button } from '@mui/material'

function Formfield() {
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

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Budget to add</InputLabel>
        <Select value={budgetAction} onChange={handleChangeBudget}>
          <MenuItem value="+">Entry</MenuItem>
          <MenuItem value="-">Egress</MenuItem>
        </Select>
        <FormHelperText>Select an action to perform</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
          label="Amount"
          type="number"
          value={amount}
          onChange={handleChangeAmount}
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
          value={description}
          onChange={handleChangeDescription}
          label="Description"
        />
      </FormControl>
      <Button style={{ marginTop: '20px' }} variant="contained" color="success">
        Save
      </Button>{' '}
    </div>
  )
}

export default Formfield
