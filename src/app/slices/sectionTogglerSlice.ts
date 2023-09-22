import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SectionTogglerState {
  events: {
    display: boolean;
    hiderCSS: {
      display: string;
    };
  };
  food: {
    display: boolean;
    hiderCSS: {
      display: string;
    };
  };
}

const initialState: SectionTogglerState = {
  events: {
    display: false,
    hiderCSS: {
      display: "none",
    },
  },
  food: {
    display: false,
    hiderCSS: {
      display: "none",
    },
  },
};

export const sectionTogglerSlice = createSlice({
  name: "sectionToggler",
  initialState,
  reducers: {
    showorHiderSection: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "events":
          state = {
            ...initialState,
            events: {
              display: true,
              hiderCSS: {
                display: "block",
              },
            },
          };
          return state;
        case "food":
          state = {
            ...initialState,
            food: {
              display: true,
              hiderCSS: {
                display: "block",
              },
            },
          };
          return state;
      }
      // if (!state.events.display && action.payload === "events") {
      //   state = {
      //     ...state,
      //     events: {
      //       display: true,
      //       hiderCSS: {
      //         display: "block",
      //       },
      //     },
      //   };
      //   return state;
      // } else if (state.events.display && action.payload === "events") {
      //   state = {
      //     ...state,
      //     events: {
      //       display: false,
      //       hiderCSS: {
      //         display: "none",
      //       },
      //     },
      //   };
      //   return state;
      // }
    },
  },
});

export const { showorHiderSection } = sectionTogglerSlice.actions;

export default sectionTogglerSlice.reducer;
