const HamburgerMenu = ({
  homeScroll,
  basicScroll,
  interScroll,
  advScroll,
  aboutScroll,
}) => {
  function scrollToSection(sectionHeight) {
    console.log(sectionHeight);
    let heightInterval = 100;
    let timeout = 250;

    let currHeight = document.documentElement.scrollTop;
    let goingDown = sectionHeight > currHeight;
    let interval;
    if (goingDown) {
      currHeight += heightInterval;
      interval = setInterval(() => {
        while (currHeight < sectionHeight) {
          if (sectionHeight - currHeight < heightInterval) {
            currHeight = sectionHeight;
          }
          window.scroll({ top: currHeight, behavior: "smooth" });
          currHeight += heightInterval;
        }
        clearInterval(interval);
      }, timeout);
    } else {
      currHeight -= interval;
      setInterval(() => {
        while (currHeight > sectionHeight) {
          if (currHeight - sectionHeight < heightInterval) {
            currHeight = sectionHeight;
          }
          setTimeout(() => {
            window.scroll({ top: currHeight, behavior: "smooth" });
          }, timeout);
          currHeight -= heightInterval;
        }
        clearInterval(interval);
      }, timeout);
    }

    let checkbox = document.getElementById("hidden-checkbox");
    checkbox.checked = false;
  }

  return (
    // Made by Erik Terwan
    // 24th of November 2015
    // MIT License
    <nav role="navigation">
      <div id="menuToggle">
        {/* A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it. */}
        <input id="hidden-checkbox" type="checkbox" />

        {/* Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff. */}
        <span></span>
        <span></span>
        <span></span>

        {/* Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic. */}
        <ul id="menu">
          <a onClick={() => scrollToSection(homeScroll)}>
            <li>Home</li>
          </a>
          <a onClick={() => scrollToSection(basicScroll)}>
            <li>Basic Tutorial</li>
          </a>
          <a onClick={() => scrollToSection(interScroll)}>
            <li>Intermediate Tutorial</li>
          </a>
          <a onClick={() => scrollToSection(advScroll)}>
            <li>Advanced Tutorial</li>
          </a>
          <a
            className="last-entry"
            onClick={() => scrollToSection(aboutScroll)}
          >
            <li>About This Project</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
