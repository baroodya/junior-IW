import "./App.css";
import { Grid, Row, Cell } from "./grid.js";
import personIcon from "./person-icon-16.png";
import { SlideContent } from "./SlideContent.js";
import { MathJaxContext, MathJax } from "better-react-mathjax";

/* Constants ******************************************************************/

let WINDOW_HEIGHT_PIXELS = window.innerHeight;
// let WINDOW_WIDTH_PIXELS = window.innerWidth;
let NUM_ROWS = 40;
let NUM_COLS = 40;
let CELL_WIDTH = 4;
let CELL_HEIGHT = 4;
let NUM_INFECTED_ROWS = NUM_ROWS / (CELL_HEIGHT * 2);
let NUM_INFECTED_ROWS_EX_2 = (9 * NUM_ROWS) / (CELL_HEIGHT * 10);
let TOTAL_SLIDES = 7;

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
        let grid = document.getElementById("tutorial-visual-grid");

        // default settings for all changes
        for (const row of grid.childNodes) {
          row.style.transform = "translateY(0px)";
          row.style.background = "rgba(0,255,0,0)";
        }
        break;
      }

      // Slide 0 - Slide 1 Transition
      case scrollHeight <= 2 * WINDOW_HEIGHT_PIXELS: {
        let sep = (scrollHeight - WINDOW_HEIGHT_PIXELS) / 16;
        let opacity = (scrollHeight / WINDOW_HEIGHT_PIXELS - 1) / 2;

        let grid = document.getElementById("tutorial-visual-grid");

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

          for (const block of row.childNodes) {
            block.style.background = "rgba(0,0,0,0.0)";
          }
        }
        break;
      }

      // Slide 1 - 2 Transition
      case scrollHeight <= 3 * WINDOW_HEIGHT_PIXELS: {
        let prevVertSep = WINDOW_HEIGHT_PIXELS / 16;
        let sep = (scrollHeight - 2 * WINDOW_HEIGHT_PIXELS) / 16;
        // move from 0 red to 255 red
        let addedRed =
          ((2 * scrollHeight) / (3 * WINDOW_HEIGHT_PIXELS) - 1) * 255;
        // move from 255 green to 175 green
        let subtractedGreen =
          255 -
          ((2 * scrollHeight) / (3 * WINDOW_HEIGHT_PIXELS) - 1) * (255 - 175);
        let outlineOpacity =
          ((scrollHeight - 2 * WINDOW_HEIGHT_PIXELS) / WINDOW_HEIGHT_PIXELS) **
          5;

        let grid = document.getElementById("tutorial-visual-grid");

        let outline = document.getElementById("tutorial-visual-outline");
        outline.childNodes[0].style.opacity = outlineOpacity;
        outline.childNodes[1].style.opacity = outlineOpacity;

        for (const row of grid.childNodes) {
          let index = row.getAttribute("index");

          // Split half of uninfected people
          if (index < NUM_INFECTED_ROWS) {
            row.style.background = "rgba(0,0,0,0)";
            for (const block of row.childNodes) {
              let blockIndex = block.getAttribute("index");
              if (blockIndex < NUM_COLS / CELL_WIDTH / 2) {
                block.style.transform = "translateX(" + -sep + "px)";
                block.style.background =
                  "rgba(" + addedRed + "," + subtractedGreen + ",0,0.5)";
              } else {
                block.style.transform = "translateX(" + sep + "px)";
                block.style.background = "rgba(0,255,0,0.5)";
              }
            }
          } else {
            row.style.transform =
              "translateY(" + prevVertSep + "px) translateX(" + -sep + "px)";
          }
        }
        break;
      }

      // Slide 3 - 4 Transition
      case scrollHeight <= 4 * WINDOW_HEIGHT_PIXELS: {
        let prevHorSep = WINDOW_HEIGHT_PIXELS / 16;
        let sep = (scrollHeight - 3 * WINDOW_HEIGHT_PIXELS) / 64;
        // move from 175 green to 0 green
        let subtractedGreen =
          175 - (scrollHeight / WINDOW_HEIGHT_PIXELS - 3) * 175;
        // move from 175 green to 255 green
        let addedGreenFromOrange =
          175 + (scrollHeight / WINDOW_HEIGHT_PIXELS - 3) * 80;

        // move from 0 green to 255 green
        let addedGreenFromRed = (scrollHeight / WINDOW_HEIGHT_PIXELS - 3) * 255;
        // move from 255 red to 0 red
        let subtractedRed =
          255 - (scrollHeight / WINDOW_HEIGHT_PIXELS - 3) * 255;

        let grid = document.getElementById("tutorial-visual-grid");

        for (const row of grid.childNodes) {
          let index = row.getAttribute("index");

          // Split half of uninfected people
          if (index < NUM_INFECTED_ROWS) {
            for (const block of row.childNodes) {
              let blockIndex = block.getAttribute("index");
              if (blockIndex < NUM_COLS / CELL_WIDTH / 2) {
                if (index === NUM_INFECTED_ROWS - 1 && blockIndex === 0) {
                  block.style.transform =
                    "translateX(" +
                    -(prevHorSep + sep) +
                    "px) translateY(" +
                    sep +
                    "px)";
                  block.style.background =
                    "rgba(255," + subtractedGreen + ",0,0.5)";
                } else {
                  block.style.background =
                    "rgba(" +
                    subtractedRed +
                    "," +
                    addedGreenFromOrange +
                    ",0,0.5)";
                }
              }
            }
          } else {
            row.style.background = "rgba(0,0,0,0)";
            for (const block of row.childNodes) {
              block.style.background = "rgba(255,0,0,0.5)";
              let blockIndex = block.getAttribute("index");
              if (blockIndex < NUM_COLS / CELL_WIDTH / 2) {
                if (index < 10 && blockIndex === 0) {
                  block.style.transform =
                    "translateX(" + -sep + "px) translateY(" + -sep + "px)";
                  block.style.background =
                    "rgba(" +
                    subtractedRed +
                    "," +
                    addedGreenFromRed +
                    ",0,0.5)";
                }
              }
            }
          }
        }
        break;
      }

      // First quarter of slide 4 - 5 transition
      case scrollHeight <= 4.25 * WINDOW_HEIGHT_PIXELS: {
        let prevHorSep = (5 * WINDOW_HEIGHT_PIXELS) / 64;
        let prevVertSep = WINDOW_HEIGHT_PIXELS / 64;
        let sep = ((scrollHeight - 4 * WINDOW_HEIGHT_PIXELS) * 4) / 64;
        // move from 0 green to 175 green
        let subtractedGreen =
          (scrollHeight / WINDOW_HEIGHT_PIXELS - 4) * 4 * 175;
        // move from 255 green to 175 green
        let addedGreenFromOrange =
          255 - (scrollHeight / WINDOW_HEIGHT_PIXELS - 4) * 4 * 80;

        // move from 255 green to 0 green
        let addedGreenFromRed =
          255 - (scrollHeight / WINDOW_HEIGHT_PIXELS - 4) * 4 * 255;
        // move from 0 red to 255 red
        let subtractedRed = (scrollHeight / WINDOW_HEIGHT_PIXELS - 4) * 4 * 255;

        let grid = document.getElementById("tutorial-visual-grid");

        for (const row of grid.childNodes) {
          let index = row.getAttribute("index");

          // Split half of uninfected people
          if (index < NUM_INFECTED_ROWS) {
            for (const block of row.childNodes) {
              let blockIndex = block.getAttribute("index");
              if (blockIndex < NUM_COLS / CELL_WIDTH / 2) {
                if (index === NUM_INFECTED_ROWS - 1 && blockIndex === 0) {
                  block.style.transform =
                    "translateX(" +
                    -(prevHorSep - sep) +
                    "px) translateY(" +
                    (prevVertSep - sep) +
                    "px)";
                  block.style.background =
                    "rgba(255," + subtractedGreen + ",0,0.5)";
                } else {
                  block.style.background =
                    "rgba(" +
                    subtractedRed +
                    "," +
                    addedGreenFromOrange +
                    ",0,0.5)";
                }
              }
            }
          } else {
            row.style.background = "rgba(0,0,0,0)";
            for (const block of row.childNodes) {
              block.style.background = "rgba(255,0,0,0.5)";
              let blockIndex = block.getAttribute("index");
              if (blockIndex < NUM_COLS / CELL_WIDTH / 2) {
                if (index < 10 && blockIndex === 0) {
                  block.style.transform =
                    "translateX(" +
                    (-prevVertSep + sep) +
                    "px) translateY(" +
                    (-prevVertSep + sep) +
                    "px)";
                  block.style.background =
                    "rgba(" +
                    subtractedRed +
                    "," +
                    addedGreenFromRed +
                    ",0,0.5)";
                }
              }
            }
          }
        }
        break;
      }

      // Second Quarter of Slide 4 - 5 transition
      case scrollHeight <= 4.5 * WINDOW_HEIGHT_PIXELS: {
        let prevHorSep = WINDOW_HEIGHT_PIXELS / 16;
        let prevVertSep = WINDOW_HEIGHT_PIXELS / 16;
        let sep = ((scrollHeight - 4.25 * WINDOW_HEIGHT_PIXELS) * 4) / 16;
        // move from 255 red to 0 red
        let addedRed =
          255 - (scrollHeight / WINDOW_HEIGHT_PIXELS - 4.25) * 4 * 255;
        // move from 175 green to 255 green
        let subtractedGreen =
          175 + (scrollHeight / WINDOW_HEIGHT_PIXELS - 4.25) * 4 * (255 - 175);
        let outlineOpacity =
          1 - ((scrollHeight / WINDOW_HEIGHT_PIXELS - 4.25) * 4) ** 5;

        let grid = document.getElementById("tutorial-visual-grid");

        let outline = document.getElementById("tutorial-visual-outline");
        outline.childNodes[0].style.opacity = outlineOpacity;
        outline.childNodes[1].style.opacity = outlineOpacity;

        for (const row of grid.childNodes) {
          let index = row.getAttribute("index");

          // Split half of uninfected people
          if (index < NUM_INFECTED_ROWS) {
            row.style.background = "rgba(0,0,0,0)";
            for (const block of row.childNodes) {
              let blockIndex = block.getAttribute("index");
              if (blockIndex < NUM_COLS / CELL_WIDTH / 2) {
                block.style.transform =
                  "translateX(" + (-prevHorSep + sep) + "px)";
                block.style.background =
                  "rgba(" + addedRed + "," + subtractedGreen + ",0,0.5)";
              } else {
                block.style.transform =
                  "translateX(" + (prevHorSep - sep) + "px)";
                block.style.background = "rgba(0,255,0,0.5)";
              }
            }
          } else {
            row.style.transform =
              "translateY(" +
              prevVertSep +
              "px) translateX(" +
              (-prevHorSep + sep) +
              "px)";
          }
        }
        break;
      }

      // Third quarter of slide 4 - 5 transition
      case scrollHeight <= 4.75 * WINDOW_HEIGHT_PIXELS: {
        let prevVertSep = WINDOW_HEIGHT_PIXELS / 16;
        let sep = ((scrollHeight - 4.5 * WINDOW_HEIGHT_PIXELS) * 4) / 16;
        let opacity =
          0.5 - ((scrollHeight / WINDOW_HEIGHT_PIXELS - 4.5) * 4) / 2;

        let grid = document.getElementById("tutorial-visual-grid");

        // Change position and opacity linearly over transition
        for (const row of grid.childNodes) {
          let index = row.getAttribute("index");

          let outline = document.getElementById("tutorial-visual-outline");
          outline.childNodes[0].style.opacity = 0;
          outline.childNodes[1].style.opacity = 0;

          // split based on NUM_INFECTED_ROWS
          if (index >= NUM_INFECTED_ROWS) {
            row.style.transform = "translateY(" + (prevVertSep - sep) + "px)";
            row.style.background = "rgba(255,0,0," + opacity + ")";
          } else {
            row.style.transform = "translateY(" + (-prevVertSep + sep) + "px)";
            row.style.background = "rgba(0,255,0," + opacity + ")";
          }

          for (const block of row.childNodes) {
            block.style.background = "rgba(0,0,0,0.0)";
            block.style.transform = "translateX(0px)";
          }
        }
        break;
      }

      // Last quarter of slide 4 - 5 transition
      case scrollHeight <= 5 * WINDOW_HEIGHT_PIXELS: {
        let sep = ((scrollHeight - 4.75 * WINDOW_HEIGHT_PIXELS) * 4) / 16;
        let opacity = ((scrollHeight / WINDOW_HEIGHT_PIXELS - 4.75) * 4) / 2;

        let grid = document.getElementById("tutorial-visual-grid");

        // Change position and opacity linearly over transition
        for (const row of grid.childNodes) {
          let index = row.getAttribute("index");

          // split based on NUM_INFECTED_ROWS
          if (index < NUM_INFECTED_ROWS_EX_2) {
            row.style.transform = "translateY(" + -sep + "px)";
            row.style.background = "rgba(255,175,0," + opacity + ")";
          } else {
            row.style.transform = "translateY(" + sep + "px)";
            row.style.background = "rgba(255,0,0," + opacity + ")";
          }

          for (const block of row.childNodes) {
            block.style.background = "rgba(0,0,0,0.0)";
          }
        }

        // prep math visual
        if (scrollHeight === 5 * WINDOW_HEIGHT_PIXELS) {
          let math = document.getElementById("tutorial-visual-math");
          math.style.opacity = 1;
          math.style.transform = "translateY(" + WINDOW_HEIGHT_PIXELS + "px)";
        }
        break;
      }

      // Slide 5 - 6 transition
      case scrollHeight <= 6 * WINDOW_HEIGHT_PIXELS: {
        let sep = scrollHeight - 5 * WINDOW_HEIGHT_PIXELS;
        let grid = document.getElementById("tutorial-visual-grid");
        grid.style.transform = "translateY(" + -sep + "px)";

        let math = document.getElementById("tutorial-visual-math");
        math.style.transform =
          "translateY(" + (WINDOW_HEIGHT_PIXELS - sep) + "px)";

        document.getElementById("");
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
    console.log(scrollHeight / WINDOW_HEIGHT_PIXELS);
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
    else if (scrollHeight / WINDOW_HEIGHT_PIXELS < TOTAL_SLIDES - 1) {
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
        {/* Visual and Slides */}
        <div id="Tutorial-body" className="Tutorial-body">
          <div class="Tutorial-visual">
            <div id="tutorial-visual-outline" class="outline">
              <div class="outline-back-bottom" />
              <div class="outline-back-top" />
              <div class="outline-front-bottom" />
              <div class="outline-front-top" />
            </div>
            <Grid id="tutorial-visual-grid" className="Grid">
              {grid}
            </Grid>
            <div id="tutorial-visual-math" class="visual-math">
              <MathJax>
                {"Positive Predictive Value = \\(\\frac{128}{144 + 128}\\)"}
              </MathJax>
              <MathJax>
                {"Negative Predictive Value = \\(\\frac{1296}{1296 + 32}\\)"}
              </MathJax>
            </div>
          </div>
          <div className="Tutorial-section">
            <div className="Tutorial-text">
              <MathJax>{SlideContent["Basic"][1]}</MathJax>
            </div>
          </div>
          <div className="Tutorial-section">
            <div className="Tutorial-text">
              <MathJax>{SlideContent["Basic"][2]}</MathJax>
            </div>
          </div>
          <div className="Tutorial-section">
            <div className="Tutorial-text">
              <MathJax> {SlideContent["Basic"][3]} </MathJax>
            </div>
          </div>
          <div className="Tutorial-section">
            <div className="Tutorial-text">
              <MathJax>{SlideContent["Basic"][4]}</MathJax>
            </div>
          </div>
          <div className="Tutorial-section">
            <div className="Tutorial-text">
              <MathJax>{SlideContent["Basic"][5]}</MathJax>
            </div>
          </div>
          <div className="Tutorial-section last-section">
            <div className="Tutorial-text">
              <MathJax>{SlideContent["Basic"][6]}</MathJax>
            </div>
          </div>
        </div>
      </div>
    </MathJaxContext>
  );
}

export default App;
