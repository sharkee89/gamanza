/** @type {import("../typings/phaser")} */
import { CST } from '../CST';

export default function createButton(button, scene, text, that) {
    button.setInteractive();
    button.on('pointerup', () => {
        that.scene.start(scene);
    });
    button.on('pointerover', () => {
        that.game.canvas.style.cursor = "pointer";
    });
    button.on('pointerout', () => {
        that.game.canvas.style.cursor = "initial";
    });
    let txt = that.add.text(0, 0, text, {
        font: '20px Arial',
        fill: '#fff',
        align: 'center'
    }).setDepth(2);
    txt.x = button.x - txt.width / 2;
    txt.y = button.y - txt.height / 2;
}

export function createBackButton(that, interval) {
    let btn = that.add.image(that.game.renderer.width - 64, that.game.renderer.height - 64, 'back_button').setDepth(0);
    btn.setInteractive();
    btn.on('pointerup', () => {
        if (interval) {
            clearInterval(interval);
        }
        that.scene.start(CST.SCENES.MENU);
    });
    btn.on('pointerover', () => {
        that.game.canvas.style.cursor = "pointer";
    });
    btn.on('pointerout', () => {
        that.game.canvas.style.cursor = "initial";
    });
    btn.setScale(0.6);
    return btn;
}