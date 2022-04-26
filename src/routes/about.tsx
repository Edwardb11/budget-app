import { useAppState } from '../hooks/app-recoil';

const About = () => {
  const [state, setState] = useAppState();

  return (
    <div>
      <h1>About</h1>
      <p>State: {state}</p>
      <button onClick={() => setState('About state')}>setState</button>
    </div>
  );
};

export default About;
