import React, { Component } from 'react'
class Main extends Component {
    state = {
        list: this.props.data,
        handledestory:this.props.handledestory
    }
    componentWillReceiveProps(nextprops){
        //console.log(nextprops)
        this.setState({
            list:nextprops.data
        })
    }
    render() {
        return (
            <div className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">

                    {
                        this.state.list.length > 0 && this.state.list.map((item, index) => {
                            return (
                                < li key={item.id} >
                                    <div className="view">
                                        <input className="toggle" type="checkbox" defaultChecked />
                                        <label>{item.name}</label>
                                        <button
                                            onClick={this.state.handledestory.bind(this,index)}
                                            className="destroy"
                                        ></button>
                                    </div>
                                </li>
                            )

                        })
                    }

                </ul>
            </div>
        )
    }
}
export default Main;
