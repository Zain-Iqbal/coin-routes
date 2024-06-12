export const dataAddHandler = (arr) => {
    const list = {}
    let length = 0
    let total = 0
    arr.forEach(item => {
        const size = Number(item[1])
        const price = Number(item[0]).toFixed(2)
        if (size !== 0) {
            if (!!list[price]) {
                const val = Number(list[price]) + size
                list[price] = val
            } else {
                list[price] = size
                length = length + 1
            }
            total = Number(total) + size
        }
    })
    return {list, length, total}
}

export const aggrDataAddHandler = (obj, aggr = 0) => {
    const list = {}
    let length = 0
    let total = 0
    Object.keys(obj).forEach(item => {
        const price = (Math.floor(Number(item) / aggr) * aggr).toFixed(2)
        const size = Number(obj[item])
        if (!!list[price]) {
            const val = Number(list[price]) + size
            list[price] = val
        } else {
            list[price] = size
            length = length + 1
        }
        total = Number(total) + size
    })
    return {list, length, total}
}


export const dataUpdateHandler = (val, lengthTemp, totalTemp, list, type, aggr = 0) => {
    let length = lengthTemp
    let total = totalTemp
    const newSize = Number(val[2])
    const price = !!aggr ? (Math.floor(Number(val[1]) / aggr) * aggr).toFixed(2) : val[1]
    if (newSize === 0 && val[0] === type) {
        total = total - Number(list[price]) || 0
        delete list[price]
        length = length - 1
    } else if (newSize !== 0 && val[0] === type) {
        if (!!list[price]) {
            list[price] = newSize + list[price]
        } else {
            list[price] = newSize
            length = length + 1
        }
        total = total + newSize
    }
    return {length, total}
}
