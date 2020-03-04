import { CST } from '../CST';
import { createBackButton, getRandomInt } from './utils';

export class StarScene extends Phaser.Scene {
    constructor() {
        super({key: CST.SCENES.STAR});
    }
    preload() {
        
    }
    create() {
        let bg;
        this.setFullBackground(bg);
        this.setSprites();
        createBackButton(this);
    }
    setFullBackground(bg) {
        if (this.game.config.height > this.game.config.width) {
            bg = this.add.image(0, 0, 'star_random_portrait');
        } else {
            bg = this.add.image(0, 0, 'star_random');
        }
        bg.displayHeight = this.sys.game.config.height;
        bg.scaleX = bg.scaleY;
        bg.y = this.game.config.height / 2;
        bg.x = this.game.config.width / 2;
    }
    setSprites() {
        this.star = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'star', 'smallStars_1');
        this.zvezda = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'star', 'zvezdica_1');
        const frameNames = this.textures.get('star').getFrameNames().filter(frame => frame.indexOf('smallStars_') > -1);
        const frameZvezdice = this.textures.get('star').getFrameNames().filter(zvezdica => zvezdica.indexOf('zvezdica_') > -1);
        this.showRandomStars(frameNames, this.star, getRandomInt(500, 1000), 5);
        setTimeout(() => {
            this.showRandomStars(frameZvezdice, this.zvezda, getRandomInt(500, 1000), 7);
        }, 500);
    }
    showRandomStars (frames, entity, interval, lastElement) {
        setInterval(() => {
            if (entity) {
                this.juice.fadeOut(entity);
            }
            const frame = frames[getRandomInt(0, lastElement)];
            entity = this.add.sprite(
                getRandomInt(0 + (entity.width / 2), window.innerWidth - ((entity.width / 2))),
                getRandomInt(0 + (entity.height / 2), window.innerHeight - (entity.height / 2)),
                'star',
                frame
            );
            entity.alpha = 0;
            this.juice.fadeIn(entity);
        }, interval);
    }
}