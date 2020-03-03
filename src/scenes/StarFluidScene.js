import { CST } from '../CST';
import { createBackButton } from './utils';

export class StarFluidScene extends Phaser.Scene {
    constructor() {
        super({key: CST.SCENES.STAR_FLUID});
    }
    preload() {
        
    }
    create() {
        let bg = this.add.image(0, 0, 'star_fluid_portrait').setOrigin(0).setDepth(0);
        bg.setScale(.48);
        this.backgroundAnim = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', 'portrait_01');
        this.anims.create({
            key: 'fluid',
            frames: [
                {
                    key: 'backgroundAnim',
                    frame: 'portrait_01'
                },
                {
                    key: 'backgroundAnim',
                    frame: 'portrait_02'
                },
                {
                    key: 'backgroundAnim',
                    frame: 'portrait_03'
                },
                {
                    key: 'backgroundAnim',
                    frame: 'portrait_04'
                },
                {
                    key: 'backgroundAnim',
                    frame: 'portrait_05'
                }
            ],
            frameRate: 10,
            repeat: -1
        });
        this.backgroundAnim.play('fluid');
        createBackButton(this);
    }
}