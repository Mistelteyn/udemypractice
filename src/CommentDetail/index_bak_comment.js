import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Comment from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>huworneng!</h4>
          <div>awe you suwe you want to do dis?</div>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="shit"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="Samantha"
          timeAgo="Today at 2:45PM"
          content="shitty"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="Samael"
          timeAgo="Yesterday at 1:45PM"
          content="shitty day"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
