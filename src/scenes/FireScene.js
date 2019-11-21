import { CST } from '../CST';
import { createBackButton } from './utils';

export class FireScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.FIRE
        })
    }
    init() {
        let fpsText;
        let particles;
    }
    preload() {
        this.add.image(0, 0, 'title_bg').setOrigin(0).setDepth(0);
        this.load.image('fire', 'assets/particles/muzzleflash3.png');
        let backButton = createBackButton(this);
    }
    create() {
        this.fpsText = this.add.text(10, 10, 'FPS: -- \n-- Particles', {
            font: 'bold 26px Arial',
            fill: '#ffffff'
        });
    
        this.particles = this.add.particles('fire');
    
        this.particles.createEmitter({
            alpha: { start: 1, end: 0 },
            scale: { start: 0.5, end: 2.5 },
            speed: 20,
            accelerationY: -300,
            angle: { min: -85, max: -95 },
            rotate: { min: -180, max: 180 },
            lifespan: { min: 1000, max: 1100 },
            blendMode: 'ADD',
            frequency: 110,
            maxParticles: 10,
            x: 400,
            y: 300
        });
    }
    update(time, delta) {
        this.fpsText.setText('FPS: ' + (1000/delta).toFixed(3) + '\n' + this.particles.emitters.first.alive.length + ' Particles');
    }
}