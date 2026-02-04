/**
 * Antigravity Physics Engine
 * Visualizes keyword clusters with sentiment-based gravity logic.
 */

export class PhysicsEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.pivot = { x: 0, y: 0 };
        this.animationId = null;

        this.hoveredNode = null;
        this.theme = 'dark'; // Default theme property

        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.hoveredNode = this.checkInteraction(x, y);
        this.canvas.style.cursor = this.hoveredNode ? 'pointer' : 'default';
    }

    resize() {
        const parent = this.canvas.parentElement;
        if (parent) {
            this.canvas.width = parent.clientWidth;
            this.canvas.height = parent.clientHeight;
        } else {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }

        this.pivot.x = this.canvas.width / 2;
        this.pivot.y = this.canvas.height / 2;
    }

    setNodes(nodes) {
        this.nodes = nodes.map(node => ({
            ...node,
            // 초기 위치를 피벗 근처로 설정하여 화면 밖에서 날아오지 않게 함
            x: this.pivot.x + (Math.random() - 0.5) * 200,
            y: this.pivot.y + (Math.random() - 0.5) * 200,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2
        }));
    }

    update() {
        if (this.animationId) cancelAnimationFrame(this.animationId);

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.nodes.forEach(node => {
            // Strong Central Gravity
            // We want nodes to cluster in the center, with larger ones fighting for the middle.
            const dx = this.pivot.x - node.x;
            const dy = this.pivot.y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;

            // Normalized direction to center
            const fx = dx / dist;
            const fy = dy / dist;

            // Gravity force: Increases with distance to pull them back strongly
            // Larger nodes get slightly stronger pull to compete for center
            const pullStrength = 0.05 + (dist * 0.0001);
            const massFactor = node.radius / 30; // Larger nodes have more 'mass' effectively

            node.vx += fx * pullStrength * massFactor;
            node.vy += fy * pullStrength * massFactor;

            // Repulsion (Collision)
            this.nodes.forEach(other => {
                if (node === other) return;
                const dx2 = other.x - node.x;
                const dy2 = other.y - node.y;
                const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2) || 1;
                const minDist = node.radius + other.radius + 5; // +5 padding

                if (dist2 < minDist) {
                    // Overlap detected - strong repulsive force
                    const force = (minDist - dist2) * 0.15; // Spring constant
                    const rfx = dx2 / dist2;
                    const rfy = dy2 / dist2;

                    // Apply force inversely proportional to size? 
                    // Actually, equal and opposite force is good for physics, 
                    // but we can make smaller ones move more easily.
                    node.vx -= rfx * force;
                    node.vy -= rfy * force;
                }
            });

            // Heavy Friction (Damping) to stop movement quickly
            // 0.8 is quite "thick" fluid, ensuring they settle without bouncing
            node.vx *= 0.80;
            node.vy *= 0.80;

            // Update position
            node.x += node.vx;
            node.y += node.vy;

            // Boundary Warning (Soft push back)
            // Just in case they fly off, though central gravity should prevent this
            const margin = node.radius;
            if (node.x < margin) node.vx += 0.5;
            if (node.x > this.canvas.width - margin) node.vx -= 0.5;
            if (node.y < margin) node.vy += 0.5;
            if (node.y > this.canvas.height - margin) node.vy -= 0.5;

            this.drawNode(node);
        });

        this.animationId = requestAnimationFrame(() => this.update());
    }

    drawNode(node) {
        const { ctx } = this;
        const isHovered = this.hoveredNode === node;
        const currentRadius = isHovered ? node.radius * 1.1 : node.radius;

        // Node Body - Neon & Glass
        ctx.beginPath();
        if (node.type === 'good') {
            // Neon Blue
            ctx.fillStyle = isHovered ? '#3b82f6' : 'rgba(59, 130, 246, 0.2)';
            ctx.strokeStyle = '#3b82f6';
            if (isHovered) {
                ctx.shadowColor = '#3b82f6';
                ctx.shadowBlur = 20;
            }
        } else {
            // Neon Red
            ctx.fillStyle = isHovered ? '#ef4444' : 'rgba(239, 68, 68, 0.2)';
            ctx.strokeStyle = '#ef4444';
            if (isHovered) {
                ctx.shadowColor = '#ef4444';
                ctx.shadowBlur = 20;
            }
        }

        ctx.lineWidth = isHovered ? 2 : 1;
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Typography - Adaptive
        ctx.shadowBlur = 0;
        ctx.fillStyle = this.theme === 'light' ? '#1d1d1f' : '#ffffff';

        const fontSize = Math.max(13, currentRadius / 2.5);
        ctx.font = `600 ${fontSize}px 'Pretendard'`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.text, node.x, node.y);

        // Minimal Value Tag
        if (currentRadius > 40 && isHovered) {
            ctx.font = `500 ${fontSize * 0.6}px 'Pretendard'`;
            ctx.fillStyle = this.theme === 'light' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.8)';
            ctx.fillText(node.volume, node.x, node.y + fontSize * 1.2);

            // Volume Label
            ctx.font = `400 ${fontSize * 0.4}px 'Pretendard'`;
            ctx.fillStyle = this.theme === 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.5)';
            ctx.fillText("Reviews", node.x, node.y + fontSize * 1.7);
        }
    }

    updateTheme(theme) {
        this.theme = theme;
    }

    checkInteraction(x, y) {
        return this.nodes.find(node => {
            const dx = x - node.x;
            const dy = y - node.y;
            return Math.sqrt(dx * dx + dy * dy) < node.radius;
        });
    }

    stop() {
        if (this.animationId) cancelAnimationFrame(this.animationId);
    }
}
