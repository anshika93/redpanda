import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Homepage from "../homepage/redpandahomepage";
import {navData} from "../../../mock";
import Dropdown from "./dropdown";
export default function NavigationBar() {
    return (
        <>

            {/* <div className="navbar">
              {
                navData.map((val)=>{
                   return(
                    <>
                      <Dropdown to={val.path} name={val.name} />
                    </>
                   )
                })
              }
             </div> */}
             {/* <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> */}
 <Dropdown value={navData} />


        </>
    )
}