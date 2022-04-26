import { Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Layout, Home, About, NoMatch } from './routes';

const HomeApp = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='*' element={<NoMatch />} />
    </Route>
  </Routes>
);

export default HomeApp;
