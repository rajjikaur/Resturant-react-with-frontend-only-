import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navigate from "./Navigate";  // Navbar + Outlet
import Cart from "./Cart";
import RajjiDrinksCorner from "./RajjiDrinksCorner";
import { CartProvider } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Auth Components
import Login from "./Login";
import Signup from "./Signup";
import Category from "./Category";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Layout Route with Navbar */}
          <Route path="/" element={<Navigate />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="rajjidrinkscorner" element={<RajjiDrinksCorner />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/:categoryName" element={<Category />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
