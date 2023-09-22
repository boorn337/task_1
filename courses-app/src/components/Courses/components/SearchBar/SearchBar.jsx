import "./SearchBar.css";
import Button from "../../../../common/Button/Button";
import { useState } from "react";
// import Courses from "../../Courses";

const SearchBar = ({
  setCoursesList,
  coursesList,
  setIsCreateOpened,
  isCreateOpened,
  setFilteredList,
}) => {
  const [searchValue, setSearchValue] = useState();
  const addCourse = (course) => {
    setCoursesList([...coursesList, course]);
  };
  const handleSearch = () => {
    const filteredList = coursesList.filter((element) => {
      return (
        element.name
          .toLowerCase()
          .includes(searchValue.toString().toLowerCase()) ||
        element.id === searchValue.toString()
      );
    });
    if (searchValue) {
      setFilteredList(filteredList);
      return;
    }
    setFilteredList(coursesList);
  };
  return (
    <div className="search">
      <div className="search-components">
        <input
          type="text"
          id="searchInput"
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <Button text="Search" onClick={handleSearch} />
      </div>
      <Button
        text="Add new course"
        onClick={() => setIsCreateOpened(!isCreateOpened)}
      ></Button>
    </div>
  );
};
export default SearchBar;
