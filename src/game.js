const config = {
    type: Phaser.AUTO,
    width: 800, // Resolução 4:3
    height: 600,
    backgroundColor: "#FFFFFF",
    scene: [StartScene], // Por enquanto, só possuímos uma cena
};

const game = new Phaser.Game(config);
