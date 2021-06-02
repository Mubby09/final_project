import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Grid, Container } from "semantic-ui-react";
import PostCard from "../components/PostCard";

export default function Home() {
  const {
    loading,
    data: { getPosts: posts }
  } = useQuery(FETCH_POST_QUERY);

  return (
    <Container>
      <Grid columns={5}>
        <Grid.Row className="page-title">
          <h1>Recent Posts</h1>
        </Grid.Row>
        <Grid.Row>
          {loading
            ? "loading"
            : // <h1>Loading Posts..</h1>
              posts &&
              posts.map((post) => (
                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                  <PostCard post={post} />
                </Grid.Column>
              ))}
        </Grid.Row>
      </Grid>
    </Container>
  );
}

const FETCH_POST_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

// export default Home;
