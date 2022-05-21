import { Typography, Button } from '@mui/material'
import { useAppState } from '../hooks'

function Home() {
  const [state, setState] = useAppState()

  return (
    <div>
      <Typography fontWeight="medium" variant="h4">
        Home
      </Typography>
      <p>State: {state}</p>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={() => setState('Home state')}
      >
        set state
      </Button>
    </div>
  )
}

export default Home
