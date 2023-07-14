import {FaCreditCard, FaGifts, FaMoneyBillAlt, FaShippingFast } from 'react-icons/fa';

const Feature = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6">
        <div className="card  bg-theme-100 shadow-xl" data-aos-duration="1000" data-aos-delay="200" data-aos="zoom-in-left">
          <div className="card-body text-white">
            <span className='text-6xl'><FaShippingFast></FaShippingFast></span>
            <h2 className="card-title">Free Shipping</h2>
            <p className='text-lg'>On all orders over $10.00</p>
          </div>
        </div>
        <div className="card  bg-violet-500 shadow-xl" data-aos-duration="1000" data-aos-delay="200" data-aos="zoom-out-up">
          <div className="card-body text-white">
            <span className='text-6xl'><FaMoneyBillAlt></FaMoneyBillAlt></span>
            <h2 className="card-title">7 days returns</h2>
            <p className='text-lg'>Money back guarantee</p>
          </div>
        </div>
        <div className="card  bg-green-500 shadow-xl" data-aos-duration="1000" data-aos-delay="200" data-aos="zoom-in-down">
          <div className="card-body text-white">
            <span className='text-6xl'><FaCreditCard></FaCreditCard></span>
            <h2 className="card-title">Secure checkout</h2>
            <p className='text-lg'>Protected by Paypal</p>
          </div>
        </div>
        <div className="card  bg-sky-500 shadow-xl" data-aos-duration="1000" data-aos-delay="200" data-aos="zoom-out-up">
          <div className="card-body text-white">
            <span className='text-6xl'><FaGifts></FaGifts></span>
            <h2 className="card-title">Offer & gift here</h2>
            <p className='text-lg'>On all orders over</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
