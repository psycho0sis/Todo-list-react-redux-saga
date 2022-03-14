import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MainInput } from "components/MainInput/";
import { TodoList } from "components/TodoList";
import { Spinner } from "components/Spinner";

import { getTodoSelector } from "store/selectors/getTodoSelector";

import "./style.scss";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "LOAD_DATA" });
  }, [dispatch]);

  const todos = useSelector(getTodoSelector);

  return (
    <div className='app'>
      <MainInput />
      {todos.length ? <TodoList todos={todos} /> : <Spinner />}
    </div>
  );
};
