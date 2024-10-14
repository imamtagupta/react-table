import logo from './logo.svg';
import './App.css';
import AgGridSampleTable from './AgGridSample';
import AgGridDataHeavyTable from './AgGridDataHeavy';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AgGridSampleTable/>
        <br></br>
        <AgGridDataHeavyTable/>
      </header>
    </div>
  );
}

export default App;
