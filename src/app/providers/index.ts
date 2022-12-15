import compose from "compose-function";
import { withHelmet } from "@app/app/providers/withHelmet";
import { withMantine } from "@app/app/providers/withMantine";
import { withRouter } from "@app/app/providers/withRouter";

export const withProviders = compose(withMantine, withHelmet, withRouter);
