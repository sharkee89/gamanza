import { CST } from '../CST';

export default function createButton(button, scene, text, that) {
    button.setInteractive();
    button.on('pointerup', () => {
        that.scene.start(scene);
    });
    let txt = that.add.text(0, 0, text, {
        font: '20px Arial',
        fill: '#fff',
        align: 'center'
    }).setDepth(2);
    txt.x = button.x - txt.width / 2;
    txt.y = button.y - txt.height / 2 - 7;
}

export function createBackButton(that, interval) {
    let btn = that.add.image(that.game.renderer.width - 128, that.game.renderer.height - 128, 'back_button').setDepth(0);
    btn.setInteractive();
    btn.on('pointerup', () => {
        if (interval) {
            clearInterval(interval);
        }
        that.scene.start(CST.SCENES.MENU);
    });
    return btn;
}