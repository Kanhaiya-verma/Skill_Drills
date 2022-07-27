import React, { useRef } from "react";

import Index from "../Html/Index";

const ContactUs = () => {
  const input = useRef();
  const buttonHandler = () => {
    input.current.value();
  };
  console.log(input);

  return (
    <div>
      <Index />

      <h1>ContactUs</h1>
      <input ref={input} type="text" placeholder="Enter Name" />
      <button onClick={buttonHandler}>name save</button>
    </div>
  );
};

export default ContactUs;
