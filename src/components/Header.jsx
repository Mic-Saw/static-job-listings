import React from "react";

const Header = () => {
  return (
    <div className="header">
      <picture className="header--picture">
        <source
          srcset="/src/images/bg-header-desktop.svg"
          type="image/svg+xml"
          media="(min-width: 1120px)"
        />
        <img src="src/images/bg-header-mobile.svg" alt="background" />
      </picture>
      <picture className="header--picture">
        <source
          srcset="/src/images/bg-header-desktop.svg"
          type="image/svg+xml"
          media="(min-width: 1120px)"
        />
        <img src="src/images/bg-header-mobile.svg" alt="background" />
      </picture>
      <picture className="header--picture">
        <source
          srcset="/src/images/bg-header-desktop.svg"
          type="image/svg+xml"
          media="(min-width: 1120px)"
        />
        <img src="src/images/bg-header-mobile.svg" alt="background" />
      </picture>
      <picture className="header--picture">
        <source
          srcset="/src/images/bg-header-desktop.svg"
          type="image/svg+xml"
          media="(min-width: 1120px)"
        />
        <img src="src/images/bg-header-mobile.svg" alt="background" />
      </picture>
    </div>
  );
};

export default Header;
