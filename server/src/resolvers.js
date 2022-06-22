const fetch = require("node-fetch");

const resolvers = {
  Query: {
    //returns an array of tracks
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    tracksForHomeFetch: async () => {
      const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
      const res = await fetch(`${baseUrl}/tracks`);
      return res.json();
    },
  },

  Track: {
    author: (parent, _, { dataSources }) => {
      //   console.log("Parent parameter is: ", parent);
      return dataSources.trackAPI.getAuthor(parent.authorId);
    },
  },
};

module.exports = resolvers;
