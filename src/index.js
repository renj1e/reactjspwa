import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
Notification.requestPermission(result => {
  if (result === "granted") {
    if ("Notification" in window) {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification("Vibration Sample", {
          body: "Buzz! Buzz!",
          tag: "vibration-sample",
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          },
          actions: [
            {
              action: "explore",
              title: "Explore this new world",
              icon: "images/checkmark.png"
            },
            {
              action: "close",
              title: "Close notification",
              icon: "images/xmark.png"
            }
          ]
        });
      });
    }
  }
});
