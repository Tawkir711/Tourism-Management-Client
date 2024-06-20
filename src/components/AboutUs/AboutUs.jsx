import React from 'react';

const AboutUs = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center pb-5">
        About Us Tourism Management
      </h1>
      <div className="lg:flex gap-2 px-4 items-center mb-5 bg-gray-100 dark:bg-[#18181B] dark:text-white">
        <div className=" lg:w-1/2">
          <img
            src="https://i.postimg.cc/y8xS0hQg/ship-8308680-1280.jpg"
            alt=""
          />
        </div>
        <div className=" lg:w-1/2">
          <h1 className="text-xl font-semibold">
            Tourism Management is the art and science of overseeing all aspects
            of tourism operations, including the development of tourist
            destinations, marketing and promotion, customer service, and
            sustainability initiatives. It aims to balance the enjoyment of
            tourists with the well-being of local communities and the
            conservation of natural and cultural resources.
          </h1>
        </div>
      </div>
    </>
  );
};

export default AboutUs;