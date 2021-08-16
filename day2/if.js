var value1 = 100
var value2 = 20
var value3 = "Hi"

if (value1 != value2) {
    console.log("value1不等于value2")
}

if (value1 == value2) {
    console.log("value1等于value2")
} else {
    console.log("value1不等于value2")
}

if (value1 == value2) {
    console.log("value1等于value2")
} else if (value1 == value3) {
    console.log("value1等于value3")
}

switch (value1) {
    case 20:
        console.log("value1等于20")
        break;
    case 10:
        console.log("value1等于10")
        break;
    default:
        console.log("value1什么都不是")
        break;
}