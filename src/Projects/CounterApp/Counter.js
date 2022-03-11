import React, { Component } from 'react';
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

class Counter extends Component{

        state={
            number : 0,
            clearId : null
        }

        increase =()=>{
            this.setState({
                number : this.state.number + 1
            })
        }
        decrease=()=>{
            if (this.state.number > 0){
                this.setState({
                    number : this.state.number-1
                })
            }
        }
        start=()=>{
            if(this.state.number>0){
                this.clearId = setInterval(()=>{
                    this.setState({
                        number:this.state.number - 1
                    },()=>{
                        if(this.state.number ===0){
                            alert('Timer Finished')
                            clearInterval(this.clearId)
                            this.clearId = null
                        }
                    })
                },1000)
            }
        }
        stop=()=>{
            clearInterval(this.clearId)
            this.setState({
                clearId:null
            })
        }
        reset=()=>{
            this.setState({
                number : 0
            })
        }
        render(){
            return(
                <div className="app">
                        <div className="app-display">
                            <div className="number">{this.state.number}</div>
                            <div className="control">
                                <button className='button' onClick={this.decrease}><FaMinusCircle/></button>
                                <button className='button' onClick={this.increase}><FaPlusCircle/></button>
                            </div>
                            <div className="control">
                                <button className='button' onClick={this.start}>Start</button>
                                <button className='button' onClick={this.stop}>Stop</button>
                                <button className='button' onClick={this.reset}>Reset</button>
                            </div>
                        </div>
                </div>
            )
        }
}
export default Counter;