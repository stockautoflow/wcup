export const croData = {
    id: 'cro',
    name: { ja: '🇭🇷 クロアチア', en: '🇭🇷 Croatia' },
    color: '#ff0000', // クロアチアレッド
    teamStats: {
        attributes: { offense: "B", defense: "A", depth: "B", teamwork: "A", intensity: "B", experience: "S" },
        styles: { possession: 60, pressing: 50, attackRoute: 50, playStyle: 70 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "ドミニク・リヴァコヴィッチ", en: "Dominik Livaković" }, club: { ja: "フェネルバフチェ", en: "Fenerbahçe" }, 
            age: 31, height: 188, weight: 79, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","S","A"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["B","S","S","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 12, name: { ja: "ネディリコ・ラブロヴィッチ", en: "Nediljko Labrović" }, club: { ja: "アウクスブルク", en: "FC Augsburg" }, 
            age: 26, height: 196, weight: 88, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","B","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 23, name: { ja: "イヴィツァ・イヴシッチ", en: "Ivica Ivušić" }, club: { ja: "パフォスFC", en: "Pafos FC" }, 
            age: 31, height: 195, weight: 85, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","C","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["C","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "ヨシプ・スタニシッチ", en: "Josip Stanišić" }, club: { ja: "バイエルン・ミュンヘン", en: "Bayern Munich" }, 
            age: 26, height: 187, weight: 77, pos: "DF", 
            stats: { atk: ["C","D","E","C","C","B"], def: ["A","A","B","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","C","C","E","D","-"], itl: ["B","B","B","B"], phy: ["A","B","B"] } 
        },
        { 
            no: 3, name: { ja: "ボルナ・ソサ", en: "Borna Sosa" }, club: { ja: "トリノ", en: "Torino" }, 
            age: 28, height: 187, weight: 79, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["B","B","C"] } 
        },
        { 
            no: 4, name: { ja: "ヨシュコ・グヴァルディオル", en: "Joško Gvardiol" }, club: { ja: "マンチェスター・シティ", en: "Manchester City" }, 
            age: 24, height: 185, weight: 80, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","S"], def: ["S","S","S","B","-","-"], spd: ["A","B","C","A"], tec: ["A","A","B","C","C","E","D","-"], itl: ["S","A","A","B"], phy: ["S","S","B"] } 
        },
        { 
            no: 5, name: { ja: "マルティン・エルリッチ", en: "Martin Erlić" }, club: { ja: "ボローニャ", en: "Bologna" }, 
            age: 28, height: 192, weight: 84, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","A","A","B","-","-"], spd: ["C","C","D","C"], tec: ["C","C","D","E","D","E","D","-"], itl: ["B","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 6, name: { ja: "ヨシプ・シュタロ", en: "Josip Šutalo" }, club: { ja: "アヤックス", en: "Ajax" }, 
            age: 26, height: 190, weight: 82, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","D","D","E","D","-"], itl: ["B","B","B","B"], phy: ["B","A","B"] } 
        },
        { 
            no: 19, name: { ja: "ドゥイェ・チャレタ＝ツァル", en: "Duje Ćaleta-Car" }, club: { ja: "オリンピック・リヨン", en: "Olympique Lyonnais" }, 
            age: 29, height: 192, weight: 89, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","A","B","-","-"], spd: ["C","C","C","C"], tec: ["C","B","D","E","D","E","D","-"], itl: ["C","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 21, name: { ja: "マリン・ポングラチッチ", en: "Marin Pongračić" }, club: { ja: "フィオレンティーナ", en: "Fiorentina" }, 
            age: 28, height: 193, weight: 88, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","A","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","D","D","E","D","-"], itl: ["C","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 22, name: { ja: "ヨシプ・ユラノヴィッチ", en: "Josip Juranović" }, club: { ja: "ウニオン・ベルリン", en: "Union Berlin" }, 
            age: 30, height: 173, weight: 68, pos: "DF", 
            stats: { atk: ["C","C","C","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 7, name: { ja: "ロヴロ・マイェル", en: "Lovro Majer" }, club: { ja: "ヴォルフスブルク", en: "VfL Wolfsburg" }, 
            age: 28, height: 179, weight: 76, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["C","C","D","B","-","-"], spd: ["B","B","B","B"], tec: ["A","A","A","B","B","C","D","-"], itl: ["A","A","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 8, name: { ja: "マテオ・コヴァチッチ", en: "Mateo Kovačić" }, club: { ja: "マンチェスター・シティ", en: "Manchester City" }, 
            age: 32, height: 178, weight: 78, pos: "MF", 
            stats: { atk: ["B","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","A","B"], tec: ["A","A","A","S","S","D","D","-"], itl: ["A","A","A","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 10, name: { ja: "ルカ・モドリッチ", en: "Luka Modrić" }, club: { ja: "レアル・マドリード", en: "Real Madrid" }, 
            age: 40, height: 172, weight: 66, pos: "MF", 
            stats: { atk: ["B","B","C","E","E","E"], def: ["C","C","D","C","-","-"], spd: ["E","E","D","E"], tec: ["S","S","S","A","S","S","E","-"], itl: ["S","S","S","C"], phy: ["D","C","C"] } 
        },
        { 
            no: 11, name: { ja: "マリオ・パシャリッチ", en: "Mario Pašalić" }, club: { ja: "アタランタ", en: "Atalanta" }, 
            age: 31, height: 188, weight: 82, pos: "MF", 
            stats: { atk: ["A","A","C","A","A","A"], def: ["B","B","C","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","B","D","D","-"], itl: ["A","A","A","A"], phy: ["A","A","B"] } 
        },
        { 
            no: 15, name: { ja: "ルカ・スチッチ", en: "Luka Sučić" }, club: { ja: "レアル・ソシエダ", en: "Real Sociedad" }, 
            age: 23, height: 185, weight: 80, pos: "MF", 
            stats: { atk: ["A","B","C","D","D","C"], def: ["C","C","D","B","-","-"], spd: ["B","B","B","B"], tec: ["A","A","A","B","B","C","D","-"], itl: ["B","A","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 16, name: { ja: "クリスティヤン・ヤキッチ", en: "Kristijan Jakić" }, club: { ja: "アウクスブルク", en: "FC Augsburg" }, 
            age: 29, height: 181, weight: 76, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","A","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","E","D","-"], itl: ["B","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 20, name: { ja: "ペタル・スチッチ", en: "Petar Sučić" }, club: { ja: "ディナモ・ザグレブ", en: "Dinamo Zagreb" }, 
            age: 22, height: 184, weight: 75, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","D","D","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 25, name: { ja: "マルティン・バトゥリナ", en: "Martin Baturina" }, club: { ja: "ディナモ・ザグレブ", en: "Dinamo Zagreb" }, 
            age: 23, height: 172, weight: 68, pos: "MF", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["C","C","D","C","-","-"], spd: ["B","B","A","B"], tec: ["A","A","A","A","A","C","D","-"], itl: ["B","A","B","C"], phy: ["B","C","C"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 9, name: { ja: "アンドレイ・クラマリッチ", en: "Andrej Kramarić" }, club: { ja: "ホッフェンハイム", en: "TSG Hoffenheim" }, 
            age: 35, height: 177, weight: 73, pos: "FW", 
            stats: { atk: ["A","A","B","C","C","C"], def: ["D","D","E","C","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","B","B","D","E","-"], itl: ["A","A","A","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 13, name: { ja: "ニコラ・ヴラシッチ", en: "Nikola Vlašić" }, club: { ja: "トリノ", en: "Torino" }, 
            age: 28, height: 179, weight: 79, pos: "FW/MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["C","C","D","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","A","B","D","E","-"], itl: ["B","B","B","C"], phy: ["A","A","C"] } 
        },
        { 
            no: 14, name: { ja: "イヴァン・ペリシッチ", en: "Ivan Perišić" }, club: { ja: "PSV", en: "PSV Eindhoven" }, 
            age: 37, height: 186, weight: 80, pos: "FW/DF", 
            stats: { atk: ["B","B","C","C","C","B"], def: ["C","C","D","B","-","-"], spd: ["C","C","C","C"], tec: ["A","A","B","B","B","C","D","-"], itl: ["A","A","A","C"], phy: ["C","B","C"] } 
        },
        { 
            no: 17, name: { ja: "ブルーノ・ペトコヴィッチ", en: "Bruno Petković" }, club: { ja: "ディナモ・ザグレブ", en: "Dinamo Zagreb" }, 
            age: 31, height: 193, weight: 88, pos: "FW", 
            stats: { atk: ["B","B","A","A","A","A"], def: ["D","D","E","C","-","-"], spd: ["D","D","D","D"], tec: ["B","B","C","C","B","E","E","-"], itl: ["B","B","B","A"], phy: ["B","S","B"] } 
        },
        { 
            no: 18, name: { ja: "ルカ・イヴァヌシェツ", en: "Luka Ivanušec" }, club: { ja: "フェイエノールト", en: "Feyenoord" }, 
            age: 27, height: 175, weight: 71, pos: "FW/MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","A","B","D","E","-"], itl: ["B","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 24, name: { ja: "マルコ・パシャリッチ", en: "Marco Pašalić" }, club: { ja: "リエカ", en: "HNK Rijeka" }, 
            age: 25, height: 177, weight: 74, pos: "FW", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["B","B","A","B"], tec: ["B","B","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 26, name: { ja: "アンテ・ブディミル", en: "Ante Budimir" }, club: { ja: "オサスナ", en: "CA Osasuna" }, 
            age: 34, height: 190, weight: 75, pos: "FW", 
            stats: { atk: ["A","A","A","S","S","S"], def: ["D","D","E","B","-","-"], spd: ["D","D","D","D"], tec: ["C","C","D","D","D","E","E","-"], itl: ["B","B","A","S"], phy: ["B","A","B"] } 
        }
    ]
};