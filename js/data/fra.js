export const fraData = {
    id: 'fra',
    name: { ja: '🇫🇷 フランス', en: '🇫🇷 France' },
    color: '#002395', // フランスブルー
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "ブライス・サンバ", en: "Brice Samba" }, club: { ja: "レンヌ", en: "Stade Rennais" }, 
            age: 32, height: 186, weight: 79, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","A","B"], spd: ["D","D","C","D"], tec: ["C","B","E","E","E","E","E","B"], itl: ["C","C","B","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 16, name: { ja: "マイク・メニャン", en: "Mike Maignan" }, club: { ja: "ACミラン", en: "AC Milan" }, 
            age: 30, height: 191, weight: 89, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","A"], def: ["C","C","C","C","S","S"], spd: ["C","C","B","C"], tec: ["C","B","C","E","E","E","E","S"], itl: ["B","S","S","B"], phy: ["B","A","B"] } 
        },
        { 
            no: 23, name: { ja: "ロビン・リッサー", en: "Robin Risser" }, club: { ja: "RCランス", en: "RC Lens" }, 
            age: 21, height: 193, weight: 85, pos: "GK", 
            stats: { atk: ["E","F","E","E","E","C"], def: ["D","C","C","C","C","C"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["C","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "マロ・ギュスト", en: "Malo Gusto" }, club: { ja: "チェルシー", en: "Chelsea" }, 
            age: 23, height: 179, weight: 73, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["A","B","C","A","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","A","B","D","C","-"], itl: ["B","B","B","C"], phy: ["S","B","B"] } 
        },
        { 
            no: 3, name: { ja: "リュカ・ディニュ", en: "Lucas Digne" }, club: { ja: "アストン・ヴィラ", en: "Aston Villa" }, 
            age: 32, height: 178, weight: 74, pos: "DF", 
            stats: { atk: ["B","C","D","C","C","C"], def: ["B","B","C","B","-","-"], spd: ["C","C","C","C"], tec: ["A","A","B","C","C","A","C","-"], itl: ["B","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 4, name: { ja: "ダヨ・ウパメカノ", en: "Dayot Upamecano" }, club: { ja: "バイエルン・ミュンヘン", en: "Bayern Munich" }, 
            age: 27, height: 186, weight: 83, pos: "DF", 
            stats: { atk: ["C","D","E","A","A","S"], def: ["A","A","A","B","-","-"], spd: ["A","B","C","A"], tec: ["B","A","C","D","C","E","D","-"], itl: ["B","B","B","A"], phy: ["B","S","B"] } 
        },
        { 
            no: 5, name: { ja: "ジュール・クンデ", en: "Jules Koundé" }, club: { ja: "バルセロナ", en: "Barcelona" }, 
            age: 27, height: 180, weight: 75, pos: "DF", 
            stats: { atk: ["C","C","E","B","B","A"], def: ["S","A","A","A","-","-"], spd: ["A","A","A","A"], tec: ["A","A","B","B","B","D","C","-"], itl: ["S","A","A","B"], phy: ["S","A","B"] } 
        },
        { 
            no: 15, name: { ja: "イブラヒマ・コナテ", en: "Ibrahima Konaté" }, club: { ja: "リヴァプール", en: "Liverpool" }, 
            age: 27, height: 194, weight: 95, pos: "DF", 
            stats: { atk: ["C","D","E","S","A","S"], def: ["S","A","S","B","-","-"], spd: ["A","B","C","A"], tec: ["B","B","C","D","D","E","D","-"], itl: ["A","B","A","A"], phy: ["B","S","C"] } 
        },
        { 
            no: 17, name: { ja: "ウィリアム・サリバ", en: "William Saliba" }, club: { ja: "アーセナル", en: "Arsenal" }, 
            age: 25, height: 192, weight: 83, pos: "DF", 
            stats: { atk: ["C","D","E","A","A","A"], def: ["S","S","S","B","-","-"], spd: ["A","B","B","A"], tec: ["A","A","C","D","C","E","D","-"], itl: ["S","S","A","A"], phy: ["A","S","A"] } 
        },
        { 
            no: 19, name: { ja: "テオ・エルナンデス", en: "Theo Hernández" }, club: { ja: "アル・ヒラル", en: "Al-Hilal" }, 
            age: 28, height: 184, weight: 81, pos: "DF", 
            stats: { atk: ["A","B","C","C","C","B"], def: ["A","B","B","A","-","-"], spd: ["S","S","A","S"], tec: ["B","B","B","S","A","C","C","-"], itl: ["B","B","A","C"], phy: ["S","A","B"] } 
        },
        { 
            no: 21, name: { ja: "リュカ・エルナンデス", en: "Lucas Hernández" }, club: { ja: "パリ・サンジェルマン", en: "Paris Saint-Germain" }, 
            age: 30, height: 184, weight: 79, pos: "DF", 
            stats: { atk: ["C","D","E","B","B","B"], def: ["A","S","A","A","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","C","C","E","C","-"], itl: ["A","A","S","B"], phy: ["A","A","E"] } 
        },
        { 
            no: 26, name: { ja: "マクサンス・ラクロワ", en: "Maxence Lacroix" }, club: { ja: "クリスタル・パレス", en: "Crystal Palace" }, 
            age: 26, height: 190, weight: 88, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["B","A","A","B","-","-"], spd: ["A","B","C","A"], tec: ["C","B","C","D","D","E","D","-"], itl: ["B","B","B","A"], phy: ["B","S","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 6, name: { ja: "マヌ・コネ", en: "Manu Koné" }, club: { ja: "ASローマ", en: "AS Roma" }, 
            age: 25, height: 185, weight: 80, pos: "MF", 
            stats: { atk: ["B","C","D","C","C","C"], def: ["A","A","B","A","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","A","A","D","D","-"], itl: ["B","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 8, name: { ja: "オーレリアン・チュアメニ", en: "Aurélien Tchouaméni" }, club: { ja: "レアル・マドリード", en: "Real Madrid" }, 
            age: 26, height: 187, weight: 81, pos: "MF", 
            stats: { atk: ["A","B","C","A","A","A"], def: ["S","S","A","S","-","-"], spd: ["B","B","C","B"], tec: ["S","S","A","C","B","D","D","-"], itl: ["S","A","A","B"], phy: ["S","S","B"] } 
        },
        { 
            no: 13, name: { ja: "エンゴロ・カンテ", en: "N'Golo Kanté" }, club: { ja: "フェネルバフチェ", en: "Fenerbahçe" }, 
            age: 35, height: 168, weight: 68, pos: "MF", 
            stats: { atk: ["C","C","E","E","E","C"], def: ["S","S","B","S","-","-"], spd: ["B","B","A","B"], tec: ["A","B","B","B","B","E","D","-"], itl: ["S","S","S","C"], phy: ["S","B","B"] } 
        },
        { 
            no: 14, name: { ja: "アドリアン・ラビオ", en: "Adrien Rabiot" }, club: { ja: "ACミラン", en: "AC Milan" }, 
            age: 31, height: 188, weight: 71, pos: "MF", 
            stats: { atk: ["B","B","C","A","A","B"], def: ["A","A","B","A","-","-"], spd: ["B","B","C","B"], tec: ["A","A","A","B","B","D","D","-"], itl: ["A","A","A","B"], phy: ["S","A","B"] } 
        },
        { 
            no: 18, name: { ja: "ウォーレン・ザイール＝エメリ", en: "Warren Zaïre-Emery" }, club: { ja: "パリ・サンジェルマン", en: "Paris Saint-Germain" }, 
            age: 20, height: 178, weight: 68, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["A","A","C","A","-","-"], spd: ["B","B","B","B"], tec: ["A","A","A","B","A","D","D","-"], itl: ["A","A","A","C"], phy: ["A","B","B"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 7, name: { ja: "ウスマン・デンベレ", en: "Ousmane Dembélé" }, club: { ja: "パリ・サンジェルマン", en: "Paris Saint-Germain" }, 
            age: 29, height: 178, weight: 67, pos: "FW", 
            stats: { atk: ["A","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["S","S","S","S"], tec: ["B","B","A","S","S","B","D","-"], itl: ["B","A","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 9, name: { ja: "マルクス・テュラム", en: "Marcus Thuram" }, club: { ja: "インテル", en: "Inter Milan" }, 
            age: 28, height: 192, weight: 90, pos: "FW", 
            stats: { atk: ["A","A","B","A","A","A"], def: ["D","D","E","B","-","-"], spd: ["A","A","B","A"], tec: ["B","C","C","A","B","E","D","-"], itl: ["B","B","B","A"], phy: ["A","S","A"] } 
        },
        { 
            no: 10, name: { ja: "キリアン・エンバペ", en: "Kylian Mbappé" }, club: { ja: "レアル・マドリード", en: "Real Madrid" }, 
            age: 27, height: 178, weight: 75, pos: "FW", 
            stats: { atk: ["S","S","S","B","B","A"], def: ["E","E","E","D","-","-"], spd: ["S","S","S","S"], tec: ["A","B","A","S","S","B","D","-"], itl: ["A","S","S","B"], phy: ["A","A","A"] } 
        },
        { 
            no: 11, name: { ja: "マイケル・オリーズ", en: "Michael Olise" }, club: { ja: "バイエルン・ミュンヘン", en: "Bayern Munich" }, 
            age: 24, height: 184, weight: 73, pos: "FW", 
            stats: { atk: ["A","A","B","D","D","C"], def: ["D","C","D","B","-","-"], spd: ["A","A","S","A"], tec: ["A","A","S","A","S","S","D","-"], itl: ["A","S","B","C"], phy: ["B","B","C"] } 
        },
        { 
            no: 12, name: { ja: "ブラッドリー・バルコラ", en: "Bradley Barcola" }, club: { ja: "パリ・サンジェルマン", en: "Paris Saint-Germain" }, 
            age: 23, height: 182, weight: 70, pos: "FW", 
            stats: { atk: ["A","B","C","D","D","C"], def: ["D","D","E","B","-","-"], spd: ["S","S","S","S"], tec: ["B","B","B","S","A","D","D","-"], itl: ["B","A","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 20, name: { ja: "デジレ・ドゥエ", en: "Désiré Doué" }, club: { ja: "パリ・サンジェルマン", en: "Paris Saint-Germain" }, 
            age: 21, height: 181, weight: 73, pos: "FW/MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","C","D","C","-","-"], spd: ["A","A","S","A"], tec: ["B","B","A","S","S","D","D","-"], itl: ["B","A","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 22, name: { ja: "ジャン＝フィリップ・マテタ", en: "Jean-Philippe Mateta" }, club: { ja: "クリスタル・パレス", en: "Crystal Palace" }, 
            age: 28, height: 192, weight: 88, pos: "FW", 
            stats: { atk: ["A","A","A","S","A","S"], def: ["D","D","E","B","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","C","C","E","E","-"], itl: ["C","B","B","A"], phy: ["B","S","B"] } 
        },
        { 
            no: 24, name: { ja: "ラヤン・シェルキ", en: "Rayan Cherki" }, club: { ja: "マンチェスター・シティ", en: "Manchester City" }, 
            age: 22, height: 176, weight: 71, pos: "FW/MF", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["E","E","F","D","-","-"], spd: ["B","B","S","B"], tec: ["A","A","S","A","S","B","D","-"], itl: ["B","S","C","D"], phy: ["C","C","C"] } 
        },
        { 
            no: 25, name: { ja: "マグネス・アクリウシュ", en: "Maghnes Akliouche" }, club: { ja: "モナコ", en: "AS Monaco" }, 
            age: 24, height: 183, weight: 72, pos: "FW/MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","C","D","C","-","-"], spd: ["B","B","A","B"], tec: ["A","A","A","A","A","C","D","-"], itl: ["B","A","B","C"], phy: ["B","C","B"] } 
        }
    ]
};