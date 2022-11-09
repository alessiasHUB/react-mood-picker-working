import { useState } from "react";

/* eslint no-console: "error" */

function MoodPickerDemo(): JSX.Element {
  const [state, setState] =
    useState("confused");

  // const handleMoodChangeToHappy = () => {
  //   setState("happy");
  // };

  const handleMoodChangeToConfused = () => {
    setState("confused");
    // console.log(
    //   "🤔 queued a rerender with mood as",
    //   nextMood,
    //   "but in this render it is still",
    //   state
    // );
  };

  const handleMoodChangeToSad = () => {
    setState("sad");
    // console.log(
    //   "😢 queued a rerender with mood as",
    //   nextMood,
    //   "but in this render it is still",
    //   state
    // );
  };

  const handleMoodChangeToLaughing = () => {
    setState("laughing")
  };
  
  const handleMoodChangeToInLove = () => {
    setState("in love")
  };

  const handleMoodChangeToTired = () => {
    setState("tired")
  };
  
  // console.log(
  //   "Component is rendering with a mood value of",
  //   moodValueFromCurrentRender
  // );

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {state.toUpperCase()}</p>
      <button onClick={() => setState("happy")}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToLaughing}>😂</button>
      <button onClick={handleMoodChangeToInLove}>😘</button>
      <button onClick={handleMoodChangeToTired}>😪</button>
    </>
  );
}

export default MoodPickerDemo;
