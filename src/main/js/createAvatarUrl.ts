/*
 * MIT License
 *
 * Copyright (c) 2020-present Cloudogu GmbH and Contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
