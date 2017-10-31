
const log = console.log
// log(log)
const obj = {
    name: "zoulijie",
    age: 21,
    birthday: "19960828",
    career: "Font-End Developer",
    skill: 'Web',
    method(){
        return "hello!"
    }
}

log(obj.method())

function fn(x,y){
    return {x,y}
}
log(fn(1,2))