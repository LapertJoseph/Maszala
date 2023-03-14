/**
 * Notification system
 */

import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

/**
 *
 * @param {string} msg Notification message to display
 * @param {string} type Notification type (success|warning|danger|info)
 */

const display = (msg, type) => {
  Store.addNotification({
    title: "",
    message: msg,
    type: type,
    insert: "top",
    container: "top-rigt",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};

export const notifSuccess = (msg) => {
  display(msg, "Success");
};
export const notifError = (msg) => {
  display(msg, "Error");
};
export const notifInfo = (msg) => {
  display(msg, "Info");
};
export const notifWarning = (msg) => {
  display(msg, "Warning");
};
