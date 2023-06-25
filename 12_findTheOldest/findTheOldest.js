const findTheOldest = function(persons) {
  return persons.reduce((oldest, person) => {
    let currDateBirth = person.yearOfBirth;
    let currDateDeath = person.yearOfDeath ?? new Date().getFullYear();
    let currAge = currDateDeath - currDateBirth;

    let oldestDateBirth = oldest.yearOfBirth;
    let oldestDateDeath = oldest.yearOfDeath ?? new Date().getFullYear();
    let oldestAge = oldestDateDeath - oldestDateBirth;
    if (currAge >= oldestAge){
      oldest = person ;
    }
    return oldest;
  }, {
    yearOfBirth: new Date().getFullYear(),
    yearOfDeath: new Date().getFullYear()
  })
};

// Do not edit below this line
module.exports = findTheOldest;
