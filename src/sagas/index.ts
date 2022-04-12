import { call, fork, takeEvery, put } from "redux-saga/effects";

import { GET_TODOS } from "actions/actionsTypes";
import { ITodo } from "types";
import  {apiLink}  from "constants/links";

const getTodos = async () => {
  try {
    const response = await fetch(apiLink);
    const data: Promise<Response> = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

function* loadTodos() {
  const todos: ITodo[] = yield call(getTodos);

  const todoWithExtraData = todos.map((todo: ITodo) => ({
    ...todo,
    isEditing: false,
  }));

  yield put({ type: GET_TODOS, payload: todoWithExtraData });
}

function* worker() {
  yield fork(loadTodos);
}

function* watcher() {
  yield takeEvery("LOAD_DATA", worker);
}

export function* rootSaga() {
  yield fork(watcher);
}
