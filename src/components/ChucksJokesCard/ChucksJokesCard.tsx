import React from "react";

interface Props {
  value: string;
}

const ChucksJokesCard: React.FC<Props> = ({value}) => {
  return (
    <div>
      <p>{value}</p>
    </div>
  );
};

export default ChucksJokesCard;