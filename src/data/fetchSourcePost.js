import { language } from "./languageManager.js";

export async function fetchSourcePost(post) {
    let response = null;
    await fetch(`/mocks/posts/${post}-${language()}.md`)
    .then(data => data.text())
    .then(result => response = result)

    return response;
}