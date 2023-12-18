const ArticleComponent = ({ component }) => {
  const componentType = component.__component.split("blog-article")[1];
  console.log(component);
  switch (componentType) {
    case "headline":
      return <h1>Headline.</h1>;
    case "paragraph-with-image":
      return <h1>Paragraph with image.</h1>;
    case "paragraph":
      return <h1>Paragraph with image.</h1>;
    default:
      return <h1>Not found.</h1>;
  }
};

export default ArticleComponent;
