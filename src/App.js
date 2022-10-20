import React from "react";
import Context from "./component/Context";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";


function App() {
  return (<Context>
      <Navbar/>
      <Footer/>
     </Context>
     
  );
}

export default App;
