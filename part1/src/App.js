import React from "react";

const Header = ({ course }) => <h1>{course}</h1>;
const Part = ({ name, numberOfExercises }) => (
  <p>
    {name} {numberOfExercises}
  </p>
);
const Content = ({ parts }) => {
  // const part1 = "Fundamentals of React";
  // const exercises1 = 10;
  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;

  return (
    <>
      <Part name={parts[0].name} numberOfExercises={parts[0].exercises} />
      <Part name={parts[1].name} numberOfExercises={parts[1].exercises} />
      <Part name={parts[2].name} numberOfExercises={parts[2].exercises} />
    </>
  );
};

const Total = ({ parts }) => (
  <p>
    Number of exercises{" "}
    {parts[0].exercises + parts[1].exercises + parts[2].exercises}
  </p>
);

const App = () => {
  // const course = "Half Stack application development";
  // const part1 = "Fundamentals of React";
  // const exercises1 = 10;
  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
