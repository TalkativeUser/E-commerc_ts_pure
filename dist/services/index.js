export const BASE_URL_API = "https://api.escuelajs.co/api/v1";
export const getBaseURL = () => {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    //  GitHub Pages
    if (hostname.includes('github.io')) {
        const repoName = pathname.split('/')[1]; // بيجيب اسم المستودع
        return `/${repoName}/`;
    }
    // لو انا على localhost
    return '/';
};
export function saveState(stateElement) {
    const data = Object.assign({}, stateElement.dataset);
    localStorage.setItem("appState", JSON.stringify(data));
}
//# sourceMappingURL=index.js.map