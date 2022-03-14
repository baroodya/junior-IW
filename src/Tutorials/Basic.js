import { Grid } from "../grid.js";
import { SlideContent } from "../SlideContent.js";
import { MathJax } from "better-react-mathjax";

let WINDOW_HEIGHT_PIXELS = window.innerHeight;
let NUM_ROWS = 40;
let NUM_COLS = 40;
let CELL_WIDTH = 4;
let CELL_HEIGHT = 4;
let NUM_INFECTED_ROWS = NUM_ROWS / (CELL_HEIGHT * 2);
let NUM_INFECTED_ROWS_EX_2 = (9 * NUM_ROWS) / (CELL_HEIGHT * 10);

const intoSlide2 = (scrollHeight, grid) => {
  let sep = (scrollHeight - WINDOW_HEIGHT_PIXELS) / 16;
  let opacity = (scrollHeight / WINDOW_HEIGHT_PIXELS - 1) / 2;

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
};

const intoSlide3 = (scrollHeight, grid, outline) => {
  let prevVertSep = WINDOW_HEIGHT_PIXELS / 16;
  let sep = (scrollHeight - 2 * WINDOW_HEIGHT_PIXELS) / 16;
  // move from 0 red to 255 red
  let addedRed = ((2 * scrollHeight) / (3 * WINDOW_HEIGHT_PIXELS) - 1) * 255;
  // move from 255 green to 175 green
  let subtractedGreen =
    255 - ((2 * scrollHeight) / (3 * WINDOW_HEIGHT_PIXELS) - 1) * (255 - 175);
  let outlineOpacity =
    ((scrollHeight - 2 * WINDOW_HEIGHT_PIXELS) / WINDOW_HEIGHT_PIXELS) ** 5;

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
};

const intoSlide4 = (scrollHeight, grid) => {
  let prevHorSep = WINDOW_HEIGHT_PIXELS / 16;
  let sep = (scrollHeight - 3 * WINDOW_HEIGHT_PIXELS) / 64;

  let rotation = scrollHeight / WINDOW_HEIGHT_PIXELS - 1;

  // move from 175 green to 0 green
  let subtractedGreen = 175 - (scrollHeight / WINDOW_HEIGHT_PIXELS - 3) * 175;
  // move from 175 green to 255 green
  let addedGreenFromOrange =
    175 + (scrollHeight / WINDOW_HEIGHT_PIXELS - 3) * 80;

  // move from 0 green to 255 green
  let addedGreenFromRed = (scrollHeight / WINDOW_HEIGHT_PIXELS - 3) * 255;
  // move from 255 red to 0 red
  let subtractedRed = 255 - (scrollHeight / WINDOW_HEIGHT_PIXELS - 3) * 255;

  for (const row of grid.childNodes) {
    let index = Number(row.getAttribute("index"));

    // Split half of uninfected people
    if (index < NUM_INFECTED_ROWS) {
      for (const block of row.childNodes) {
        let blockIndex = Number(block.getAttribute("index"));
        if (blockIndex < NUM_COLS / CELL_WIDTH / 2) {
          if (index === NUM_INFECTED_ROWS - 1 && blockIndex === 0) {
            block.style.transform =
              "translateX(" +
              -(prevHorSep + sep) +
              "px) translateY(" +
              sep +
              "px) rotate(" +
              rotation +
              "turn)";
            block.style.background = "rgba(255," + subtractedGreen + ",0,0.5)";
          } else {
            block.style.background =
              "rgba(" + subtractedRed + "," + addedGreenFromOrange + ",0,0.5)";
          }
        }
      }
    } else {
      row.style.background = "rgba(0,0,0,0)";
      for (const block of row.childNodes) {
        block.style.background = "rgba(255,0,0,0.5)";
        let blockIndex = Number(block.getAttribute("index"));
        if (blockIndex < NUM_COLS / CELL_WIDTH / 2) {
          if (index < 10 && blockIndex === 0) {
            block.style.transform =
              "translateX(" + -sep + "px) translateY(" + -sep + "px)";
            block.style.background =
              "rgba(" + subtractedRed + "," + addedGreenFromRed + ",0,0.5)";
          }
        }
      }
    }
  }
};

const intoSlide5 = (scrollHeight, grid) => {
  switch (true) {
    // First quarter of transition
    case scrollHeight <= 4.25 * WINDOW_HEIGHT_PIXELS: {
      let prevHorSep = (5 * WINDOW_HEIGHT_PIXELS) / 64;
      let prevVertSep = WINDOW_HEIGHT_PIXELS / 64;
      let sep = ((scrollHeight - 4 * WINDOW_HEIGHT_PIXELS) * 4) / 64;
      // move from 0 green to 175 green
      let subtractedGreen = (scrollHeight / WINDOW_HEIGHT_PIXELS - 4) * 4 * 175;
      // move from 255 green to 175 green
      let addedGreenFromOrange =
        255 - (scrollHeight / WINDOW_HEIGHT_PIXELS - 4) * 4 * 80;

      // move from 255 green to 0 green
      let addedGreenFromRed =
        255 - (scrollHeight / WINDOW_HEIGHT_PIXELS - 4) * 4 * 255;
      // move from 0 red to 255 red
      let subtractedRed = (scrollHeight / WINDOW_HEIGHT_PIXELS - 4) * 4 * 255;

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
                  "rgba(" + subtractedRed + "," + addedGreenFromRed + ",0,0.5)";
              }
            }
          }
        }
      }
      break;
    }

    // Second Quarter of transition
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
      let opacity = 0.5 - ((scrollHeight / WINDOW_HEIGHT_PIXELS - 4.5) * 4) / 2;

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
  }
};
const intoSlide6 = (scrollHeight, grid) => {
  let sep = scrollHeight - 5 * WINDOW_HEIGHT_PIXELS;

  grid.style.transform = "translateY(" + -sep + "px)";

  let math = document.getElementById("tutorial-visual-math");
  math.style.transform = "translateY(" + (WINDOW_HEIGHT_PIXELS - sep) + "px)";
};

const onPageScrollBasic = (scrollHeight) => {
  let grid = document.getElementById("tutorial-visual-grid");
  let outline = document.getElementById("tutorial-visual-outline");

  switch (true) {
    // Slide 0 - Slide 1 Transition
    case scrollHeight <= 2 * WINDOW_HEIGHT_PIXELS: {
      intoSlide2(scrollHeight, grid);
      break;
    }

    // Slide 1 - 2 Transition
    case scrollHeight <= 3 * WINDOW_HEIGHT_PIXELS: {
      intoSlide3(scrollHeight, grid, outline);
      break;
    }

    // Slide 3 - 4 Transition
    case scrollHeight <= 4 * WINDOW_HEIGHT_PIXELS: {
      intoSlide4(scrollHeight, grid);
      break;
    }

    // Slide 4 - 5 Transition
    case scrollHeight <= 5 * WINDOW_HEIGHT_PIXELS: {
      intoSlide5(scrollHeight, grid);
      break;
    }

    // Slide 5 - 6 transition
    case scrollHeight <= 6 * WINDOW_HEIGHT_PIXELS: {
      intoSlide6(scrollHeight, grid);
      break;
    }

    default:
      break;
  }
};
const BasicTutorial = ({ grid }) => {
  return (
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
  );
};

export { BasicTutorial, onPageScrollBasic };
