import {apiSlice} from './index'
import {
    onCollectionQueryFullFilled,
    onNetworkQueryFullFilled, onNFTQueryFullFilled,
    onQueryStarted, onQueryStartedConfig,
    onUserQueryFullFilled
} from "./api-helper";

import {SEARCH_TAB_TYPES} from "../../screens/search/constants";
import { IUserAccess, IUserUpdate} from "../../interface";

export const Auth_Url = {
    userAccess: `user/userAccess/`,
    profileUpdate: `user/profileUpdate/`,
    network: `/user/getNetworks/`,
    tokenId: `/user/getToken/`,
    verifySignature: `/user/verifySignature/`,
    getProfile: `/user/getProfile/`,
    getAnalytics: `/user/getAnalytics/`,
    search: `/user/search/`,
    appConfig: `/user/appConfig/`,
    getBanner: `/user/getBanner/`
}

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserAccess: builder.mutation<IUserAccess, void>({
            query: () => ({
                url: Auth_Url.userAccess,
                method: 'POST',
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                await onQueryStarted(id, {dispatch, queryFulfilled})
            }
        }),
        verifySignature: builder.mutation<any, any>({
            query: (data) => ({
                url: Auth_Url.verifySignature,
                method: 'POST',
                body: data
            })
        }),
        verifySignatureUpdateHistory: builder.mutation<any, any>({
            query: (data) => ({
                url: Auth_Url.verifySignature,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['transactionHistory']
        }),
        getTokenId: builder.query<any, void>({
            query: () => ({
                url: Auth_Url.tokenId,
                method: 'POST',
            }),
        }),
        getAnalytics: builder.query<any, void>({
            query: () => ({
                url: Auth_Url.getAnalytics,
                method: 'POST',
            }),
        }),
        getProfile: builder.query({
            query: (data) => ({
                url: Auth_Url.getProfile,
                method: 'POST',
                body: data
            }),
        }),
        getNetwork: builder.query<any, void>({
            query: () => ({
                url: Auth_Url.network,
                method: 'POST',
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                await onNetworkQueryFullFilled(id, {dispatch, queryFulfilled})
            }
        }),
        searchFew: builder.query({
            query: (data) => ({
                url: Auth_Url.search,
                method: 'POST',
                body: data
            }),
        }),
        appConfig: builder.query({
            query: () => ({
                url: Auth_Url.appConfig,
                method: 'POST',
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                await onQueryStartedConfig(id, {dispatch, queryFulfilled})
            },
        }),
        getBanner: builder.query<any, void>({
            query: () => ({
                url: Auth_Url.getBanner,
                method: 'POST',
            }),
        }),
        updateOnboardInfo: builder.mutation<IUserUpdate, any>({
            query: (data) => ({
                url: Auth_Url.profileUpdate,
                method: 'POST',
                body: data
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                await onQueryStarted(id, {dispatch, queryFulfilled})
            },
        }),
        search: builder.query({
            query: (data) => ({
                url: Auth_Url.search,
                method: 'POST',
                body: data
            }),
            async onQueryStarted(payload, {dispatch, queryFulfilled}) {
                const {type} = payload
                if(type === SEARCH_TAB_TYPES.collection){
                    await onCollectionQueryFullFilled(payload, {dispatch, queryFulfilled})
                }else if(type === SEARCH_TAB_TYPES.users){
                    await onUserQueryFullFilled(payload, {dispatch, queryFulfilled})
                }else if(type === SEARCH_TAB_TYPES.nfts){
                    await onNFTQueryFullFilled(payload, {dispatch, queryFulfilled})
                }
            }
        }),
    }),
})

export const {
    useGetUserAccessMutation,
    useUpdateOnboardInfoMutation,
    useGetTokenIdQuery,
    useVerifySignatureMutation,
    useVerifySignatureUpdateHistoryMutation,
    useGetNetworkQuery,
    useGetProfileQuery,
    useGetAnalyticsQuery,
    useSearchQuery,
    useSearchFewQuery,
    useAppConfigQuery,
    useGetBannerQuery
} = authApi

