const buildMakePerson = ({ getIdPlugin, getAge }) => {
  return ({ name, birthten }) => {
    return {
      id: getIdPlugin(),
      name,
      birthten,
      age: getAge(birthten),
    };
  };
};

// const jhon = makeBuildPerson(obj);

// console.log(jhon);

module.exports = { buildMakePerson };
