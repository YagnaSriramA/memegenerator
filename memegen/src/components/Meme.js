import React from "react"
import '../style.css'
import data from '../memesData'


function Meme()
{
    
    
    function getRandomInt(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }


    function randomeme(){
        console.log(data.data.memes[getRandomInt(1,101)].url)

    }
    


    return(
        <div>
            <div className="form">
                <div className="typeboxes">
                    <input type="text" className="typebox--1"></input>
                    <input type="text" className="typebox--2"></input>
                </div>
                <div className="submit-btn">
                <button onClick={randomeme}>Get a new meme image</button>
                </div>
            </div>
        </div>
    )
}

export default Meme