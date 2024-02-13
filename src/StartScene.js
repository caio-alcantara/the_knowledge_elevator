var backgorund, predio, porta, nuvem1, nuvem2, passaro1, passaro2;

class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
    }

    preload() {
        this.load.image('background', '../assets/ceu_e_chao.png');
        this.load.image('predio', '../assets/predio_sem_porta.png');
        this.load.image('porta', '../assets/porta_fechada.png');

        // Nuvens
        this.load.image('nuvem1', '../assets/nuvem1.png');
        this.load.image('nuvem2', '../assets/nuvem2.png');
        // this.load.image('nuvem3', '../assets/nuvem3.png');
        // this.load.image('nuvem4', '../assets/nuvem4.png');

        this.load.spritesheet('passaro', '../assets/BirdSpritesheet.png', { frameWidth: 81, frameHeight: 76 });
    }

    create() {
        backgorund = this.add.image(400, 300, 'background').setScale(0.6);
        predio = this.add.image(395, 270, 'predio').setScale(0.4);
        porta = this.add.image(395, 420, 'porta').setScale(0.15);

        nuvem1 = this.add.image(640, 240, 'nuvem1').setScale(0.35);
        nuvem2 = this.add.image(200, 80, 'nuvem2').setScale(0.22);
        // var nuvem3 = this.add.image(400, 250, 'nuvem3').setScale(0.3);
        // var nuvem4 = this.add.image(600, 300, 'nuvem4').setScale(0.3);

        passaro1 = this.add.sprite(100, 300, 'passaro').setScale(0.6);
        passaro2 = this.add.sprite(600, 150, 'passaro').setScale(0.4);
        this.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('passaro', { start: 0, end: 1 }),
            frameRate: 3,
            repeat: -1
        });

        passaro1.anims.play('fly', true);
        passaro2.anims.play('fly', true);

        predio.setDepth(2);
        porta.setDepth(3);
        nuvem1.setDepth(1);
        nuvem2.setDepth(1);
        passaro1.setDepth(3);
        // nuvem3.setDepth(1);
        // nuvem4.setDepth(1);
    }

    update() {
        // Movimento da nuvens
        nuvem2.x += 0.6;
        nuvem1.x -= 1;        
        if (nuvem1.x < -230) {
            nuvem1.x = 1020;            
        }
        if (nuvem2.x > 900) {
            nuvem2.x = -120;
        }

        // Movimento do passaro
        passaro1.x += 1.5;
        passaro1.y -= 0.6;
        passaro2.x -= 0.7;
        if (passaro1.x > 850) {
            passaro1.x = -100;
            passaro1.y = 500;
        }
        if (passaro2.x < -100) {
            passaro2.x = 900;
        }
    }
    
}