import React from "react";

const Rate = ({ setRating }) => {
  let arr = Array(5).fill(<i class="fas fa-star"></i>);

  return (
    <div>
      {arr.map((el, i) => (
        <button className = 'star_btn'  onClick={() => setRating(i + 1)}>
          {el}
        </button>
      ))}
    </div>
  );
};

export default Rate;
