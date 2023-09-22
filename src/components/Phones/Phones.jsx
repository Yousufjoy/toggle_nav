import React, { useEffect, useState } from "react";
import axios from "axios";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  //   useEffect(() => {
  //     fetch("https://openapi.programming-hero.com/api/phones?search=iphone").then(
  //       (res) => {
  //         res.json().then((data) => {
  //           setPhones(data.data);
  //         });
  //       }
  //     );
  //   }, []);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        setPhones(data.data.data);
      });
  }, []);
  console.log(phones);
  return <div>Phones</div>;
};

export default Phones;
