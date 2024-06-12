import React from "react";
import Skeleton from "@mui/material/Skeleton";
import {ICard} from "../../../../interface";

import './styles.scss'

const Card: React.FC<ICard> = (props) => {
    const {
        title,
        priceTitle,
        price,
        sizeTitle,
        size,
        color,
        type = ''
    } = props

    return <div className={'card-section'}>
        <div className={'card-title'} style={{backgroundColor: color}}>{title}</div>
        <div className={'card-subtitle'}>{type}</div>
        <div className={'card-box-container'}>
            <div className={'card-box'}>
                {!!price ? <p>{price}</p> : <Skeleton variant="rectangular" height={14} width={'70px'}/>}
                <p>{priceTitle}</p>
            </div>
            <div className={'card-box'}>
                {!!size ? <p>{size}</p> : <Skeleton variant="rectangular" height={14} width={'70px'}/>}
                <p>{sizeTitle}</p>
            </div>
        </div>
    </div>
}

export default Card
