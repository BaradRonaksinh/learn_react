import './App.css';
import StateExmple from './StateExmple';
// import Custom1 from './Custom1';
// import PropsWork from './PropsWork';

function App() {
  let arr = [12,23,45,98]
  return (
    <div className="App">
      <h3>My First React components</h3>

      {/* <Custom1 /> */}
      {/* <PropsWork myName="ronak" myAge="21" arr_obj={arr}/> */}
      <StateExmple />
    </div>
  );
}

export default App;
