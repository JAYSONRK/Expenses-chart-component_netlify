import React from "react";
import Logo from '../images/logo.svg';

const Header = () => {
    return (<>
        <section className="header">
            <div className="heading">
                <div>
                    <p>My balance</p>
                </div>
                <div>
                    <h5>$921.48</h5>
                </div>
            </div>
            <div className="logo">
               <img src={Logo} alt="logo"/>
            </div>
        </section> 
    </>)
}

export default Header;