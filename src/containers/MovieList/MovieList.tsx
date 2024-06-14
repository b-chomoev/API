import {useState} from "react";
import AddMovieForm from '../../components/AddTaskForm/AddMovieForm';
import Movie from "../../components/Task/Movie";
import {TaskElements} from "../../types";

const MovieList = () => {
  const [task, setTask] = useState<TaskElements[]>([
    {name: 'Movie #1', id: '1'},
    {name: 'Movie #2', id: '2'},
    {name: 'Movie #3', id: '3'},
  ]);

  const deleteTask = (id: string) => {
    setTask((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const createTask = (newTask: TaskElements) => {
    setTask((prevState) => {
      const taskCopy = [...prevState];
      taskCopy.push(newTask);
      return taskCopy;
    });
  };

  return (
    <div className='App'>
      <div className='task-form'>
        <AddMovieForm onSubmit={createTask}/>
      </div>
      <div className='task'>
        {task.map((item) => (
          <Movie key={item.id} name={item.name} onRemove={() => deleteTask(item.id)}/>
        ))}
      </div>
    </div>
  );
};

export default MovieList;