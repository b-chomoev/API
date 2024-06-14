import React from "react";

interface Props {
  value: string;
}

const ChucksJokesCard: React.FC<Props> = React.memo(({value}) => {
  return (
    <div>
      <hr/>
      <h3>{value}</h3>
    </div>
  );
}, (prevProps, nextProps) => {
  return nextProps.value === prevProps.value;
});

export default ChucksJokesCard;