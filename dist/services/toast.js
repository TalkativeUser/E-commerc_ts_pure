export function showToast(message, type = "error") {
    let container = document.getElementById("toast-container");
    // create container once
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        container.className =
            "fixed left-1/2 top-12 -translate-1/2 z-50 flex flex-col gap-3";
        document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    const baseClasses = "min-w-[260px] px-4 py-3 rounded-xl shadow-lg text-white text-sm animate-slide-in ";
    const typeClasses = type === "error"
        ? "bg-red-500"
        : "bg-green-500";
    toast.className = `${baseClasses} ${typeClasses}`;
    toast.textContent = message;
    container.appendChild(toast);
    // auto remove
    setTimeout(() => {
        toast.classList.add("animate-slide-out");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
//# sourceMappingURL=toast.js.map