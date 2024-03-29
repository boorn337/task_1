import "./CreateCourses.css";
import Button from "../../common/Button/Button";
import { mockedAuthorsList } from "../../constants";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { courses } from "../../constants";
import pipeDuration from "../../helper/pipeDuration";
const CreateCourse = ({
  setIsCreateOpened,
  isCreateOpened,
  setCoursesList,
  coursesList,
}) => {
  const { v4: uuidv4 } = require("uuid");
  const [minutes, setMinutes] = useState();
  const [authors, setAuthors] = useState(mockedAuthorsList);
  const [author, setAuthor] = useState();
  const [authorList, setAuthorList] = useState([]);
  const [course, setCourse] = useState({
    name: "",
    text: "",
    authors: [],
    time: 0,
    date: "",
    id: "",
  });

  const enterTitle = (value) => {
    setCourse({ ...course, name: value });
  };

  const enterDescription = (value) => {
    setCourse({ ...course, text: value });
  };

  const Duration = ({ minutes }) => {
    if (!minutes) {
      return (
        <h1>
          Duration: <span>{"00:00"}</span> hours
        </h1>
      );
    }
    const time = pipeDuration(minutes);
    return (
      <h1>
        Duration: <span>{time}</span> hours
      </h1>
    );
  };

  const AuthorsList = ({ authorList }) => {
    const handleRemoveAuthor = (index) => {
      const updatedList = authorList.filter((_, i) => i !== index);

      setAuthorList(updatedList);
      setCourse({ ...course, authors: updatedList });
    };
    return authorList.map((author, index) => {
      return (
        <div key={index}>
          <p>{author.name}</p>
          <Button
            disabled={false}
            text="Delete author"
            onClick={() => {
              handleRemoveAuthor(index);
            }}
          ></Button>
        </div>
      );
    });
  };

  const Authors = ({ authors }) => {
    const handleClick = (author) => {
      setAuthorList([...authorList, author]);
      setCourse({
        ...course,
        authors: [...course.authors, author],
      });
    };
    return authors.map((author, index) => {
      return (
        <div key={index}>
          <p>{author.name}</p>
          <Button
            disabled={authorList.indexOf(author) > -1}
            text="Add author"
            onClick={() => handleClick(author)}
          />
        </div>
      );
    });
  };
  
  const createAuthor = () => {
    const id = uuidv4();
    const tempAuthors = [...authors, { id: id, name: author }];
    setAuthors(tempAuthors);
  };


  const createCourse = () => {
    setCourse({ ...course, id: uuidv4() });
    if (
      !course.name ||
      !course.text ||
      !course.authors.length ||
      !course.time
    ) {
      alert("Please, fill in all fields");
      return;
    }
    setCoursesList([...coursesList, course]);
    setIsCreateOpened(!isCreateOpened);
  };

  useEffect(()=> {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    setCourse({ ...course, date: formattedDate });
  }, [])


  return (
    <>
      <div className="title-bar">
        <p>Title</p>
        <div className="title-input">
          <input
            type="text"
            placeholder="Enter title..."
            onChange={(event) => enterTitle(event.target.value)}
          />
          <div className="button-area">
            <Button text="Create course" onClick={createCourse}></Button>
            <Button text="Leave" onClick={()=>{setIsCreateOpened(!isCreateOpened)}}></Button>
          </div>
        </div>
        <p>Description</p>
        <textarea
          name="title"
          id="aboutCourse"
          cols="30"
          rows="10"
          placeholder="Enter description"
          onChange={(event) => enterDescription(event.target.value)}
        ></textarea>
      </div>
      <div className="authors-container">
        <div className="add-author">
          <h2>Add author</h2>
          <div>
            <p>Author name</p>
            <input
              type="text"
              placeholder="Enter author name..."
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
            />
          </div>
          <Button text="Create autor" onClick={createAuthor}></Button>
          <h2>Duration</h2>
          <div>
            <p>Duration</p>
            <input
              type="number"
              placeholder="Enter duration in minutes..."
              onChange={(event) => {
                setMinutes(event.target.value);
                setCourse({ ...course, time: event.target.value });
              }}
            />
            <Duration minutes={minutes} />
          </div>
        </div>
        <div className="authors">
          <h2>Authors</h2>
          <div className="authors-include">
            <Authors authors={authors} />
          </div>
          <h2>Course authors</h2>
          <div className="authors-include">
            {!authorList.length ? (
              <p>Author list is empty</p>
            ) : (
              <AuthorsList authorList={authorList} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateCourse;
