import React from "react";
import ReactDOM from "react-dom";
import { CommentDetail } from "./CommentDetail";

export const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="sam" time="2 p.m Monday" />
      <CommentDetail author="sam" time="2 p.m Monday" />

    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
