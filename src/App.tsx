import styled from "styled-components";
import "./App.css";
import React from "react";

function App() {
  const youtubeURL = "https://www.youtube.com/watch?v=d2VN6NNa9BE";
  const videoId = youtubeURL.split("v=")[1].split("&")[0];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <React.Fragment>
      <Banner src={embedUrl} allowFullScreen />
    </React.Fragment>
  );
}

export default App;

const Banner = styled.iframe`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 500px;
`;
