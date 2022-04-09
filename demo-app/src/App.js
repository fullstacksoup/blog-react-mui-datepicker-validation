import logo from './logo.svg';
import './App.css';
import DateValidationWithFormik from './Components/DateValidationWithFormik';
import DatepickersOnly  from './Components/DatepickersOnly';
function App() {
  return (
    <div className="App">
      <DatepickersOnly />
      <DateValidationWithFormik/>
    </div>
  );
}

export default App;
