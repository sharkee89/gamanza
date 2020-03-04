import { CST } from '../CST';

export class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.LOAD
        })
    }
    init() {

    }
    preload() {
        this.loadImages();
        this.loadAtlas();
        this.initLoadingBar();
    }
    create() {
        this.scene.start(CST.SCENES.MENU);
    }
    loadImages() {
        // MAIN MENU
        this.load.image('title_bg', './assets/image/title_bg.jpg');
        this.load.image('menu_button', './assets/image/menu_button.png');
        this.load.image('back_button', './assets/image/back.png');
        this.load.image('star_random', './assets/image/star-bg.png');
        this.load.image('star_random_portrait', './assets/image/star-bg-portrait.png');
        this.load.image('star_fluid', './assets/image/star-fluid-bg.png');
        this.load.image('star_fluid_portrait', './assets/image/star-fluid-bg-portrait.png');
    }
    loadAtlas() {
        // Star Fluid
        this.load.atlas('backgroundAnim', './assets/image/backgroundAnim.png', './assets/image/backgroundAnim.json');
        // Star Atlas
        this.load.atlas('star', './assets/image/star.png', './assets/image/star.json');
    }
    initLoadingBar() {
        // LOADING BAR
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff
            }
        });

        this.load.on('progress', (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
        });

        this.load.on('complete', () => {
        });
    }
}
