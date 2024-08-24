export const sendPostMessage = (type, payload?: any) => {
  window?.postMessage({ type, payload }, '*')
}
