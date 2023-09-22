import "./CreateCourses.css";
import Button from "../../common/Button/Button";
const CreateCourse = () => {
  const Duration = "00:00";
  return (
    <>
      <div className="title-bar">
        <p>Title</p>
        <div className="title-input">
          <input type="text" placeholder="Enter title..." />
          <Button text="Create course"></Button>
        </div>
        <p>Description</p>
        <textarea
          name="title"
          id="aboutCourse"
          cols="30"
          rows="10"
          placeholder="Enter description"
        ></textarea>
      </div>
      <div className="authors-container">
        <div className="add-author">
          <h2>Add author</h2>
          <div>
            <p>Author name</p>
            <input type="text" placeholder="Enter author name..." />
          </div>
          <Button text="Create autor"></Button>
          <h2>Duration</h2>
          <div>
            <p>Duration</p>
            <input type="text" placeholder="Enter duration in minutes..." />
            <h1>
              Duration: <span>{Duration}</span> hours
            </h1>
          </div>
        </div>
        <div className="authors">
          <h2>Authors</h2>
          <div className="authors-include">
            <div>
              <p>Vasiliy Tarnavchik</p>
              <Button text="Add author"></Button>
            </div>
            <div>
              <p>Ksenia Khrobatenko</p>
              <Button text="Add author"></Button>
            </div>
            <div>
              <p>Oleksandr Sosiukin</p>
              <Button text="Add author"></Button>
            </div>
            <div>
              <p>Vladuslav Chemerskiy</p>
              <Button text="Add author"></Button>
            </div>
          </div>
          <h2>Course autors</h2>
          <div>
            <p>Author list is empty</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateCourse;
