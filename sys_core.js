const LATEST_VERSION = "1.0.5";
const SYSTEM_CHANGES = [
    { module: "Console", desc: "Добавлены команды .ua, .file, .say" },
    { module: "UI Menu", desc: "Реальный Центр обновлений v1.0.5" },
    { module: "Ukraine", desc: "Мониторинг Днепра и всех областей" },
    { module: "Engine", desc: "Переход на динамическую память версий" }
];

function getLocalVersion() {
    return localStorage.getItem('lixlile_version') || "1.0.4";
}

function setLocalVersion(ver) {
    localStorage.setItem('lixlile_version', ver);
}
