import React from 'react'
import './LinkForm.css'

export default function LinkForm() {
    return (
        <div className="LinkForm">   
            <div className="text">
                <p className="f3">
                    {'working on something here'}
                </p>
            </div> <br />
            <div className="LinkSubmit ">
                <input className="f4 pa2 w-70 center" 
                    type="text" 
                    placeholder="paste url" 
                    name="LinkSubmit"
                />
                <button 
                    className="w-30 grow f4 link ph3 pv2 dib light-yellow shadow-3 bg-light-green">
                    Press me
                </button> 
            </div>
        </div>
    )
}

