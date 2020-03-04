import { CST } from '../CST';
import createButton from './utils';

export class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.MENU
        })
    }
    create() {
        this.setFullBackground();
        this.setLogo();
        this.setButtons();
    }
    setFullBackground() {
        const bg = this.add.image(0, 0, 'title_bg');
        bg.displayHeight = this.sys.game.config.height;
        bg.scaleX = bg.scaleY;
        bg.y = this.game.config.height / 2;
        bg.x = this.game.config.width / 2;
    }
    setLogo() {
        let logo = this.add.text(0, this.game.renderer.height * 0.1, 'Gamanza Test', {
            font: '48px Arial',
            fill: '#fff',
            align: 'center'
        }).setDepth(1);
        logo.x = this.game.renderer.width / 2 - logo.width / 2;
    }
    setButtons() {
        this.setButton(CST.SCENES.STAR_FLUID, 'Zadatak 1.1', -50);
        this.setButton(CST.SCENES.STAR_ATLAS, 'Zadatak 1.2', 25);
        this.setButton(CST.SCENES.STAR, 'Zadatak 2', 100);
    }
    setButton(scene, text, distance) {
        let starFluidButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + distance, 'menu_button').setDepth(1);
        starFluidButton.setScale(.2);
        createButton(starFluidButton, scene, text, this);
    }
}