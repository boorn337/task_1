import "./SearchBar.css";
import Button from "../../../../common/Button/Button";
// import Courses from "../../Courses";

const SearchBar = ({
  setCoursesList,
  coursesList,
  setIsCreateOpened,
  isCreateOpened,
  setFilteredList,
}) => {
  const addCourse = (course) => {
    setCoursesList([...coursesList, course]);
  };
  const handleSearch = () => {
    const value = document.getElementById("searchInput").value;

    const filteredList = coursesList.filter((element) => {
      return (
        element.name === value.toString() || element.id === value.toString()
      );
    });
    if (value) {
      setFilteredList(filteredList);
    } else {
      setFilteredList(coursesList);
    }
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
