import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../app/store";

const modalIdStateSelector = (state: RootState) => state.detail.modalId


export const modalIdSelector = createSelector(modalIdStateSelector, id => id)

