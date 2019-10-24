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
