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
import CounterFc from "./tasks/task13fcounter/fcounter"
// import Profilecard from "./tasks/task11spinner/profilecard"
import Calculator from "./tasks/taskcalculator/calculator"
import {BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'

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
         
          <Acordian/>
          <Table/>
          <Counter/>
          <Form/>
          <Numbercheck/>
          <Todolist/>
          <Lifecycle/>
          <Updating/>
          <CounterFc/>
          <Calculator/>

          

          <div>
            <div style={{padding:"50px"}}>
              <h1>ROUTER'S PRACTICE</h1>
            </div>
          <Router>
            <nav className='navitems'>
            <Link className='items' to="/taskone">TASK1</Link>
            <Link className='items' to="/tasktwo">TASK2</Link>
            <Link className='items' to="/taskthree">TASK3</Link>
            <Link className='items' to="/taskfour">TASK4</Link>
            <Link className='items' to="/taskfive">TASK5</Link>
            <Link className='items' to="/tasksix">TASK6</Link>
            <Link className='items' to="/taskseven">TASK7</Link>
            <Link className='items' to="/taskeight">TASK8</Link>
            <Link className='items' to="/tasknine">TASK9</Link>
            <Link className='items' to="/taskten">TASK10</Link>
            <Link className='items' to="/taskeleven">TASK11</Link>
            <Link className='items' to="/tasktwelve">TASK12</Link>
            <Link className='items' to="/taskthirteen">TASK13</Link>
            </nav>
            <Routes>
              <Route path="/taskone" element={<Task1/>}></Route>
              <Route path="/tasktwo" element={<TimeTable/>}></Route>
              <Route path="/taskthree" element={<Styling/>}></Route>
              <Route path="/taskfive" element={<Acordian/>}></Route>
              <Route path="/tasksix" element={<Table/>}></Route>
              <Route path="/taskseven" element={<Counter/>}></Route>
              <Route path="/taskeight" element={<Form/>}></Route>
              <Route path="/tasknine" element={<Numbercheck/>}></Route>
              <Route path="/taskten" element={<Todolist/>}></Route>
              <Route path="/taskeleven" element={<Lifecycle/>}></Route>
              <Route path="/tasktwelve" element={<Updating/>}></Route>
              <Route path="/taskthirteen" element={<CounterFc/>}></Route>
              <Route path='*' element={<h1>oops Page Not Found</h1>}></Route>
            </Routes>
          </Router>

          </div>

    </div>
  );
}

export default App;
