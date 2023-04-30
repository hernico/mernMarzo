import logo from './logo.svg';
import './App.css';
import VariantsExample from './components/button';
import NavScrollExample from './components/navbar';
import BasicExample from './components/card';
import UncontrolledExample from './components/carousel';
import BasicExample2 from './components/form';
import GroupExample from './components/cardGroup';

function App() {
  return (
    <div classNameName="App">
      <NavScrollExample/>
      <UncontrolledExample/>
      <GroupExample/>
      <BasicExample/>
      {/* <BasicExample2/> */}
      <VariantsExample/>
      
    </div>
  );
}

export default App;
