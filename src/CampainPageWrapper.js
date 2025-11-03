
import OrangeWaveBackground from "./campainerCopy/screens/FirstScreen"
import SecondScreen from './campainerCopy/screens/SecondScreen';
import AboutMe from './components/me/Me';
import Works from './components/recommends/Works';
import Students from './components/recommends/Students';

import ForthScreen from "./campainerCopy/screens/ForthScreen";

import ByMe from './components/ByMe/ByMe';
import PrivacyPolicy from './campainerCopy/components/privacy/Privacy';
import SplitForm from './campainerCopy/screens/FifthScreen';
import ThirdScreen from "./campainerCopy/screens/ThirdScreen";
import SixthScreen from './screens/SixthScreen';
import FloatingButton from "./campainerCopy/components/FloatButton/FloatButton";
const CapmainPageWrapper=()=>{


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
  <FloatingButton/>
  <ByMe/>

</>

}
export default CapmainPageWrapper