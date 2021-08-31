import Navbar from './Navbar';
import FsFeature from './FSFeature';

function App() {
  const handleLoginClick = () => {
    console.log()
  }
  return (
    <div className="App">
      <Navbar />
      <input type="text" placeholder="enter user id" id="txtUserId" />
      <button>Login</button>
      <div className="content">
        <FsFeature />
      </div>
    </div>
  );
}

export default App;
