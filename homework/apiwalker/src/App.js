import { Route, Routes } from 'react-router-dom';
import CharacterSearch from './pages/characterSearch';
import CharacterDetails from './pages/characterDetails';


function App() {
  return (
    <div classNameName="App">
      <>
        <Routes>
      <Route path="/" element={<CharacterSearch />} />
      {/* <Route path="/" element={<CharacterDetails/>} /> */}
      <Route path="people/:id" element={<CharacterDetails/>} />
      </Routes>
      </>
    </div>
  );
}


export default App;
