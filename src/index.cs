.last, .main-intro, .similar-to-last, .company, .company .company-middle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; }

body {
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif; }

.last, .main-intro, .similar-to-last {
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: top right;
  background-attachment: fixed;
  color: white;
  text-shadow: 0 3px 4px rgba(0, 0, 0, 0.6); }

.main-intro {
  background-image: url("../src/images/backgrounds/osuSagiri.jpg"); }
  .main-intro h1 {
    font-size: 96px;
    line-height: 96px;
    font-weight: 400;
    margin: 0;
    z-index: 3; }
  .main-intro h2 {
    font-size: 32px;
    font-weight: 400;
    margin: 0;
    z-index: 3; }
  .main-intro h3 {
    font-size: 28px;
    font-weight: 400;
    position: absolute;
    top: 80%;
    z-index: 3; }
  .main-intro .back-overlay {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
    z-index: 2; }

.invitation-links {
  display: grid;
  margin-top: 45px;
  grid-template-columns: 300px 300px;
  z-index: 3;
  justify-items: center;
  grid-template-rows: 80px;
  grid-template-areas: "discord" "reddit" "not-afiliated-btw" "not-afiliated-btw"; }
  .invitation-links a.button {
    display: inline-block;
    padding: 15px 20px;
    border-style: none;
    outline-style: none;
    border-radius: 100px;
    color: #ffffff;
    text-decoration: none;
    font-size: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25), inset 0 -4px rgba(0, 0, 0, 0.2);
    text-shadow: none;
    font-weight: 500;
    transition: all linear 0.1s;
    text-align: center; }
    .invitation-links a.button p {
      padding: 15px 5px;
      display: inline-block;
      margin: 0; }
    .invitation-links a.button img {
      max-width: 48px;
      max-height: 48px;
      float: left; }
    .invitation-links a.button.discord-button {
      background: #7289DA; }
    .invitation-links a.button.reddit-button {
      color: #EFF7FF;
      background: #FF5700; }
    .invitation-links a.button:hover {
      filter: brightness(1.3); }

canvas {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: transparent;
  width: 100%;
  height: 100%; }

.section {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #a1a0a0; }
  .section h2 {
    margin: 0 5%;
    font-weight: 300;
    color: #444;
    font-size: 32px;
    display: inline-block; }
  .section h1 {
    margin: 0 5%;
    font-weight: 300;
    font-size: 40px;
    color: #444;
    display: inline-block; }
  .section .right {
    display: flex;
    width: 50%;
    justify-content: flex-start; }
    .section .right span {
      text-align: left; }
  .section .left {
    display: flex;
    width: 50%;
    justify-content: flex-end; }
    .section .left span {
      text-align: right; }
  .section img {
    max-height: 500px; }
  .section:nth-child(odd) {
    background-color: #f5f7f9; }
  .section::nth-child(even) {
    background-color: #eaecee; }

.similar-to-last {
  background-image: url("../src/images/backgrounds/sagiriYoink.png");
  height: 105vh; }
  .similar-to-last div {
    width: 100%;
    height: 50%;
    position: relative; }

.company {
  flex-direction: row;
  justify-content: space-around; }
  .company h1 {
    margin-bottom: 35px; }
  .company h2 {
    margin-top: 20px;
    margin-bottom: 10px; }
  .company .company-middle-container {
    justify-content: flex-end;
    margin: 0; }
    .company .company-middle-container h1 {
      margin: 0; }
    .company .company-middle-container h2 {
      margin: 10px 0 0 0; }
    .company .company-middle-container .company-button-container button {
      margin: 10px;
      display: inline-block;
      padding: 15px 20px;
      border-style: none;
      outline-style: none;
      border-radius: 50px;
      color: #ffffff;
      text-decoration: none;
      font-size: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25), inset 0 -4px rgba(0, 0, 0, 0.2);
      text-shadow: none;
      font-weight: 500;
      transition: all linear 0.1s;
      text-align: center; }
      .company .company-middle-container .company-button-container button.yes-button {
        background-color: green; }
      .company .company-middle-container .company-button-container button.no-button {
        background-color: #d20000; }
      .company .company-middle-container .company-button-container button:hover {
        filter: brightness(1.5); }

.idkwhatimdoing {
  background-image: url("../src/images/backgrounds/sagiriPantsu.png"); }

.last h1, .main-intro h1, .similar-to-last h1 {
  font-size: 128px;
  line-height: 128px;
  margin: 0;
  color: white; }

.introduction .right {
  flex-direction: column; }

/*# sourceMappingURL=index.cs.map */
