var backgorund, predio, porta, nuvem1, nuvem2, passaro1, passaro2, logo, texto, mensagem, index;

class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
    }

    preload() {
        this.load.image('background', '../assets/ceu_e_chao.png');
        this.load.image('predio', '../assets/predio_sem_porta.png');
        this.load.image('porta', '../assets/porta_fechada.png');
        this.load.image('logo', '../assets/logoFinal.png');
        // Nuvens
        this.load.image('nuvem1', '../assets/nuvem1.png');
        this.load.image('nuvem2', '../assets/nuvem2.png');
        // this.load.image('nuvem3', '../assets/nuvem3.png'); // Utilizamos apenas 2/4 das nuvens para que o céu não ficasse
        // this.load.image('nuvem4', '../assets/nuvem4.png'); // extremamente cheio

        // Passaro
        this.load.spritesheet('passaro', '../assets/BirdSpritesheet.png', { frameWidth: 81, frameHeight: 76 });
    }

    create() {
        backgorund = this.add.image(400, 300, 'background').setScale(0.6);
        predio = this.add.image(395, 270, 'predio').setScale(0.4);
        porta = this.add.image(395, 420, 'porta').setScale(0.15);
        logo = this.add.image(400, 200, 'logo').setScale(0.35);
        logo.setAlpha(0);
        nuvem1 = this.add.image(640, 240, 'nuvem1').setScale(0.35);
        nuvem2 = this.add.image(200, 80, 'nuvem2').setScale(0.22);
        // var nuvem3 = this.add.image(400, 250, 'nuvem3').setScale(0.3);
        // var nuvem4 = this.add.image(600, 300, 'nuvem4').setScale(0.3);

        mensagem = "Aperte em qualquer lugar para iniciar!";
        index = 0;
        texto = this.add.text(230, 565, '', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });

        var blackScreen = this.add.rectangle(0, 0, config.width, config.height, 0xFFFFFF);
        blackScreen.setOrigin(0, 0);

    // Adicione um tween para fazer o fade in
        this.tweens.add({
            delay: 300,
            targets: blackScreen,
            alpha: 0, // Defina o valor final de opacidade desejado (0 para totalmente transparente)
            duration: 3000, // Duração em milissegundos
            onComplete: function () {
                // Código a ser executado após o fade in ser concluído
                blackScreen.destroy(); // Remova o retângulo preto se necessário
            }
        });

        this.time.addEvent({
            delay: 4000,  // Atraso em milissegundos antes de começar
            callback: function () {
                // Use outro cronômetro para adicionar letras ao texto ao longo do tempo
                this.time.addEvent({
                    delay: 100,  // Tempo em milissegundos entre cada letra
                    repeat: mensagem.length - 1,
                    callback: function () {
                        texto.text += mensagem[index];
                        index++;
                    },
                });
            },
            callbackScope: this
        });

        passaro1 = this.add.sprite(100, 300, 'passaro').setScale(0.8);
        passaro2 = this.add.sprite(600, 150, 'passaro').setScale(0.4);
        this.anims.create({
            key: 'fly1',
            frames: this.anims.generateFrameNumbers('passaro', { start: 0, end: 1 }),
            frameRate: 3,
            repeat: -1
        });
        this.anims.create({
            key: 'fly2',
            frames: this.anims.generateFrameNumbers('passaro', { start: 0, end: 1 }),
            frameRate: 2,
            repeat: -1
        });

        passaro1.anims.play('fly1', true);
        passaro2.anims.play('fly2', true);

        predio.setDepth(2);
        porta.setDepth(3);
        nuvem1.setDepth(1);
        nuvem2.setDepth(1);
        passaro1.setDepth(3);
        logo.setDepth(3);
        blackScreen.setDepth(4);
        // nuvem3.setDepth(1);
        // nuvem4.setDepth(1);

        this.tweens.add({
            targets: logo,
            y: '+=40',
            duration: 3000,
            delay: 4000,
            ease: 'Bounce',
            alpha: 1,
        });
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
        if (passaro1.x > 1300) {
            passaro1.x = -100;
            passaro1.y = 500;
        }
        if (passaro2.x < -100) {
            passaro2.x = 900;
        }

        
    }
    
}