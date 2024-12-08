// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Task1 from "./tasks/task1/react";
import TimeTable from "./tasks/task2table/sampletable"
import Styling from "./tasks/task3conditionalstyling/conditionalstyling"
// import Resume from "./tasks/task4resume/resume"
import Acordian from "./tasks/task5/accordion"
import Table from './tasks/task6/table';
import Counter from "./tasks/task7counter/counter"
import Form from "./tasks/task8form/form";
import Numbercheck from "./tasks/task9evenodd/check"
import Todolist from "./tasks/task10todo/todo"
import Lifecycle from "./tasks/task11spinner/spinner";
import Updating from "./tasks/task12buttoncards/updatingphase";
// import Profilecard from "./tasks/task11spinner/profilecard"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      {/* tasks */}
          <Task1/>
          <TimeTable/>
          <Styling/>
          {/* <Resume/> */}
          <Acordian/>
          <Table/>
          <Counter/>
          <Form/>
          <Numbercheck/>
          <Todolist/>
          <Lifecycle/>
          <Updating/>

       

    </div>
  );
}

export default App;
