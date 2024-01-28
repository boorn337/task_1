import "./CoursesCard.css";
import Button from "../../../../common/Button/Button";
import pipeDuration from "../../../../helper/pipeDuration";

const CoursesCard = ({ name, text, authors, time, date, id }) => {
  const authorNames = authors.map((author) => author.name).join(", ");
  const Duration = ({ minutes }) => {
    const time = pipeDuration(minutes);
    return (<div>
      <h3>Duration:</h3>
      <p>{time}</p>
    </div>
    );
  };
  return (
    <div id={id} className="courses-card">
      <div className="about-cours">
        <h1>{name}</h1>
        <p>{text}</p>
      </div>
      <div className="cours-info">
        <div>
          <h3>Authors:</h3>
          <p className="author">{authorNames}</p>
        </div>
        <Duration minutes={time} />
        <div>
          <h3>Created:</h3>
          <p>{date}</p>
        </div>
        <Button text="Show courses"></Button>
      </div>
    </div>
  );
};
export default CoursesCard;
