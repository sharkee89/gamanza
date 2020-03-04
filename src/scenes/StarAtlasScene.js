import { CST } from '../CST';
import { createBackButton } from './utils';

export class StarAtlasScene extends Phaser.Scene {
    constructor() {
        super({ key: CST.SCENES.STAR_ATLAS });
    }
    preload() {

    }
    create() {
        let bg;
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
        createBackButton(this);
    }
    createStarAnimation(frame) {
        this.backgroundAnim = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', `${frame}_01`);
        this.anims.create({
            key: 'fluid',
            frames: [
                {
                    key: 'backgroundAnim',
                    frame: `${frame}_01`
                },
                {
                    key: 'backgroundAnim',
                    frame: `${frame}_02`
                },
                {
                    key: 'backgroundAnim',
                    frame: `${frame}_03`
                },
                {
                    key: 'backgroundAnim',
                    frame: `${frame}_04`
                },
                {
                    key: 'backgroundAnim',
                    frame: `${frame}_05`
                }
            ],
            frameRate: 10,
            repeat: -1
        });
        this.backgroundAnim.play('fluid');
    }
}