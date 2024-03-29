import React from "react";
import Quiz from "./Quiz";

const Content = () => {

  return (
    <React.Fragment>
      <div className="frame w-100">
        Trắc nghiệm
      </div>
      <hr></hr>
      <div>
        <Quiz/>
      </div>

    </React.Fragment>
  );
}

export default Content;