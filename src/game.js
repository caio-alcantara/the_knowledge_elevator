const config = {
    type: Phaser.AUTO,
    width: 800, // Resolução 4:3
    height: 600,
    backgroundColor: "#F5F5F5",
    
    scene: [StartScene], // Por enquanto, só possuímos uma cena
};

const game = new Phaser.Game(config);
