import React, { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";
import { BsFillXSquareFill, BsFillCaretDownSquareFill } from "react-icons/bs";

const Certificates = (props) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrapper">
      {props.data.map((value, i) => {
        return (
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="accordion"
            key={i}
          >
            <div className="title">
              <p> {value.title} </p>
              {selected === i ? (
                <BsFillXSquareFill onClick={() => toggle(i)} />
              ) : (
                <BsFillCaretDownSquareFill onClick={() => toggle(i)} />
              )}
            </div>
            <div className={selected === i ? "content show" : "content"}>
              <img src={value.image} alt={value.title} className="image" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Certificates;
