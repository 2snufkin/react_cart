import logo from './logo.svg';
import './App.css';
import {Header} from "./components/layout/Header";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Products} from "./components/features/Products";
import {Cart} from "./components/features/Cart";

function App() {
  return (
      <BrowserRouter>
      <div className="root">
        <div className="App">
        <Header />
          <main>
                  <Routes>
                      <Route path="/" element={<Products title="Product" />} />
                      <Route path="/cart" element={<Cart title="Cart"/>} />
                  </Routes>
          </main>
        </div>
      </div>
      </BrowserRouter>

  );
}

export default App;
