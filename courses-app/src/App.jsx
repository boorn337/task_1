// import Logo from "./components/Header/components/Logo/Logo";
// import React from "react";
import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { courses } from "./constants";
import Courses from "./components/Courses/Courses";
import SearchBar from "./components/Courses/components/SearchBar/SearchBar";
import CreateCourse from "./components/CreateCourse/CreateCourse";
function App() {
  const [coursesList, setCoursesList] = useState(courses);
  const [isCreateOpened, setIsCreateOpened] = useState(false);
  return (
    <>
      <Header />
      <div id="main-div">
        {!isCreateOpened ? (
          <>
            <SearchBar
              setCoursesList={setCoursesList}
              coursesList={coursesList}
              setIsCreateOpened={setIsCreateOpened}
              isCreateOpened={isCreateOpened}
            />
            <Courses courses={coursesList} setCoursesList={setCoursesList} />
          </>
        ) : (
          <CreateCourse />
        )}
      </div>
    </>
  );
}
export default App;
