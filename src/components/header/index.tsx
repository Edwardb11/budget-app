import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>Welcome to the Home app!</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/not-found">Not Found</Link>
          </li>
        </ul>
      </nav>

      <hr />
    </header>
  )
}

export default Header
