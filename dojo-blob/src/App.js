import './App.css';
import Navbar from './Navbar';
function App() {
  const title = 'Welcome to the new title'
  return (
    <div className="App">
      <Navbar />
      <div className='Content'>
        <h1>{title}</h1>
        <p>{10}</p>
        <p>{"hello, ninjas!"}</p>
        <p>{Math.random() *10}</p>
        <a href='{link}'>Google site</a>
      </div>
    </div>
  );
}

export default App;
