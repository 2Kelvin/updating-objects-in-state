var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function MovingDot() {
  var _React$useState = React.useState({ x: 0, y: 0 }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      position = _React$useState2[0],
      setPosition = _React$useState2[1];

  var divStyle = {
    position: "relative",
    width: "100vw",
    height: "100vh"
  };

  var dotStyle = {
    position: "absolute",
    backgroundColor: "#64FFDA",
    borderBottomLeftRadius: "8px",
    transform: "translate(" + position.x + "px, " + position.y + "px)",
    left: -10,
    top: -10,
    width: 24,
    height: 24
  };

  return React.createElement(
    "div",
    {
      className: "movingDot",
      onPointerMove: function onPointerMove(e) {
        // creating a new object with the new mouse position and setting it to state
        setPosition({ x: e.clientX, y: e.clientY });
      },
      style: divStyle
    },
    React.createElement("div", { style: dotStyle })
  );
}

export default function App() {
  return React.createElement(MovingDot, null);
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));