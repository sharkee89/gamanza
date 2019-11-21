import { CST } from '../CST';
import { createBackButton } from './utils';

export class CardScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.CARD
        })
    }
    preload() {
        this.add.image(0, 0, 'title_bg').setOrigin(0).setDepth(0);
    }
    create() {
        let height = 0;
        let cards = [];
        let cardIndex = 0;
        for (let i = 51; i >= 0; i--) {
            let card = this.add.sprite(100, 100 + height, `card${cardIndex}`).setDepth(i);
            cards.push(card);
            cardIndex++;
            height += 10;
        }
        let secondDeckWidth = 500;
        let secondDeckHeight = 610;
        let sDepth = 0;
        let cardInterval = setInterval(() => {
            cards[0].x = secondDeckWidth;
            cards[0].y = secondDeckHeight;
            cards[0].setDepth(sDepth);
            secondDeckHeight -= 10;
            sDepth++;
            cards.shift();
            if (!cards.length) {
                clearInterval(cardInterval);
            }
        }, 1000);
        let backButton = createBackButton(this, cardInterval);
    }
}