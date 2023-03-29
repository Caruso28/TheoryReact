import React from "react";
import Title from "../Title/"

function Blog(props) {
const { title } = props;

  return (
    <section>
      <Title title={title} />
    </section>
  );
}
export default Blog;