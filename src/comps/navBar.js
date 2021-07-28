import React, { useState } from "react";
// import svgLogo from './img/logotsl.svg';
import { motion, AnimateSharedLayout } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

const navDatas = [
  "Model S",
  "Model 3",
  "Model X",
  "Model Y",
  "Powerwall",
  "Recharge",
  "Shop",
  "Compte",
  "Menu",
];

function Navbar() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(47, 79, 79, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(47, 79, 79, 1)",
    },
  };

  const [selected, setSelected] = useState(navDatas[0]);

  return (
    <div className="NavbarFlex">
      <motion.svg
        class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
        viewBox="0 0 342 35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"
          fill="#181B21, #171a20)"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        ></motion.path>
      </motion.svg>

      {/* <div className="tds-content1">
        <h4 className="textNav">Model S</h4>
        <h4 className="textNav">Model 3</h4>
        <h4 className="textNav">Model X</h4>
        <h4 className="textNav">Model Y</h4>
        <h4 className="textNav">Powerwall</h4>
        <h4 className="textNav">Recharge</h4>
      </div>
      <div className="tds-content2">
        <h4 className="textNav">Shop</h4>
        <h4 className="textNav">Compte</h4>
        <h4 className="textNav">Menu</h4>
      </div> */}

      <AnimateSharedLayout>
        <ul>
          {navDatas.map((navData) => (
            // <h4
            //   className="textNav"
            //   key={navData}
            //   color={"#DCDCDC"}
            //   isSelected={selected === navData}
            //   onMouseOver={() => setSelected(navData)}
            // >
            //   {navData}
            // </h4>
            <Item
              key={navData}
              color={'#DCDCDC'}
              isSelected={selected === navData}
              data={navData}
              onMouseOver={() => setSelected(navData)}
            />
          ))}
        </ul>
      </AnimateSharedLayout>
    </div>
  );
}

function Item({ color, isSelected, data, onMouseOver }) {
  return (
    <li
      className="item"
      onMouseOver={onMouseOver}
      style={{ backgroundColor: '#DCDCDC' }}
    >
      {isSelected && (
        <motion.h4
          layoutId="outline"
          className="outline"
          initial={false}
          animate={{ borderColor: '#DCDCDC' }}
          transition={spring}
        >{data}</motion.h4>
      )}
    </li>
  );
}
export default Navbar;
