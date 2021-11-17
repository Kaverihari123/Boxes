const Box = (props) => {
  const { size, className } = props;

  return (
    <div className={`container ${className}`}>
      <p className="size">{size}</p>
    </div>
  );
};

const element = (
  <div className="boxes-app-container">
    <h1 className="boxes-heading">Boxes</h1>
    <div className="boxes-container">
      <Box size="Small" className="box1" />
      <Box size="Medium" className="box2" />
      <Box size="Large" className="box3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
