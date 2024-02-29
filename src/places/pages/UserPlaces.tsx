import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import { type PlaceItemTypes } from "../components/PlaceItem";

const DUMMY_PLACES: PlaceItemTypes[] = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    coordinates: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creatorId: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    coordinates: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creatorId: "u2",
  },
];

const UserPlaces = () => {
  const userIds = useParams().userId;
  const loaddedPlaces = DUMMY_PLACES.filter(
    (place) => place.creatorId === userIds
  );
  return <PlaceList items={loaddedPlaces} />;
};

export default UserPlaces;
