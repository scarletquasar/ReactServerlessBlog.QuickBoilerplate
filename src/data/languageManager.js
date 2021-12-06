export const languageDictionary = {
    "pt-Br": {
        "search": "Pesquisar...",
        "nopost": "Nenhuma postagem encontrada",
        "loading": "Carregando..."
    },
    "en-Us": {
        "search": "Search...",
        "nopost": "Nothing to see here...",
        "loading": "Loading..."
    }
}

export function language(lang) {
    if(lang) {
        localStorage.setItem("quasar-dev-blog-lang", lang);
        return lang;
    }
    return localStorage.getItem("quasar-dev-blog-lang");
}