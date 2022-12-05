function Form() {
  const [person, setPerson] = React.useState({
    firstName: "Stephen",
    lastName: "Curry",
    email: "wardell30@gmail.com",
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }
  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }
  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <form>
      {/* first name input */}
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      {/* last name input */}
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      {/* email input */}
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>{person.firstName + " " + person.lastName + ": " + person.email}</p>
    </form>
  );
}

export default function App() {
  return <Form />;
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
