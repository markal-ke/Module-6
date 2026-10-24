import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Welcome from "./Welcome.jsx";
import PropsDisplayer from "./components/PropsDisplayer"; // up the top
import Greeting from "./components/Exercise_1/Greeting.jsx";
import FullName from "./Fullname.jsx";
import ComplexComment from "./ComplexComment.jsx";
import MoviesList from "./MovieList.jsx";
import MoodChanger from "./MoodChanger.jsx";
import ComplexMoodChanger from "./ComplexMoodChanger.jsx";
import Emoji from "./components/Exercise_3/Emoji.jsx";
import BirthdayTranslator from "./BirthdayTranslator.jsx";
import BigCatsEx4 from "./components/Exercise_4/BigCatsEx4.jsx";
import LoginForm from "./LoginForm.jsx";
import BigCats from "./components/Exercise_2/BigCats.jsx";
import BigCatsEx5_Base from "./components/Exercise_5/BigCatsEx5_Base.jsx";
import Calculator from "./components/Exercsie_6/Calculator.jsx";
 
function App() {
  const [count, setCount] = useState(0);

  const divStyle = {
    background: "lightblue",
    padding: "1em",
    fontWeight: "bold",
  };

  // object storing comment data - passed as props
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      // author is also an object
      name: "Hello Kitty",
      avatarUrl: "https://static.wikia.nocookie.net/sanrio/images/1/10/Hello-kitty.png/revision/latest?cb=20171105235741",
    },
  };

  return (
    <>
      <PropsDisplayer myProp="first prop" />
      <h3 style={{ color: "blue", textTransform: "uppercase" }}>
        Welcome!
      </h3>{" "}
      {/* style object directly in JSX */}
      ...
      <div style={divStyle}>This is a styled div.</div>{" "}
      {/* style object as a variable - neater and re-usable */}
      <Greeting name="John" />
      <Welcome name="students">
        <p>Children of Welcome</p>
      </Welcome>
      <FullName first="Kendrick" middle="Kennedy" last="Lamar" />
      <PropsDisplayer name="Harry Styles" age={29} />
      {/* render the component, passing object data as props */}
      <ComplexComment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />

    <MoviesList />

    <BigCats />

    <MoodChanger />

    <ComplexMoodChanger />

    <Emoji />

    <BirthdayTranslator />

    <BigCatsEx4 />

    <LoginForm />

    <BigCatsEx5_Base/>

    <Calculator/>

    </>
  );
}

export default App;
