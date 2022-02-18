// A wrapper for the visual component
const Grid = (props) => {
  return <div id={props.id} className="Grid" children={props.children} />;
};

// A row of cells
const Row = (props) => {
  return (
    <div
      id={props.id}
      className="Row"
      children={props.children}
      index={props.index}
    />
  );
};

// 16 icons in a block
const Cell = (props) => {
  return (
    <div
      id={props.id}
      className="Cell"
      children={props.children}
      index={props.index}
      onClick={props.onClick}
    />
  );
};

export { Grid, Row, Cell };
