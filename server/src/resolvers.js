const resolvers = {
  Query: {
    //returns an array of tracks
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },

  Track: {
    author: (parent, _, { dataSources }) => {
      console.log("Parent parameter is: ", parent);
      return dataSources.trackAPI.getAuthor(parent.authorId);
    },
  },
};

module.exports = resolvers;
