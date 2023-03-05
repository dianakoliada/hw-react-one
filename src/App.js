import logo from './logo.svg';
import './App.css';
import GoodMorningComponent  from "./components/goodMorningComponent";
import GoodAfternoonComponent from "./components/goodAfternoonComponent";
import Counter from "./components/counter"; 

function App() {
  return (
    //JSX
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GoodMorningComponent message="Good morning!">
          {/* children */}
          <GoodAfternoonComponent text="Good afternoon!"></GoodAfternoonComponent>
        </GoodMorningComponent>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
