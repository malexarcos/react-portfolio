import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';
import Container from "react-bootstrap/Container";

function page({currentPage}) {
    const renderPage = () => {
        switch (currentPage.name) {
          case 'about me':
            return <About />;
          case 'portfolio':
           return <Portfolio />;
          case 'contact':
            return <Contact />;
          case 'resume':
            return <Resume />;
          default:
            return <About />;
       }
      };

      return(
        <Container>
         {renderPage()}
        </Container>
      )
}


export default page;
