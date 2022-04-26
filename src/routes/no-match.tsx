import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>
        <Link to='/'>Go to the home</Link>
      </p>
    </div>
  );
};

export default NoMatch;
