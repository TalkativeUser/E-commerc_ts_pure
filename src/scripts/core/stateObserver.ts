export function initStateObserver(updateUI:()=>void) {
  const state = document.querySelector("app-state");
  if (!state) return;

  const observer = new MutationObserver(() => {
    updateUI();
  });

  observer.observe(state, {
    attributes: true,
    attributeOldValue: true,
  });
}
