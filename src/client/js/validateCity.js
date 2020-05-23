function validateCity(city) {
    const expression =  /^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/; 
    const regex = new RegExp(expression);
    return city.match(regex);
}

export { validateCity }