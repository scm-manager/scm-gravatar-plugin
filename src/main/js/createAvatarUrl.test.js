// @flow

import type {Changeset} from "@scm-manager/ui-types";
import createAvatarUrl from "./createAvatarUrl";

describe("createAvatarUrl tests", () => {

  const createChangesetWithoutAuthor = () => {
    return {
      id: "82ec979d7a870cc54951613c8cb9717190d4eacf",
      date: "2018-11-01T09:59:04Z",
      description: "make error optional in state",
      _links: {},
      _embedded: {}
    };
  };

  const createChangeset = (name: string, mail?: string): Changeset => {
    const changeset = createChangesetWithoutAuthor();
    changeset.author = {
      name,
      mail
    };
    return changeset;
  };


  it("should create the gravatar url for the email of the author", () => {
    const changeset = createChangeset("tricia", "tricia.mcmillian@hitchhiker.com");

    expect(createAvatarUrl(changeset)).toBe("https://gravatar.com/avatar/a3e6b931f0665851e9fb18fa4b1bb005?size=64&default=identicon");
  });

  it("should create the gravatar url for the name of the author, if mail is not present", () => {
    const changeset = createChangeset("tricia");

    expect(createAvatarUrl(changeset)).toBe("https://gravatar.com/avatar/7b6b45249743ad383e7f2e1fafd640fa?size=64&default=identicon");
  });

  it("should return the default url, without author", () => {
    const changeset = createChangesetWithoutAuthor();

    expect(createAvatarUrl(changeset)).toBe("https://gravatar.com/avatar/00000000000000000000000000000000?size=64&default=identicon");
  });

  it("should return the default url, with empty author", () => {
    const changeset = createChangeset("");

    expect(createAvatarUrl(changeset)).toBe("https://gravatar.com/avatar/00000000000000000000000000000000?size=64&default=identicon");
  });

});
