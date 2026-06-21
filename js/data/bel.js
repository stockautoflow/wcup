export const belData = {
    id: 'bel',
    name: { ja: '🇧🇪 ベルギー', en: '🇧🇪 Belgium' },
    color: '#e30613', // ベルギーレッド
    teamStats: {
        attributes: { offense: "A", defense: "B", depth: "B", teamwork: "B", intensity: "B", experience: "A" },
        styles: { possession: 60, pressing: 50, attackRoute: 40, playStyle: 50 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "クーン・カステールス", en: "Koen Casteels" }, club: { ja: "アル・カディシア", en: "Al-Qadsiah" }, 
            age: 33, height: 197, weight: 86, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","B","A"], spd: ["D","D","C","D"], tec: ["C","B","E","E","E","E","E","B"], itl: ["C","C","B","B"], phy: ["C","B","B"] } 
        },
        { 
            no: 12, name: { ja: "マッツ・セルス", en: "Matz Sels" }, club: { ja: "ノッティンガム・フォレスト", en: "Nottingham Forest" }, 
            age: 34, height: 188, weight: 80, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","B"], itl: ["C","C","B","C"], phy: ["C","B","B"] } 
        },
        { 
            no: 23, name: { ja: "トーマス・カミンスキ", en: "Thomas Kaminski" }, club: { ja: "ルートン・タウン", en: "Luton Town" }, 
            age: 33, height: 190, weight: 82, pos: "GK", 
            stats: { atk: ["E","F","E","E","E","C"], def: ["D","C","C","C","C","C"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["C","C","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "ゼノ・デバスト", en: "Zeno Debast" }, club: { ja: "スポルティングCP", en: "Sporting CP" }, 
            age: 22, height: 189, weight: 76, pos: "DF", 
            stats: { atk: ["C","D","E","B","C","A"], def: ["B","B","B","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","D","D","E","D","-"], itl: ["B","B","B","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 3, name: { ja: "アルトゥール・テアテ", en: "Arthur Theate" }, club: { ja: "アイントラハト・フランクフルト", en: "Eintracht Frankfurt" }, 
            age: 26, height: 186, weight: 78, pos: "DF", 
            stats: { atk: ["C","D","E","B","B","B"], def: ["A","B","A","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","C","C","E","D","-"], itl: ["B","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 4, name: { ja: "バスト・ライエス", en: "Basto Reyes" }, club: { ja: "アントワープ", en: "Antwerp" }, 
            age: 24, height: 183, weight: 75, pos: "DF", 
            stats: { atk: ["D","D","E","C","C","B"], def: ["C","C","C","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","C","C","E","D","-"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 5, name: { ja: "マキシム・デ・カウペル", en: "Maxim De Cuyper" }, club: { ja: "クラブ・ブルッヘ", en: "Club Brugge" }, 
            age: 25, height: 184, weight: 73, pos: "DF", 
            stats: { atk: ["B","B","D","C","D","C"], def: ["B","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","B","D","D","-"], itl: ["C","C","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 21, name: { ja: "ティモシー・カスターニュ", en: "Timothy Castagne" }, club: { ja: "フラム", en: "Fulham" }, 
            age: 30, height: 185, weight: 80, pos: "DF", 
            stats: { atk: ["C","C","D","C","D","C"], def: ["B","A","B","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","C","C","E","D","-"], itl: ["B","B","B","B"], phy: ["A","B","B"] } 
        },
        { 
            no: 22, name: { ja: "ウニ・アル・ダヒル", en: "Ameen Al-Dakhil" }, club: { ja: "シュトゥットガルト", en: "VfB Stuttgart" }, 
            age: 24, height: 187, weight: 76, pos: "DF", 
            stats: { atk: ["D","D","E","B","B","A"], def: ["B","A","B","B","-","-"], spd: ["B","B","C","B"], tec: ["B","C","D","D","D","E","D","-"], itl: ["C","B","B","B"], phy: ["A","A","C"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 6, name: { ja: "アマドゥ・オナナ", en: "Amadou Onana" }, club: { ja: "アストン・ヴィラ", en: "Aston Villa" }, 
            age: 24, height: 195, weight: 76, pos: "MF", 
            stats: { atk: ["C","C","D","S","A","S"], def: ["S","A","A","S","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","C","C","E","D","-"], itl: ["B","B","S","A"], phy: ["S","S","B"] } 
        },
        { 
            no: 7, name: { ja: "ケヴィン・デ・ブライネ", en: "Kevin De Bruyne" }, club: { ja: "マンチェスター・シティ", en: "Manchester City" }, 
            age: 34, height: 181, weight: 76, pos: "MF", 
            stats: { atk: ["S","S","B","D","E","D"], def: ["C","C","D","B","-","-"], spd: ["D","C","C","D"], tec: ["S","S","S","A","A","S","D","-"], itl: ["S","S","S","B"], phy: ["C","B","C"] } 
        },
        { 
            no: 8, name: { ja: "ユーリ・ティーレマンス", en: "Youri Tielemans" }, club: { ja: "アストン・ヴィラ", en: "Aston Villa" }, 
            age: 29, height: 176, weight: 72, pos: "MF", 
            stats: { atk: ["S","B","B","D","D","D"], def: ["C","C","C","B","-","-"], spd: ["C","C","C","C"], tec: ["A","S","A","C","B","D","D","-"], itl: ["A","A","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 14, name: { ja: "オレル・マンガラ", en: "Orel Mangala" }, club: { ja: "エヴァートン", en: "Everton" }, 
            age: 28, height: 178, weight: 75, pos: "MF", 
            stats: { atk: ["C","D","E","C","C","C"], def: ["B","A","B","A","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","E","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 16, name: { ja: "アルテュール・フェルメーレン", en: "Arthur Vermeeren" }, club: { ja: "RBライプツィヒ", en: "RB Leipzig" }, 
            age: 21, height: 176, weight: 68, pos: "MF", 
            stats: { atk: ["B","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["C","C","B","C"], tec: ["A","A","A","B","A","D","D","-"], itl: ["A","A","A","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 18, name: { ja: "アルネ・エンゲルス", en: "Arne Engels" }, club: { ja: "セルティック", en: "Celtic" }, 
            age: 22, height: 185, weight: 77, pos: "MF", 
            stats: { atk: ["B","C","C","C","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","C","B"], tec: ["A","A","B","C","B","B","D","-"], itl: ["B","B","B","C"], phy: ["A","A","C"] } 
        },
        { 
            no: 20, name: { ja: "ハンス・ヴァナーケン", en: "Hans Vanaken" }, club: { ja: "クラブ・ブルッヘ", en: "Club Brugge" }, 
            age: 33, height: 195, weight: 77, pos: "MF", 
            stats: { atk: ["A","B","A","A","A","A"], def: ["D","D","E","C","-","-"], spd: ["D","D","E","D"], tec: ["A","A","A","D","C","D","E","-"], itl: ["A","A","A","B"], phy: ["C","A","B"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 9, name: { ja: "ロメル・ルカク", en: "Romelu Lukaku" }, club: { ja: "ナポリ", en: "Napoli" }, 
            age: 33, height: 191, weight: 103, pos: "FW", 
            stats: { atk: ["S","A","A","A","A","A"], def: ["G","G","G","F","-","-"], spd: ["C","B","C","C"], tec: ["C","D","C","D","E","E","E","-"], itl: ["B","A","S","A"], phy: ["D","S","C"] } 
        },
        { 
            no: 10, name: { ja: "レアンドロ・トロサール", en: "Leandro Trossard" }, club: { ja: "アーセナル", en: "Arsenal" }, 
            age: 31, height: 172, weight: 61, pos: "FW", 
            stats: { atk: ["B","S","E","D","E","E"], def: ["C","C","D","A","-","-"], spd: ["C","B","A","C"], tec: ["B","B","A","A","S","D","E","-"], itl: ["A","S","A","D"], phy: ["B","D","C"] } 
        },
        { 
            no: 11, name: { ja: "ドディ・ルケバキオ", en: "Dodi Lukébakio" }, club: { ja: "セビージャ", en: "Sevilla FC" }, 
            age: 28, height: 187, weight: 77, pos: "FW", 
            stats: { atk: ["B","B","D","B","C","B"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["C","C","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 13, name: { ja: "ジュリアン・デュランビル", en: "Julien Duranville" }, club: { ja: "ボルシア・ドルトムント", en: "Borussia Dortmund" }, 
            age: 20, height: 170, weight: 65, pos: "FW", 
            stats: { atk: ["B","C","D","E","E","E"], def: ["D","D","E","D","-","-"], spd: ["S","S","S","S"], tec: ["C","C","B","S","B","D","E","-"], itl: ["C","B","C","C"], phy: ["C","D","E"] } 
        },
        { 
            no: 15, name: { ja: "ヨハン・バカヨコ", en: "Johan Bakayoko" }, club: { ja: "PSV", en: "PSV Eindhoven" }, 
            age: 23, height: 179, weight: 70, pos: "FW", 
            stats: { atk: ["A","B","C","D","D","D"], def: ["C","C","D","B","-","-"], spd: ["S","A","S","A"], tec: ["B","B","A","S","A","C","E","-"], itl: ["B","A","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 17, name: { ja: "シャルル・デ・ケテラーレ", en: "Charles De Ketelaere" }, club: { ja: "アタランタ", en: "Atalanta" }, 
            age: 25, height: 192, weight: 79, pos: "FW/MF", 
            stats: { atk: ["B","B","C","A","B","A"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["A","B","A","A","A","D","E","-"], itl: ["A","S","B","C"], phy: ["A","B","C"] } 
        },
        { 
            no: 19, name: { ja: "ロイス・オペンダ", en: "Loïs Openda" }, club: { ja: "RBライプツィヒ", en: "RB Leipzig" }, 
            age: 26, height: 177, weight: 75, pos: "FW", 
            stats: { atk: ["A","A","B","B","C","B"], def: ["D","D","E","B","-","-"], spd: ["S","S","S","S"], tec: ["C","C","C","A","B","D","E","-"], itl: ["B","S","A","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 24, name: { ja: "マリック・フォファナ", en: "Malick Fofana" }, club: { ja: "オリンピック・リヨン", en: "Olympique Lyonnais" }, 
            age: 21, height: 169, weight: 61, pos: "FW", 
            stats: { atk: ["C","B","D","E","E","E"], def: ["D","D","E","C","-","-"], spd: ["A","S","S","A"], tec: ["C","C","C","A","A","D","E","-"], itl: ["C","C","C","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 25, name: { ja: "ジェレミー・ドク", en: "Jérémy Doku" }, club: { ja: "マンチェスター・シティ", en: "Manchester City" }, 
            age: 24, height: 173, weight: 65, pos: "FW", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["D","D","E","D","-","-"], spd: ["S","S","S","S"], tec: ["C","C","C","S","A","E","E","-"], itl: ["C","B","C","C"], phy: ["B","C","D"] } 
        },
        { 
            no: 26, name: { ja: "シリル・エンゴンゲ", en: "Cyril Ngonge" }, club: { ja: "ナポリ", en: "Napoli" }, 
            age: 26, height: 179, weight: 73, pos: "FW", 
            stats: { atk: ["A","B","C","C","D","C"], def: ["D","C","D","C","-","-"], spd: ["A","A","B","A"], tec: ["C","C","B","A","B","D","E","-"], itl: ["C","B","C","C"], phy: ["B","C","B"] } 
        }
    ]
};