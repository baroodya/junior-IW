import "./App.css";
import { Row, Cell } from "./grid.js";
import personIcon from "./person-icon-16.png";
import singlePerson from "./person-icon.png";
import curvedArrow from "./curved-arrow.png";
import { MathJaxContext } from "better-react-mathjax";
import { BasicTutorial, onPageScrollBasic } from "./Tutorials/Basic.js";
import { InterTutorial, onPageScrollInter } from "./Tutorials/Inter.js";
import { AdvTutorial, onPageScrollAdv } from "./Tutorials/Adv.js";
import HamburgerMenu from "./HamburgerMenu.js";
import { SlideContent } from "./SlideContent";
import smoothscroll from "smoothscroll-polyfill";

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
let ABOUT_SLIDES = 3;
let TOTAL_SLIDES =
  TITLE_SLIDES + BASIC_SLIDES + INTER_SLIDES + ADV_SLIDES + ABOUT_SLIDES;
let BASIC_HEIGHT = (BASIC_SLIDES + TITLE_SLIDES - 1) * WINDOW_HEIGHT_PIXELS;
let INTER_HEIGHT = (INTER_SLIDES - 1) * WINDOW_HEIGHT_PIXELS + BASIC_HEIGHT;
let ADV_HEIGHT = (ADV_SLIDES - 1) * WINDOW_HEIGHT_PIXELS + INTER_HEIGHT;
let ABOUT_HEIGHT = ADV_HEIGHT + ABOUT_SLIDES * WINDOW_HEIGHT_PIXELS;

let HALF_BUFFER = WINDOW_HEIGHT_PIXELS / 16;

function App() {
  /* Functions ****************************************************************/

  // Update on user scroll
  function onPageScroll() {
    let scrollHeight = document.documentElement.scrollTop;

    // Update the arrows
    setArrowVisibility(scrollHeight);

    switch (true) {
      case scrollHeight <= WINDOW_HEIGHT_PIXELS / 4: {
        onBeginButtonClick();
        break;
      }
      case scrollHeight >= WINDOW_HEIGHT_PIXELS - HALF_BUFFER &&
        scrollHeight <= WINDOW_HEIGHT_PIXELS + HALF_BUFFER: {
        let grid = document.getElementById("basic-tutorial-visual-grid");
        let outline = document.getElementById("basic-tutorial-visual-outline");

        resetGrid(grid, outline);

        break;
      }

      case scrollHeight >= BASIC_HEIGHT + WINDOW_HEIGHT_PIXELS - HALF_BUFFER &&
        scrollHeight <= BASIC_HEIGHT + WINDOW_HEIGHT_PIXELS + HALF_BUFFER: {
        let grid = document.getElementById("inter-tutorial-visual-grid");
        let outline = document.getElementById("inter-tutorial-visual-outline");

        resetGrid(grid, outline);

        break;
      }

      case scrollHeight >= INTER_HEIGHT + WINDOW_HEIGHT_PIXELS - HALF_BUFFER &&
        scrollHeight <= INTER_HEIGHT + WINDOW_HEIGHT_PIXELS + HALF_BUFFER: {
        let grid = document.getElementById("adv-tutorial-visual-grid");
        let outline = document.getElementById("adv-tutorial-visual-outline");

        resetGrid(grid, outline);

        break;
      }

      default:
        break;
    }

    switch (true) {
      // Slide 0 / Title Page
      case scrollHeight <= WINDOW_HEIGHT_PIXELS: {
        let basicOutline = document.getElementById(
          "basic-tutorial-visual-outline"
        );
        basicOutline.style.opacity = 0;
        break;
      }

      // Basic Tutorial
      case scrollHeight <= BASIC_HEIGHT: {
        let interOutline = document.getElementById(
          "inter-tutorial-visual-outline"
        );
        interOutline.style.opacity = 0;
        onPageScrollBasic(scrollHeight);
        break;
      }

      // Intermediate Tutorial
      case scrollHeight <= INTER_HEIGHT: {
        let advOutline = document.getElementById("adv-tutorial-visual-outline");
        advOutline.style.opacity = 0;
        onPageScrollInter(scrollHeight - BASIC_HEIGHT);
        break;
      }

      case scrollHeight <= ABOUT_HEIGHT: {
        // onPageScrollAdv(scrollHeight - INTER_HEIGHT);
        onPageScrollAdv(scrollHeight - INTER_HEIGHT);
        break;
      }

      default: {
        let singlePerson = document.getElementById("single-person");
        let singlePersonBackground = document.getElementById(
          "single-person-background"
        );

        singlePersonBackground.style.transform =
          "translateY(" + -WINDOW_HEIGHT_PIXELS + "px)";

        singlePerson.style.height = "9.2vh";
        singlePerson.style.transform =
          "translateX(" +
          -WINDOW_HEIGHT_PIXELS / 32 +
          "px) translateY(" +
          -WINDOW_HEIGHT_PIXELS / 32 +
          "px)";
        break;
      }
    }
  }

  function resetGrid(grid, outline) {
    // default settings for all changes
    grid.style.transform = "translateY(0px)";
    for (const row of grid.childNodes) {
      row.style.transform = "translateY(0px)";
      row.style.background = "rgba(0,0,0,0)";
      for (const block of row.childNodes) {
        block.style.transform = "translateX(0px) translateY(0px)";
        block.style.background = "rgba(0,0,0,0)";
      }
    }
    outline.childNodes[0].style.opacity = 0;
    outline.childNodes[1].style.opacity = 0;
  }

  // Scroll to previous page when user clicks up arrow; check the arrow opacity
  function onUpArrowClick() {
    let slideNum = Math.floor(
      -0.001 + document.documentElement.scrollTop / WINDOW_HEIGHT_PIXELS
    );
    let newHeight = slideNum * WINDOW_HEIGHT_PIXELS;

    setArrowVisibility(newHeight);

    window.scroll({ top: newHeight, behavior: "smooth" });

    if (slideNum === TOTAL_SLIDES - ABOUT_SLIDES - 2) {
      setTimeout(() => {
        window.scroll({
          top: newHeight - WINDOW_HEIGHT_PIXELS,
          behavior: "smooth",
        });
      }, 750);
    }

    return Promise.resolve;
  }

  // Scroll to next page when user clicks down arrow; check the arrow opacity
  function onDownArrowClick() {
    let slideNum = Math.ceil(
      0.001 + document.documentElement.scrollTop / WINDOW_HEIGHT_PIXELS
    );
    let newHeight = slideNum * WINDOW_HEIGHT_PIXELS;

    setArrowVisibility(newHeight);

    window.scroll({ top: newHeight, behavior: "smooth" });

    if (slideNum === TOTAL_SLIDES - ABOUT_SLIDES - 2) {
      setTimeout(() => {
        window.scroll({
          top: newHeight + WINDOW_HEIGHT_PIXELS,
          behavior: "smooth",
        });
      }, 750);
    }

    return Promise.resolve;
  }

  // Transition arrow opacities based on scroll height
  function setArrowVisibility(scrollHeight) {
    let upArrow = document.getElementById("up-arrow");
    let downArrow = document.getElementById("down-arrow");
    let upperLeftArrow = document.getElementById("upper-left-arrow");
    let lowerRightArrow = document.getElementById("lower-right-arrow");

    if (scrollHeight > 0.25 * WINDOW_HEIGHT_PIXELS) {
      upperLeftArrow.style.opacity = 0;
      lowerRightArrow.style.opacity = 0;
    } else {
      upperLeftArrow.style.opacity = 1;
      lowerRightArrow.style.opacity = 1;
    }

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
    else if (scrollHeight / WINDOW_HEIGHT_PIXELS <= TOTAL_SLIDES - 4) {
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

  const onBeginButtonClick = () => {
    document.getElementById("down-arrow").style.opacity = 1;
    let menuToggle = document.getElementById("menuToggle");
    for (const span of menuToggle.querySelectorAll("span")) {
      span.style.opacity = 1;
    }
    let beginButton = document.getElementById("begin-button");
    beginButton.style.opacity = 0;
    beginButton.style.cursor = "auto";
    beginButton.disabled = true;
    beginButton.style.transform = "translateY(-10vh)";

    let explanation = document.getElementById("explanation");
    explanation.style.opacity = 1;
    explanation.style.transform = "translateY(-10vh)";

    document.getElementById("title").style.transform = "translateY(-10vh)";
    document.getElementById("sub-title").style.transform = "translateY(-15vh)";

    document.getElementById("upper-left-arrow").style.opacity = 1;
    document.getElementById("lower-right-arrow").style.opacity = 1;

    document.getElementById("down-arrow").style.cursor = "pointer";
  };

  /* Stuff that happens on page load ******************************************/

  // Reset to top of page
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  // kick off the polyfill!
  smoothscroll.polyfill();

  let grid = makeGrid();
  window.onscroll = onPageScroll;
  document.onkeyup = function (event) {
    switch (event.key) {
      case "ArrowUp": {
        try {
          onUpArrowClick().then(() => {
            return;
          });
        } catch (error) {
          return;
        }
        break;
      }
      case "ArrowDown": {
        onDownArrowClick();
        break;
      }
      case "Enter": {
        onBeginButtonClick();
        break;
      }
      default:
        return;
    }
  };

  /* HTML Rendering ***********************************************************/

  return (
    <MathJaxContext>
      <div className="App">
        {/* Title Page */}
        <header id="header" className="App-header-container">
          <div id="up-arrow" className="arrow up" onClick={onUpArrowClick} />
          <p id="title" className="App-header">
            Visual Statistics
          </p>
          <p id="sub-title" className="App-sub-header">
            An Independent Work Project by Alex Baroody
          </p>
          <button id="begin-button" type="button" onClick={onBeginButtonClick}>
            Begin
          </button>
          <div id="explanation" className="explanation">
            {SlideContent["Explanation"]}
          </div>
          <div
            id="down-arrow"
            className="arrow down"
            onClick={onDownArrowClick}
          />
          <div id="upper-left-arrow" className="curved-arrow upper">
            <img
              src={curvedArrow}
              alt="curved arrow pointing to menu button"
            ></img>
          </div>
          <div id="lower-right-arrow" className="curved-arrow lower">
            <img
              className="lower"
              src={curvedArrow}
              alt="curved arrow pointing to down arrow"
            ></img>
          </div>
        </header>
        <HamburgerMenu
          id={"hamburger-menu"}
          homeScroll={0}
          basicScroll={WINDOW_HEIGHT_PIXELS}
          interScroll={BASIC_HEIGHT + WINDOW_HEIGHT_PIXELS}
          advScroll={INTER_HEIGHT + WINDOW_HEIGHT_PIXELS}
          aboutScroll={ADV_HEIGHT + 2 * WINDOW_HEIGHT_PIXELS}
        />
        {/* Visual and Slides */}
        <BasicTutorial id={"basic-tutorial"} grid={grid} />
        <InterTutorial id={"inter-tutorial"} grid={grid} />
        <AdvTutorial id={"adv-tutorial"} grid={grid} />
        <div id="single-person" className="single-person">
          <img src={singlePerson} alt="representation of a single person"></img>
        </div>
        <div
          id="single-person-background"
          className="single-person-background"
        ></div>
      </div>
    </MathJaxContext>
  );
}

export default App;
