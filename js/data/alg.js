export const algData = {
    id: 'alg',
    name: { ja: '🇩🇿 アルジェリア', en: '🇩🇿 Algeria' },
    color: '#006233', // アルジェリアグリーン
    teamStats: {
        attributes: { offense: "A", defense: "B", depth: "C", teamwork: "C", intensity: "B", experience: "B" },
        styles: { possession: 50, pressing: 55, attackRoute: 25, playStyle: 30 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "メルヴィン・マスティル", en: "Melvin Mastil" }, club: { ja: "スタッド・ニヨン", en: "Stade Nyonnais" }, 
            age: 26, height: 192, weight: 84, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","C","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["C","B","B"] } 
        },
        { 
            no: 16, name: { ja: "ウサマ・ベンボット", en: "Oussama Benbot" }, club: { ja: "USMアルジェ", en: "USM Alger" }, 
            age: 31, height: 189, weight: 82, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","B","C"], phy: ["C","B","B"] } 
        },
        { 
            no: 23, name: { ja: "ルカ・ジダン", en: "Luca Zidane" }, club: { ja: "グラナダ", en: "Granada CF" }, 
            age: 28, height: 183, weight: 78, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","C"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["B","A","D","E","E","E","E","A"], itl: ["B","B","B","C"], phy: ["C","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "アイサ・マンディ", en: "Aïssa Mandi" }, club: { ja: "リール", en: "Lille OSC" }, 
            age: 34, height: 184, weight: 78, pos: "DF", 
            stats: { atk: ["C","D","E","B","B","B"], def: ["B","A","A","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","D","D","E","D","-"], itl: ["A","B","A","A"], phy: ["B","A","C"] } 
        },
        { 
            no: 3, name: { ja: "アシュレフ・アバダ", en: "Achref Abada" }, club: { ja: "USMアルジェ", en: "USM Alger" }, 
            age: 27, height: 185, weight: 76, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["C","C","C","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 4, name: { ja: "モハメド・アミヌ・トガイ", en: "Mohamed Amine Tougai" }, club: { ja: "エスペランス", en: "Espérance de Tunis" }, 
            age: 26, height: 191, weight: 83, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","E","D","E","D","-"], itl: ["C","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 5, name: { ja: "ジネディーヌ・ベライド", en: "Zineddine Belaïd" }, club: { ja: "JSカビリー", en: "JS Kabylie" }, 
            age: 27, height: 187, weight: 80, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","A"], def: ["B","B","B","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 13, name: { ja: "ジャウエン・アジャム", en: "Jaouen Hadjam" }, club: { ja: "ヤング・ボーイズ", en: "Young Boys" }, 
            age: 23, height: 184, weight: 76, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 15, name: { ja: "ラヤン・アイト＝ヌーリ", en: "Rayan Aït-Nouri" }, club: { ja: "マンチェスター・シティ", en: "Manchester City" }, 
            age: 25, height: 179, weight: 70, pos: "DF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["B","B","C","A","-","-"], spd: ["A","A","S","A"], tec: ["A","B","B","S","A","D","C","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 17, name: { ja: "ラフィク・ベルガリ", en: "Rafik Belghali" }, club: { ja: "エラス・ヴェローナ", en: "Hellas Verona" }, 
            age: 24, height: 182, weight: 75, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 21, name: { ja: "ラミ・ベンセバイニ", en: "Ramy Bensebaini" }, club: { ja: "ドルトムント", en: "Borussia Dortmund" }, 
            age: 31, height: 187, weight: 82, pos: "DF", 
            stats: { atk: ["B","C","C","A","B","A"], def: ["A","A","A","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","E","D","-"], itl: ["A","B","A","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 26, name: { ja: "サミル・シェルギ", en: "Samir Chergui" }, club: { ja: "パリFC", en: "Paris FC" }, 
            age: 27, height: 184, weight: 78, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["C","B","B","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","B","C"], phy: ["B","A","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 6, name: { ja: "ラミズ・ゼルキ", en: "Ramiz Zerrouki" }, club: { ja: "トゥウェンテ", en: "FC Twente" }, 
            age: 28, height: 183, weight: 76, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","A","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","D","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 8, name: { ja: "フセム・アワール", en: "Houssem Aouar" }, club: { ja: "アル・イテハド", en: "Al-Ittihad" }, 
            age: 27, height: 175, weight: 70, pos: "MF", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["C","C","D","C","-","-"], spd: ["B","B","B","B"], tec: ["A","A","A","A","A","D","D","-"], itl: ["B","A","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 10, name: { ja: "ファレス・シャイビ", en: "Farès Chaïbi" }, club: { ja: "フランクフルト", en: "Eintracht Frankfurt" }, 
            age: 23, height: 183, weight: 75, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["C","C","D","B","-","-"], spd: ["B","B","A","B"], tec: ["A","A","A","B","B","D","D","-"], itl: ["B","A","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 14, name: { ja: "ヒシャム・ブダウィ", en: "Hicham Boudaoui" }, club: { ja: "ニース", en: "OGC Nice" }, 
            age: 26, height: 175, weight: 68, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","B","A","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 19, name: { ja: "ナビル・ベンタレブ", en: "Nabil Bentaleb" }, club: { ja: "リール", en: "Lille OSC" }, 
            age: 31, height: 187, weight: 78, pos: "MF", 
            stats: { atk: ["B","C","D","C","C","C"], def: ["B","B","B","B","-","-"], spd: ["D","D","D","D"], tec: ["A","A","B","C","C","D","D","-"], itl: ["A","B","A","C"], phy: ["B","B","C"] } 
        },
        { 
            no: 22, name: { ja: "イブラヒム・マザ", en: "Ibrahim Maza" }, club: { ja: "レヴァークーゼン", en: "Bayer Leverkusen" }, 
            age: 20, height: 180, weight: 72, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["B","A","A","B"], tec: ["A","A","S","A","A","D","E","-"], itl: ["B","S","B","C"], phy: ["C","C","C"] } 
        },
        { 
            no: 24, name: { ja: "ヤシン・ティトラウイ", en: "Yacine Titraoui" }, club: { ja: "シャルルロワ", en: "Charleroi" }, 
            age: 22, height: 175, weight: 68, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","C","C","D","D","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 7, name: { ja: "リヤド・マフレズ", en: "Riyad Mahrez" }, club: { ja: "アル・アハリ", en: "Al-Ahli" }, 
            age: 35, height: 179, weight: 67, pos: "FW", 
            stats: { atk: ["A","S","B","E","E","D"], def: ["E","E","F","D","-","-"], spd: ["C","C","B","C"], tec: ["S","A","S","A","S","S","E","-"], itl: ["A","S","B","C"], phy: ["C","C","C"] } 
        },
        { 
            no: 9, name: { ja: "アミーヌ・グイリ", en: "Amine Gouiri" }, club: { ja: "マルセイユ", en: "Olympique de Marseille" }, 
            age: 26, height: 180, weight: 72, pos: "FW", 
            stats: { atk: ["A","A","B","C","C","C"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["A","A","A","A","A","D","E","-"], itl: ["B","A","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 11, name: { ja: "アニス・ハジ・ムーサ", en: "Anis Hadj Moussa" }, club: { ja: "フェイエノールト", en: "Feyenoord" }, 
            age: 24, height: 175, weight: 68, pos: "FW", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","S","A"], tec: ["C","C","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 12, name: { ja: "ナディール・ベンブアリ", en: "Nadir Benbouali" }, club: { ja: "ジェールETO", en: "Győri ETO" }, 
            age: 26, height: 185, weight: 78, pos: "FW", 
            stats: { atk: ["B","C","D","B","C","B"], def: ["D","D","E","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","C","C","E","E","-"], itl: ["C","C","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 18, name: { ja: "モハメド・アムラ", en: "Mohamed Amoura" }, club: { ja: "ヴォルフスブルク", en: "VfL Wolfsburg" }, 
            age: 26, height: 170, weight: 65, pos: "FW", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","D","E","B","-","-"], spd: ["S","S","S","S"], tec: ["C","C","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 20, name: { ja: "アディル・ブルビナ", en: "Adil Boulbina" }, club: { ja: "アル・ドゥハイル", en: "Al-Duhail" }, 
            age: 23, height: 174, weight: 68, pos: "FW", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 25, name: { ja: "ファレス・ゲジェミス", en: "Farès Ghedjemis" }, club: { ja: "フロジノーネ", en: "Frosinone" }, 
            age: 23, height: 176, weight: 70, pos: "FW", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","B","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","C"] } 
        }
    ]
};