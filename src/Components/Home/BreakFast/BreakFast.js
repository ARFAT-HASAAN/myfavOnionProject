import React, { useEffect, useState } from "react";

const BreakFast = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <h2>This is breakfast</h2>
    </div>
  );
};

export default BreakFast;
