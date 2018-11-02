// @flow
import type { Changeset } from "@scm-manager/ui-types";
import md5sum from "md5";

const size = 64;
const defaultImage = "identicon";

export default function createAvatarUrl(changeset: Changeset){
  const md5 = createAuthorChecksum(changeset.author);
  return `https://gravatar.com/avatar/${md5}?size=${size}&default=${defaultImage}`;
}

function createAuthorChecksum(author){
  if (author) {
    const value = getValueToHash(author);
    if (value) {
      return md5sum(getValueToHash(author).toLowerCase().trim());
    }
  }
  return "00000000000000000000000000000000";
}

function getValueToHash(author){
  if (!author.mail) {
    return author.name;
  }
  return author.mail;
}
