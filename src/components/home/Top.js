import React from "react";

const Top = () => {

  const handlePesan = (value,e) => {
    e.preventDefault();
    alert("Halaman Top Tampil");
    alert(value);
  }

  return <a href="/" onClick={(e) => handlePesan("dari Top",e)}>
    Halaman Top
  </a>;
};

export default Top;
