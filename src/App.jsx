import { Fragment } from "react";
import "./App.css";
import "./components/Netflix.css"
import NetflixSeries from "./components/NetflixSeries";
import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";
import { Todo } from "./projects/Todo/Todo";

export const App = () => {
  return (
    <Fragment>
      <Todo />
      <ToggleSwitch />
      <NetflixSeries />
    </Fragment>
  );
};

export default App;
