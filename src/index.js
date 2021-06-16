import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            data: {},
            wordList: []
        };
        this.increment = this.increment.bind(this);
        this.getData = this.getData.bind(this);
        this.createList = this.createList.bind(this);
    }

    increment() {
        this.setState({ counter: this.state.counter + 1 });
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
                console.log(xhr.response);
                this.setState({ data: xhr.response });
                this.createList(this.state.data);
            }
        };
        xhr.open('GET', endPoint);
        xhr.send();
    }

    createList(res) {
        this.setState({wordList: []});
        let wordList = [];
        if (res && res.length) {
            for (let i=0; i<res.length; i++) {
                wordList.push(res[i].word);
            }
        }
        this.setState({wordList: wordList});
    }

    render() {
        return (
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
                        {/* <p>{JSON.stringify(this.state.data)}</p> */}
                        <ul>
                            {this.state.wordList.map((element, idx) => {
                                return <li key={idx}>{element}</li>
                            })}
                        </ul>
                </div>
            </>
        );
    }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));