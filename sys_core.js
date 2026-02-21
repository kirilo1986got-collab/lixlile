const VERSION_KEY = "lixlile_v";
const LATEST_VERSION = "1.0.5";

// Список изменений для версии 1.0.5
const CHANGELOG = [
    "Фикс отображения версии (v1.0.5)",
    "Центр управления областями Украины",
    "Добавлена системная команда .ua",
    "Оптимизация базы данных файлов"
];

function getStoredVersion() {
    return localStorage.getItem(VERSION_KEY) || "1.0.4";
}

function installUpdate() {
    localStorage.setItem(VERSION_KEY, LATEST_VERSION);
}
