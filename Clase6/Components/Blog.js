import React from "react";
import Title from "./Components/Title/"
import Text from "./Components/Text/"

function Blog(props) {
const { title, content} = props;

  return (
    <section>
      <Title title={title} />
      <Text content={text} />
    </section>
  );
}
export default Blog;