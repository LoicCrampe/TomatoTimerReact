import React, { Component } from 'react';

class Button extends Component {
    render() { 
        // console.log(this.props);
        return ( 
            <button onClick={this.props.onBtnClick} className={this.props.btnCssClasses}>{this.props.text}</button>
        );
    }
}

export default Button;