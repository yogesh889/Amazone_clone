import React from 'react'
import Product from "./Product.js"
import "./Home.css";


function Home() {
    return (
        <div className="home">
            <img className="home__image" 
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg" alt="" /> 

            {/* product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="1234567"
                    title="Jake Brigance is back! The hero of A Time to Kill, one of the most popular novels of our time,  returns in a courtroom drama that The New York Times says is "
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51SRF4uN1-L.jpg"
                />
                <Product
                    id="2345678"
                    title="Jake Brigance is back! The hero of A Time to Kill, one of the most popular novels of our time,  returns in a courtroom drama that The New York Times says is "
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51SRF4uN1-L.jpg"
                />
            </div>
            
            <div className="home__row">
                <Product
                    id="3456789"
                    title="Jake Brigance is back! The hero of A Time to Kill, one of the most popular novels of our time,  returns in a courtroom drama that The New York Times says is "
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51SRF4uN1-L.jpg"
                />
                <Product
                    id="4567890"
                    title="Jake Brigance is back! The hero of A Time to Kill, one of the most popular novels of our time,  returns in a courtroom drama that The New York Times says is "
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51SRF4uN1-L.jpg"
                />
                <Product
                    id="1357912"
                    title="Jake Brigance is back! The hero of A Time to Kill, one of the most popular novels of our time,  returns in a courtroom drama that The New York Times says is "
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51SRF4uN1-L.jpg"
                />
            </div>

            <div className="home__row">
            <Product
                    id="2465432"
                    title="Jake Brigance is back! The hero of A Time to Kill, one of the most popular novels of our time,  returns in a courtroom drama that The New York Times says is "
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51SRF4uN1-L.jpg"
                />
            </div>
            
            
            {/* product */}
        </div>
    )
}

export default Home
