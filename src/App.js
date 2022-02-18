import "./App.css";
import { Grid, Row, Cell } from "./grid.js";
import personIcon from "./person-icon-16.png";
import { SlideContent } from "./SlideContent.js";

/* Constants ******************************************************************/

let WINDOW_HEIGHT_PIXELS = window.innerHeight;
let NUM_ROWS = 40;
let NUM_COLS = 40;
let CELL_WIDTH = 4;
let CELL_HEIGHT = 4;
let NUM_INFECTED_ROWS = NUM_ROWS / (CELL_HEIGHT * 2);

function App() {
  /* Functions ****************************************************************/

  // Update on user scroll
  function onPageScroll() {
    let scrollHeight = document.documentElement.scrollTop;

    // Update the arrows
    setArrowVisibility(scrollHeight);

    switch (true) {
      // Slide 0 / Title Page
      case scrollHeight < WINDOW_HEIGHT_PIXELS: {
        let grid = document.getElementById("tutorial-visual");

        // default settings for all changes
        for (const row of grid.childNodes) {
          row.style.transform = "translateY(0px)";
          row.style.background = "rgba(0,255,0,0)";
        }
        break;
      }

      // Slide 1
      case scrollHeight <= 2 * WINDOW_HEIGHT_PIXELS: {
        let sep = (scrollHeight - WINDOW_HEIGHT_PIXELS) / 16;
        let opacity = (scrollHeight / WINDOW_HEIGHT_PIXELS - 1) / 5;

        let grid = document.getElementById("tutorial-visual");

        // Change position and opacity linearly over transition
        for (const row of grid.childNodes) {
          let index = row.getAttribute("index");

          // split based on NUM_INFECTED_ROWS
          if (index >= NUM_INFECTED_ROWS) {
            row.style.transform = "translateY(" + sep + "px)";
            row.style.background = "rgba(255,0,0," + opacity + ")";
          } else {
            row.style.transform = "translateY(" + -sep + "px)";
            row.style.background = "rgba(0,255,0," + opacity + ")";
          }
        }
        break;
      }
      default:
        break;
    }
  }

  // Scroll to previous page when user clicks up arrow; check the arrow opacity
  function onUpArrowClick() {
    let slideNum = Math.floor(
      -0.001 + document.documentElement.scrollTop / WINDOW_HEIGHT_PIXELS
    );
    let newHeight = slideNum * WINDOW_HEIGHT_PIXELS;
    window.scroll({ top: newHeight, behavior: "smooth" });

    setArrowVisibility(newHeight);
  }

  // Scroll to next page when user clicks down arrow; check the arrow opacity
  function onDownArrowClick() {
    let slideNum = Math.ceil(
      0.001 + document.documentElement.scrollTop / WINDOW_HEIGHT_PIXELS
    );
    let newHeight = slideNum * WINDOW_HEIGHT_PIXELS;
    window.scroll({ top: newHeight, behavior: "smooth" });

    setArrowVisibility(newHeight);
  }

  // Transition arrow opacities based on scroll height
  function setArrowVisibility(scrollHeight) {
    let upArrow = document.getElementById("up-arrow");
    let downArrow = document.getElementById("down-arrow");

    // If on title page, make only down arrow usable
    if (scrollHeight / WINDOW_HEIGHT_PIXELS < 1) {
      upArrow.value = "disabled";
      upArrow.style.cursor = "default";
      upArrow.style.opacity = 0;

      downArrow.value = "regular";
      downArrow.style.cursor = "pointer";
      downArrow.style.opacity = 1;
    }
    // If in the middle, make both arrows usuable
    else if (
      (document.documentElement.scrollHeight - scrollHeight) /
        WINDOW_HEIGHT_PIXELS <
      1
    ) {
      upArrow.value = "regular";
      upArrow.style.cursor = "pointer";
      upArrow.style.opacity = 1;

      downArrow.value = "disabled";
      downArrow.style.cursor = "default";
      downArrow.style.opacity = 0;
    }
    // If on last page, make only up arrow usable
    else {
      upArrow.value = "regular";
      upArrow.style.cursor = "pointer";
      upArrow.style.opacity = 1;

      downArrow.value = "regular";
      downArrow.style.cursor = "pointer";
      downArrow.style.opacity = 1;
    }
  }

  // Make Visual Grid
  function makeGrid() {
    // Make Row of blocks for visual
    function makeRow() {
      let row = [];
      for (let i = 0; i < NUM_COLS / CELL_WIDTH; i++) {
        let el = (
          <Cell key={i} index={i}>
            <img src={personIcon} alt="icon representing a person" />
          </Cell>
        );
        row.push(el);
      }
      return row;
    }

    let grid = [];
    for (var i = 0; i < NUM_ROWS / CELL_HEIGHT; i++) {
      let row = makeRow();
      grid.push(
        <Row key={i} index={i}>
          {row}
        </Row>
      );
    }

    return grid;
  }

  /* Stuff that happens on page load ******************************************/

  let grid = makeGrid();
  window.onscroll = onPageScroll;

  /* HTML Rendering ***********************************************************/

  return (
    <div className="App">
      {/* Title Page */}
      <header className="App-header">
        <div id="up-arrow" className="arrow up" onClick={onUpArrowClick} />
        <p>Visual Statistics</p>
        <p className="App-sub-header">
          An Independent Work Project by Alex Baroody
        </p>
        <div
          id="down-arrow"
          className="arrow down"
          onClick={onDownArrowClick}
        />
      </header>
      {/* Visual and Slides */}
      <div id="Tutorial-body" className="Tutorial-body">
        <Grid id="tutorial-visual" className="tutorial-visual">
          {grid}
        </Grid>
        <div className="Tutorial-section">
          <div className="Tutorial-text">{SlideContent[1]}</div>
        </div>
        <div className="Tutorial-section">
          <div className="Tutorial-text">{SlideContent[2]}</div>
        </div>
        <div className="Tutorial-section">
          <div className="Tutorial-text">{SlideContent[3]}</div>
        </div>
        <div className="Tutorial-section">
          <div className="Tutorial-text">{SlideContent[4]}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
