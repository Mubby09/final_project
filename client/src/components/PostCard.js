import React from "react";
import { Card, Icon, Label, Image } from "semantic-ui-react";
import moment from "moment";

function PostCard({
  post: { body, id, username, createdAt, likeCount, commentCount, likes }
}) {
  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{moment(createdAt).fromNow()}</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>Buttone here</p>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
