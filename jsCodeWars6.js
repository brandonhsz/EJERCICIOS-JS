function likes(names) {
    const numberValidation = names.length;
    switch(numberValidation){
        case 0:
            return("no one likes this");
        case 1:
            return(`${names.toString()} likes this`);
        case 2:
            return(`${names.join(" and ")} like this`);
        case 3:
            return(`${names.slice(0,2).join(", ")} and ${names[2]} like this`);
        default:
            return(`${names.slice(0,2).join(", ")} and ${numberValidation-2} others like this`);
    }
}
const array = ["peter","brandon","rubi"];
console.log(likes(array));