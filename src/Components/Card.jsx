import React from "react";
import Header from "./Header";
import BarChart from "./BarChart";
import Footer from "./Footer";
import Data from "./Data";

const Card = () => {
    const userData = {
        labels: Data.map((val) => val.day),
        datasets: [{
            label: '',
            data: Data.map((val) => val.amount),
            backgroundColor: 'hsl(10, 79%, 65%)',
            hoverBackgroundColor: 'hsl(186, 34%, 60%)',
            borderRadius: 3,
        }]
    }
    
    return(<>
        <main className="card">
            <Header/>
            <section className="information">
                <h2>Spending - Last 7 days</h2>
                <BarChart
                    chartData={userData}
                />
                <Footer/>
            </section>
        </main>    
    </>)
}

export default Card;