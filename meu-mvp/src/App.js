import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Ehospital from './pages/Ehospital';
import Schedules from './pages/Schedules';
import Services from './pages/Services';
import SchedulesList from './pages/SchedulesList';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


export default function App() {

  return (
    <div className="App">
     <BrowserRouter>
      <Navbar />
        <Link to="/">Home</Link>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/ehospital' element={<Ehospital />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/schedules' element={<Schedules />}></Route>

        <Route path='/schedulesList' element={<SchedulesList />}></Route>

      </Routes>

      <Footer />
     </BrowserRouter>
    </div>
  );
}

