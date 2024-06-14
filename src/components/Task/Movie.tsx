import React from "react";
import "./Movie.css";
import "../../App";

interface Props {
  name: string;
  onRemove: React.MouseEventHandler;
}

const Movie: React.FC<Props> = (props) => {

  return (
    <>
      <div className="task-name">
        <input className="task-text" placeholder={props.name}/>
        <button onClick={props.onRemove} className="btnDelete">Delete</button>
      </div>
    </>

  );
};

export default Movie;