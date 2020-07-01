let findTheOldest = function(array) {
    return array.reduce((oldest,currentPerson) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
        return oldestAge < currentAge ? currentPerson : oldest
    })
}

const getAge = (birth,death) => {
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

module.exports = findTheOldest
