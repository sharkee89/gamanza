import { CST } from '../CST';
import createButton from './utils';

export class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.MENU
        })
    }
    create() {
        const bg = this.add.image(0, 0, 'title_bg').setOrigin(0).setDepth(0);
        let logo = this.add.text(0, this.game.renderer.height * 0.2, 'Stars', {
            font: '48px Arial',
            fill: '#fff',
            align: 'center'
        }).setDepth(1);
        logo.x = this.game.renderer.width / 2 - logo.width / 2;
        let starFluidButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'menu_button').setDepth(1);
        let starButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, 'menu_button').setDepth(1);
        createButton(starFluidButton, CST.SCENES.STAR_FLUID, 'Star Fluid', this);
        createButton(starButton, CST.SCENES.STAR, 'Star Random', this);
    }
}