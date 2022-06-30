import React from "react";
import NavigationBar from "../navigation/navigationbar";
import AnnouncementBar from "../announcement/announcementbar";
import ProductPage from "../product/productpage";
import FooterPage from "../footer/footerpage";
export default function Homepage(){
    return(
        <>
         <AnnouncementBar/>
         <NavigationBar/>
         <ProductPage/>
         <FooterPage/>
        </>
    )
}