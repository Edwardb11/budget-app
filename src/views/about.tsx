import { Typography, Button } from '@mui/material'

import { useAppState } from '../hooks'

function About() {
  const [state, setState] = useAppState()

  return (
    <div>
      <Typography fontWeight="medium" variant="h4">
        About
      </Typography>
      <p>State: {state}</p>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={() => setState('About state')}
      >
        set state
      </Button>
    </div>
  )
}

export default About
