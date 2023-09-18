// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import Document from "next/document";

// export interface axiosCallerState {
//   user: string;
//   token: string;
// }

// const initialState: axiosCallerState = {
//   user:
//     document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("JBWUserData"))
//       ?.split("=")[1] || "undefined",
//   token:
//     document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("JBWUserToken"))
//       ?.split("=")[1] || "undefined",
// };

// const server = axios.create({
//   baseURL: "https://server.portalfi-jbw.com/",
// });

// type event = {
//   Date: string;
//   Name: string;
//   Time: string;
//   Description: string;
//   Cost: string;
// };

// export const axiosSlice = createSlice({
//   name: "eventCaller",
//   initialState,
//   reducers: {
//     getAll: (state) => {
//       console.log(state.token, state.user);
//       server
//         .get("/events/getEvents", {
//           headers: { authorization: state.token, User: state.user },
//         })
//         .then((res) => {
//           if (res.data.auth === false) {
//             window.alert("Session expired. Please log back in");
//             document.location.href = "/";
//           }
//           if (!res.data.success) {
//             console.log("Error in event retrieval: apis.getAllEvents");
//             return { success: false };
//           } else {
//             document.cookie = `JBWEventData = ${JSON.stringify({
//               Data: `${res.data.Data}`,
//             })}`;
//             console.log("successfully retrieved events: apis.getAllEvents");
//             return { success: true };
//           }
//         });
//     },
//   },
// });

// export const { getAll } = axiosSlice.actions;

// export default axiosSlice.reducer;
