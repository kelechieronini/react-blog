import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const Confirm = ( {setConfirmContainer} ) => {
  const { id } = useParams();
  const { blogs } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

const handleNoClick = () =>{
  setConfirmContainer(false);
}

  return (
    <div className="confirm-container">
      <div className="confirm">
        <p>Are you sure you want to delete this item?</p>
        <div className="ask">
          <button className="yes" onClick={handleClick}>
            Yes
          </button>
          <button className="no" onClick={handleNoClick} >No</button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
