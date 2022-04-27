import { Typography } from '@mui/material'
import { useAppState } from '../hooks/app-recoil'

function Home() {
  const [state, setState] = useAppState()

  return (
    <div>
      <Typography>Home</Typography>
      <p>State: {state}</p>
      <button type="button" onClick={() => setState('Home state')}>
        setState Home
      </button>
    </div>
  )
}

export default Home
