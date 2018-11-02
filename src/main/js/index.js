import { binder } from "@scm-manager/ui-extensions";
import createAvatarUrl from "./createAvatarUrl";

binder.bind("changeset.avatar-factory", createAvatarUrl);
