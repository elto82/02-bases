interface BuildMakePersonOptions {
  getIdPlugin: () => string;
  getAge: (birdhdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthten: string;
}

export const buildMakePerson = ({
  getIdPlugin,
  getAge,
}: BuildMakePersonOptions) => {
  return ({ name, birthten }: PersonOptions) => {
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
