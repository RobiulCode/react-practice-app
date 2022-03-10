import React from 'react'

export default function UncontroledForm() {

    const submitHandle =(event)=>{
        event.preventDefault();
        const logIn = {}
        logIn.email = event.target.email.value;
        logIn.password = event.target.password.value;
        console.log(logIn)
    }



  return (
    <div className="app">
        <div className="app-display ">
            <form className="space-y-2" onSubmit={submitHandle}>
                <input type="text" className="input" name="email" placeholder="Email" />
                <input type="password" className="input" name="password" placeholder="Password" />
                <button className="bg-blue-600 text-white px-3 py-1 rounded shadow-md shadow-slate-400">Login</button>
            </form>
        </div>
    </div>
  )
}
