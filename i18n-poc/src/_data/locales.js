const en = require("./i18n/en.json");
const nl = require("./i18n/nl.json");
const de = require("./i18n/de.json");
const fr = require("./i18n/fr.json");

// The single source of truth for which languages exist and how they're routed.
// `isDefault` → served at "/"; others at "/<code>/". Adding a language is just
// a new dictionary + a row here — the template, switcher and hreflang adapt.
module.exports = [
  { code: "en", isDefault: true,  dir: "ltr", label: "English",    ogLocale: "en_GB", t: en },
  { code: "nl", isDefault: false, dir: "ltr", label: "Nederlands", ogLocale: "nl_NL", t: nl },
  { code: "de", isDefault: false, dir: "ltr", label: "Deutsch",    ogLocale: "de_DE", t: de },
  { code: "fr", isDefault: false, dir: "ltr", label: "Français",   ogLocale: "fr_FR", t: fr },
];
