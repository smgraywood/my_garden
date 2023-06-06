import MyGarden from '../../pages/myGarden/MyGrarden'
import AlnwickGarden from '../../pages/alnwickGarden/AlnwickGarden'
import HarmOrHealth from '../../pages/harmOrHealth/HarmOrHealth'
import Search from '../../pages/search/Search'
import NavBar from '../NavBar/NavBar'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Routes>
          <Route path='/' element={<MyGarden/>}></Route>
          <Route path='/alnwickGarden' element={<AlnwickGarden/>}></Route>
          <Route path='/harmOrHealth' element={<HarmOrHealth/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
