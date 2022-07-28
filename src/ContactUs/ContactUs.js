import React, { useRef, useState } from "react";

import Index from "../Html/Index";

const ContactUs = () => {
  const [input, setInput] = useState("");
  const inputNew = useRef("Kanhaiya");
  const buttonHandler = () => {
    console.log((inputNew.current.text = localStorage.setItem("Text", input)));
  };
  console.log(input);

  return (
    <div>
      <Index />

      <h1>ContactUs</h1>
      <input
        ref={inputNew}
        type="text"
        name="inputfield"
        placeholder="Enter Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={buttonHandler} className="btn btn-danger ml-2">
        name save
      </button>
    </div>
  );
};

export default ContactUs;
