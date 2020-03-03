import { CST } from '../CST';

export class StarFluidScene extends Phaser.Scene {
    constructor() {
        super({key: CST.SCENES.START_FLUID});
    }
    preload() {
        
    }
    create() {
        this.backgroundAnim = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', 'portrait_01');
        // this.backgroundAnim02 = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', 'portrait_02');
        // this.backgroundAnim03 = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', 'portrait_03');
        // this.backgroundAnim04 = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', 'portrait_04');
        // this.backgroundAnim05 = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', 'portrait_05');
        // var tween = this.add.tween(sprite).to( { alpha: 1 }, 2000, "Linear", true, 0, -1);
        // let frameNames = this.textures.get('backgroundAnim').getFrameNames();
        // console.log(frameNames);
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
    }
}