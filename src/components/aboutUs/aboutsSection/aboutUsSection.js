import { Component } from "react";
import './aboutUsSection.css'
import './aboutUsVariousSection.css'

class AboutUsSection extends Component{


    render (){
        return(
            <div className={this.props.AboutUsSectionCss+" AboutUsSection"}>
                <h2>{this.props.contenthead}</h2>
                <p className="AboutUsSectionp">AboutUsSection {this.props.contentbody}</p>
            </div>
        )
    }

}

export default AboutUsSection;