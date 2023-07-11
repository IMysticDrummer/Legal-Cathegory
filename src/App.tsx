import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import EpCalculator from './components/ep/EpCalculator';
import TmCO2Calculator from './components/rif/TmCO2Calculator';
import Layout from './components/common/Layout';

const appTitle =
  process.env.REACT_APP_TITLE ||
  'C.E.R Categorización de Equipos Reglamentarios';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Layout title={appTitle} />}
        >
          <Route
            path='/epcalculator'
            element={<EpCalculator />}
          />
          <Route
            path='tmCO2Calculator'
            element={<TmCO2Calculator />}
          />
        </Route>
        <Route
          path='/404'
          element={<div>404</div>}
        />
        <Route
          path='*'
          element={<Navigate to='/404' />}
        />
      </Routes>
    </div>
  );
}

export default App;
