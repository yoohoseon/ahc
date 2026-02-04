/**
 * ASCII Engine for "Midjourney-style" Matrix Background
 * Renders a high-density grid of scrolling/swirling characters.
 * Features:
 * - Swirling sine-wave noise pattern
 * - "RP VOLKOV" Text Silhouette Mask
 */
class AsciiEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.error(`Canvas element #${canvasId} not found.`);
            return;
        }
        this.ctx = this.canvas.getContext('2d');

        // Configuration
        this.fontSize = 14;
        this.fontFamily = '"JetBrains Mono", "Courier New", monospace';
        this.columns = 0;
        this.rows = 0;
        // Extended charmap for more texture
        this.charMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&▀▄█▌▐░▒▓";

        // Animation state
        this.time = 0;
        this.isRunning = false;

        // Silhouette State
        this.textMask = null; // Offscreen canvas for text shape

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.start();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.columns = Math.ceil(this.canvas.width / this.fontSize);
        this.rows = Math.ceil(this.canvas.height / this.fontSize);

        // precise font rendering
        this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
        this.ctx.textBaseline = 'top';

        // Re-generate text mask on resize
        this.generateTextMask();
    }

    generateTextMask() {
        // Create an off-screen canvas to draw the text shape
        this.textMask = document.createElement('canvas');
        this.textMask.width = this.columns; // Low res grid matching columns
        this.textMask.height = this.rows;   // Low res grid matching rows
        const mCtx = this.textMask.getContext('2d');

        // Draw Text
        mCtx.fillStyle = '#000000';
        mCtx.fillRect(0, 0, this.textMask.width, this.textMask.height);

        mCtx.fillStyle = '#FFFFFF';
        // Center the text
        mCtx.textAlign = 'center';
        mCtx.textBaseline = 'middle';

        // Scale font to be large relative to grid
        // Approx 1/4 of total grid width
        const maskFontSize = Math.floor(this.columns / 5);
        mCtx.font = `900 ${maskFontSize}px ${this.fontFamily}`;

        mCtx.fillText("RP VOLKOV", this.columns / 2, this.rows / 2);
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.animate();
        }
    }

    stop() {
        this.isRunning = false;
    }

    animate() {
        if (!this.isRunning) return;

        // Clean slate
        this.ctx.fillStyle = '#111111'; // Slightly lighter black as requested
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
        this.time += 0.005;

        // Get pixel data from mask if needed (expensive per frame, so we might want to cache or simple check)
        // Since we are checking per-cell, we can likely just use getPixel or similar interaction
        // Optimization: Get entire imageData once per resize (static text)
        // But since we want to animate/glitch the mask potentially, let's keep it simple first.
        // Actually, reading imageData is fast enough for low-res grid (e.g. 100x50)

        let maskData = null;
        if (this.textMask) {
            const mCtx = this.textMask.getContext('2d');
            maskData = mCtx.getImageData(0, 0, this.columns, this.rows).data;
        }

        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
                // Base Noise
                const noise = Math.sin(x * 0.04 + this.time) * Math.cos(y * 0.04 + this.time * 0.5)
                    + Math.sin((x + y) * 0.01 - this.time * 2);

                const charIndex = Math.floor(Math.abs(noise * 10) + x * 0.01) % this.charMap.length;
                const char = this.charMap[charIndex];

                let brightness = 0;

                // Base Waves
                const waveVal = (noise + 2) / 4;
                if (waveVal > 0.6) {
                    brightness += (waveVal - 0.6) * 120;
                } else {
                    brightness += 15; // Very dim base
                }

                // Check Mask for Silhouette
                if (maskData) {
                    // Index: (y * width + x) * 4 (rgba)
                    const pIndex = (y * this.columns + x) * 4;
                    // If red channel is high, it's inside the text
                    if (maskData[pIndex] > 128) {
                        // boost brightness to reveal silhouette
                        // Make it shimmer
                        const shimmer = Math.sin(this.time * 5 + x * 0.1) * 50 + 50;
                        brightness += 150 + shimmer;
                    }
                }

                brightness = Math.min(255, Math.max(10, brightness));

                this.ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
                this.ctx.fillText(char, x * this.fontSize, y * this.fontSize);
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

window.initAsciiEngine = (canvasId) => {
    return new AsciiEngine(canvasId);
};
