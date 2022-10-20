import React from "react";
import Context from "./component/Context";

import Navbarr from "./pages/Navbarr";
import Footer from "./pages/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (<Context>
      <Navbarr/>

      <Footer/>
     </Context>
     
  );
}

export default App;
