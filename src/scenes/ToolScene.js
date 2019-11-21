import { CST } from '../CST';
import { createBackButton } from './utils';

export class ToolScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.TOOL
        })
    }
    init() {

    }
    preload() {
        let backButton = createBackButton(this);
    }
    create() {
        const configurations = ['STS', 'SSS', 'SST', 'TST'];
        let el1;
        let el2;
        let el3;
        let fontSize;
        setInterval(() => {
            if (el1) this.destroy(el1);
            if (el2) this.destroy(el2);
            if (el3) this.destroy(el3);
            let selectedConfig = configurations[this.getRandomInt(0, configurations.length - 1)];
            let x = this.getRandomInt(100, 650);
            let y = this.getRandomInt(100, 650);
            let fontSize = this.getRandomInt(14, 42);
            switch(selectedConfig) {
                case configurations[0]:
                    el1 = this.displayImage(x, y);
                    el2 = this.displayText(el1.x + el1.width - 78, y, fontSize);
                    el3 = this.displayImage(el2.x + el2.width + 20 + fontSize, y);
                    break;
                case configurations[1]:
                    el1 = this.displayImage(x, y);
                    el2 = this.displayImage(el1.x + 100, y);
                    el3 = this.displayImage(el2.x + 100, y);
                    break;
                case configurations[2]:
                    el1 = this.displayImage(x, y);
                    el2 = this.displayImage(el1.x + 100, y);
                    el3 = this.displayText(el2.x + el2.width - 78, y, fontSize);
                    break;
                case configurations[3]:
                    el1 = this.displayText(x, y, fontSize);
                    el2 = this.displayImage(el1.x + el1.width + 50, y);
                    el3 = this.displayText(el2.x + el2.width - 78, y, fontSize);
                    break;
            }
        }, 2000);
        
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    destroy(el) {
        if (el.type === 'Sprite') {
            el.destroy();
        }
        if (el.type === 'Text') {
            el.setVisible(false);
        }
    }
    displayImage(x, y) {
        return this.add.sprite(x, y, `euro`).setScale(0.5);
    }
    displayText(x, y, fontSize) {
        return this.add.text(x, y, 'Sample text', {
            font: `${fontSize}px Arial`,
            fill: '#fff',
            align: 'center'
        });
    }
}