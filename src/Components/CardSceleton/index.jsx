import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => {
  return (
    <ContentLoader
      speed={2}
      width={210}
      height={260}
      viewBox="0 0 210 260"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
      <rect x="0" y="110" rx="3" ry="3" width="150" height="15" />
      <rect x="115" y="156" rx="8" ry="8" width="32" height="32" />
      <rect x="0" y="130" rx="0" ry="0" width="93" height="15" />
      <rect x="0" y="165" rx="8" ry="8" width="80" height="21" />
    </ContentLoader>
  );
};

export default Loader;
