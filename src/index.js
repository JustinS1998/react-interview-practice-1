import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            data: ''
        };
        this.increment = this.increment.bind(this);
        this.getData = this.getData.bind(this);
    }

    increment() {
        this.setState({ counter: this.state.counter+1 });
    }
    getData(e) {
        const url = 'https://api.datamuse.com/words?'
        const queryParams = 'rel_jjb=';
        const wordQuery = e.target.value;
        const endPoint = url + queryParams + wordQuery;
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                this.setState({data: JSON.stringify(xhr.response)});
            }
        };
        xhr.open('GET', endPoint);
        xhr.send();
    }

    render(){
        return(
            <>
            <h1>Hello world</h1>
            <div>
                <button onClick={this.increment}>Increment</button>
                <p>{this.state.counter}</p>
            </div>
            <div>
                <input 
                    type='text'
                    onChange={this.getData}></input>
                <p>{this.state.data}</p>
            </div>
            </>
        );
    }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));