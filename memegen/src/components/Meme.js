import React from "react"
import '../style.css'

function Meme()
{
    return(
        <div>
            <form>
                <div className="typeboxes">
                    <input type="text" className="typebox--1"></input>
                    <input type="text" className="typebox--2"></input>
                </div>
                <div className="submit-btn">
                <input type="submit" value="Get a new meme image" ></input>
                </div>
            </form>
        </div>
    )
}

export default Meme