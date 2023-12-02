import React from "react";

const Footer = () => {
    return (<>
        <section className="footer">
            <div className="footing">
                <div className="left-text" >
                    <p>Total this month</p>
                </div>
                <div>
                    <h5>$478.33</h5>
                </div>
            </div>
            <div className="right-text">
                <div>
                    <p><span>+2.4%</span></p>
                </div>
                <div>
                    <p>from last month</p>
                </div>
            </div>
        </section> 
    </>)
}

export default Footer;