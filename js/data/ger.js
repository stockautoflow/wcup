export const gerData = {
    id: 'ger',
    name: { ja: '🇩🇪 ドイツ', en: '🇩🇪 Germany' },
    color: '#000000', // ドイツブラック
    teamStats: {
        attributes: { offense: "S", defense: "A", depth: "A", teamwork: "S", intensity: "A", experience: "S" },
        styles: { possession: 70, pressing: 75, attackRoute: 60, playStyle: 80 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "マルク＝アンドレ・テア・シュテーゲン", en: "Marc-André ter Stegen" }, club: { ja: "バルセロナ", en: "Barcelona" }, 
            age: 34, height: 187, weight: 85, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","S","A"], spd: ["D","D","C","D"], tec: ["B","S","D","E","E","E","E","S"], itl: ["A","S","A","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 12, name: { ja: "アレクサンダー・ニューベル", en: "Alexander Nübel" }, club: { ja: "シュトゥットガルト", en: "VfB Stuttgart" }, 
            age: 29, height: 193, weight: 86, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","A","B"], spd: ["D","D","C","D"], tec: ["C","B","E","E","E","E","E","A"], itl: ["B","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 22, name: { ja: "オリヴァー・バウマン", en: "Oliver Baumann" }, club: { ja: "ホッフェンハイム", en: "TSG Hoffenheim" }, 
            age: 36, height: 187, weight: 82, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","A","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","B"], itl: ["B","B","B","C"], phy: ["C","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "アントニオ・リュディガー", en: "Antonio Rüdiger" }, club: { ja: "レアル・マドリード", en: "Real Madrid" }, 
            age: 33, height: 190, weight: 85, pos: "DF", 
            stats: { atk: ["C","D","E","S","A","S"], def: ["S","S","S","B","-","-"], spd: ["S","A","B","S"], tec: ["B","B","C","D","D","E","D","-"], itl: ["A","A","S","A"], phy: ["A","S","A"] } 
        },
        { 
            no: 3, name: { ja: "ダヴィド・ラウム", en: "David Raum" }, club: { ja: "RBライプツィヒ", en: "RB Leipzig" }, 
            age: 28, height: 180, weight: 75, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["A","A","B","A"], tec: ["B","A","B","B","B","B","C","-"], itl: ["B","B","B","C"], phy: ["S","B","B"] } 
        },
        { 
            no: 4, name: { ja: "ヨナタン・ター", en: "Jonathan Tah" }, club: { ja: "レヴァークーゼン", en: "Bayer Leverkusen" }, 
            age: 30, height: 195, weight: 94, pos: "DF", 
            stats: { atk: ["C","D","E","A","A","S"], def: ["S","A","S","B","-","-"], spd: ["A","B","C","A"], tec: ["B","B","C","D","D","E","D","-"], itl: ["B","B","A","A"], phy: ["B","S","B"] } 
        },
        { 
            no: 6, name: { ja: "ヨシュア・キミッヒ", en: "Joshua Kimmich" }, club: { ja: "バイエルン・ミュンヘン", en: "Bayern Munich" }, 
            age: 31, height: 177, weight: 75, pos: "DF/MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["A","A","B","A","-","-"], spd: ["C","C","B","C"], tec: ["S","S","S","C","B","S","C","-"], itl: ["S","S","S","C"], phy: ["S","B","B"] } 
        },
        { 
            no: 15, name: { ja: "ニコ・シュロッターベック", en: "Nico Schlotterbeck" }, club: { ja: "ボルシア・ドルトムント", en: "Borussia Dortmund" }, 
            age: 26, height: 191, weight: 86, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["A","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["A","A","B","C","C","E","D","-"], itl: ["B","B","B","A"], phy: ["A","A","B"] } 
        },
        { 
            no: 16, name: { ja: "ヴァルデマール・アントン", en: "Waldemar Anton" }, club: { ja: "ボルシア・ドルトムント", en: "Borussia Dortmund" }, 
            age: 29, height: 189, weight: 84, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["A","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","D","C","E","D","-"], itl: ["B","B","B","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 18, name: { ja: "マクシミリアン・ミッテルシュテット", en: "Maximilian Mittelstädt" }, club: { ja: "シュトゥットガルト", en: "VfB Stuttgart" }, 
            age: 29, height: 180, weight: 71, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","A","B","B","B","D","C","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 24, name: { ja: "ベンヤミン・ヘンリヒス", en: "Benjamin Henrichs" }, club: { ja: "RBライプツィヒ", en: "RB Leipzig" }, 
            age: 29, height: 183, weight: 79, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","B","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","B","D","C","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 5, name: { ja: "パスカル・グロス", en: "Pascal Groß" }, club: { ja: "ボルシア・ドルトムント", en: "Borussia Dortmund" }, 
            age: 35, height: 181, weight: 78, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["D","D","D","D"], tec: ["S","A","A","C","B","S","D","-"], itl: ["S","A","A","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 8, name: { ja: "ロベルト・アンドリッヒ", en: "Robert Andrich" }, club: { ja: "レヴァークーゼン", en: "Bayer Leverkusen" }, 
            age: 31, height: 187, weight: 83, pos: "MF", 
            stats: { atk: ["A","B","C","C","C","B"], def: ["S","A","A","S","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","D","D","-"], itl: ["A","B","S","B"], phy: ["S","S","B"] } 
        },
        { 
            no: 10, name: { ja: "ユリアン・ブラント", en: "Julian Brandt" }, club: { ja: "ボルシア・ドルトムント", en: "Borussia Dortmund" }, 
            age: 30, height: 185, weight: 83, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["C","C","D","C","-","-"], spd: ["C","C","B","C"], tec: ["A","A","S","B","A","B","D","-"], itl: ["A","S","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 13, name: { ja: "クリス・フューリヒ", en: "Chris Führich" }, club: { ja: "シュトゥットガルト", en: "VfB Stuttgart" }, 
            age: 28, height: 181, weight: 70, pos: "MF", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","S","A"], tec: ["B","B","B","S","A","D","E","-"], itl: ["B","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 14, name: { ja: "ジャマル・ムシアラ", en: "Jamal Musiala" }, club: { ja: "バイエルン・ミュンヘン", en: "Bayern Munich" }, 
            age: 23, height: 184, weight: 72, pos: "MF", 
            stats: { atk: ["A","A","C","E","E","D"], def: ["C","C","D","B","-","-"], spd: ["A","S","S","A"], tec: ["A","A","S","S","S","C","E","-"], itl: ["S","S","A","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 17, name: { ja: "フロリアン・ヴィルツ", en: "Florian Wirtz" }, club: { ja: "レヴァークーゼン", en: "Bayer Leverkusen" }, 
            age: 23, height: 177, weight: 71, pos: "MF", 
            stats: { atk: ["A","A","C","E","E","D"], def: ["C","C","D","B","-","-"], spd: ["B","A","S","B"], tec: ["S","S","S","A","S","B","E","-"], itl: ["S","S","A","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 20, name: { ja: "アレクサンダル・パヴロヴィッチ", en: "Aleksandar Pavlović" }, club: { ja: "バイエルン・ミュンヘン", en: "Bayern Munich" }, 
            age: 22, height: 188, weight: 76, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["A","A","B","A","-","-"], spd: ["C","C","C","C"], tec: ["A","A","A","C","B","D","D","-"], itl: ["A","A","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 21, name: { ja: "アンジェロ・スティラー", en: "Angelo Stiller" }, club: { ja: "シュトゥットガルト", en: "VfB Stuttgart" }, 
            age: 25, height: 183, weight: 76, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["A","A","A","C","B","D","D","-"], itl: ["A","A","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 23, name: { ja: "レロイ・サネ", en: "Leroy Sané" }, club: { ja: "バイエルン・ミュンヘン", en: "Bayern Munich" }, 
            age: 30, height: 183, weight: 80, pos: "MF/FW", 
            stats: { atk: ["A","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["S","S","S","S"], tec: ["B","B","B","S","A","A","E","-"], itl: ["B","A","B","C"], phy: ["B","C","C"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 7, name: { ja: "カイ・ハフェルツ", en: "Kai Havertz" }, club: { ja: "アーセナル", en: "Arsenal" }, 
            age: 27, height: 193, weight: 83, pos: "FW", 
            stats: { atk: ["A","A","A","A","A","A"], def: ["C","C","D","S","-","-"], spd: ["B","B","B","B"], tec: ["A","A","A","B","A","D","E","-"], itl: ["S","S","A","B"], phy: ["S","B","B"] } 
        },
        { 
            no: 9, name: { ja: "ニクラス・フュルクルク", en: "Niclas Füllkrug" }, club: { ja: "ウェストハム", en: "West Ham United" }, 
            age: 33, height: 189, weight: 83, pos: "FW", 
            stats: { atk: ["S","S","A","S","S","S"], def: ["D","D","E","B","-","-"], spd: ["D","D","D","D"], tec: ["C","C","D","D","C","E","E","-"], itl: ["B","B","S","S"], phy: ["B","S","B"] } 
        },
        { 
            no: 11, name: { ja: "セルジュ・ニャブリ", en: "Serge Gnabry" }, club: { ja: "バイエルン・ミュンヘン", en: "Bayern Munich" }, 
            age: 30, height: 176, weight: 77, pos: "FW", 
            stats: { atk: ["A","A","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","A","A","D","E","-"], itl: ["B","B","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 19, name: { ja: "デニズ・ウンダヴ", en: "Deniz Undav" }, club: { ja: "シュトゥットガルト", en: "VfB Stuttgart" }, 
            age: 29, height: 179, weight: 86, pos: "FW", 
            stats: { atk: ["A","A","C","C","C","C"], def: ["C","C","D","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","B","B","D","E","-"], itl: ["A","A","B","B"], phy: ["B","B","B"] } 
        },
        { 
            no: 25, name: { ja: "マクシミリアン・バイアー", en: "Maximilian Beier" }, club: { ja: "ボルシア・ドルトムント", en: "Borussia Dortmund" }, 
            age: 23, height: 185, weight: 70, pos: "FW", 
            stats: { atk: ["A","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["S","S","A","S"], tec: ["C","C","C","A","B","E","E","-"], itl: ["B","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 26, name: { ja: "ヨナタン・ブルカルト", en: "Jonathan Burkardt" }, club: { ja: "マインツ", en: "1. FSV Mainz 05" }, 
            age: 25, height: 181, weight: 76, pos: "FW", 
            stats: { atk: ["B","B","C","C","C","C"], def: ["C","C","D","B","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","B","B","E","E","-"], itl: ["B","B","B","B"], phy: ["A","B","B"] } 
        }
    ]
};