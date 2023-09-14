import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SectionTogglerState {
  events: {
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
};

export const sectionTogglerSlice = createSlice({
  name: "sectionToggler",
  initialState,
  reducers: {
    showorHiderSection: (state, action: PayloadAction<string>) => {
      if (!state.events.display && action.payload === "events") {
        state = {
          ...state,
          events: {
            display: true,
            hiderCSS: {
              display: "block",
            },
          },
        };
        return state;
      } else if (state.events.display && action.payload === "events") {
        state = {
          ...state,
          events: {
            display: false,
            hiderCSS: {
              display: "none",
            },
          },
        };
        return state;
      }
    },
  },
});

export const { showorHiderSection } = sectionTogglerSlice.actions;

export default sectionTogglerSlice.reducer;
