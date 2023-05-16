import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header"

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-lg mx-auto pt-20 border-2 border-pink-700">
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default App;
