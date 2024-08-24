export const sendPostMessage = (type, payload?) => {
  window?.ReactNativeWebview.postMessage(JSON.stringify({ type, payload }))
}
