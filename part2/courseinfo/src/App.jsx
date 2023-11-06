const Header = ({ title }) => <h1>{title}</h1>

const Part = ({ name, exercises }) => 
  <p>
    {name} {exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(
      (partItem) => 
        <Part 
          name={partItem.name} 
          exercises={partItem.exercises} 
        />
      )
    }      
  </>

const Course = ({ course }) =>
  <>
    <Header title={course.name} />
    <Content parts={course.parts} />
  </>
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App