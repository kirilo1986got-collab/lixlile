const LATEST_VERSION = "1.0.5";
const SYSTEM_CHANGES = [
    { module: "Console", desc: "Добавлены команды .ua, .file, .say" },
    { module: "UI Menu", desc: "Авто-обновление v1.0.5 [Final]" },
    { module: "Ukraine", desc: "Мониторинг всех областей (Днепр...)" },
    { module: "Engine", desc: "Система авто-перезагрузки после Update" }
];

function getLocalVersion() {
    return localStorage.getItem('lixlile_version') || "1.0.4";
}

function setLocalVersion(ver) {
    localStorage.setItem('lixlile_version', ver);
}
