import './App.css';
import {Grid, Row, Cell} from './grid.js';
import personIcon from './person-icon.png';
import {useSpring, animated} from 'react-spring';   

function App() {
  function onArrowClick() {
    let tutBody = document.getElementById("Tutorial-body");
    
    tutBody.scrollIntoView({behavior: 'smooth'});
  }

  function moveRows(numRows, dist, end) {
    // const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
    let grid = document.getElementById("tutorial-visual");
    for (const row of grid.childNodes) {
      let index = row.getAttribute("index");
      document.addEventListener('click', function(ev){
        if (!end && index < numRows) {
          row.style.transform = 'translateY('+dist+'px)';
        }
        if (end && index >= grid.childElementCount - numRows) {
          row.style.transform = 'translateY('+dist+'px)';
        }
    },false);
    }
  }

  function makeRows() {
    function makeRow() {
      let cells = [];
      for (let i = 0; i < 55; i++) {
        let el = (
          <Cell key={i} index={i} onClick={() => {moveRows(25, 50, true); moveRows(25, -50, false)}}>
            <img src={personIcon} alt="icon representing a person"/>
          </Cell>
        );
        cells.push(el);
      }
      return cells;
    }
    let rows = [];
    for (var i = 0; i < 50; i++) {
        let row = makeRow();
        rows.push(<Row key={i} index={i}>{row}</Row>);
    }
    return rows;
  }
  let rows = makeRows();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Visual Statistics
        </p>
        <p className="App-sub-header">An Independent Work Project by Alex Baroody</p>
        <div className="arrow down" 
          onClick={onArrowClick}/>
      </header>
      <div id="Tutorial-body" className="Tutorial-body">
        <div className="Tutorial-section">
          <div className="Tutorial-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris erat, vulputate tincidunt quam et, porttitor vestibulum elit. Nullam vel nibh ante. Suspendisse id aliquet ligula, nec iaculis neque. Quisque sed sagittis libero. Donec nec magna vestibulum enim facilisis pulvinar. Curabitur sed ante ac metus posuere dictum. Maecenas augue lectus, eleifend id orci non, ornare pellentesque sapien. Cras dignissim dolor id metus bibendum fringilla. Curabitur vitae odio lacus. Nunc sed sapien ut orci eleifend vulputate. Curabitur finibus lobortis augue sed laoreet. Sed venenatis lorem est. Vestibulum placerat magna vel tortor scelerisque, quis sodales libero consectetur. Proin porttitor ut sem ac elementum. Morbi vel eros odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra feugiat urna, vel tempor ligula vulputate et. Pellentesque non quam et felis condimentum malesuada a id nisl. Etiam finibus mi nunc. Nam lobortis in eros et auctor.          </div>
          <Grid id="tutorial-visual" className="tutorial-visual">
            {rows}
          </Grid>
        </div>
     </div>
    </div>
  );
}

export default App;
