export const braData = {
    id: 'bra',
    name: { ja: '🇧🇷 ブラジル', en: '🇧🇷 Brazil' },
    color: '#009b3a', // ブラジルグリーン（白文字が見やすいように調整）
    teamStats: {
        attributes: { offense: "S", defense: "A", depth: "A", teamwork: "C", intensity: "B", experience: "A" },
        styles: { possession: 55, pressing: 50, attackRoute: 35, playStyle: 20 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "アリソン", en: "Alisson" }, club: { ja: "リヴァプール", en: "Liverpool" }, 
            age: 33, height: 193, weight: 91, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","S","S"], spd: ["D","D","C","D"], tec: ["B","A","D","E","E","E","E","S"], itl: ["A","S","S","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 12, name: { ja: "ベント", en: "Bento" }, club: { ja: "アル・ナスル", en: "Al-Nassr" }, 
            age: 27, height: 190, weight: 84, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","B","E","E","E","E","E","B"], itl: ["C","C","B","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 23, name: { ja: "エデルソン", en: "Ederson" }, club: { ja: "マンチェスター・シティ", en: "Manchester City" }, 
            age: 32, height: 188, weight: 86, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","S","A"], spd: ["D","D","C","D"], tec: ["A","S","C","E","E","E","E","S"], itl: ["A","S","A","C"], phy: ["B","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "ダニーロ", en: "Danilo" }, club: { ja: "ユヴェントス", en: "Juventus" }, 
            age: 34, height: 184, weight: 78, pos: "DF", 
            stats: { atk: ["C","C","D","C","C","C"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","C","-"], itl: ["A","B","A","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 3, name: { ja: "ミリトン", en: "Éder Militão" }, club: { ja: "レアル・マドリード", en: "Real Madrid" }, 
            age: 28, height: 186, weight: 78, pos: "DF", 
            stats: { atk: ["C","D","E","A","A","S"], def: ["S","S","S","B","-","-"], spd: ["A","A","B","A"], tec: ["B","B","C","D","C","E","D","-"], itl: ["A","A","A","A"], phy: ["S","S","C"] } 
        },
        { 
            no: 4, name: { ja: "マルキーニョス", en: "Marquinhos" }, club: { ja: "パリ・サンジェルマン", en: "Paris Saint-Germain" }, 
            age: 32, height: 183, weight: 75, pos: "DF", 
            stats: { atk: ["C","D","E","S","A","S"], def: ["S","S","A","B","-","-"], spd: ["B","B","B","B"], tec: ["A","A","B","D","C","E","D","-"], itl: ["S","S","A","A"], phy: ["A","A","B"] } 
        },
        { 
            no: 6, name: { ja: "ガブリエウ・マガリャイス", en: "Gabriel Magalhães" }, club: { ja: "アーセナル", en: "Arsenal" }, 
            age: 28, height: 190, weight: 87, pos: "DF", 
            stats: { atk: ["C","C","E","S","S","S"], def: ["S","A","S","B","-","-"], spd: ["B","B","C","B"], tec: ["B","A","C","D","D","E","D","-"], itl: ["A","B","A","S"], phy: ["A","S","B"] } 
        },
        { 
            no: 13, name: { ja: "ヴァンデウソン", en: "Vanderson" }, club: { ja: "モナコ", en: "AS Monaco" }, 
            age: 24, height: 180, weight: 74, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","A","B","D","C","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 14, name: { ja: "ムリーロ", en: "Murillo" }, club: { ja: "ノッティンガム・フォレスト", en: "Nottingham Forest" }, 
            age: 23, height: 184, weight: 80, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["A","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["B","A","C","D","D","E","D","-"], itl: ["B","B","B","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 16, name: { ja: "アブネル", en: "Abner" }, club: { ja: "オリンピック・リヨン", en: "Olympique Lyonnais" }, 
            age: 26, height: 181, weight: 75, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","B","D","C","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 25, name: { ja: "ギリェルメ・アラーナ", en: "Guilherme Arana" }, club: { ja: "アトレチコ・ミネイロ", en: "Atlético Mineiro" }, 
            age: 29, height: 176, weight: 72, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","B","D","C","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 5, name: { ja: "ブルーノ・ギマランイス", en: "Bruno Guimarães" }, club: { ja: "ニューカッスル", en: "Newcastle United" }, 
            age: 28, height: 182, weight: 74, pos: "MF", 
            stats: { atk: ["B","B","C","C","C","C"], def: ["A","A","B","S","-","-"], spd: ["C","C","B","C"], tec: ["S","S","A","C","B","D","D","-"], itl: ["S","A","S","C"], phy: ["S","A","B"] } 
        },
        { 
            no: 8, name: { ja: "ルーカス・パケタ", en: "Lucas Paquetá" }, club: { ja: "ウェストハム", en: "West Ham United" }, 
            age: 28, height: 180, weight: 72, pos: "MF", 
            stats: { atk: ["B","B","B","C","C","C"], def: ["B","B","C","A","-","-"], spd: ["C","C","B","C"], tec: ["A","A","S","B","A","C","D","-"], itl: ["A","S","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 15, name: { ja: "ジョアン・ゴメス", en: "João Gomes" }, club: { ja: "ウォルヴァーハンプトン", en: "Wolverhampton" }, 
            age: 25, height: 176, weight: 74, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["A","A","B","S","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","C","C","E","D","-"], itl: ["B","B","A","C"], phy: ["S","A","B"] } 
        },
        { 
            no: 18, name: { ja: "アンドレアス・ペレイラ", en: "Andreas Pereira" }, club: { ja: "フラム", en: "Fulham" }, 
            age: 30, height: 178, weight: 71, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["C","C","D","B","-","-"], spd: ["C","C","B","C"], tec: ["A","A","A","C","B","S","D","-"], itl: ["B","A","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 24, name: { ja: "エデルソン", en: "Éderson" }, club: { ja: "アタランタ", en: "Atalanta" }, 
            age: 26, height: 183, weight: 78, pos: "MF", 
            stats: { atk: ["B","C","D","C","C","C"], def: ["A","A","B","S","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","C","C","D","D","-"], itl: ["B","B","A","C"], phy: ["S","A","B"] } 
        },
        { 
            no: 26, name: { ja: "ジェルソン", en: "Gerson" }, club: { ja: "フラメンゴ", en: "Flamengo" }, 
            age: 29, height: 180, weight: 76, pos: "MF", 
            stats: { atk: ["B","B","C","C","C","C"], def: ["B","B","C","B","-","-"], spd: ["C","C","B","C"], tec: ["A","A","B","B","B","D","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 7, name: { ja: "ヴィニシウス・ジュニオール", en: "Vinícius Jr." }, club: { ja: "レアル・マドリード", en: "Real Madrid" }, 
            age: 25, height: 176, weight: 73, pos: "FW", 
            stats: { atk: ["S","S","B","E","E","D"], def: ["E","E","F","D","-","-"], spd: ["S","S","S","S"], tec: ["B","B","A","S","S","C","E","-"], itl: ["A","S","A","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 9, name: { ja: "エンドリッキ", en: "Endrick" }, club: { ja: "レアル・マドリード", en: "Real Madrid" }, 
            age: 19, height: 173, weight: 72, pos: "FW", 
            stats: { atk: ["A","A","C","C","C","B"], def: ["D","D","E","C","-","-"], spd: ["A","S","A","A"], tec: ["C","C","C","A","A","D","E","-"], itl: ["B","A","S","B"], phy: ["B","A","B"] } 
        },
        { 
            no: 10, name: { ja: "ネイマール", en: "Neymar" }, club: { ja: "アル・ヒラル", en: "Al-Hilal" }, 
            age: 34, height: 175, weight: 68, pos: "FW", 
            stats: { atk: ["A","S","S","E","E","E"], def: ["F","F","G","E","-","-"], spd: ["C","C","A","C"], tec: ["S","S","S","A","S","S","E","-"], itl: ["S","S","B","D"], phy: ["C","D","E"] } 
        },
        { 
            no: 11, name: { ja: "ラフィーニャ", en: "Raphinha" }, club: { ja: "バルセロナ", en: "Barcelona" }, 
            age: 29, height: 176, weight: 68, pos: "FW", 
            stats: { atk: ["A","A","B","D","D","C"], def: ["C","C","D","S","-","-"], spd: ["A","A","A","S"], tec: ["A","A","A","A","A","S","D","-"], itl: ["A","A","S","C"], phy: ["S","B","B"] } 
        },
        { 
            no: 17, name: { ja: "ロドリゴ", en: "Rodrygo" }, club: { ja: "レアル・マドリード", en: "Real Madrid" }, 
            age: 25, height: 174, weight: 64, pos: "FW", 
            stats: { atk: ["A","A","A","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["A","S","S","A"], tec: ["A","A","A","S","S","A","D","-"], itl: ["A","S","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 19, name: { ja: "ガブリエウ・マルティネッリ", en: "Gabriel Martinelli" }, club: { ja: "アーセナル", en: "Arsenal" }, 
            age: 24, height: 178, weight: 75, pos: "FW", 
            stats: { atk: ["A","B","C","D","D","C"], def: ["C","C","D","A","-","-"], spd: ["S","S","A","S"], tec: ["B","B","B","S","A","D","E","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 20, name: { ja: "サヴィーニョ", en: "Savinho" }, club: { ja: "マンチェスター・シティ", en: "Manchester City" }, 
            age: 22, height: 176, weight: 66, pos: "FW", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["S","S","S","S"], tec: ["B","B","B","S","S","D","E","-"], itl: ["B","A","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 21, name: { ja: "ルイス・エンリキ", en: "Luiz Henrique" }, club: { ja: "ボタフォゴ", en: "Botafogo" }, 
            age: 25, height: 182, weight: 78, pos: "FW", 
            stats: { atk: ["B","B","C","C","C","B"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","A","A","D","E","-"], itl: ["C","B","B","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 22, name: { ja: "イゴール・ジェズス", en: "Igor Jesus" }, club: { ja: "ボタフォゴ", en: "Botafogo" }, 
            age: 25, height: 180, weight: 76, pos: "FW", 
            stats: { atk: ["B","B","C","A","A","A"], def: ["D","D","E","B","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","B","B","E","E","-"], itl: ["C","B","B","A"], phy: ["A","S","B"] } 
        }
    ]
};