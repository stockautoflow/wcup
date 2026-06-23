export const egyData = {
    id: 'egy',
    name: { ja: '🇪🇬 エジプト', en: '🇪🇬 Egypt' },
    color: '#ce1126', // エジプトレッド
    teamStats: {
        attributes: { offense: "B", defense: "B", depth: "C", teamwork: "B", intensity: "B", experience: "B" },
        styles: { possession: 45, pressing: 50, attackRoute: 30, playStyle: 30 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "モハメド・エル・シェナウィ", en: "Mohamed El Shenawy" }, club: { ja: "アルアハリ", en: "Al Ahly" }, 
            age: 37, height: 191, weight: 86, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","A","A"], spd: ["E","E","D","E"], tec: ["C","C","E","E","E","E","E","C"], itl: ["B","B","S","C"], phy: ["C","B","C"] } 
        },
        { 
            no: 16, name: { ja: "エル・マフディ・ソリマン", en: "El Mahdi Soliman" }, club: { ja: "ザマレク", en: "Zamalek SC" }, 
            age: 38, height: 189, weight: 84, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","B","B"], spd: ["E","E","D","E"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","B","C"], phy: ["C","B","C"] } 
        },
        { 
            no: 23, name: { ja: "モスタファ・ショベイル", en: "Mostafa Shobeir" }, club: { ja: "アルアハリ", en: "Al Ahly" }, 
            age: 26, height: 185, weight: 78, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 26, name: { ja: "モハメド・アラー", en: "Mohamed Alaa" }, club: { ja: "エル・グウナ", en: "El Gouna FC" }, 
            age: 25, height: 188, weight: 80, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","C","C"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "ヤセル・イブラヒム", en: "Yasser Ibrahim" }, club: { ja: "アルアハリ", en: "Al Ahly" }, 
            age: 33, height: 185, weight: 82, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","B","B","-","-"], spd: ["D","D","D","D"], tec: ["C","C","D","E","D","E","D","-"], itl: ["C","B","B","A"], phy: ["B","S","B"] } 
        },
        { 
            no: 3, name: { ja: "モハメド・ハニー", en: "Mohamed Hany" }, club: { ja: "アルアハリ", en: "Al Ahly" }, 
            age: 30, height: 175, weight: 71, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","C","C","D","C","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 4, name: { ja: "ホッサム・アブデルマギド", en: "Hossam Abdelmaguid" }, club: { ja: "ザマレク", en: "Zamalek SC" }, 
            age: 25, height: 193, weight: 85, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","S"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","E","D","E","D","-"], itl: ["C","C","B","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 5, name: { ja: "ラミー・ラビア", en: "Ramy Rabia" }, club: { ja: "アルアイン", en: "Al Ain" }, 
            age: 33, height: 183, weight: 78, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","A"], def: ["B","B","B","B","-","-"], spd: ["D","D","D","D"], tec: ["C","C","D","D","D","E","D","-"], itl: ["B","B","B","B"], phy: ["B","A","C"] } 
        },
        { 
            no: 6, name: { ja: "モハメド・アブデルモネイム", en: "Mohamed Abdelmonem" }, club: { ja: "ニース", en: "OGC Nice" }, 
            age: 27, height: 183, weight: 76, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","S"], def: ["A","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["C","B","D","D","D","E","D","-"], itl: ["B","B","B","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 13, name: { ja: "アーメド・ファトゥー", en: "Ahmed Fatouh" }, club: { ja: "ザマレク", en: "Zamalek SC" }, 
            age: 28, height: 175, weight: 69, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 14, name: { ja: "ハムディ・ファティ", en: "Hamdi Fathi" }, club: { ja: "アルワクラ", en: "Al-Wakrah" }, 
            age: 31, height: 181, weight: 76, pos: "DF/MF", 
            stats: { atk: ["C","C","D","B","C","B"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","C","C","E","D","-"], itl: ["B","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 15, name: { ja: "カリム・ハフェズ", en: "Karim Hafez" }, club: { ja: "ピラミッズ", en: "Pyramids FC" }, 
            age: 30, height: 176, weight: 72, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 24, name: { ja: "タレク・アラー", en: "Tarek Alaa" }, club: { ja: "ZED", en: "ZED FC" }, 
            age: 24, height: 185, weight: 78, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["C","C","C","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","C","C"], phy: ["B","A","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 7, name: { ja: "マハムード・トレゼゲ", en: "Mahmoud Trezeguet" }, club: { ja: "アルアハリ", en: "Al Ahly" }, 
            age: 31, height: 179, weight: 72, pos: "MF/FW", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["A","A","B","A"], tec: ["B","B","C","A","B","D","E","-"], itl: ["B","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 8, name: { ja: "エマム・アシュール", en: "Emam Ashour" }, club: { ja: "アルアハリ", en: "Al Ahly" }, 
            age: 28, height: 180, weight: 75, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","B","B","D","D","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 10, name: { ja: "モハメド・サラー", en: "Mohamed Salah" }, club: { ja: "リバプール", en: "Liverpool" }, 
            age: 34, height: 175, weight: 71, pos: "MF/FW", 
            stats: { atk: ["S","S","S","C","C","C"], def: ["E","E","F","D","-","-"], spd: ["A","A","S","A"], tec: ["A","A","S","S","S","A","E","-"], itl: ["S","S","S","C"], phy: ["B","B","A"] } 
        },
        { 
            no: 11, name: { ja: "モスタファ・ジコ", en: "Mostafa Ziko" }, club: { ja: "ピラミッズ", en: "Pyramids FC" }, 
            age: 29, height: 178, weight: 73, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","D","C","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","B","D","D","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 12, name: { ja: "ハイセム・ハッサン", en: "Haissem Hassan" }, club: { ja: "オビエド", en: "Real Oviedo" }, 
            age: 24, height: 178, weight: 70, pos: "MF", 
            stats: { atk: ["C","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 17, name: { ja: "モハナド・ラシーン", en: "Mohanad Lasheen" }, club: { ja: "ピラミッズ", en: "Pyramids FC" }, 
            age: 30, height: 182, weight: 76, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 18, name: { ja: "ナビル・エマド・ドンガ", en: "Nabil Emad Donga" }, club: { ja: "アルナジマ", en: "Al-Najma" }, 
            age: 30, height: 180, weight: 75, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["C","C","C","C","C","D","D","-"], itl: ["C","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 19, name: { ja: "マルワン・アッティア", en: "Marwan Attia" }, club: { ja: "アルアハリ", en: "Al Ahly" }, 
            age: 27, height: 178, weight: 72, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","D","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 20, name: { ja: "イブラヒム・アデル", en: "Ibrahim Adel" }, club: { ja: "ノアシェラン", en: "FC Nordsjælland" }, 
            age: 25, height: 173, weight: 68, pos: "MF/FW", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 21, name: { ja: "マハムード・サベル", en: "Mahmoud Saber" }, club: { ja: "ZED", en: "ZED FC" }, 
            age: 24, height: 175, weight: 70, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","D","-"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 25, name: { ja: "アーメド・サイード・ジゾ", en: "Ahmed Sayed Zizo" }, club: { ja: "アルアハリ", en: "Al Ahly" }, 
            age: 30, height: 174, weight: 70, pos: "MF", 
            stats: { atk: ["B","B","B","D","D","C"], def: ["C","C","D","B","-","-"], spd: ["A","A","B","A"], tec: ["A","A","B","A","A","B","D","-"], itl: ["B","A","B","C"], phy: ["A","B","B"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 9, name: { ja: "ハムザ・アブデルカリム", en: "Hamza Abdelkarim" }, club: { ja: "バルセロナB", en: "Barcelona B" }, 
            age: 20, height: 182, weight: 75, pos: "FW", 
            stats: { atk: ["B","C","C","B","C","B"], def: ["D","D","E","C","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","B","C","E","E","-"], itl: ["C","C","C","B"], phy: ["B","B","C"] } 
        },
        { 
            no: 22, name: { ja: "オマル・マーモウシュ", en: "Omar Marmoush" }, club: { ja: "マンチェスター・シティ", en: "Manchester City" }, 
            age: 27, height: 183, weight: 81, pos: "FW", 
            stats: { atk: ["A","A","B","C","C","B"], def: ["D","D","E","C","-","-"], spd: ["S","S","S","S"], tec: ["B","B","B","S","A","A","E","-"], itl: ["B","A","B","C"], phy: ["A","B","B"] } 
        }
    ]
};