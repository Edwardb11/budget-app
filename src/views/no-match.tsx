import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { useGetAppState } from '../hooks'

function NoMatch() {
  const state = useGetAppState()

  return (
    <div>
      <Typography fontWeight="medium" variant="h4">
        Error 404
      </Typography>
      <p>State: {state}</p>
      <Link to="/">Go to the home</Link>
    </div>
  )
}

export default NoMatch
