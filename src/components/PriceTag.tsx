import React from "react";

interface PriceTagProps {
  price: number;
  className: string;
}

const PriceTag = ({ price, className }: PriceTagProps) => {
  return (
    <div className={`badge ${className}`}>
      {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
    </div>
  );
};

export default PriceTag;
