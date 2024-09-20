import { createContext } from 'react';
import './App.css';
import ChildA from './ChildA';
// import Axiosget from './Axiosget'
// import Postapi from './Postapi';

const data = createContext();
const data1 = createContext();

function App() {
  const name ="Ashu"
  const gender="Male"
  return (
    <div className="App">
      {/* <Axiosget /> */}
      {/* <Postapi />  */}

      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA/>
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default App;
export {data, data1};