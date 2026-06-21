export const senData = {
    id: 'sen',
    name: { ja: '🇸🇳 セネガル', en: '🇸🇳 Senegal' },
    color: '#00853f', // セネガルグリーン
    teamStats: {
        attributes: { offense: "B", defense: "B", depth: "B", teamwork: "C", intensity: "A", experience: "A" },
        styles: { possession: 45, pressing: 60, attackRoute: 30, playStyle: 40 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "セニ・ディエン", en: "Seny Dieng" }, club: { ja: "ミドルズブラ", en: "Middlesbrough" }, 
            age: 31, height: 193, weight: 83, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","B"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 16, name: { ja: "エドゥアール・メンディ", en: "Édouard Mendy" }, club: { ja: "アル・アハリ", en: "Al-Ahli" }, 
            age: 34, height: 197, weight: 86, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","A","S"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["B","A","A","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 23, name: { ja: "モリ・ディアウ", en: "Mory Diaw" }, club: { ja: "クレルモン", en: "Clermont Foot" }, 
            age: 32, height: 197, weight: 90, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","C","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "フォルモーズ・メンディ", en: "Formose Mendy" }, club: { ja: "ロリアン", en: "FC Lorient" }, 
            age: 25, height: 191, weight: 82, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["B","B","B","B","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 3, name: { ja: "カリドゥ・クリバリ", en: "Kalidou Koulibaly" }, club: { ja: "アル・ヒラル", en: "Al-Hilal" }, 
            age: 34, height: 186, weight: 89, pos: "DF", 
            stats: { atk: ["C","D","E","A","A","S"], def: ["S","A","S","B","-","-"], spd: ["C","C","D","C"], tec: ["B","B","C","E","D","E","D","-"], itl: ["A","A","S","A"], phy: ["S","S","B"] } 
        },
        { 
            no: 4, name: { ja: "アブドゥ・ディアルロ", en: "Abdou Diallo" }, club: { ja: "アル・アラビ", en: "Al-Arabi" }, 
            age: 30, height: 187, weight: 79, pos: "DF", 
            stats: { atk: ["C","D","E","B","B","B"], def: ["B","A","B","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","D","D","E","D","-"], itl: ["B","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 12, name: { ja: "フォデ・バロ＝トゥーレ", en: "Fodé Ballo-Touré" }, club: { ja: "ベシクタシュ", en: "Beşiktaş" }, 
            age: 29, height: 182, weight: 74, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["A","A","B","A"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 13, name: { ja: "ムサ・ニアカテ", en: "Moussa Niakhaté" }, club: { ja: "オリンピック・リヨン", en: "Olympique Lyonnais" }, 
            age: 30, height: 190, weight: 82, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","A","B","-","-"], spd: ["B","B","C","B"], tec: ["C","B","C","D","D","E","D","-"], itl: ["B","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 14, name: { ja: "イスマイル・ヤコブス", en: "Ismail Jakobs" }, club: { ja: "ガラタサライ", en: "Galatasaray" }, 
            age: 26, height: 184, weight: 74, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["A","A","B","A"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","C","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 22, name: { ja: "アブドゥライ・セック", en: "Abdoulaye Seck" }, club: { ja: "マッカビ・ハイファ", en: "Maccabi Haifa" }, 
            age: 34, height: 192, weight: 86, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","B","C","-","-"], spd: ["D","D","D","D"], tec: ["C","C","D","E","D","E","D","-"], itl: ["C","C","B","B"], phy: ["A","S","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 5, name: { ja: "イドリッサ・ゲイ", en: "Idrissa Gueye" }, club: { ja: "エヴァートン", en: "Everton" }, 
            age: 36, height: 174, weight: 66, pos: "MF", 
            stats: { atk: ["C","C","D","E","E","D"], def: ["A","A","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","D","D","-"], itl: ["A","A","S","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 6, name: { ja: "ナンパリス・メンディ", en: "Nampalys Mendy" }, club: { ja: "ランス", en: "RC Lens" }, 
            age: 33, height: 167, weight: 73, pos: "MF", 
            stats: { atk: ["C","D","E","E","E","D"], def: ["B","B","C","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","D","D","-"], itl: ["B","B","A","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 8, name: { ja: "シェイフ・クヤテ", en: "Cheikhou Kouyaté" }, club: { ja: "無所属", en: "Free Agent" }, 
            age: 36, height: 189, weight: 83, pos: "MF/DF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["B","B","B","B","-","-"], spd: ["D","D","D","D"], tec: ["C","C","D","D","D","E","D","-"], itl: ["B","B","A","B"], phy: ["A","A","C"] } 
        },
        { 
            no: 11, name: { ja: "パテ・シス", en: "Pathé Ciss" }, club: { ja: "ラージョ・バジェカーノ", en: "Rayo Vallecano" }, 
            age: 32, height: 185, weight: 78, pos: "MF", 
            stats: { atk: ["C","C","D","C","C","C"], def: ["B","B","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","D","-"], itl: ["C","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 15, name: { ja: "クレパン・ディアタ", en: "Krépin Diatta" }, club: { ja: "モナコ", en: "AS Monaco" }, 
            age: 27, height: 175, weight: 68, pos: "MF/FW", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["C","C","D","B","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","A","B","D","D","-"], itl: ["C","B","B","C"], phy: ["A","C","B"] } 
        },
        { 
            no: 17, name: { ja: "パペ・マタル・サール", en: "Pape Matar Sarr" }, club: { ja: "トッテナム", en: "Tottenham Hotspur" }, 
            age: 23, height: 185, weight: 70, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["B","B","C","A","-","-"], spd: ["B","B","A","B"], tec: ["A","A","B","B","B","D","D","-"], itl: ["B","A","B","C"], phy: ["S","A","B"] } 
        },
        { 
            no: 25, name: { ja: "ラミーヌ・カマラ", en: "Lamine Camara" }, club: { ja: "モナコ", en: "AS Monaco" }, 
            age: 22, height: 173, weight: 67, pos: "MF", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["C","C","D","B","-","-"], spd: ["B","B","B","B"], tec: ["A","A","A","B","B","C","D","-"], itl: ["B","B","B","C"], phy: ["A","C","B"] } 
        },
        { 
            no: 26, name: { ja: "パペ・ゲイ", en: "Pape Gueye" }, club: { ja: "ビジャレアル", en: "Villarreal" }, 
            age: 27, height: 189, weight: 79, pos: "MF", 
            stats: { atk: ["C","C","D","C","C","C"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","D","-"], itl: ["B","B","B","C"], phy: ["A","A","B"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 7, name: { ja: "ニコラス・ジャクソン", en: "Nicolas Jackson" }, club: { ja: "チェルシー", en: "Chelsea" }, 
            age: 24, height: 188, weight: 78, pos: "FW", 
            stats: { atk: ["A","B","C","B","C","B"], def: ["D","D","E","B","-","-"], spd: ["A","A","A","A"], tec: ["B","C","C","A","B","E","E","-"], itl: ["C","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 10, name: { ja: "サディオ・マネ", en: "Sadio Mané" }, club: { ja: "アル・ナスル", en: "Al-Nassr" }, 
            age: 34, height: 174, weight: 69, pos: "FW", 
            stats: { atk: ["A","A","A","C","C","C"], def: ["D","D","E","C","-","-"], spd: ["B","B","A","B"], tec: ["B","B","B","A","A","D","E","-"], itl: ["A","S","S","C"], phy: ["B","B","C"] } 
        },
        { 
            no: 18, name: { ja: "イリマン・エンディアイエ", en: "Iliman Ndiaye" }, club: { ja: "エヴァートン", en: "Everton" }, 
            age: 26, height: 180, weight: 73, pos: "FW", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","A","A","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 19, name: { ja: "ハビブ・ディアロ", en: "Habib Diallo" }, club: { ja: "アル・シャバブ", en: "Al-Shabab" }, 
            age: 30, height: 186, weight: 79, pos: "FW", 
            stats: { atk: ["A","A","B","A","A","A"], def: ["D","D","E","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","C","C","E","E","-"], itl: ["C","B","B","A"], phy: ["A","A","B"] } 
        },
        { 
            no: 20, name: { ja: "イスマイラ・サール", en: "Ismaïla Sarr" }, club: { ja: "クリスタル・パレス", en: "Crystal Palace" }, 
            age: 28, height: 185, weight: 76, pos: "FW", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["S","S","S","S"], tec: ["C","C","C","S","B","D","E","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 21, name: { ja: "ブライ・ディア", en: "Boulaye Dia" }, club: { ja: "ラツィオ", en: "Lazio" }, 
            age: 29, height: 180, weight: 75, pos: "FW", 
            stats: { atk: ["A","A","C","C","C","C"], def: ["D","D","E","B","-","-"], spd: ["A","A","B","A"], tec: ["B","B","C","B","B","E","E","-"], itl: ["C","B","B","B"], phy: ["A","B","B"] } 
        },
        { 
            no: 24, name: { ja: "アブダラ・シマ", en: "Abdallah Sima" }, club: { ja: "スタッド・ブレスト", en: "Stade Brestois" }, 
            age: 24, height: 188, weight: 81, pos: "FW", 
            stats: { atk: ["B","B","C","A","B","A"], def: ["D","D","E","B","-","-"], spd: ["A","A","A","A"], tec: ["C","C","D","B","C","E","E","-"], itl: ["C","B","B","B"], phy: ["A","A","B"] } 
        }
    ]
};