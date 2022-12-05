function Form() {
  const [person, setPerson] = React.useState({
    firstName: "Stephen",
    lastName: "Curry",
    career: {
      sport: "Basketball",
      role: "Point Guard",
      team: "Warriors",
    },
    email: "curry30@gmail.com",
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person, //copying the old input fields' object data
      firstName: e.target.value, //but only changing 'firstName' property
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
  function handleTeamChange(e) {
    setPerson({
      ...person,
      career: {
        ...person.career,
        team: e.target.value,
      },
    });
  }
  function handleSportChange(e) {
    setPerson({
      ...person,
      career: {
        ...person.career,
        sport: e.target.value,
      },
    });
  }
  function handleRoleChange(e) {
    setPerson({
      ...person,
      career: {
        ...person.career,
        role: e.target.value,
      },
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
      <label>
        Sport:
        <input value={person.career.sport} onChange={handleSportChange} />
      </label>
      <label>
        Role:
        <input value={person.career.role} onChange={handleRoleChange} />
      </label>
      <label>
        Team:
        <input value={person.career.team} onChange={handleTeamChange} />
      </label>
      <p>
        {`Hi, am ${person.firstName + person.lastName}. I love ${
          person.career.sport
        } and I'm the ${person.career.role} for the ${
          person.career.team
        }. Send me a basketball emoji in my email ${person.email}.`}
      </p>
    </form>
  );
}

export default function App() {
  return <Form />;
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
