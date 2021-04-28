import React from "react";
import { Card, Icon, Label, Image, Button } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";

function PostCard({
  post: { body, id, username, createdAt, likeCount, commentCount, likes }
}) {
  const likePost = () => {
    console.log("like Post!!");
  };

  const commentOnPost = () => {
    console.log("Comment on post");
  };

  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          as="div"
          labelPosition="right"
          onClick={likePost}
          style={{ marginBottom: 10 }}
        >
          <Button color="green" basic>
            <Icon name="heart" />
            Like
          </Button>
          <Label basic color="green" pointing="left">
            {likeCount}
          </Label>
        </Button>
        <Button as="div" labelPosition="right" onClick={commentOnPost}>
          <Button color="blue" basic>
            <Icon name="comments" />
            Comment
          </Button>
          <Label basic color="violet" pointing="left">
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
