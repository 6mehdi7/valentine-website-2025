function applyTheme() {
    const config = window.VALENTINE_CONFIG;
    const root = document.documentElement;

    // Apply colors
    root.style.setProperty('--background-color-1', config.colors.backgroundStart);
    root.style.setProperty('--background-color-2', config.colors.backgroundEnd);

    root.style.setProperty('--button-color', config.colors.buttonBackground);
    root.style.setProperty('--button-hover', config.colors.buttonHover);

    // ✅ No button colors
    root.style.setProperty('--no-button-color', config.colors.noButtonBackground);
    root.style.setProperty('--no-button-hover', config.colors.noButtonHover);

    root.style.setProperty('--text-color', config.colors.textColor);

    // Apply animation settings
    root.style.setProperty('--float-duration', config.animations.floatDuration);
    root.style.setProperty('--float-distance', config.animations.floatDistance);
    root.style.setProperty('--bounce-speed', config.animations.bounceSpeed);
    root.style.setProperty('--heart-explosion-size', config.animations.heartExplosionSize);
}

window.addEventListener('DOMContentLoaded', applyTheme);
