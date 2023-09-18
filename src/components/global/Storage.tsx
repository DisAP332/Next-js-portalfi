function getItem(requested: string) {
  if (typeof window !== "undefined" && window.localStorage) {
    let result;
    switch (requested) {
      case "user":
        result = localStorage.getItem("JBWuser");
        return result;
      case "token":
        result = localStorage.getItem("JBWtoken");
        return result;
      case "events":
        result = localStorage.getItem("JBWevents");
        return result;
    }
  }
}

function setItem(requested: string, payload: object) {
  let payloadStringed = JSON.stringify(payload);
  if (typeof window !== "undefined" && window.localStorage) {
    let result;
    switch (requested) {
      case "events":
        localStorage.setItem("JBWevents", payloadStringed);
    }
  }
}

const Storage = {
  getItem,
  setItem,
};

export default Storage;
