import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CapmainPageWrapper from './CampainPageWrapper';
import MyPageWrapper from './MypageWrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/campain" element={<CapmainPageWrapper/>}/>
        <Route path="/" element={<MyPageWrapper/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;