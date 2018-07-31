import React, { Component } from 'react';
import Hello from './components/hello/hello';
import HelloConnected from './components/hello/helloConnected';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { setName } from './redux/actions/user-action';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:'Pedro'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { name } = this.state;
    const { user } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Ivan</h1>
        </header>
        <input type="text" placeholder="name" onChange={this.handleChange} value={this.state.tempName}
        />
        <button onClick={this.handleClick}>click</button>
        <Hello name={user.name}  />
        <HelloConnected />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  handleClick(e) {
    const { name } = this.state;
    const { setName } = this.props;
  
    setName(name);
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
}

// replace 'export default App' by:
const mapStateToProps = state => ({
	user: state.user
});
const mapDispatchToProps = dispatch => ({
	setName: name => dispatch(setName(name))
});

export default connect(mapStateToProps, 
	mapDispatchToProps)(App);
