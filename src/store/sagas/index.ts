import { call, fork, takeEvery, put } from "redux-saga/effects";

import { GET_TODOS } from "store/actions/actionsTypes";

const getTodos = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/?_limit=6"
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

function* loadTodos() {
  const todos: Promise<Response> = yield call(getTodos);
  yield put({ type: GET_TODOS, payload: todos });
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
