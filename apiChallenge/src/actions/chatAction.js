export const sendChat = (str) => {
  return {
    type: "SEND_CHAT"
    payload: str
  }
}
