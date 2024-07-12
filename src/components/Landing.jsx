import React from "react";

export default function Landing() {
  return (
    <>
      <div
        className="hero bg-white h-[70vh] sm:h-[80vh] pt-12 bg-cover "
        style={{
          backgroundImage: "url(images/bg1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-gray-200">
              Hello there
            </h1>
            <p className="mb-5 text-gray-200">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
