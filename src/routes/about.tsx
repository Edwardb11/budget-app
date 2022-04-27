import { useAppState } from '../hooks/app-recoil'

function About() {
  const [state, setState] = useAppState()

  return (
    <div>
      <h1>About</h1>
      <p>State: {state}</p>
      <button type="button" onClick={() => setState('About state')}>
        setState
      </button>
    </div>
  )
}

export default About
