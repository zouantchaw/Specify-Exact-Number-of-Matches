// timRgex shoult match the word 'Timber' only when in has four letter m's

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let result = timRegex.test(timStr);
console.log(result)