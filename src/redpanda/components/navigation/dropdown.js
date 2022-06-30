import React from "react";
import { Link } from "react-router-dom";
import { navData } from "../../../mock";
function Dropdown(props) {
    // const dropdownData=  navData.map((x)=>{
    //     return(
    //         x.dropdown

    //     )

    // })

    return (
        <>
            
                {props.value.map((navLink)=>{
                    return(
                        <div class="dropdown">
                        <button class="dropbtn">{navLink.name}</button>
                        <div class="dropdown-content">
                            {navLink.map((x)=>{ console.log("dropdown",x)
                               
                            })}
                            {/* <Link to={navLink.path}>{navLink.dropdown.name}</Link> */}
                        </div>
                        </div>
                    )
                })}
                
                
                    
                   
                
           
        </>
        // <div >
        //     <div class="dropdown">
        //         <button class="dropbtn">{props.name}
        //             <i class="fa fa-caret-down"></i>
        //         </button>
        //         <div class="dropdown-content">
        //             {
        //                 dropdownData.map((x)=>{
        //                     return(
        //                         <Link to={x.abc}>{x.abc}</Link>
        //                     )
        //                 })
        //             }

        //         </div>
        //     </div>
        // </div>

    )
}
export default Dropdown;