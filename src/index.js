import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({ counter: this.state.counter+1 });
    }

    render(){
        return(
            <>
            <h1>Hello world</h1>
            <div>
                <button onClick={this.increment}>Increment</button>
                <p>{this.state.counter}</p>
            </div>
            </>
        );
    }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));