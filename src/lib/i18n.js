import { createI18n } from '@inlang/paraglide-js-adapter-sveltekit';
import * as runtime from "../paraglide/runtime.js";
import * as m from "../paraglide/messages.js";


export const i18n = createI18n(runtime, {
    pathnames: {
        "/about": {
            //@ts-ignore
            en: "/" + m.path_about({}, { languageTag: "en" }),
            //@ts-ignore
            de: "/" + m.path_about({}, {languageTag: "de"}),
        },
        "/admin/users/[id]": {
            en: "/admin/users/[id]",
            de: "/admin/benutzer/[id]"
        }
    },

    textDirection: {
        en: "ltr",
        de: "ltr" 
    },

    exclude: [/^\/api/]
});