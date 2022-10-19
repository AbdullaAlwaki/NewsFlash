import React from "react";
import Context from "./component/Context";
<<<<<<< HEAD
import Navbar from "./pages/Navbar";
import Footer from "./component/Footer";

function App() {
  return (<Context>
      <Navbar/>
=======
import Navbarr from "./pages/Navbarr";
import Footer from "./pages/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (<Context>
      <Navbarr/>
>>>>>>> main
      <Footer/>
     </Context>
     
  );
}

export default App;
