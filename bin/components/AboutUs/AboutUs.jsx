import AboutUsIntro from "./AboutUsIntro/AboutUsIntro";
import AboutUsTeam from "./AboutUsTeam/AboutUsTeam";
import AboutUsHistory from "./AboutUsHistory/AboutUsHistory";
import React from "react";

class AboutUs extends React.Component{
    
    render (){
        return (<div><AboutUsIntro/>
                <AboutUsTeam/>
                <AboutUsHistory/>
                </div>)
    }

}

export default AboutUs;