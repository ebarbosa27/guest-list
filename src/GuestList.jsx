export default function GuestList({ guests, setSelectedGuest }) {
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
          return (
            <tr key={idx} onClick={() => setSelectedGuest(guest)}>
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
