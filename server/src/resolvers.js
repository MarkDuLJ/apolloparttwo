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

    //get a single track by id, for the track page
    track: (parent, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },

  Track: {
    author: (parent, _, { dataSources }) => {
      //   console.log("Parent parameter is: ", parent);
      return dataSources.trackAPI.getAuthor(parent.authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      //   console.log("Parent parameter is: ", parent);
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
