// @flow
import md5sum from "md5";

const size = 64;
const defaultImage = "identicon";

type Person = {
  name: string,
  mail?: string
};

export default function createAvatarUrl(person: Person){
  const md5 = createHash(person);
  return `https://gravatar.com/avatar/${md5}?size=${size}&default=${defaultImage}`;
}

function createHash(person: Person){
  if (person) {
    const value = personToHash(person);
    if (value) {
      return md5sum(personToHash(person).toLowerCase().trim());
    }
  }
  return "00000000000000000000000000000000";
}

function personToHash(person: Person){
  if (!person.mail) {
    return person.name;
  }
  return person.mail;
}
