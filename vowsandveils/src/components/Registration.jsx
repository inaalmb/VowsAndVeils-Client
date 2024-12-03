import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"

const Registration = () => {
    const[visible, setVisible] = useState(true)

    return (
        <div className="registration-container">
            <div className="registration-container-inner">
                <h2>Registracija</h2>
            </div>
            <div className="input">
                <input type="text" placeholder="Ime" />
            </div>
            <div className="input">
                <input type="text" placeholder="Prezime" />
            </div>
            <div className="input">
                <input type="email" placeholder="Email" />
            </div>
            <div className="input">
                <input type="number" placeholder="Broj telefona" />
            </div>
            <div className="input">
                <input type="date" placeholder="Datum rođenja" />
            </div>
            <div className="input">
                <input type="text" placeholder="Korisničko ime" />
            </div>
            <div className="input">
                <input type="password" placeholder="Lozinka " />
                {visible 
                    ? <FaRegEye onClick={() => setVisible(!visible)} className='icon' id='eye'/> 
                    : <FaRegEyeSlash onClick={() => setVisible(!visible)} className='icon' id='eye'/>
                }
            </div>
            <button>Registruj se</button>
        </div>
    )
}

export default Registration