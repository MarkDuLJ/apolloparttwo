import react from "react";
import { gql, useQuery } from "@apollo/client";

import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      title
      author {
        name
        id
        photo
      }
      modules {
        title
        length
        id
      }
      id
      thumbnail
      length
      modulesCount
      description
      numberOfViews
    }
  }
`;
const Track = ({ trackId }) => {
  const { error, loading, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  });
  console.log(data);
  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
