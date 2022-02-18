const Grid = (props) => {
   return (
      <div 
         id={props.id} 
         className="Grid"
         children={props.children}
      />
   );
}

const Row = (props) => {
   return (
      <div
         id={props.id} 
         index={props.index}
         className="Row"
         children={props.children} 
      />
   );
}

const Cell = (props) => {
   return (
      <div 
         id={props.id} 
         index={props.index}
         className="Cell"
         children={props.children}
         onClick={props.onClick} 
      />
   );
}

export {Grid, Row, Cell};