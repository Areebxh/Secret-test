// import React ,{useState,useEffect} from "react";
// //import {BrowserRouter as Router} from 'react-router-dom'
// import Header from "./components/header/Header";
// import Body from "./components/body/Body";



// function App() {


//   return (

//     <div className="App">
//       <Header/>
//       <Body/>

//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";


import SideBar from "./components/app components/AdminSideBar";
import AdminHome from "./components/app components/AdminHome";
import ListingApproval from "./components/app components/ListingApproval";
import Terms from "./components/app components/Terms";
import UserManage from "./components/app components/UserManage";
import HostelManage from "./components/app components/HostelManage";

import Cookies from 'js-cookie';

function App() {
  const access_token = Cookies.get('access_token');
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  useEffect(() => {
    setIsLoggedIn(access_token ? true : false);
    console.log("is login  : ", isLoggedIn)
  }, []);


  return (

    // <div className="App">
    //   {isLoggedIn && <Header />}
    //   <Body setIsLoggedIn={setIsLoggedIn} />
    // </div>
    <>
    <Body/>
    </>
  );
}

export default App;
