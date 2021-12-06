import { language } from "./languageManager.js";

export async function fetchSourcePost(post) {
    let response = null;
    await fetch(`/content/posts/${post}-${language()}.html`)
    .then(data => data.text())
    .then(result => response = result)

    return response;
}