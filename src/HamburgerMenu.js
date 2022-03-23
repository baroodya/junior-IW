const HamburgerMenu = ({
  id,
  homeScroll,
  basicScroll,
  interScroll,
  advScroll,
  aboutScroll,
}) => {
  function scrollToSection(sectionHeight) {
    let heightInterval = 30;
    let timeout = 10;

    let currHeight = document.documentElement.scrollTop;
    let goingDown = sectionHeight > currHeight;
    let interval;

    function scrollDownByHeight() {
      if (sectionHeight - currHeight < heightInterval) {
        currHeight = sectionHeight;
      }
      window.scroll({ top: currHeight });
      currHeight += heightInterval;

      if (currHeight >= sectionHeight) {
        clearInterval(interval);
      }
    }

    function scrollUpByHeight() {
      if (currHeight - sectionHeight < heightInterval) {
        currHeight = sectionHeight;
      }
      window.scroll({ top: currHeight });
      currHeight -= heightInterval;

      if (currHeight <= sectionHeight) {
        clearInterval(interval);
      }
    }

    if (goingDown) {
      currHeight += heightInterval;
      interval = setInterval(scrollDownByHeight, timeout);
    } else {
      currHeight -= heightInterval;
      interval = setInterval(scrollUpByHeight, timeout);
    }

    let checkbox = document.getElementById("hidden-checkbox");
    checkbox.checked = false;
  }

  return (
    // Made by Erik Terwan
    // 24th of November 2015
    // MIT License
    <nav id={id} role="navigation">
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
          <a href="/" onClick={() => scrollToSection(homeScroll) + 0.01}>
            <li>Home</li>
          </a>
          <a href="/" onClick={() => scrollToSection(basicScroll)}>
            <li>Basic Tutorial</li>
          </a>
          <a href="/" onClick={() => scrollToSection(interScroll)}>
            <li>Intermediate Tutorial</li>
          </a>
          <a href="/" onClick={() => scrollToSection(advScroll)}>
            <li>Advanced Tutorial</li>
          </a>
          <a
            href="/"
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
