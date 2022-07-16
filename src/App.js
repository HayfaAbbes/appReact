
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (
    <div className="App">
      <div className="degrade-horizontal">
  <ProfilePhoto/>
  <FullName/>
  <Address/>
    </div>
    </div>
  );
}

export default App;
