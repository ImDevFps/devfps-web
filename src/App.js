import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
