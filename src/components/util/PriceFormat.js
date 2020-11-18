export const PriceFormat = (props)=>{
    let price = props.data;
    return `$${price.toFixed(2)}`
}