let docTitle = document.title;
let favicon = document.getElementById('favicon');
let defaultIcon = "src/coracao.png";
let alertIcon = "src/chorar.png";

window.addEventListener("blur", () => {
    document.title = "please come back my love";
    favicon.href = alertIcon;
});

window.addEventListener("focus", () => {
    document.title = docTitle;
    favicon.href = defaultIcon;
});