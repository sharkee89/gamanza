import { CST } from '../CST';

export class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.LOAD
        })
    }
    init() {

    }
    preload() {
        // MAIN MENU
        this.load.image('title_bg', './assets/image/title_bg.jpg');
        this.load.image('menu_button', './assets/image/menu_button.png');
        this.load.image('back_button', './assets/image/back.png');
        // LOADING BAR
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff
            }
        });

        this.load.on('progress', (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
        });

        this.load.on('complete', () => {
        });
        // CARDS
        let cardIndex = 0;
        for (let i = 0; i < 55; i++) {
            if (i !== 13 && i !== 27 && i !== 41) {
                this.load.spritesheet(`card${cardIndex}`, `assets/sprite/cards/tile0${i}.png`, {
                    frameHeight: 96,
                    frameWidth: 72
                });
                cardIndex++;
            }
        }
        // FIRE
        this.load.image('space', 'assets/particles/starfield.jpg');
        this.load.image('fire1', 'assets/particles/fire1.png');
        this.load.image('fire2', 'assets/particles/fire2.png');
        this.load.image('fire3', 'assets/particles/fire3.png');
        this.load.image('smoke', 'assets/particles/smoke-puff.png');
        this.load.spritesheet('ball', 'assets/particles/plasmaball.png', {
            frameHeight: 128,
            frameWidth: 128
        });
        // TOOL
        this.load.spritesheet('euro', 'assets/sprite/euro.png', {
            frameHeight: 128,
            frameWidth: 128
        });
    }
    create() {
        this.scene.start(CST.SCENES.MENU);
    }
}