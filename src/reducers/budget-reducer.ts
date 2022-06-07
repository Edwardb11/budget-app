import { ACTION_TYPES } from '../interfaces'
import { State } from '../components/tables/index'

interface Action {
  type: string
  payload: any
}
export const BudgetReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.add:
      return [...state, action.payload]

    case ACTION_TYPES.delete:
      return state.filter((row: State) => row.id !== action.payload)

    default:
      return state
  }
}

export default BudgetReducer
