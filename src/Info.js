import React from "react";
import mailIcon from "/Users/aramhekimian/repos/business-card/src/assets/mail.png";

export default function Info() {
  return (
    <div id="infoCont">
      <div id="portraitImg"></div>
      <h1 id="name">Aram Hekimian</h1>
      <h2 id="occupation">Front-End Developer</h2>
      <h2 id="website">aramhek.website</h2>
      <button id="emailBtn">
        <img id="mailIcon" src={mailIcon} />
        Email
      </button>
    </div>
  );
}
