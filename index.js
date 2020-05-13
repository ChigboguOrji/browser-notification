// check browser support helper
const supportNotification = () => "Notification" in window;
const notifIcon = "./devtools.png";

/**
 * @handleNotification
 * @notifOpts
 * @param {string} body message to display to user
 * @param {string} icon icon url to be used
 * @param {string} tag this prevents the browser from sending same notification repeatedly
 */
const handleNotification = () => {
  const title = "Chigbogu";
  const options = {
    body:
      "Experimenting Browser Notification API, such an amazing interface."
      +"\nTwitter is a nice place to meet;"+
      "\nFollow me @chigbogu_orji",
    icon: notifIcon,
    tag: "hello",
  };

  const notif = new Notification(title, options);

  notif.addEventListener("click", () => {
    console.log("Notification clicked");
    const url = "https://twitter.com/chigbogu_orji";
    // point browser to my twitter page
    window.open(url);
    // close notification after redirecting to my twitter page
    notif.close();
  });

  notif.addEventListener("close", () => {
    console.log("Notification closed");
  });
};

// check support
if (supportNotification) {
  console.log("Notification support");
  // using a callback supports older browser
  Notification.requestPermission(function (status) {
    // user granted permission or have not taken any action
    if (status === "granted" || status === "default") {
      handleNotification();
    } else if (status === "denied") {
      console.log("user denied permision");
    }
  });
}
