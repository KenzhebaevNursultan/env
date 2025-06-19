import './App.css';
import { AppRouter } from './router/AppRouter';
import { BASE_URL } from './utils';

function App() {
    console.log(BASE_URL, 'MY_SERVER');
    return <AppRouter />;
}

export default App;
