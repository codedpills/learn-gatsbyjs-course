import React, {Component} from 'react';

class DisplayAgain extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I'm enjoying learning {this.props.tech}</h1>
                <p>I've been doing this for {this.props.num}  months</p>
            </div>
        )
    }
}

export default DisplayAgain;