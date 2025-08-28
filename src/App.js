import logo from './logo.svg';
import './App.css';
import OrangeWaveBackground from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import AboutMe from './components/me/Me';
import Works from './components/recommends/Works';
import Students from './components/recommends/Students';
import SyllabusContainer from './components/Course/Course';
import Bonus from './bonuses/Bonuses';
import ForthScreen from './screens/ForthScreen';
import EligibilitySection from './whoFits/WhoFits';
import ByMe from './components/ByMe/ByMe';
import PrivacyPolicy from './components/privacy/Privacy';
import SplitForm from './screens/FifthScreen';
import ThirdScreen from './screens/ThirdScreen';
import SixthScreen from './screens/SixthScreen';

function App() {
  return <>
  <OrangeWaveBackground/>
  <SecondScreen/>
  <AboutMe/>
  <Students/>
  <Works/>
  <ForthScreen/>
<ThirdScreen/>
 <SixthScreen/>
  <SplitForm/>
    <PrivacyPolicy 
    ownerName="עינבר בן אדרת" 
    email="inbarbenaderet@gmail.com" 
    phone="+972 50-686-7653" 
    domain="https://inbarbenaderet.co.il/" 
  />
  <ByMe/>
  </>
}

export default App;
