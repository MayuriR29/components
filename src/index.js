import React from "react";
import ReactDOM from "react-dom";
import { CommentDetail } from "./CommentDetail";

export const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail name={"sam"} time={"7.00 pmToday"} />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
