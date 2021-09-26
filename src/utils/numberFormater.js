const formatter = new Intl.NumberFormat().format;
/**
 * 
 * @param {string|number} value 
 * @returns 
 */
export const currencyFormatter =(value)=>{
    return !isNaN(value)?`₦${formatter(value)}`:null
}