import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../app/store";

const askListState = (state: RootState) => state.main.snapshotData?.asks
const isConnectedState = (state: RootState) => state.main.isConnected
const bidListState = (state: RootState) => state.main.snapshotData?.bids
const askTotalDataState = (state: RootState) => state.main.snapshotData.askMarketTotal
const bidTotalDataState = (state: RootState) => state.main.snapshotData.bidMarketTotal
const tickerState = (state: RootState) => state.main.ticker
const tickerListState = (state: RootState) => state.main.tickerList


export const bidTotalDataStateSelector = createSelector(bidTotalDataState, val => val)
export const isConnectedStateSelector = createSelector(isConnectedState, val => val)
export const askTotalDataStateSelector = createSelector(askTotalDataState, val => val)
export const askListStateSelector = createSelector(askListState, data => data)
export const bidListStateSelector = createSelector(bidListState, data => data)
export const tickerStateSelector = createSelector(tickerState, data => data)
export const tickerListStateSelector = createSelector(tickerListState, data => data)

