import { CST } from '../CST';
import createButton from './utils';

export class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.MENU
        })
    }
    init() {
    }
    create() {
        let logo = this.add.text(0, this.game.renderer.height * 0.2, 'Gamanza Test', {
            font: '48px Arial',
            fill: '#fff',
            align: 'center'
        }).setDepth(1);
        logo.x = this.game.renderer.width / 2 - logo.width / 2;
        this.add.image(0, 0, 'title_bg').setOrigin(0).setDepth(0);
        let cardButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'menu_button').setDepth(1);
        let toolButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, 'menu_button').setDepth(1);
        let fireButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 200, 'menu_button').setDepth(1);
        createButton(cardButton, CST.SCENES.CARD, 'Cards', this);
        createButton(toolButton, CST.SCENES.TOOL, 'Image/Text Generator', this);
        createButton(fireButton, CST.SCENES.FIRE, 'Fire', this);
    }
}