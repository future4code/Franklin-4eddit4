import './App.css';
import { GlobalState } from './context/global/GlobalState';
import Router from './routes/router';

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
