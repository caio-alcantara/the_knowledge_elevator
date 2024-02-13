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
        this.load.image('nuvem3', '../assets/nuvem3.png');
        this.load.image('nuvem4', '../assets/nuvem4.png');
    }

    create() {
        var backgorund = this.add.image(400, 300, 'background').setScale(0.6);
        var predio = this.add.image(395, 270, 'predio').setScale(0.4);
        var porta = this.add.image(395, 420, 'porta').setScale(0.15);

        var nuvem1 = this.add.image(150, 150, 'nuvem1').setScale(0.3);
        var nuvem2 = this.add.image(250, 200, 'nuvem2').setScale(0.3);
        var nuvem3 = this.add.image(400, 250, 'nuvem3').setScale(0.3);
        var nuvem4 = this.add.image(600, 300, 'nuvem4').setScale(0.3);

        predio.setDepth(2);
        porta.setDepth(3);
        nuvem1.setDepth(1);
        nuvem2.setDepth(1);
        nuvem3.setDepth(1);
        nuvem4.setDepth(1);
    }
    
}