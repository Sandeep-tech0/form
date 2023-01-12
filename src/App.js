
import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Additem from './Additem';
import Viewitem from './Viewitem';
import Updateitem from './Updateitem';
import Logout from './Logout';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>



        <Route path='/' element={<Dashboard />} />
        <Route path='/Additem' element={<Additem />} />
        <Route path='/Viewitem' element={<Viewitem />} />
        <Route path='/Updateitem' element={<Updateitem />} />
        <Route path='/Logout' element={<Logout />} />

      </Routes>


    </div>
  );
}

export default App;
