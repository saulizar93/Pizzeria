export const heightCheck = (type)=>{
    switch(type){
        case "CLASSIC":
            return 0.75
        case "THIN_CRUST":
            return 0.5
        case "DEEP_DISH":
            return 3
        case "SICILIAN":
            return 1.5
        case "STUFFED":
            return 2
        case "GLUTEN_FREE":
            return 0.5
        default:
            return 0
    }
}