export const suiData = {
    id: 'sui',
    name: { ja: '🇨🇭 スイス', en: '🇨🇭 Switzerland' },
    color: '#ff0000', // スイスレッド
    teamStats: {
        attributes: { offense: "B", defense: "A", depth: "B", teamwork: "A", intensity: "B", experience: "A" },
        styles: { possession: 55, pressing: 50, attackRoute: 40, playStyle: 70 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "グレゴール・コベル", en: "Gregor Kobel" }, club: { ja: "ドルトムント", en: "Borussia Dortmund" }, 
            age: 28, height: 195, weight: 88, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","S","S"], spd: ["D","D","C","D"], tec: ["C","B","D","E","E","E","E","A"], itl: ["B","S","S","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 12, name: { ja: "イボン・ムボゴ", en: "Yvon Mvogo" }, club: { ja: "ロリアン", en: "FC Lorient" }, 
            age: 32, height: 190, weight: 84, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","B","C"], phy: ["C","B","B"] } 
        },
        { 
            no: 21, name: { ja: "マルビン・ケラー", en: "Marvin Keller" }, club: { ja: "ヤングボーイズ", en: "Young Boys" }, 
            age: 23, height: 188, weight: 80, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["C","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "ミロ・ミュハイム", en: "Miro Muheim" }, club: { ja: "ハンブルガーSV", en: "Hamburger SV" }, 
            age: 28, height: 182, weight: 76, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 3, name: { ja: "シルバン・ビドマー", en: "Silvan Widmer" }, club: { ja: "マインツ", en: "1. FSV Mainz 05" }, 
            age: 33, height: 183, weight: 79, pos: "DF", 
            stats: { atk: ["C","C","D","C","C","B"], def: ["B","B","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","B","C","D","C","-"], itl: ["B","B","B","C"], phy: ["A","B","C"] } 
        },
        { 
            no: 4, name: { ja: "ニコ・エルベディ", en: "Nico Elvedi" }, club: { ja: "ボルシアMG", en: "Borussia MG" }, 
            age: 29, height: 189, weight: 78, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["A","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","D","D","E","D","-"], itl: ["B","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 5, name: { ja: "マヌエル・アカンジ", en: "Manuel Akanji" }, club: { ja: "インテル", en: "Inter Milan" }, 
            age: 30, height: 187, weight: 85, pos: "DF", 
            stats: { atk: ["C","D","E","A","A","S"], def: ["S","S","S","B","-","-"], spd: ["A","A","B","A"], tec: ["A","A","B","D","C","E","D","-"], itl: ["S","S","A","A"], phy: ["S","S","B"] } 
        },
        { 
            no: 13, name: { ja: "リカルド・ロドリゲス", en: "Ricardo Rodriguez" }, club: { ja: "ベティス", en: "Real Betis" }, 
            age: 33, height: 180, weight: 77, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["D","D","D","D"], tec: ["A","A","B","B","B","D","C","-"], itl: ["A","A","A","B"], phy: ["C","C","C"] } 
        },
        { 
            no: 18, name: { ja: "エライ・キュマルト", en: "Eray Cömert" }, club: { ja: "バレンシア", en: "Valencia CF" }, 
            age: 28, height: 183, weight: 80, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","A"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","B","D","D","D","E","D","-"], itl: ["C","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 24, name: { ja: "オーレル・アメンダ", en: "Aurèle Amenda" }, club: { ja: "フランクフルト", en: "Eintracht Frankfurt" }, 
            age: 22, height: 194, weight: 86, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","E","D","E","D","-"], itl: ["C","C","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 25, name: { ja: "ルカ・ジャック", en: "Luca Jaquez" }, club: { ja: "シュツットガルト", en: "VfB Stuttgart" }, 
            age: 23, height: 187, weight: 80, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","A"], def: ["B","B","B","B","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","B","C"], phy: ["B","A","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 6, name: { ja: "デニス・ザカリア", en: "Denis Zakaria" }, club: { ja: "モナコ", en: "AS Monaco" }, 
            age: 29, height: 191, weight: 81, pos: "MF", 
            stats: { atk: ["B","C","D","C","C","C"], def: ["A","A","B","A","-","-"], spd: ["A","A","B","A"], tec: ["B","B","B","C","B","D","D","-"], itl: ["B","B","B","C"], phy: ["S","S","C"] } 
        },
        { 
            no: 8, name: { ja: "レモ・フロイラー", en: "Remo Freuler" }, club: { ja: "ボローニャ", en: "Bologna" }, 
            age: 34, height: 181, weight: 80, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","A","B","A","-","-"], spd: ["D","D","D","D"], tec: ["B","B","C","C","C","D","D","-"], itl: ["A","A","A","B"], phy: ["B","B","B"] } 
        },
        { 
            no: 9, name: { ja: "ヨハン・マンザンビ", en: "Johan Manzambi" }, club: { ja: "フライブルク", en: "SC Freiburg" }, 
            age: 20, height: 185, weight: 78, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","C","C","D","D","-"], itl: ["C","C","B","C"], phy: ["B","B","C"] } 
        },
        { 
            no: 10, name: { ja: "グラニト・ジャカ", en: "Granit Xhaka" }, club: { ja: "サンダーランド", en: "Sunderland" }, 
            age: 33, height: 186, weight: 82, pos: "MF", 
            stats: { atk: ["A","B","C","D","D","C"], def: ["B","A","B","A","-","-"], spd: ["E","E","D","E"], tec: ["S","S","A","C","B","D","D","-"], itl: ["S","S","S","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 14, name: { ja: "アルドン・ヤシャリ", en: "Ardon Jashari" }, club: { ja: "ミラン", en: "AC Milan" }, 
            age: 23, height: 181, weight: 75, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["A","A","B","C","B","D","D","-"], itl: ["B","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 15, name: { ja: "ジブリル・ソウ", en: "Djibril Sow" }, club: { ja: "セビージャ", en: "Sevilla FC" }, 
            age: 29, height: 184, weight: 76, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","A","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","C","C","D","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 20, name: { ja: "ミシェル・エービシェル", en: "Michel Aebischer" }, club: { ja: "ピサ", en: "Pisa" }, 
            age: 29, height: 183, weight: 74, pos: "MF", 
            stats: { atk: ["B","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","D","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 22, name: { ja: "ファビアン・リーダー", en: "Fabian Rieder" }, club: { ja: "アウクスブルク", en: "FC Augsburg" }, 
            age: 24, height: 181, weight: 74, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["C","C","D","B","-","-"], spd: ["B","B","B","B"], tec: ["A","A","A","B","B","C","D","-"], itl: ["B","A","B","C"], phy: ["B","B","B"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 7, name: { ja: "ブレール・エンボロ", en: "Breel Embolo" }, club: { ja: "レンヌ", en: "Stade Rennais" }, 
            age: 29, height: 187, weight: 88, pos: "FW", 
            stats: { atk: ["A","B","C","A","B","A"], def: ["D","D","E","C","-","-"], spd: ["A","A","B","A"], tec: ["C","C","D","B","C","E","E","-"], itl: ["C","B","B","B"], phy: ["A","S","C"] } 
        },
        { 
            no: 11, name: { ja: "ダン・エンドイェ", en: "Dan Ndoye" }, club: { ja: "N・フォレスト", en: "Nottingham Forest" }, 
            age: 25, height: 184, weight: 74, pos: "FW", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["C","C","D","B","-","-"], spd: ["S","S","A","S"], tec: ["B","B","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 16, name: { ja: "クリスティアン・ファスナハト", en: "Christian Fassnacht" }, club: { ja: "ヤングボーイズ", en: "Young Boys" }, 
            age: 32, height: 185, weight: 74, pos: "FW", 
            stats: { atk: ["B","B","C","B","C","B"], def: ["C","C","D","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","B","B","D","E","-"], itl: ["B","B","B","B"], phy: ["B","B","B"] } 
        },
        { 
            no: 17, name: { ja: "ルベン・バルガス", en: "Ruben Vargas" }, club: { ja: "セビージャ", en: "Sevilla FC" }, 
            age: 27, height: 179, weight: 68, pos: "FW", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","A","B","D","E","-"], itl: ["B","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 19, name: { ja: "ノア・オカフォー", en: "Noah Okafor" }, club: { ja: "リーズ", en: "Leeds United" }, 
            age: 26, height: 185, weight: 85, pos: "FW", 
            stats: { atk: ["A","B","C","B","C","B"], def: ["D","D","E","C","-","-"], spd: ["S","S","A","S"], tec: ["B","B","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 23, name: { ja: "ゼキ・アムドゥニ", en: "Zeki Amdouni" }, club: { ja: "バーンリー", en: "Burnley" }, 
            age: 25, height: 185, weight: 79, pos: "FW", 
            stats: { atk: ["A","A","B","C","C","C"], def: ["D","D","E","C","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","B","B","D","E","-"], itl: ["B","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 26, name: { ja: "セドリク・イッテン", en: "Cedric Itten" }, club: { ja: "デュッセルドルフ", en: "Fortuna Düsseldorf" }, 
            age: 29, height: 189, weight: 81, pos: "FW", 
            stats: { atk: ["A","B","C","A","A","A"], def: ["D","D","E","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","C","C","E","E","-"], itl: ["C","B","B","A"], phy: ["A","S","B"] } 
        }
    ]
};