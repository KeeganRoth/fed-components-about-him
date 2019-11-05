import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Header = props => {
  return <h1>{props.title}</h1>;
};

const Footer = props => {
  return (
    <footer>
      <a href="https://github.com/mtliendo" target="_blank">
        Michael Liendo &rarr;!
      </a>
    </footer>
  );
};

const HobbiesList = props => {
  return (
    <ul>
      {props.hobbies.map(hobby => (
        <HobbyListItem hobby={hobby} />
      ))}
    </ul>
  );
};

const HobbyListItem = ({ hobby }) => {
  return <li>{hobby}</li>;
};
const SkillsList = props => {
  return (
    <ul>
      {props.skills.map(skill => (
        <SkillListItem skill={skill} />
      ))}
    </ul>
  );
};

const SkillListItem = ({ skill }) => {
  return <li>{skill}</li>;
};
const FunContent = props => {
  return (
    <section>
      <HobbiesList hobbies={["tell myself Im cool"]} />
      <SkillsList skills={["breaking code"]} />
    </section>
  );
};

function App() {
  return (
    <>
      <Header title="Super cool header" />
      <main className="App">
        <FunContent />
      </main>
      <Footer />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
