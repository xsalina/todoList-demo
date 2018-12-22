import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/index.css'
import Head from './components/head/index.jsx'
import Main from './components/main/index.jsx'
import Footer from './components/footer/index.jsx'
class App extends Component {
  state = {
    list: [
      {
        id: Math.random(),
        name: 'HTML'
      },
      {
        id: Math.random(),
        name: 'CSS'
      },
      {
        id: Math.random(),
        name: 'javascript'
      }
    ]
  }
  handleOutputItem = (e) => {
    const { target, keyCode } = e;
    if (keyCode !== 13) return;
    const txt = target.value.trim();
    if (!txt.length) return;
    const list = this.state.list;
    list.push({
      id: Math.random(),
      name: txt
    })
    this.setState({
      list: list
    })
    target.value = '';
  }
  
  handledestory = (index) =>{
    const list = this.state.list;
    list.splice(index,1)
    this.setState({
      list
    })
  }
    render() {
      return (
        <div className="todoapp">
          <Head keydown={this.handleOutputItem}></Head>
          {
            this.state.list.length > 0 && <Main
              data={this.state.list}
              handledestory = {this.handledestory}
            ></Main>
          }
          <Footer></Footer>
        </div>
      );
    }
  }

  export default App;
