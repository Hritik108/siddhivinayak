import AboutUsIntro from "./AboutUsIntro/AboutUsIntro";
import AboutUsTeam from "./AboutUsTeam/AboutUsTeam";
import React from "react";

class AboutUs extends React.Component{
    
    render (){
        return (<div><AboutUsIntro/>
                <AboutUsTeam/></div>)
    }

}

export default AboutUs;