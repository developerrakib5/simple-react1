
const Hero = () => {
    return (
        <div>
            <main className="hero">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className="hero-button">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                    </div>
                    <div className="shopping">
                        <p>Also Available On</p>
                        <div className="brand-icons">
                            <img src="./images/flipkart.png" alt="flipkart" /> 
                            <img src="./images/amazon.png" alt="amazon" /> 
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="./images/shoe_image.png" alt="Shoes" />
                </div>
            </main>
        </div>
    );
};

export default Hero;