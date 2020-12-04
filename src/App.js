import './App.css';
import { ThemeProvider } from "@material-ui/core";
import MainPage from './pages/MainPage';
import Theme from './theme/Theme';

function App() {

  return (
    <ThemeProvider theme={Theme}>
    <div className="App">
      <MainPage/>
    </div> 
    </ThemeProvider> 
  );
}

export default App;
