export default function GuestList() {
  return (
    <table style={{ border: "solid 1px black" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>{/* logic to loop through guest list */}</tbody>
    </table>
  );
}
