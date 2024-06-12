import React from "react";
import Skeleton from "@mui/material/Skeleton";

const OrderBookLoading = () => {
        var arr = new Array(23).fill(2)
        return <div className={'loading-container'}>
            {arr.map((item , index)=> <div key={`loader-${index}`} className={'loader'}>
                <Skeleton variant="rectangular" width={'30%'} height={15}/>
                <Skeleton variant="rectangular" width={'20%'} height={15}/>
                <Skeleton variant="rectangular" width={'30%'} height={15}/>
            </div>)}
        </div>
}

export default OrderBookLoading
