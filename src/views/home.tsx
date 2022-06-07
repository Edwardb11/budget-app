import Grid from '@mui/material/Grid'
import { useReducer } from 'react'
import { CardTitle, Formfield, Tables } from '../components'
import { BudgetReducer } from '../reducers/budget-reducer'

function Home() {
  const budget = [{ budgetAction: 'egress', amount: 10, description: 'Hello' }]
  const [state, dispatch] = useReducer(BudgetReducer, budget)
  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item xs={6} md={8}>
        <CardTitle />
      </Grid>
      <Grid item xs={6} xl={8}>
        <Formfield dispatch={dispatch} />
      </Grid>
      <Grid item xs={6} xl={8}>
        <Tables states={state} dispatch={dispatch} />
      </Grid>
    </Grid>
  )
}

export default Home
