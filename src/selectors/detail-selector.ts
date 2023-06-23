import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import { CHECK_TRANSACTION_URL } from "../utils/constants";

const profileSetupStateSelector = (state: RootState) => state.auth.profileSetup
const networksStateSelector = (state: RootState) => state.auth.networks
const categoriesStateSelector = (state: RootState) => state.auth.categories
const selectedNetworksStateSelector = (state: RootState) => state.auth.selectedNetwork
const swapSelectedNetworksStateSelector = (state: RootState) => state.auth.swapSelectedNetwork
const selectedNetworksCurrencyStateSelector = (state: RootState) => state?.auth?.selectedNetwork?.currency || []
const transactionUrlStateSelector = (state: RootState) => state?.auth?.selectedNetwork?.explorer_url || CHECK_TRANSACTION_URL
const userStateSelector = (state: RootState) => state.auth.user
const tokenStateSelector = (state: RootState) => state.auth.token
const currencyListStateSelector = (state: RootState) => state.auth.currency
const mainLoadingStateSelector = (state: RootState) => state.auth.mainLoading
const searchTabStateSelector = (state: RootState) => state.auth.searchTab
const maxPriceStateSelector = (state: RootState) => state.auth.maxPrice


export const searchTabSelector = createSelector(searchTabStateSelector, data => data)
export const maxPriceSelector = createSelector(maxPriceStateSelector, data => data)
export const networksSelector = createSelector(networksStateSelector, data => data)
export const categoriesSelector = createSelector(categoriesStateSelector, data => data)
export const selectedNetworksSelector = createSelector(selectedNetworksStateSelector, data => data)
export const swapSelectedNetworksSelector = createSelector(swapSelectedNetworksStateSelector, data => data)
export const selectedNetworksCurrencySelector = createSelector(selectedNetworksCurrencyStateSelector, data => data)
export const selectedTransactionUrlSelector = createSelector(transactionUrlStateSelector, data => data);
export const mainLoadingSelector = createSelector(mainLoadingStateSelector, data => data)
export const userSelector = createSelector(userStateSelector, data => data)
export const profileSetupSelector = createSelector(profileSetupStateSelector, data => data)
export const tokenSelector = createSelector(tokenStateSelector, data => data)
export const currencyListSelector = createSelector(currencyListStateSelector, data => data)
