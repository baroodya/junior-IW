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

const intoSlide2 = (scrollHeight, grid, outline) => {
  let outlineOpacity =
    ((scrollHeight - WINDOW_HEIGHT_PIXELS) / WINDOW_HEIGHT_PIXELS) ** 5;

  outline.childNodes[0].style.opacity = outlineOpacity;
  outline.childNodes[1].style.opacity = outlineOpacity;

  let littleSep = (scrollHeight - WINDOW_HEIGHT_PIXELS) / 64;
  let bigSep = (scrollHeight - WINDOW_HEIGHT_PIXELS) / 16;

  let backgroundOpacity = (scrollHeight / WINDOW_HEIGHT_PIXELS - 1) * 0.5;

  for (const row of grid.childNodes) {
    let index = Number(row.getAttribute("index"));

    // Split half of uninfected people
    if (index < NUM_INFECTED_ROWS) {
      for (const block of row.childNodes) {
        let blockIndex = Number(block.getAttribute("index"));
        if (blockIndex < NUM_COLS / CELL_WIDTH / 2) {
          console.log(typeof index);
          if (index === NUM_INFECTED_ROWS - 1 && blockIndex === 0) {
            console.log("shift!");
            block.style.transform =
              "translateX(" +
              -(bigSep + littleSep) +
              "px) translateY(" +
              (littleSep - bigSep) +
              "px)";
            block.style.background = "rgba(255,0,0," + backgroundOpacity + ")";
          } else {
            block.style.background = "rgba(0,255,0," + backgroundOpacity + ")";
            block.style.transform =
              "translateX(" + -bigSep + "px) translateY(" + -bigSep + "px)";
          }
        } else {
          block.style.transform =
            "translateX(" + bigSep + "px) translateY(" + -bigSep + "px)";
        }
      }
    } else {
      row.style.background = "rgba(0,0,0,0)";
      row.style.transform =
        "translateX(" + -bigSep + "px) translateY(" + bigSep + "px)";
      for (const block of row.childNodes) {
        block.style.background = "rgba(255,0,0," + backgroundOpacity + ")";
        let blockIndex = Number(block.getAttribute("index"));
        if (blockIndex < NUM_COLS / CELL_WIDTH / 2) {
          if (index < 10 && blockIndex === 0) {
            block.style.transform =
              "translateX(" +
              -littleSep +
              "px) translateY(" +
              -littleSep +
              "px)";
            block.style.background = "rgba(0,255,0," + backgroundOpacity + ")";
          }
        }
      }
    }
  }
  // prep math visual
  if (scrollHeight === 2 * WINDOW_HEIGHT_PIXELS) {
    let math = document.getElementById("tutorial-visual-math");
    math.style.opacity = 1;
    math.style.transform = "translateY(" + WINDOW_HEIGHT_PIXELS + "px)";
    let index = 0;
    for (const equation of math.childNodes) {
      if (index === 0) {
        equation.style.display = "block";
      } else {
        equation.style.display = "none";
      }
      index++;
    }
  }
};

const intoSlide3 = (scrollHeight, grid, outline) => {
  let sep = scrollHeight - 2 * WINDOW_HEIGHT_PIXELS;

  grid.style.transform = "translateY(" + -sep + "px)";
  outline.style.transform = "translateY(" + -sep + "px)";

  let math = document.getElementById("tutorial-visual-math");
  math.style.transform = "translateY(" + (WINDOW_HEIGHT_PIXELS - sep) + "px)";
  math.style.right = "18vw";
  math.style.fontSize = "30px";

  if (scrollHeight === 3 * WINDOW_HEIGHT_PIXELS) {
    grid.style.transform = "translateY(" + sep + "px)";
    outline.style.transform = "translateY(" + sep + "px)";
    outline.style.opacity = 1;
  }
};

const intoSlide4and6 = (scrollHeight, grid, outline, slide) => {
  let sep = scrollHeight - (slide - 1) * WINDOW_HEIGHT_PIXELS;

  grid.style.transform = "translateY(" + (WINDOW_HEIGHT_PIXELS - sep) + "px)";
  outline.style.transform =
    "translateY(" + (WINDOW_HEIGHT_PIXELS - sep) + "px)";

  let math = document.getElementById("tutorial-visual-math");
  math.style.transform = "translateY(" + -sep + "px)";

  let properEquation = Number(slide == 6);
  let index = 0;
  for (const equation of math.childNodes) {
    if (index === properEquation) {
      equation.style.display = "block";
    } else {
      equation.style.display = "none";
    }
    index++;
  }

  if (scrollHeight === slide * WINDOW_HEIGHT_PIXELS && slide === 4) {
    math.style.transform = "translateY(" + WINDOW_HEIGHT_PIXELS + "px)";
    let index = 0;
    for (const equation of math.childNodes) {
      if (index === 1) {
        equation.style.display = "block";
      } else {
        equation.style.display = "none";
      }
      index++;
    }
  }
};

const intoSlide5 = (scrollHeight, grid, outline) => {
  let sep = scrollHeight - 4 * WINDOW_HEIGHT_PIXELS;

  grid.style.transform = "translateY(" + -sep + "px)";
  outline.style.transform = "translateY(" + -sep + "px)";

  let math = document.getElementById("tutorial-visual-math");
  math.style.transform = "translateY(" + (WINDOW_HEIGHT_PIXELS - sep) + "px)";
  math.style.right = "18vw";
  math.style.fontSize = "30px";

  if (scrollHeight === 5 * WINDOW_HEIGHT_PIXELS) {
    grid.style.transform = "translateY(" + sep + "px)";
    outline.style.transform = "translateY(" + sep + "px)";
    outline.style.opacity = 1;
  }
};

const intoSlide7 = (scrollHeight, grid, outline) => {
  switch (true) {
    // First Third of transition
    case scrollHeight <= 6.33 * WINDOW_HEIGHT_PIXELS: {
      let prevHorSep = (5 * WINDOW_HEIGHT_PIXELS) / 64;
      let prevVertSep = WINDOW_HEIGHT_PIXELS / 64;
      let sep = ((scrollHeight - 6 * WINDOW_HEIGHT_PIXELS) * 3) / 64;
      // move from 255 green to 0 green
      let subtractedGreen =
        255 - (scrollHeight / WINDOW_HEIGHT_PIXELS - 6) * 3 * 255;
      // move from 255 red to 0 red
      let subtractedRed =
        255 - (scrollHeight / WINDOW_HEIGHT_PIXELS - 6) * 3 * 255;

      let opacity = 0.5 - (scrollHeight / WINDOW_HEIGHT_PIXELS - 6) * 3 * 0.5;

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
                  -(prevHorSep - sep) +
                  "px) translateY(" +
                  (-3 * prevVertSep - sep) +
                  "px)";
                block.style.background =
                  "rgba(" + subtractedRed + ",0,0," + opacity + ")";
              } else {
                block.style.background =
                  "rgba(0," + subtractedGreen + ",0," + opacity + ")";
              }
            }
          }
        } else {
          row.style.background = "rgba(0,0,0,0)";
          for (const block of row.childNodes) {
            let blockIndex = Number(block.getAttribute("index"));
            if (index < 10 && blockIndex === 0) {
              block.style.transform =
                "translateX(" +
                (-prevVertSep + sep) +
                "px) translateY(" +
                (-prevVertSep + sep) +
                "px)";
              block.style.background =
                "rgba(0," + subtractedGreen + ",0," + opacity + ")";
            } else {
              block.style.background =
                "rgba(" + subtractedRed + ",0,0," + opacity + ")";
            }
          }
        }
      }
      break;
    }

    // Second Third of transition
    case scrollHeight <= 6.66 * WINDOW_HEIGHT_PIXELS: {
      let prevHorSep = WINDOW_HEIGHT_PIXELS / 16;
      let prevVertSep = WINDOW_HEIGHT_PIXELS / 16;
      let sep = ((scrollHeight - 6.33 * WINDOW_HEIGHT_PIXELS) * 3) / 16;

      let outlineOpacity =
        1 - ((scrollHeight / WINDOW_HEIGHT_PIXELS - 6.33) * 3) ** 5;

      outline.childNodes[0].style.opacity = outlineOpacity;
      outline.childNodes[1].style.opacity = outlineOpacity;

      for (const row of grid.childNodes) {
        let index = row.getAttribute("index");

        // Split half of uninfected people
        if (index < NUM_INFECTED_ROWS) {
          row.style.background = "rgba(0,0,0,0)";
          row.style.transform = "translateX(0px) translateY(0px)";
          for (const block of row.childNodes) {
            let blockIndex = block.getAttribute("index");
            if (blockIndex < NUM_COLS / CELL_WIDTH / 2) {
              block.style.transform =
                "translateX(" +
                (-prevHorSep + sep) +
                "px) translateY(" +
                -prevVertSep +
                "px)";
            } else {
              block.style.transform =
                "translateX(" +
                (prevHorSep - sep) +
                "px) translateY(" +
                -prevVertSep +
                "px)";
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

    // Last Third of slide 4 - 5 transition
    case scrollHeight <= 7 * WINDOW_HEIGHT_PIXELS: {
      let prevVertSep = WINDOW_HEIGHT_PIXELS / 16;
      let sep = ((scrollHeight - 6.66 * WINDOW_HEIGHT_PIXELS) * 3) / 16;

      // Change position and opacity linearly over transition
      for (const row of grid.childNodes) {
        let index = row.getAttribute("index");

        outline.childNodes[0].style.opacity = 0;
        outline.childNodes[1].style.opacity = 0;

        // split based on NUM_INFECTED_ROWS
        if (index >= NUM_INFECTED_ROWS) {
          row.style.transform = "translateY(" + (prevVertSep - sep) + "px)";
        } else {
          row.style.transform = "translateY(" + (-prevVertSep + sep) + "px)";
        }

        for (const block of row.childNodes) {
          block.style.background = "rgba(0,0,0,0.0)";
          block.style.transform = "translateX(0px)";
        }
      }
      break;
    }

    default: {
      console.log("Oops!");
      break;
    }
  }
};

const onPageScrollInter = (scrollHeight) => {
  let grid = document.getElementById("tutorial-visual-grid");
  let outline = document.getElementById("tutorial-visual-outline");

  switch (true) {
    // Slide 0 - 1 Transition
    case scrollHeight <= 2 * WINDOW_HEIGHT_PIXELS: {
      intoSlide2(scrollHeight, grid, outline);
      break;
    }

    // Slide 1 - 2 Transition
    case scrollHeight <= 3 * WINDOW_HEIGHT_PIXELS: {
      intoSlide3(scrollHeight, grid, outline);
      break;
    }

    // Slide 3 - 4 Transition
    case scrollHeight <= 4 * WINDOW_HEIGHT_PIXELS: {
      intoSlide4and6(scrollHeight, grid, outline, 4);
      break;
    }

    // Slide 4 - 5 Transition
    case scrollHeight <= 5 * WINDOW_HEIGHT_PIXELS: {
      intoSlide5(scrollHeight, grid, outline);
      break;
    }

    // Slide 5 - 6 Transition
    case scrollHeight <= 6 * WINDOW_HEIGHT_PIXELS: {
      intoSlide4and6(scrollHeight, grid, outline, 6);
      break;
    }

    // Slide 6 - 7 Transition
    case scrollHeight <= 7 * WINDOW_HEIGHT_PIXELS: {
      intoSlide7(scrollHeight, grid, outline);
      break;
    }

    default:
      break;
  }
};
const InterTutorial = ({ grid }) => {
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
            {
              "\\(\\mathbb{P}\\{A|B\\} = \\frac{\\mathbb{P}\\{A \\cap B\\}}{\\mathbb{P}\\{B\\}}\\)"
            }
          </MathJax>
          <MathJax>
            {
              "\\(\\mathbb{P}\\{A|B\\} = \\frac{\\mathbb{P}\\{B|A\\} \\cdot \\mathbb{P}\\{A\\}}{\\mathbb{P}\\{B\\}}\\)"
            }
          </MathJax>
        </div>
      </div>
      <div className="Tutorial-section">
        <div className="Tutorial-text">
          <MathJax>{SlideContent["Inter"][1]}</MathJax>
        </div>
      </div>
      <div className="Tutorial-section">
        <div className="Tutorial-text">
          <MathJax>{SlideContent["Inter"][2]}</MathJax>
        </div>
      </div>
      <div className="Tutorial-section">
        <div className="Tutorial-text">
          <MathJax> {SlideContent["Inter"][3]} </MathJax>
        </div>
      </div>
      <div className="Tutorial-section">
        <div className="Tutorial-text">
          <MathJax>{SlideContent["Inter"][4]}</MathJax>
        </div>
      </div>
      <div className="Tutorial-section">
        <div className="Tutorial-text">
          <MathJax>{SlideContent["Inter"][5]}</MathJax>
        </div>
      </div>
      <div className="Tutorial-section">
        <div className="Tutorial-text">
          <MathJax>{SlideContent["Inter"][6]}</MathJax>
        </div>
      </div>
      <div className="Tutorial-section last-section">
        <div className="Tutorial-text">
          <MathJax>{SlideContent["Inter"][7]}</MathJax>
        </div>
      </div>
    </div>
  );
};

export { InterTutorial, onPageScrollInter };
