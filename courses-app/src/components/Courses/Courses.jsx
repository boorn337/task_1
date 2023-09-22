import CoursesCard from "./components/CourseCard/CourseCard";

const Courses = ({ courses, setCoursesList }) => {
  const coursesComponents = courses.map((card, index) => {
    return (
      <CoursesCard
        name={card.name}
        text={card.text}
        authors={card.authors}
        time={card.time}
        date={card.date}
        key={Symbol(index).toString()}
        id={card.id}
      />
    );
  });
  return <>{coursesComponents}</>;
};

export default Courses;
