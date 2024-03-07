import { applyMiddleware, createStore } from "redux"
import postsReducer from "./postsReducer"
import { thunk } from "redux-thunk"
import logger from "redux-logger"


const initialState=[{
   
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }, {

    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }]
const store=createStore(postsReducer,initialState,applyMiddleware(thunk,logger))

export default store