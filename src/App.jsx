import GuestList from "./GuestList";
import GuestDetails from "./GuestDetails";
import { useEffect, useState } from "react";
const API_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2504-FTB-ET-WEB-PT";

export default function App() {
  const [guests, setGuests] = useState();
  const [selectedGuest, setSelectedGuest] = useState();

  useEffect(() => {
    fetch(API_URL + "/guests")
      .then(async (res) => {
        const resJSON = await res.json();
        const data = resJSON.data;

        setGuests(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <h1>Guest List</h1>
      <GuestList guests={guests} setSelectedGuest={setSelectedGuest}></GuestList>
      {selectedGuest ? (
        <GuestDetails selectedGuest={selectedGuest} />
      ) : (
        <p>Select a guest to view more details</p>
      )}
    </>
  );
}
