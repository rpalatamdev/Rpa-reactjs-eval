import React from "react";
import ReactDOM from "react-dom";
import DefaultFrame from "../components/layouts/basic-frame.jsx";

// Different Frame as Default
// import DefaultFrame from "../components/layouts/two-col-frame.jsx";

// TODO: create these components
// import Header from "../components/features/Header/default.jsx";
// import PageHead from "../components/features/PageHead/default.jsx";
// import Section from "../components/features/Section/default.jsx";
// import TeaserStandard from "../components/features/TeaserStandard/default.jsx";
// import TeaserFancy from "../components/features/TeaserFancy/default.jsx";
// import TeaserNew from "../components/features/TeaserNew/default.jsx";
// import Footer from "../components/features/Footer/default.jsx";

// Project Sample Components (Functional & Class Components)
// !Optional: import Title from "../components/features/Title/default.jsx";
// !Optional: import Summary from "../components/features/Summary/default.jsx";

// Import Root styles
import "./styles/index";

const defaultFrame = <DefaultFrame></DefaultFrame>;

// Sample TODO implementation
// const defaultFrame = (
//   <DefaultFrame>
//     <Header></Header>
//     <PageHead></PageHead>
//     <Section section={`entretenimiento/`}></Section>
//     <Section section={`deportes/`}></Section>
//     <Footer></Footer>
//   </DefaultFrame>
// );

ReactDOM.render(defaultFrame, document.getElementById("root"));
