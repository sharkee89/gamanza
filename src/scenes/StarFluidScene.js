import { CST } from '../CST';
import { createBackButton } from './utils';

export class StarFluidScene extends Phaser.Scene {
    constructor() {
        super({ key: CST.SCENES.STAR_FLUID });
    }
    preload() {

    }
    create() {
        let bg;
        this.setFullBackground(bg);
        createBackButton(this);
    }
    createStarAnimation(frame) {
        this.backgroundAnim01 = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', `${frame}_01`);
        this.backgroundAnim02 = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', `${frame}_02`);
        this.backgroundAnim03 = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', `${frame}_03`);
        this.backgroundAnim04 = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', `${frame}_04`);
        this.backgroundAnim05 = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', `${frame}_05`);
        const sprites = [
            this.backgroundAnim01,
            this.backgroundAnim02,
            this.backgroundAnim03,
            this.backgroundAnim04,
            this.backgroundAnim05,
        ];
        this.startStarAnimation(sprites, 75);
    }
    setFullBackground(bg) {
        if (this.game.config.height > this.game.config.width) {
            bg = this.add.image(0, 0, 'star_fluid_portrait');
            this.createStarAnimation('portrait');
        } else {
            bg = this.add.image(0, 0, 'star_fluid');
            this.createStarAnimation('landscape');
        }
        bg.displayHeight = this.sys.game.config.height;
        bg.scaleX = bg.scaleY;
        bg.y = this.game.config.height / 2;
        bg.x = this.game.config.width / 2;
    }
    animateStars(sprites, time) {
        for (let i = 0; i < sprites.length; i++) {
            setTimeout(() => {
                this.juice.fadeInOut(sprites[i]);
            }, i * time);
        }
    }
    startStarAnimation(sprites, time) {
        this.animateStars(sprites, time);
        setInterval(() => {
            this.animateStars(sprites, time);
        }, 4000)
    }
}