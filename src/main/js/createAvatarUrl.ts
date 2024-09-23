/*
 * Copyright (c) 2020 - present Cloudogu GmbH
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see https://www.gnu.org/licenses/.
 */

import md5sum from "md5";

const size = 64;
const defaultImage = "identicon";

type Person = {
  name: string;
  mail?: string;
};

export default function createAvatarUrl(person?: Person) {
  const md5 = createHash(person);
  return `https://gravatar.com/avatar/${md5}?size=${size}&default=${defaultImage}`;
}

function createHash(person?: Person) {
  if (person) {
    const value = personToHash(person);
    if (value) {
      return md5sum(
        personToHash(person)
          .toLowerCase()
          .trim()
      );
    }
  }
  return "00000000000000000000000000000000";
}

function personToHash(person: Person) {
  if (!person.mail) {
    return person.name;
  }
  return person.mail;
}
