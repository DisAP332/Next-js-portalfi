let User: string;
let Token: string;
let Events: string;

const setData = (user: string, token: string, events: string) => {
  document.cookie = `JBWUserToken = ${token}`;
  document.cookie = `JBWUserData = ${JSON.stringify({
    Data: `${user}`,
  })}`;
  document.cookie = `JBWEventData = ${JSON.stringify({
    Data: `${events}`,
  })}`;
};

const resetEventCookie = (events: object) => {
  Events = JSON.stringify(events);
  console.log(Events);
  document.cookie = `JBWEventData = ${JSON.stringify({
    Data: `${Events}`,
  })}`;
};

function getData(action: string) {
  if (action === "user") {
    let user: any;
    user = document.cookie
      .split("; ")
      .find((row) => row.startsWith("JBWUserData"))
      ?.split("=")[1];
    user = JSON.parse(user);

    return user.Data;
  }
  if (action === "events") {
    let events: any;
    events = document.cookie
      .split("; ")
      .find((row) => row.startsWith("JBWEventData"))
      ?.split("=")[1];
    events = JSON.parse(events);
    events = JSON.parse(events.Data);
    return events;
  }
  if (action === "token") {
    let token: any;
    token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("JBWUserToken"))
      ?.split("=")[1];
    return token;
  }
}

const Cookies = {
  setData,
  getData,
  resetEventCookie,
};

export default Cookies;
