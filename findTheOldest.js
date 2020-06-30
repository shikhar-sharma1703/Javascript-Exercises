let findTheOldest = function(array) {
    
}

const getAge = (birth,death) => {
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

module.exports = findTheOldest
