import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CapmainPageWrapper from './CampainPageWrapper';
import MyPageWrapper from './MypageWrapper';
import ThanksScreen from './screens/ThanksScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/campain" element={<CapmainPageWrapper/>}/>
        <Route path="/" element={<MyPageWrapper/>}/>
                <Route path="/thanks" element={<ThanksScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;