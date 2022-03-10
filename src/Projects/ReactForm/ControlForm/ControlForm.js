import React, { Component } from 'react'

export default class ControlForm extends Component {
    state={
        email : '',
        password :''
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
        event.target.reset()
        this.setState({
            email : '',
            password : ''
        })
    }
    

  render() {
      const {email,password} = this.state
    return (
        <div className="app">
            <div className="app-display ">
                <form className="space-y-2" onSubmit={this.handleSubmit}>
                    <input type="text" className="input" name="email"value={email} placeholder="Email" onChange={this.handleChange}/>
                    <input type="password" className="input" name="password" value={password} placeholder="******" onChange={this.handleChange}/>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded shadow-md shadow-slate-400">Login</button>
                </form>
            </div>
            
        </div>
    )
  }
}
