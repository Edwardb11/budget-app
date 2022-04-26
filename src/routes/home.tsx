import { useAppState } from '../hooks/app-recoil';

const Home = () => {
  const [state, setState] = useAppState();

  return (
    <div>
      <h1>Home</h1>
      <p>State: {state}</p>
      <button onClick={() => setState('Home state')}>setState Home</button>
    </div>
  );
};

export default Home;
