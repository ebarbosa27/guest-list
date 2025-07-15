import "./list.css";

export default function GuestList({ guests, selectedGuest, setSelectedGuest }) {
  if (guests === undefined) {
    return <div>Loading</div>;
  }

  return (
    <table style={{ border: "solid 1px black" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {guests.map((guest, idx) => {
          let selectedClass = false;
          if (selectedGuest && guest.id === selectedGuest.id) selectedClass = true;
          return (
            <tr
              key={idx}
              onClick={() => setSelectedGuest(guest)}
              className={selectedClass ? "listItem selectedItem" : "listItem"}
            >
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
