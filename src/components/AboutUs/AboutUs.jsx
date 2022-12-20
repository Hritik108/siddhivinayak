import AboutUsIntro from "./AboutUsIntro/AboutUsIntro";
import AboutUsTeam from "./AboutUsTeam/AboutUsTeam";
import AboutUsHistory from "./AboutUsHistory/AboutUsHistory";
import AboutUsSummary from "./AboutUsSummary/AboutUsSummary";
import AboutUsClassesTour from "./AboutUsClassesTour/AboutUsClassesTour";
import React from "react";

class AboutUs extends React.Component{
    
    render (){
        return (<div><AboutUsIntro/>
                <AboutUsTeam/>
                <AboutUsHistory/>
                <AboutUsSummary/>
                <AboutUsClassesTour/>
                </div>)
    }

}

export default AboutUs;