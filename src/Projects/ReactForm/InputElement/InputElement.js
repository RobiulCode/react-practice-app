import React, { Component } from 'react'

export default class InputElement extends Component {
    state={
        name : '',
        country: '',
        bio : '',
        birthday:'',
        gender : '',
        agree: false,
        skills : []
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleCheckbox=(event)=>{
        this.setState({
            agree : event.target.checked
        })
    }
    handleChangeSkill=(event)=>{
        if(event.target.checked){
            this.setState({
                skills : [...this.state.skills,event.target.value]
            })
        }else{
            const skills = this.state.skills.filter(skill=> skill !== event.target.value)
            this.setState({
                skills : skills
            })
        }
    }
    submit=(event)=>{
        console.log(this.state)
    }
  render() {
      const{name,country,bio,birthday,agree,skills}=this.state
    return (
      <div className="app">
          <div className="app-display space-y-2">
              <input 
              onChange={this.handleChange} 
              className='input' type="text" 
              name="name" 
              placeholder='Enter name'
              value={name}
              /><br />
              <select 
              onChange={this.handleChange} 
              className='input' 
              name="country"
              value={country}
              >
                  <option>Select you Country</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="Nepal">Nepal</option>
              </select><br />
              <textarea 
              onChange={this.handleChange} 
              className='input' 
              name="bio" 
              placeholder='Tell me about you'
              value={bio}
              ></textarea><br />
              <input 
              onChange={this.handleChange} 
              className='input' 
              name='birthday'
              type="date" 
              value={birthday}
              /><br />
              <div className="p-2 space-x-2">
                  <input type="radio" name="gender" value="Male"  onChange={this.handleChange}/> Male
                  <input type="radio" name="gender" value="Female"  onChange={this.handleChange}/> Female
                  <input type="radio" name="gender" value="Others"  onChange={this.handleChange}/> Others
              </div>
              <div className="p-2 space-x-2">
                  <input type="checkbox" name="skills" checked={skills.includes("JavaScript")} value="JavaScript"  onChange={this.handleChangeSkill}/> JavaScript
                  <input type="checkbox" name="skills" checked={skills.includes("Python")} value="Python"  onChange={this.handleChangeSkill}/> Python
                  <input type="checkbox" name="skills" checked={skills.includes("Others")} value="Others"  onChange={this.handleChangeSkill}/> Others
              </div>
              <div className="p-2 space-x-2">
                  <input type="checkbox" name="agree" checked={agree} onChange={this.handleCheckbox}/>
                  <span>I agree with your terms and conditions</span>
              </div>
              <button onClick={this.submit} className='bg-blue-600 text-white px-3 py-1 rounded shadow-md shadow-slate-400'>Send</button>
          </div>
      </div>
    )
  }
}
