import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from "./components/Page";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";


function App() {
    const [currentPage, setCurrentPage] = useState({
        name: 'about me'
      })

  return (
    <div>
        <MyNav setCurrentPage={setCurrentPage} />
        <Page currentPage={currentPage}/>
        <Footer />
    </div>
  );
}

export default App;