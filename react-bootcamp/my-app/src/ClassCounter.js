import React, {Component} from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 4,
            person: "Zak"
        }
    }

    handleIncreaseCount = () => {
        // console.log("count increased!");
        this.setState({
            count: this.state.count + 1
        })
    }
    handleDecreaseCount = () => {
        // console.log("Count decreased!");
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Class Counter: {this.state.count} </h2>
                <hr />
                <button onClick={this.handleIncreaseCount}>Increase count</button>
                <button onClick={this.handleDecreaseCount}>Decrease count</button>
            </div>
        )
    }
}

export default ClassCounter;