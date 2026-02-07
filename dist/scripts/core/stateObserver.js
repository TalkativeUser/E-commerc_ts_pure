export function initStateObserver(updateUI) {
    const state = document.querySelector("app-state");
    if (!state)
        return;
    const observer = new MutationObserver(() => {
        updateUI();
    });
    observer.observe(state, {
        attributes: true,
        attributeOldValue: true,
    });
}
//# sourceMappingURL=stateObserver.js.map