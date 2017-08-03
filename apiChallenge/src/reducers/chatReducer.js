const initialState = {
  teksBoks: "",
  chatLog: []
}

export default (state=initialState, action) => {
  switch(action.type){
    case "SEND_CHAT":
      return {...state, chatLog: [...state.chatLog, action.payload]}
    default:
      return state
  }
}
