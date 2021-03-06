import React, { Component } from 'react';

class VerificationBox extends Component {
    constructor(props){
        super(props);
        this.box = this.box.bind(this);
    }

    box(){
        let verifyBox = [];
        for(let i = 0; i<6; i++){
            verifyBox.push(
                <input key={i} className="verify-box"/>
            )
        }
        return verifyBox;
    }

    render(){
        return(
            <div className="enter-code-verify">
                {this.box()}
            </div>
        );
    }
}

export default VerificationBox;

