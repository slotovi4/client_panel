import { NOTIFY_USER } from "./types";

export const notityUser = (message, messageType) => {
  return {
    type: NOTIFY_USER,
    message,
    messageType
  };
};
