import store from "@/store";
import axios from "axios";

store.subscribe((mutation) => {
  switch (mutation.type) {
    case "appStore/SET_TOKEN":
      if (mutation.payload) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + mutation.payload;
        console.log(axios.defaults.headers.common);
        localStorage.setItem("accessToken", mutation.payload);
      } else {
        axios.defaults.headers.common["Authorization"] = null;
        localStorage.removeItem("accessToken");
      }
      break;
  }
});
