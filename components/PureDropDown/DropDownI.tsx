import React from 'react';

const DropDownI = () => {
  return (
    <>
      <span className="dropDownI">
        <span className="wrapper">
          <span className="jumbotron">
            {/* <!-- Dropdown --> */}
            <label className="drop">
              <input type="checkbox" id="target-drop-example" />
              {/* <!-- Toggle Drop --> */}
              <span className="control">Dropdown</span>
              {/* <!-- Fake button --> */}

              {/* <!-- Items --> */}
              <ul className="drop-items">
                <li className="item-drop">
                  <a
                    target="_blank"
                    href="https://codepen.io/robsonklein23"
                    rel="noreferrer"
                  >
                    CodePen
                  </a>
                </li>
                <li className="item-drop">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.behance.net/robsonklein"
                  >
                    Behance
                  </a>
                </li>
                <li className="item-drop">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/robsonklein/"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>

              {/* <!-- Alternative to close dropdown with click out --> */}
              <label
                htmlFor="target-drop-example"
                className="overlay-close"
              ></label>
            </label>
            {/* <!-- END -- Dropdown --> */}
          </span>
        </span>
      </span>
    </>
  );
};

export default DropDownI;
