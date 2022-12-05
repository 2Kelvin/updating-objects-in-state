var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Form() {
  var _React$useState = React.useState({
    firstName: "Stephen",
    lastName: "Curry",
    career: {
      sport: "Basketball",
      role: "Point Guard",
      team: "Warriors"
    },
    email: "curry30@gmail.com"
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      person = _React$useState2[0],
      setPerson = _React$useState2[1];

  function handleFirstNameChange(e) {
    setPerson(Object.assign({}, person, { //copying the old input fields' object data
      firstName: e.target.value //but only changing 'firstName' property
    }));
  }
  function handleLastNameChange(e) {
    setPerson(Object.assign({}, person, {
      lastName: e.target.value
    }));
  }
  function handleEmailChange(e) {
    setPerson(Object.assign({}, person, {
      email: e.target.value
    }));
  }
  function handleTeamChange(e) {
    setPerson(Object.assign({}, person, {
      career: Object.assign({}, person.career, {
        team: e.target.value
      })
    }));
  }
  function handleSportChange(e) {
    setPerson(Object.assign({}, person, {
      career: Object.assign({}, person.career, {
        sport: e.target.value
      })
    }));
  }
  function handleRoleChange(e) {
    setPerson(Object.assign({}, person, {
      career: Object.assign({}, person.career, {
        role: e.target.value
      })
    }));
  }

  return React.createElement(
    "form",
    null,
    React.createElement(
      "label",
      null,
      "First name:",
      React.createElement("input", { value: person.firstName, onChange: handleFirstNameChange })
    ),
    React.createElement(
      "label",
      null,
      "Last name:",
      React.createElement("input", { value: person.lastName, onChange: handleLastNameChange })
    ),
    React.createElement(
      "label",
      null,
      "Email:",
      React.createElement("input", { value: person.email, onChange: handleEmailChange })
    ),
    React.createElement(
      "label",
      null,
      "Sport:",
      React.createElement("input", { value: person.career.sport, onChange: handleSportChange })
    ),
    React.createElement(
      "label",
      null,
      "Role:",
      React.createElement("input", { value: person.career.role, onChange: handleRoleChange })
    ),
    React.createElement(
      "label",
      null,
      "Team:",
      React.createElement("input", { value: person.career.team, onChange: handleTeamChange })
    ),
    React.createElement(
      "p",
      null,
      "Hi, am " + (person.firstName + person.lastName) + ". I love " + person.career.sport + " and I'm the " + person.career.role + " for the " + person.career.team + ". Send me a basketball emoji in my email " + person.email + "."
    )
  );
}

export default function App() {
  return React.createElement(Form, null);
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));