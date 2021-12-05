export function language(lang) {
    if(lang) {
        localStorage.setItem("quasar-dev-blog-lang", lang);
        return lang;
    }
    return localStorage.getItem("quasar-dev-blog-lang");
}