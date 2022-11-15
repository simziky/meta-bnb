import React from 'react';
import Footer from '../components/Navigations/Footer/footer';
import Header from '../components/Navigations/Header/header';



const Layout = ({ children }) => {
    return (
      <>
        <React.Fragment>
        <Header className="header"/>
        <main>{children}</main>
        <Footer className="footer"/>
        </React.Fragment>
      </>
    )
  }
  
  export default Layout