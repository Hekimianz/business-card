import React from "react";
import ghLogo from "/Users/aramhekimian/repos/business-card/src/assets/gh.svg";
import igLogo from "/Users/aramhekimian/repos/business-card/src/assets/ig.svg";
import twLogo from "/Users/aramhekimian/repos/business-card/src/assets/tw.svg";

export default function Footer() {
  return (
    <div id="footerCont">
      <img src={twLogo} />
      <img src={igLogo} />
      <img src={ghLogo} />
    </div>
  );
}
