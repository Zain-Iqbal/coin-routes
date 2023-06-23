import {SEARCH_TAB_TYPES} from "./screens/search/constants";
import button from "./components/button";

export enum Errors {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

export interface IStatusInfo {
    status: Errors,
    code: number,
    description?: string
}

export interface IConfig extends IStatusInfo {
    data: string
}

export interface IAccessInfo {
    address: string,
    network: string[],
    emailConfirmed: boolean,
    followers: any,
    following: any,
    receiveEmailNotifications: boolean,
    blacklisted: boolean,
    profileMedia: any,
    coverMedia: any,
    acceptedTerms: boolean
    currency: string[]
    user: IUser
}

export interface IUser {
    email: string,
    username: string,
    accept_terms: boolean,
    enable_email: boolean,
    address: string
    url?: string | null
    coverUrl?: string | null
    facebookUrl?: string | null,
    instagramUrl?: string | null,
    twitterUrl?: string | null,
    color?: string
    coverColor?: string
    customUrl?: string
    bio?: string
    access_key?: string
}

export interface IUserAccess extends IStatusInfo {
    data: IAccessInfo
}

export interface ICollection {
    collection_name: string
    default_collections: boolean,
    logo_url: string,
    cover_url?: string
    id: string | number
    network: string
    uuid: string
    wallet_address: string
    links: object
}

export interface ICollectionResponse extends IStatusInfo {
    data: {
        default_collection: ICollection[]
        custom_collection: ICollection[],
        collections: ICollection[]
        meta: IMeta
    }
}


export interface IUserUpdate extends IStatusInfo {
    data: IUser
}

export interface IWalletAPI {
    signer: string
    signature: string
    publicKey: string
    date: string
    network?: string | number
}

export interface IWalletInitialState {
    metaMaskWallet: {
        type: string,
        selectedAccount: string,
        signedAccount: string
    }
    showCommunicatingBlocked: boolean
    amountLimit: number | string
    networkChanged: boolean
}

export interface INetwork {
    active: boolean
    chain_id: string
    chain_name: string
    collection_name: string
    erc20TransferProxy: string
    erc721LazyMintToken: string
    erc721LazyMintTransferProxy: string
    erc721Factory: string
    erc721Minimal: string
    erc721MinimalBeacon: string
    erc721TransferProxy: string
    exchangeContract: string
    explorer_url: string
    helper: string
    id: string | number
    logo_url: string
    maintenance: boolean
    metamask_symbol: string
    network: string
    protocolFee: number
    node: string
    STRM: string
    BABBC: string
    gas_tracker: string
    bulkFee: string
    paymentAddress: string
    Eth_Min_Price: string
    currency?: ICurrency[]
}

export interface ICurrency {
    logo: string,
    type: string
}

export interface ICategory {
    id: string | number,
    category: string
}

export interface IAuth {
    token: string,
    user: IUser | null,
    profileSetup: boolean | null
    currency: ICurrency[]
    mainLoading?: boolean
    networks: INetwork[]
    categories: ICategory[]
    selectedNetwork: INetwork
    swapSelectedNetwork: INetwork
    searchTab: SEARCH_TAB_TYPES
    maxPrice: number
}

export interface INFTDetail {
    collection_id: string
    ipfs_cid: string
    message: string
    collection: string
    created_at: string
    currency: string
    default_collection: boolean
    bidOpen: boolean
    onBid: boolean
    isBulk: boolean,
    isEditable: boolean,
    isMinted: boolean,
    description: string
    collectionContract: string,
    image_url: string
    localUrl: string
    maker_data: string
    maker_signature: string
    creatorAddress: string
    name: string
    on_sale: boolean
    price: number
    royalties: number
    token_id: string
    uuid: string
    wallet_address: string
    tokenIdData: string
    collection_url: string
    priceInUSD: number
    views: number,
    network: string,
    floor_price?: object
    redirectedUrl?: string
    isRedirect?: boolean
    listed?: boolean
    imported?: boolean
    isVerified?: boolean
    properties?: IProperties[]
}

interface IProperties {
    trait_type: string;
    value: string
}

export interface INFT {
    INFTDetail: INFTDetail | null
    nftList: Partial<INFTDetail>[],
    offerList: INFTOffers
}

export interface INFTOffers {
    offerList: [],
    tokenAddress: string
    tokenId: string
    id: string
}

export interface IUserSlice {
    userList: IUser[]
}

export interface IMeta {
    currentPage?: number
    hasMorePages?: boolean
    pageSize?: number
    totalCount?: number
    totalPage?: number
}

export interface ICollectionSlice {
    collection: ICollection,
    meta: IMeta,
    nft: INFTDetail[]

    collectionId: string,
    statePage: number,
    hasMorePages: boolean,
    collectionHistoryId: string,

    collections: ICollection[],


    historyList: any[],

    homeNftsSection: any
    historyMeta:IMeta,
    historyFirstLoading: boolean,
    historyHasMorePages: boolean,


    exploreNftSection: any
    exploreCollectionSection: any

    myCollectionSection: any
}

export interface ICollectionList {

}

export interface IStakeData {
    [key: string]: {
        duration: number,
        planName: string,
        profitPercentage: number
    }

}

export interface IStakeInfo extends IStatusInfo {
    data: IStakeData
}

export interface GRAPH_API_DATA_ITEM {
    date: string,
    name: string,
    thirty: number,
    sixty: number,
    ninety: number,
    one_hundred_and_twenty: number,
    one_hundred_and_eighty: number,
    three_hundred_and_sixty_five: number
}

export interface IGraphAPIData extends IStatusInfo {
    data: {
        weekly: GRAPH_API_DATA_ITEM[]
        monthly: GRAPH_API_DATA_ITEM[]
        yearly: GRAPH_API_DATA_ITEM[]
    }[]
}