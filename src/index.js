import React from "react";
import ReactDOM from "react-dom";
import { CommentDetail } from "./CommentDetail";
import { ApprovalCard } from "./ApprovalCard";

import faker from "faker";

export const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="2 p.m Monday"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Tom"
          timeAgo="2 p.m Monday"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jerry"
          timeAgo="2 p.m Monday"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
