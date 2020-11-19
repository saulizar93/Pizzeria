export const calculateCost = (type, size, toppings)=>{
    const costMatrix = [
        //slice	person	small	medium	large	extra-large
        [1.99,	8.50,	10.20,	14.25,	16.95,	19.30],		//classic
        [3.50,	6.75,	8.55,	12.35,	15.35,	18.45],	    //thin crust
        [6.00,	8.05,	12.35,	16.45,	20.55,	26.80],		//deep dish
        [4.35,	7.95,	10.99,	13.99,	16.99,	18.99],	    //sicilian
        [5.50,	7.85,	12.75,	14.50,	17.75,	20.25],	    //stuffed
        [4.30, 	8.60,	11.29,	16.30,	20.20,	24.75]]; 	//gluten-free
    let typeIndex = 0;
    let sizeIndex = 0;
    switch(size){
        case "SLICE":
            sizeIndex = 0;
            break;
        case "PERSONAL":
            sizeIndex = 1;
            break;
        case "SMALL":
            sizeIndex = 2;
            break;
        case "MEDIUM":
            sizeIndex = 3;
            break;
        case "LARGE":
            sizeIndex = 4;
            break;
        case "XLARGE":
            sizeIndex = 5;
            break;
        default:
            break;
    }
    switch(type){
        case "CLASSIC":
            typeIndex = 0;
            break;
        case "THIN_CRUST":
            typeIndex = 1;
            break;
        case "DEEP_DISH":
            typeIndex = 2;
            break;
        case "SICILIAN":
            typeIndex = 3;
            break;
        case "STUFFED":
            typeIndex = 4;
            break;
        case "GLUTEN_FREE":
            typeIndex = 5;
            break;
        default:
            break;
    }
    return costMatrix[typeIndex][sizeIndex] + (toppings.length * sizeIndex);
}