import './App.css';
import {Grid, Row, Cell} from './grid.js';
import personIcon from './person-icon-16.png'; 

let WINDOW_HEIGHT_PIXELS = window.innerHeight;
let NUM_ROWS = 40;
let NUM_COLS = 40;
let CELL_WIDTH = 4;
let CELL_HEIGHT = 4;
let NUM_INFECTED_ROWS = NUM_ROWS / (CELL_HEIGHT * 2);

function App() {
  function onPageScroll() {
    let scrollHeight = document.documentElement.scrollTop;


    let slide1Sep = (scrollHeight - WINDOW_HEIGHT_PIXELS) / 16;
    let slide1Opacity = (scrollHeight / WINDOW_HEIGHT_PIXELS - 1) / 5;

    switch (true) {
      // Slide 0
      case (scrollHeight < WINDOW_HEIGHT_PIXELS): {
        let grid = document.getElementById("tutorial-visual");
        for (const row of grid.childNodes) {
          row.style.transform = 'translateY(0px)';
          row.style.background = 'rgba(0,255,0,0)';
        }
        break;
      }

      // Slide 1
      case (scrollHeight <= 2 * WINDOW_HEIGHT_PIXELS): {
        let grid = document.getElementById("tutorial-visual");
        for (const row of grid.childNodes) {
          let index = row.getAttribute("index");
          if (index >= NUM_INFECTED_ROWS) {
            row.style.transform = 'translateY('+slide1Sep+'px)';
            row.style.background = 'rgba(255,0,0,'+slide1Opacity+')';
          }
          else {
            row.style.transform = 'translateY('+(-slide1Sep)+'px)';
            row.style.background = 'rgba(0,255,0,'+slide1Opacity+')';
          }
        }
        break;
      }
      default: break;
    }
  }
  function onArrowClick() {
    let slideNum = Math.ceil(0.001 + document.documentElement.scrollTop / WINDOW_HEIGHT_PIXELS);
    window.scroll({top: (slideNum) * WINDOW_HEIGHT_PIXELS, behavior: 'smooth'});
  }

  function makeRows() {
    function makeRow() {
      let cells = [];
      for (let i = 0; i < NUM_COLS / CELL_WIDTH; i++) {
        let el = (
          <Cell key={i} index={i}>
            <img src={personIcon} alt="icon representing a person"/>
          </Cell>
        );
        cells.push(el);
      }
      return cells;
    }
    let rows = [];
    for (var i = 0; i < NUM_ROWS / CELL_HEIGHT; i++) {
        let row = makeRow();
        rows.push(<Row key={i} index={i}>{row}</Row>);
    }
    return rows;
  }

  /*****************************************************************************************/

  let rows = makeRows();
  window.onscroll = onPageScroll;

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
        <Grid id="tutorial-visual" className="tutorial-visual">
              {rows}
        </Grid>
        <div className="Tutorial-section">
          <div className="Tutorial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris erat, vulputate tincidunt quam et, porttitor vestibulum elit. Nullam vel nibh ante. Suspendisse id aliquet ligula, nec iaculis neque. Quisque sed sagittis libero. Donec nec magna vestibulum enim facilisis pulvinar. Curabitur sed ante ac metus posuere dictum. Maecenas augue lectus, eleifend id orci non, ornare pellentesque sapien. Cras dignissim dolor id metus bibendum fringilla. Curabitur vitae odio lacus. Nunc sed sapien ut orci eleifend vulputate. Curabitur finibus lobortis augue sed laoreet. Sed venenatis lorem est. Vestibulum placerat magna vel tortor scelerisque, quis sodales libero consectetur. Proin porttitor ut sem ac elementum. Morbi vel eros odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra feugiat urna, vel tempor ligula vulputate et. Pellentesque non quam et felis condimentum malesuada a id nisl. Etiam finibus mi nunc. Nam lobortis in eros et auctor.
          </div>
        </div>
        <div className="Tutorial-section">
          <div className="Tutorial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris erat, vulputate tincidunt quam et, porttitor vestibulum elit. Nullam vel nibh ante. Suspendisse id aliquet ligula, nec iaculis neque. Quisque sed sagittis libero. Donec nec magna vestibulum enim facilisis pulvinar. Curabitur sed ante ac metus posuere dictum. Maecenas augue lectus, eleifend id orci non, ornare pellentesque sapien. Cras dignissim dolor id metus bibendum fringilla. Curabitur vitae odio lacus. Nunc sed sapien ut orci eleifend vulputate. Curabitur finibus lobortis augue sed laoreet. Sed venenatis lorem est. Vestibulum placerat magna vel tortor scelerisque, quis sodales libero consectetur. Proin porttitor ut sem ac elementum. Morbi vel eros odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra feugiat urna, vel tempor ligula vulputate et. Pellentesque non quam et felis condimentum malesuada a id nisl. Etiam finibus mi nunc. Nam lobortis in eros et auctor.
          </div>
        </div>
        <div className="Tutorial-section">
          <div className="Tutorial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris erat, vulputate tincidunt quam et, porttitor vestibulum elit. Nullam vel nibh ante. Suspendisse id aliquet ligula, nec iaculis neque. Quisque sed sagittis libero. Donec nec magna vestibulum enim facilisis pulvinar. Curabitur sed ante ac metus posuere dictum. Maecenas augue lectus, eleifend id orci non, ornare pellentesque sapien. Cras dignissim dolor id metus bibendum fringilla. Curabitur vitae odio lacus. Nunc sed sapien ut orci eleifend vulputate. Curabitur finibus lobortis augue sed laoreet. Sed venenatis lorem est. Vestibulum placerat magna vel tortor scelerisque, quis sodales libero consectetur. Proin porttitor ut sem ac elementum. Morbi vel eros odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra feugiat urna, vel tempor ligula vulputate et. Pellentesque non quam et felis condimentum malesuada a id nisl. Etiam finibus mi nunc. Nam lobortis in eros et auctor.
          </div>
        </div>
        <div className="Tutorial-section">
          <div className="Tutorial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris erat, vulputate tincidunt quam et, porttitor vestibulum elit. Nullam vel nibh ante. Suspendisse id aliquet ligula, nec iaculis neque. Quisque sed sagittis libero. Donec nec magna vestibulum enim facilisis pulvinar. Curabitur sed ante ac metus posuere dictum. Maecenas augue lectus, eleifend id orci non, ornare pellentesque sapien. Cras dignissim dolor id metus bibendum fringilla. Curabitur vitae odio lacus. Nunc sed sapien ut orci eleifend vulputate. Curabitur finibus lobortis augue sed laoreet. Sed venenatis lorem est. Vestibulum placerat magna vel tortor scelerisque, quis sodales libero consectetur. Proin porttitor ut sem ac elementum. Morbi vel eros odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra feugiat urna, vel tempor ligula vulputate et. Pellentesque non quam et felis condimentum malesuada a id nisl. Etiam finibus mi nunc. Nam lobortis in eros et auctor.
          </div>
        </div>
     </div>
    </div>
  );
}

export default App;
