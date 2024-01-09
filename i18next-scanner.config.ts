const { readFileSync } = require('fs');

const typescriptTransform = require("i18next-scanner-typescript");

module.exports = {
  input: ["src/**/*.{ts,tsx}"],
  options: {
    keySeparator: ".",
    nsSeparator: false,
    defaultNs: "app",
    defaultValue: "",
    lngs: ["en", "vi"],
    ns: ["app"],
    plural: false,
    removeUnusedKeys: true,
    func: {
      list: ["t"],
    },
    resource: {
      loadPath: "src/assets/locales/{{lng}}/{{ns}}.json",
      savePath: "src/assets/locales/{{lng}}/{{ns}}.json",
    },
  },
  format: "json",
  fallbackLng: "en",
  transform: typescriptTransform({
      // default value for extensions
      extensions: [".ts", ".tsx"],
  },
  function customTransform(outputText, file, enc, done) {
    // do something custom with the transpiled `outputText`
    const parser = this.parser;
    const content = readFileSync(file.path, enc);

    parser.parseFuncFromString(content, function(key, options) {
        options.defaultValue = key; // use key as the value
        parser.set(key, options);
    });
  

    done();
  },
  ),
};