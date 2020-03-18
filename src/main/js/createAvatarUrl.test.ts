///
/// MIT License
///
/// Copyright (c) 2020-present Cloudogu GmbH and Contributors
///
/// Permission is hereby granted, free of charge, to any person obtaining a copy
/// of this software and associated documentation files (the "Software"), to deal
/// in the Software without restriction, including without limitation the rights
/// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
/// copies of the Software, and to permit persons to whom the Software is
/// furnished to do so, subject to the following conditions:
///
/// The above copyright notice and this permission notice shall be included in all
/// copies or substantial portions of the Software.
///
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
/// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
/// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
/// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
/// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
/// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
/// SOFTWARE.
///

import createAvatarUrl from "./createAvatarUrl";

describe("createAvatarUrl tests", () => {
  it("should create the gravatar url for the email of the author", () => {
    const person = {
      name: "tricia",
      mail: "tricia.mcmillian@hitchhiker.com"
    };

    expect(createAvatarUrl(person)).toBe(
      "https://gravatar.com/avatar/a3e6b931f0665851e9fb18fa4b1bb005?size=64&default=identicon"
    );
  });

  it("should create the gravatar url for the name of the author, if mail is not present", () => {
    const person = {
      name: "tricia"
    };

    expect(createAvatarUrl(person)).toBe(
      "https://gravatar.com/avatar/7b6b45249743ad383e7f2e1fafd640fa?size=64&default=identicon"
    );
  });

  it("should return the default url, without author", () => {
    expect(createAvatarUrl()).toBe(
      "https://gravatar.com/avatar/00000000000000000000000000000000?size=64&default=identicon"
    );
  });

  it("should return the default url, with empty author", () => {
    const person = {
      name: ""
    };

    expect(createAvatarUrl(person)).toBe(
      "https://gravatar.com/avatar/00000000000000000000000000000000?size=64&default=identicon"
    );
  });
});
