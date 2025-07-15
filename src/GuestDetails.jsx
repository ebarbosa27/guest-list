export default function GuestDetails({ selectedGuest, setSelectedGuest }) {
  return (
    <div>
      <p>Name: {selectedGuest.name}</p>
      <p>Email: {selectedGuest.email}</p>
      <p>Phone: {selectedGuest.phone}</p>
      <p>Job: {selectedGuest.job}</p>
      <p>Bio: {selectedGuest.bio}</p>
      <button
        onClick={() => {
          setSelectedGuest("");
        }}
      >
        {"<-"} back
      </button>
    </div>
  );
}
