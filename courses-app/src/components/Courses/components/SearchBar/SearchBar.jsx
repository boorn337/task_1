import "./SearchBar.css";
import Button from "../../../../common/Button/Button";
import Courses from "../../Courses";

const SearchBar = ({
  setCoursesList,
  coursesList,
  setIsCreateOpened,
  isCreateOpened,
}) => {
  const addCourse = (course) => {
    setCoursesList([...coursesList, course]);
  };
  const handleSearch = () => {
    const value = document.getElementById("searchInput").value;
    console.log(value);
    console.log(coursesList);
  };
  return (
    <div className="search">
      <div className="search-components">
        <input type="text" id="searchInput" />
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
