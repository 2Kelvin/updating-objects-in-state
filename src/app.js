function MovingDot() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const divStyle = {
    position: "relative",
    width: "100vw",
    height: "100vh",
  };

  const dotStyle = {
    position: "absolute",
    backgroundColor: "#64FFDA",
    borderBottomLeftRadius: "8px",
    transform: `translate(${position.x}px, ${position.y}px)`,
    left: -10,
    top: -10,
    width: 24,
    height: 24,
  };

  return (
    <div
      className="movingDot"
      onPointerMove={(e) => {
        // creating a new object with the new mouse position and setting it to state
        setPosition({ x: e.clientX, y: e.clientY });
      }}
      style={divStyle}
    >
      <div style={dotStyle}></div>
    </div>
  );
}

export default function App() {
  return <MovingDot />;
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
