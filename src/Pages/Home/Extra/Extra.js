import React from 'react';
import './Extre.css'
import footer from '../../../pictures/footer.png'
import background from '../../../pictures/background.png'
import Tilt from 'react-vanilla-tilt'

const Extra = () => {
    return (
        <div className='mt-5'>
            
            <div className='extra-container flex items-center justify-center' style={{ "backgroundImage": `url(${background})` }}>

                <Tilt>
                    <div class="extra-card  h-50 w-96 ">
                        <div class="card-body  text-center">
                            <h2 class="text-2xl font-bold underline">Our Responsibility</h2>
                            <p>We Are dedicated and loyal to our customers.We handle the customers opinion seriously & try to deliver our products on time.We try to learn from our mistakes and always try to achieve users faith</p>

                        </div>
                    </div>
                </Tilt>

            </div>




            {/* <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Extra;