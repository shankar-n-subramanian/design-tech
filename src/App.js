import "@sabre/spark/dist/css/spark.light.css";
import './App.css';

import Sales from './dashboard/sales/sales';


function App() {

  return (
    <div className="main-container">
      <Sales />
    </div>
  );
}

export default App;
