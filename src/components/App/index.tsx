import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MainInput } from "components/MainInput/";
import { TodoList } from "components/TodoList";
import { Spinner } from "components/Spinner";

import { RootState } from "store/store";

import "./style.scss";

export const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    dispatch({ type: "LOAD_DATA" });
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className='app'>
      <MainInput />
      {loading ? <Spinner /> : null}
      {!loading && <TodoList todos={todos} />}
      {(!loading && !todos.length) && <p className="app__warning">There are no todos...</p>}
    </div>
  );
};
