/** @type {import("../typings/phaser")} */
import { LoadScene } from './scenes/LoadScene';
import { MenuScene } from './scenes/MenuScene';
import { CardScene } from './scenes/CardScene';
import { FireScene } from './scenes/FireScene';
import { ToolScene } from './scenes/ToolScene';
import { StarFluidScene } from './scenes/StarFluidScene';

export let game = new Phaser.Game({
    type: Phaser.WEBGL,
    width: window.innerWidth - 20,
    height: window.innerHeight - 20,
    scene: [
        LoadScene,
        MenuScene,
        CardScene,
        FireScene,
        ToolScene,
        StarFluidScene
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