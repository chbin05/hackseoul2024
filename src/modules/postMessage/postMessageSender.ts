import { MessageType } from '../../interfaces/postMessge';

export const sendPostMessage = ({ type, payload = null }: { type: MessageType, payload?: any}) => {
  window?.ReactNativeWebView?.postMessage(JSON.stringify({ type, payload }))
}
