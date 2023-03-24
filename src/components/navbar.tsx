import type { NextPage } from 'next';

const NavBar: NextPage = () => {
  return (
    <>
      <nav>
        <ul id="menu">
          <li id="menu-1" className="menu-item menu-item-1">
            <a href="#">Home</a>
            <ul id="menu-1-drop" className="menu-drop">
              <li>
                <a href="">Huy</a>
              </li>
              <li>
                <a href="">s</a>
              </li>
              <li>
                <a href="">af</a>
              </li>
            </ul>
          </li>
          <li id="menu-2" className="menu-item menu-item-2">
            <a href="#">About</a>
          </li>
          <li id="menu-3" className="menu-item menu-item-3">
            <a href="#">Portfolio</a>
          </li>
          <li id="menu-4" className="menu-item menu-item-4">
            <a href="#">Team</a>
          </li>
          <li id="menu-5" className="menu-item menu-item-5">
            <a href="#">Contact</a>
            <ul id="menu-5-drop" className="menu-drop">
              <li>
                <a href="">ey</a>
              </li>
              <li>
                <a href="">Wow</a>
              </li>
              <li>
                <a href="">s</a>
              </li>
              <li>
                <a href="">sa</a>
              </li>
              <li>
                <a href="">af</a>
              </li>
            </ul>
          </li>
          <div id="marker"></div>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
