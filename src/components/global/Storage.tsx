function getItem(requested: string) {
  if (typeof window !== "undefined" && window.localStorage) {
    let result: any;
    switch (requested) {
      case "user":
        result = localStorage.getItem("JBWuser");
        result = JSON.parse(result);
        return result;
      case "token":
        result = localStorage.getItem("JBWtoken");
        result = JSON.parse(result);
        return result;
      case "events":
        result = localStorage.getItem("JBWevents");
        if (result !== "undefined") {
          result = JSON.parse(result);
          return result;
        }
      case "food":
        result = localStorage.getItem("JBWfoodItems");
        if (result !== "undefined") {
          result = JSON.parse(result);
        }
        return result;
      case "drinks":
        result = localStorage.getItem("JBWdrinks");
        if (result !== "undefined") {
          result = JSON.parse(result);
        }
        return result;
      case "siteData":
        result = localStorage.getItem("siteData");
        result = JSON.parse(result);
        return result;
    }
  }
}

function setItem(requested: string, payload: object) {
  let payloadStringed = JSON.stringify(payload);
  if (typeof window !== "undefined" && window.localStorage) {
    switch (requested) {
      case "events":
        localStorage.setItem("JBWevents", payloadStringed);
        break;
      case "food":
        localStorage.setItem("JBWfoodItems", payloadStringed);
        break;
      case "drinks":
        localStorage.setItem("JBWdrinks", payloadStringed);
        break;
      case "token":
        localStorage.setItem("JBWtoken", payloadStringed);
        break;
      case "user":
        localStorage.setItem("JBWuser", payloadStringed);
        break;
      case "siteData":
        localStorage.setItem("siteData", payloadStringed);
        break;
    }
  }
}

const Storage = {
  getItem,
  setItem,
};

export default Storage;
