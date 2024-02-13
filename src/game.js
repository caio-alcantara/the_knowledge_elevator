const config = {
    type: Phaser.AUTO,
    width: 960, // Resolução 4:3
    height: 720,
    backgroundColor: "b9eaff",
    scene: [StartScene], // Por enquanto, só possuímos uma cena
};

const game = new Phaser.Game(config);
