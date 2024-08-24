import { MessageType } from '../../interfaces/postMessge';

export const sendPostMessage = ({ type, payload = null }: { type: MessageType, payload?: any}) => {
  window?.ReactNativeWebview?.postMessage(JSON.stringify({ type, payload }))
}
