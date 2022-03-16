import "./App.css";
import { Grid, Row, Cell } from "./grid.js";
import personIcon from "./person-icon-16.png";
import { SlideContent } from "./SlideContent.js";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import { BasicTutorial, onPageScrollBasic } from "./Tutorials/Basic.js";
import { InterTutorial, onPageScrollInter } from "./Tutorials/Inter.js";
import { AdvTutorial, onPageScrollAdv } from "./Tutorials/Adv.js";
import HamburgerMenu from "./HamburgerMenu.js";

/* Constants ******************************************************************/

let WINDOW_HEIGHT_PIXELS = window.innerHeight;
// let WINDOW_WIDTH_PIXELS = window.innerWidth;
let NUM_ROWS = 40;
let NUM_COLS = 40;
let CELL_WIDTH = 4;
let CELL_HEIGHT = 4;
let TITLE_SLIDES = 1;
let BASIC_SLIDES = 6;
let INTER_SLIDES = 8;
let ADV_SLIDES = 8;
let TOTAL_SLIDES = TITLE_SLIDES + BASIC_SLIDES + INTER_SLIDES + ADV_SLIDES;
let TOTAL_HEIGHT = (TOTAL_SLIDES - 1) * WINDOW_HEIGHT_PIXELS; // start at height 0
let BASIC_HEIGHT = (BASIC_SLIDES + TITLE_SLIDES - 1) * WINDOW_HEIGHT_PIXELS;
let INTER_HEIGHT = (INTER_SLIDES - 1) * WINDOW_HEIGHT_PIXELS + BASIC_HEIGHT;
let ADV_HEIGHT = (ADV_SLIDES - 1) * WINDOW_HEIGHT_PIXELS + INTER_HEIGHT;

function App() {
  /* Functions ****************************************************************/

  // Update on user scroll
  function onPageScroll() {
    let scrollHeight = document.documentElement.scrollTop;

    // Update the arrows
    setArrowVisibility(scrollHeight);

    switch (true) {
      // Slide 0 / Title Page
      case scrollHeight <= WINDOW_HEIGHT_PIXELS: {
        // let grid = document.getElementById("basic-tutorial-visual-grid");
        // let outline = document.getElementById("basic-tutorial-visual-outline");
        let grid = document.getElementById("basic-tutorial-visual-grid");
        let outline = document.getElementById("basic-tutorial-visual-outline");

        // default settings for all changes
        for (const row of grid.childNodes) {
          row.style.transform = "translateY(0px)";
          row.style.background = "rgba(0,255,0,0)";
        }
        outline.childNodes[0].style.opacity = 0;
        outline.childNodes[1].style.opacity = 0;

        break;
      }

      // Basic Tutorial
      case scrollHeight <= BASIC_HEIGHT: {
        onPageScrollBasic(scrollHeight);

        let grid = document.getElementById("inter-tutorial-visual-grid");
        let outline = document.getElementById("inter-tutorial-visual-outline");

        // default settings for all changes
        for (const row of grid.childNodes) {
          row.style.transform = "translateY(0px)";
          row.style.background = "rgba(0,255,0,0)";
        }
        outline.childNodes[0].style.opacity = 0;
        outline.childNodes[1].style.opacity = 0;

        break;
      }

      // Intermediate Tutorial
      case scrollHeight <= INTER_HEIGHT: {
        onPageScrollInter(scrollHeight - BASIC_HEIGHT);

        let grid = document.getElementById("adv-tutorial-visual-grid");
        let outline = document.getElementById("adv-tutorial-visual-outline");

        // default settings for all changes
        for (const row of grid.childNodes) {
          row.style.transform = "translateY(0px)";
          row.style.background = "rgba(0,255,0,0)";
        }
        outline.childNodes[0].style.opacity = 0;
        outline.childNodes[1].style.opacity = 0;
        break;
      }

      case scrollHeight <= ADV_HEIGHT: {
        // onPageScrollAdv(scrollHeight - INTER_HEIGHT);
        onPageScrollAdv(scrollHeight - INTER_HEIGHT);
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

    return Promise.resolve;
  }

  // Scroll to next page when user clicks down arrow; check the arrow opacity
  function onDownArrowClick() {
    let slideNum = Math.ceil(
      0.001 + document.documentElement.scrollTop / WINDOW_HEIGHT_PIXELS
    );
    let newHeight = slideNum * WINDOW_HEIGHT_PIXELS;
    window.scroll({ top: newHeight, behavior: "smooth" });

    setArrowVisibility(newHeight);

    return Promise.resolve;
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
    else if (scrollHeight / WINDOW_HEIGHT_PIXELS < TOTAL_SLIDES - 3) {
      upArrow.value = "regular";
      upArrow.style.cursor = "pointer";
      upArrow.style.opacity = 1;

      downArrow.value = "regular";
      downArrow.style.cursor = "pointer";
      downArrow.style.opacity = 1;
    }
    // If on last page, make only up arrow usable
    else {
      upArrow.value = "regular";
      upArrow.style.cursor = "pointer";
      upArrow.style.opacity = 1;

      downArrow.value = "disabled";
      downArrow.style.cursor = "default";
      downArrow.style.opacity = 0;
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

  // Reset to top of page
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  let grid = makeGrid();
  window.onscroll = onPageScroll;
  document.onkeyup = function (event) {
    switch (event.key) {
      case "ArrowUp":
        onUpArrowClick().then(() => {
          return;
        });
      case "ArrowDown":
        onDownArrowClick().then(() => {
          return;
        });
      default:
        break;
    }
  };

  /* HTML Rendering ***********************************************************/

  return (
    <MathJaxContext>
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
        <HamburgerMenu
          homeScroll={0}
          basicScroll={WINDOW_HEIGHT_PIXELS}
          interScroll={BASIC_HEIGHT + WINDOW_HEIGHT_PIXELS}
          advScroll={INTER_HEIGHT + WINDOW_HEIGHT_PIXELS}
          aboutScroll={ADV_HEIGHT + WINDOW_HEIGHT_PIXELS}
        />
        {/* Visual and Slides */}
        <BasicTutorial id={"basic-tutorial"} grid={grid} />
        <InterTutorial id={"inter-tutorial"} grid={grid} />
        <AdvTutorial id={"adv-tutorial"} grid={grid} />
      </div>
    </MathJaxContext>
  );
}

export default App;
