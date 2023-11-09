import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage';
import AddRestaurantPage from './pages/AddRestaurantPage';
import UpdateRestaurantPage from './pages/UpdateRestaurantPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
       <Routes>
          <Route path="/" element={<HomePage/>  } />
          <Route path="/updaterestarant" element={<UpdateRestaurantPage/>  } />
          <Route path="/addrestarant" element={<AddRestaurantPage/>  } />
       </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
