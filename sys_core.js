const LATEST_VERSION = "1.0.5";
const UPDATE_DATE = "21.02.2026";

// Реальный список изменений
const SYSTEM_CHANGES = [
    { module: "Console", desc: "Добавлены команды .ua, .file, .say" },
    { module: "UI Menu", desc: "Интеграция Центра обновлений v1.0.5" },
    { module: "Weather", desc: "Мониторинг всех областей Украины (Днепр, Киев...)" },
    { module: "Core", desc: "Переход на динамическое отображение версии" }
];

function getLocalVersion() {
    return localStorage.getItem('lixlile_version') || "1.0.4";
}

function setLocalVersion(ver) {
    localStorage.setItem('lixlile_version', ver);
}
