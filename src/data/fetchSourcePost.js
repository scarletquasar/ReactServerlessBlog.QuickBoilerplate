import { language } from "./languageManager.js";

export async function fetchSourcePost(date, post) {
    const targetFolder = `${date.getMonth() + 1}_${date.getFullYear()}`;
    let response = null;
    await fetch(`/mocks/${targetFolder}/${post}-${language()}.md`)
    .then(data => data.text())
    .then(result => response = result)

    return response;
}