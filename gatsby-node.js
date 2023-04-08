exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allContributorsJson {
        edges {
          node {
            github
          }
        }
      }
    }
  `);

  results.data.allContributorsJson.edges.forEach((edge) => {
    const contributor = edge.node;

    createPage({
      path: `/profile/${contributor.github.toLowerCase()}`,
      component: require.resolve("./src/templates/contributor-graphql.js"),
      context: {
        github: contributor.github,
      },
    });
  });
};
