import { useState } from "react";

const Slider = () => {
  const [value, setValue] = useState(7500);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const getColor = () => {
    if (value <= 10000) {
      return "green";
    } else if (value <= 17500) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <div>
      <input
        type="range"
        min="7500"
        max="20000"
        step="1"
        value={value}
        onChange={handleChange}
        style={{
          background: `linear-gradient(to right, green 0%, yellow 50%, red 100%)`,
        }}
      />
      <div
        style={{
          backgroundColor: getColor(),
          height: "15px",
          width: "80%",
          marginTop: "10px",
        }}
      ></div>
      <div>Value: {value}</div>
    </div>
  );
};

export default Slider;
