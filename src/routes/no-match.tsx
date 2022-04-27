import { Link } from 'react-router-dom'
import { useGetAppState } from '../hooks/app-recoil'

function NoMatch() {
  const state = useGetAppState()

  return (
    <div>
      <h1>Error 404</h1>
      <h3>State: {state}</h3>
      <p>
        <Link to="/">Go to the home</Link>
      </p>
    </div>
  )
}

export default NoMatch
