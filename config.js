// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Imane",
    pageTitle: "Will You Be My Valentine? 🥺💗",

    floatingEmojis: {
        hearts: ['🎈', '🌺', '💝', '💗', '😽'],
        bears: ['🧸', '😺']
    },

    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "Yes but in black", // 👈 change this text here
            secretAnswer: "I don't like you, I love you! ❤️"
        },
        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026?🌹(Or 12th since you won't be here..)",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    loveMessages: {
        extreme: "WOOOOW You love me that much?? LETS GOOOO 🚀💝",
        high: "OK OK I GET IT! 🚀💝",
        normal: "Ok that's enough 🥰"
    },

    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💓",
        message: "I LOVE YOU SO SO MUCH SEE YOU NEXT TIME BABY! ",
        emojis: "🤗💝💋💕",

        // ✅ Your image at the end
        image: "https://i.pinimg.com/736x/ab/60/1f/ab601f2ba1915b8e193a7795ffae7f43.jpg"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",

        buttonBackground: "#ff6b6b",   // YES buttons
        buttonHover: "#ff8787",

        noButtonBackground: "#444444", // ✅ NO buttons
        noButtonHover: "#666666",

        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
