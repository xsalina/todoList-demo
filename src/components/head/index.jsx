import React, { Component } from 'react'
class Head extends Component {
    state = {
        onkeydown:this.props.keydown
    }
    render() {
        //console.log(this.props.keydown)
        return (
            <div className="header">
                <h1>todos</h1>
                <input
                    onKeyDown = {this.state.onkeydown}
                    className="new-todo" 
                    placeholder="What needs to be done?" 
                    autoFocus 
                    
                />
            </div>

        );
    }
}

export default Head;