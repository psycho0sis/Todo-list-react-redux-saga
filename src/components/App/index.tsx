import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainInput from "../MainInput/";
import TodoList from "../TodoList";

import { RootState } from "../../store/store";
import { fetchTodos } from "../../store/asyncActions";

import "./style.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const todos = useSelector((state: RootState) => state.todos);

  return (
    <div className='app'>
      <MainInput />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;