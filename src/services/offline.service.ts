const isServiceWorker = 'serviceWorker' in navigator;

const clearCache = async () => {
    if (!('caches' in window)) return;
    const cacheNames = await caches.keys();
    cacheNames.forEach(async (c) => {
        await caches.delete(c)
    });
}

const removeServiceWorker = async () => {
    if (!isServiceWorker) return;
    const registrations = await navigator.serviceWorker.getRegistrations();
    registrations.forEach(async (r) => {
        await r.unregister()
    });
}

const initServiceWorker = () => {
    if (!isServiceWorker) return;
    navigator.serviceWorker.register('/service-worker.js')
}

const initOfflineService = async () => {
    if (!window.navigator.onLine || window.location.hostname === "localhost") return; // offline do nothing;

    const res = await fetch("/version.txt", { method: "get" })
    const data = await res.text();
    const val = localStorage.getItem("version")
    if (val !== null && val === data) return;
    await removeServiceWorker();
    await clearCache();
    initServiceWorker();
    localStorage.setItem("version", data);
}

export default initOfflineService;