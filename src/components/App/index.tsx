import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MainInput } from "components/MainInput/";
import { TodoList } from "components/TodoList";

import { RootState } from "store/store";

import "./style.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "LOAD_DATA" });
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
