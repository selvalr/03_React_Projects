import confetti from "canvas-confetti";
import "./App.css";

function App() {

  const confettiBtn=()=>{
    confetti({
      particleCount:1500,
      spread:100,
    })

  }
  return (
    <div className="container">
      <button onClick={confettiBtn}>Click me</button>
    </div>
  );
}

export default App;
