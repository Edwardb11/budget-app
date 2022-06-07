import Container from '@mui/material/Container'
import TableInfo from '../table'

export interface State {
  budgetAction: string
  amount: string
  description: string
}
export interface TableProps {
  dispatch: Function
  states: any
}

function Tables({ states, dispatch }: TableProps) {
  const egress = states.filter(
    (action: State) => action.budgetAction === 'egress'
  )
  const ingress = states.filter(
    (action: State) => action.budgetAction === 'ingress'
  )

  return (
    <Container
      maxWidth="md"
      style={{
        display: 'flex'
      }}
    >
      <TableInfo states={egress} title="Egress" dispatch={dispatch} />
      <TableInfo states={ingress} title="Ingress" dispatch={dispatch} />
    </Container>
  )
}

export default Tables
