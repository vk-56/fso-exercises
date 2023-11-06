const Header = ({ title }) => <h2>{title}</h2>

const Part = ({ name, exercises }) => 
  <p>
    {name} {exercises}
  </p>

const Total = ({ parts }) => 
  <strong>
    total of {parts.reduce( (sum, part) => sum + part.exercises, 0 )} exercises
  </strong>

const Content = ({ parts }) => 
  <>
    {parts.map(
      (part) => 
        <Part 
          key={part.id}
          name={part.name} 
          exercises={part.exercises} 
        />
      )
    }
    <Total parts={parts} />      
  </>

const Course = ({ course }) =>
  <>
    <Header title={course.name} />
    <Content parts={course.parts} />
  </>

export default Course