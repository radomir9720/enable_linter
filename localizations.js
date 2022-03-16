
var _allLocalizations = {
    "ru": {
        "titlePart": "Ради всего святого, подключи ",
        "linter": "линтер",
        "linterTooltip": "Используйте линтер Dart для выявления возможных проблем в вашем коде Dart.",
        "linterDefinition": "Линтер это инструмент, который предназначен для соблюдения стиля кодирования.",
        "aboutFlutterLints": "В новых <code>flutter</code> проектах по умолчанию уже подключены <code>flutter_lints</code>, но стандартные правила из данного пакета не настолько строгие.",
        "purposeOfStrictLints": "Для чего нужны строгие правила?",
        "newbiePurposeCase": "Новичок, по незнанию, может написать плохой код. Линтер подскажет как делать можно, а как лучше не стоит.",
        "forgetfulness": "Любой разработчик может забыть что-то(например дописать ключевое слово <code>const</code>). Линтер об этом напомнит.",
        "recommendedPackages": "Рекомендуемые пакеты с более строгими правилами:",
        "excludeFromLinter": "Не забудь исключить из правил линтера ненужные или сгенерированные файлы. Пример:",
        "open": "Открыть",
    },
    "en": {
        "titlePart": "For heaven's sake, setup ",
        "linter": "linter",
        "linterTooltip": "Use the Dart linter to identify possible problems in your Dart code.",
        "linterDefinition": "Linter is a tool that is intended to enforce a coding style.",
        "aboutFlutterLints": "New <code>flutter</code> projects already have <code>flutter_ints</code> enabled by default, but the standard rules from this package are not so strict.",
        "purposeOfStrictLints": "Why do strict rules need?",
        "newbiePurposeCase": "A beginner, unknowingly, can write bad code. Linter will tell you how to write the code better.",
        "forgetfulness": "Any developer can forget something(for example, add the keyword <code>const</code>). Linter will remind you about it.",
        "recommendedPackages": "Recommended packages with stricter rules:",
        "excludeFromLinter": "Do not forget to exclude unnecessary or generated files from the linter rules. Example:",
        "open": "Open",
    },
};


function localize(displayWhenDone) {
    var lang = navigator.language;
    var localization = _allLocalizations[lang] ?? _allLocalizations['en'];

    var needToTranslate = document.querySelectorAll('.translate');

    needToTranslate.forEach(function (el) {
        var html = _applyTemplate(el.innerHTML, localization);
        el.innerHTML = html;
        el.style.display = displayWhenDone;
    });
}

function _applyTemplate(tmpl, localization) {

    // find all words within {{word}} a double set of curly braces
    // (this format is similar to the handlebars templating engine)
    var regex = /\{\{([a-zA-Z])\w+\}\}/g

    // for each found word perform the translation and
    // remove the curly braces
    return tmpl.replace(regex, function (word) {
        return _translate(localization, word.replace(/[\{\}]/g, ''));
    });
}

function _translate(dict, word) {
    return dict[word];
}