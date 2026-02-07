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
//# sourceMappingURL=index.js.map