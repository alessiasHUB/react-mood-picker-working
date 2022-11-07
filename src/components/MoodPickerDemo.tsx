import { useState } from "react";

/* eslint no-console: "error" */

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  // const handleMoodChangeToHappy = () => {
  //   queueRerenderWithNewMoodValue("happy");
  // };

  const handleMoodChangeToConfused = () => {
    queueRerenderWithNewMoodValue("confused");
    // console.log(
    //   "🤔 queued a rerender with mood as",
    //   nextMood,
    //   "but in this render it is still",
    //   moodValueFromCurrentRender
    // );
  };

  const handleMoodChangeToSad = () => {
    queueRerenderWithNewMoodValue("sad");
    // console.log(
    //   "😢 queued a rerender with mood as",
    //   nextMood,
    //   "but in this render it is still",
    //   moodValueFromCurrentRender
    // );
  };

  const handleMoodChangeToLaughing = () => {
    queueRerenderWithNewMoodValue("laughing")
  };
  
  const handleMoodChangeToInLove = () => {
    queueRerenderWithNewMoodValue("in love")
  };

  const handleMoodChangeToTired = () => {
    queueRerenderWithNewMoodValue("tired")
  };
  
  // console.log(
  //   "Component is rendering with a mood value of",
  //   moodValueFromCurrentRender
  // );

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={() => queueRerenderWithNewMoodValue("happy")}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToLaughing}>😂</button>
      <button onClick={handleMoodChangeToInLove}>😘</button>
      <button onClick={handleMoodChangeToTired}>😪</button>
    </>
  );
}

export default MoodPickerDemo;
