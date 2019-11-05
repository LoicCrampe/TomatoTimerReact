import React, { Component } from 'react';

import { toast } from 'react-toastify';

import ButtonGroup from './ButtonGroup';
import Display from './Display';

class Timer extends Component {
    state = { 
        initialValue: 10,
        duration: 10,
        message: "",
        handle: 0
    };

    notify = (type, message) => {
            toast[type](message, { autoClose: 1500 });
        
    }

    prependZero = (value) => {
        return value < 10 ? "0" + value.toString() : value.toString();
    }

    formatDuration = () => {
        const minutes = Math.floor(this.state.duration / 60);
        const seconds = Math.floor(this.state.duration % 60);
        return `${this.prependZero(minutes)}:${this.prependZero(seconds)}`;
    }

    componentDidMount() {
        this.setState({
            initialValue: parseInt(this.props.duration, 10) * 60,
            duration: parseInt(this.props.duration, 10) * 60
        })
    }
    
    componentWillUnmount() {
        this.clean();
    }

    clean = (message) => {
        clearInterval(this.state.handle);

        this.setState({
            message: message
        });
    }

    count = () => {
        this.setState({
            duration: this.state.duration - 1
        });
        if(this.state.duration === 0) {
            this.clean();
        }
    };

    start = () => {
        if (this.state.duration === 0) {

        } else {
            this.notify("success", "Lancement du chronomètre");
        const handle = setInterval(()=> {
            this.count();
        }, 1000);

        this.setState({
            handle: handle,
            message: ""
        });
        }
    }

    stop = () => {
        this.notify("warn", "Chronomètre mis en pause");
        this.clean();
    }

    reset = () => {
        this.notify("error", "Chronomètre réinitialisé");
        this.clean();
        this.setState({
            duration: this.state.initialValue
        });
    }

    render() { 
        return ( 
            <div>
                <div>
                <Display title={this.props.title} timerValue={this.formatDuration()}/>
                </div>

                <ButtonGroup onStart={this.start} onStop={this.stop} onReset={this.reset} />

                <div style={{marginLeft: 15}}>{this.state.message}</div>
            </div>
        );
    }
}

export default Timer;