/** @type {import("../typings/phaser")} */
import { LoadScene } from './scenes/LoadScene';
import { MenuScene } from './scenes/MenuScene';
import { StarFluidScene } from './scenes/StarFluidScene';
import { StarScene } from './scenes/StarScene';
import { StarAtlasScene } from './scenes/StarAtlasScene';

import phaserJuice from '../lib/phaserJuice.min.js';


export let game = new Phaser.Game({
    type: Phaser.WEBGL,
    width: window.innerWidth - 20,
    height: window.innerHeight - 20,
    plugins: {
        scene: [
            { key: 'phaserJuice', plugin: phaserJuice, mapping: 'juice' }
        ]
    },
    scene: [
        LoadScene,
        MenuScene,
        StarFluidScene,
        StarAtlasScene,
        StarScene
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