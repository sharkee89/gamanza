/** @type {import("../typings/phaser")} */
import { LoadScene } from './scenes/LoadScene';
import { MenuScene } from './scenes/MenuScene';
import { CardScene } from './scenes/CardScene';
import { FireScene } from './scenes/FireScene';
import { ToolScene } from './scenes/ToolScene';

export let game = new Phaser.Game({
    type: Phaser.WEBGL,
    width: 1024,
    height: 768,
    scene: [
        LoadScene,
        MenuScene,
        CardScene,
        FireScene,
        ToolScene
    ],
    physics: {
        default: 'arcade',
        arcade: {
            useTree: false,
            gravity: { y: 100 }
        }
    },
    render: {
        pixelArt: true
    }
});