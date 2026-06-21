export const colData = {
    id: 'col',
    name: { ja: '🇨🇴 コロンビア', en: '🇨🇴 Colombia' },
    color: '#fcd116', // コロンビアイエロー（文字が見やすいように調整）
    teamStats: {
        attributes: { offense: "A", defense: "B", depth: "B", teamwork: "A", intensity: "A", experience: "A" },
        styles: { possession: 55, pressing: 60, attackRoute: 40, playStyle: 60 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "ダビド・オスピナ", en: "David Ospina" }, club: { ja: "アトレティコ・ナシオナル", en: "Atlético Nacional" }, 
            age: 37, height: 183, weight: 80, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","C"], def: ["C","C","C","C","B","C"], spd: ["E","E","D","E"], tec: ["C","C","E","E","E","E","E","C"], itl: ["B","B","A","C"], phy: ["C","B","C"] } 
        },
        { 
            no: 12, name: { ja: "カミロ・バルガス", en: "Camilo Vargas" }, club: { ja: "アトラス", en: "Atlas" }, 
            age: 37, height: 185, weight: 82, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","A","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","B"], itl: ["B","B","B","C"], phy: ["C","B","B"] } 
        },
        { 
            no: 23, name: { ja: "アルバロ・モンテーロ", en: "Álvaro Montero" }, club: { ja: "ミジョナリオス", en: "Millonarios" }, 
            age: 31, height: 195, weight: 89, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","B","A"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["B","A","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "カルロス・クエスタ", en: "Carlos Cuesta" }, club: { ja: "KRCゲンク", en: "KRC Genk" }, 
            age: 27, height: 182, weight: 75, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["B","B","B","B","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 3, name: { ja: "ホン・ルクミ", en: "Jhon Lucumí" }, club: { ja: "ボローニャ", en: "Bologna" }, 
            age: 27, height: 187, weight: 82, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["A","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","D","D","E","D","-"], itl: ["B","B","B","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 4, name: { ja: "サンティアゴ・アリアス", en: "Santiago Arias" }, club: { ja: "バイーア", en: "Bahia" }, 
            age: 34, height: 177, weight: 72, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","C","-"], itl: ["B","B","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 13, name: { ja: "ジェリー・ミナ", en: "Yerry Mina" }, club: { ja: "カリアリ", en: "Cagliari" }, 
            age: 31, height: 195, weight: 94, pos: "DF", 
            stats: { atk: ["C","D","E","S","S","S"], def: ["B","B","A","B","-","-"], spd: ["D","D","D","D"], tec: ["C","C","D","E","D","E","D","-"], itl: ["B","B","A","S"], phy: ["A","S","D"] } 
        },
        { 
            no: 17, name: { ja: "ヨハン・モヒカ", en: "Johan Mojica" }, club: { ja: "マジョルカ", en: "RCD Mallorca" }, 
            age: 33, height: 185, weight: 74, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["B","B","C"] } 
        },
        { 
            no: 21, name: { ja: "ダニエル・ムニョス", en: "Daniel Muñoz" }, club: { ja: "クリスタル・パレス", en: "Crystal Palace" }, 
            age: 30, height: 183, weight: 78, pos: "DF", 
            stats: { atk: ["B","C","D","B","C","B"], def: ["A","B","B","A","-","-"], spd: ["A","A","B","A"], tec: ["B","B","C","B","C","D","C","-"], itl: ["B","B","A","B"], phy: ["S","A","B"] } 
        },
        { 
            no: 25, name: { ja: "ダビンソン・サンチェス", en: "Davinson Sánchez" }, club: { ja: "ガラタサライ", en: "Galatasaray" }, 
            age: 30, height: 187, weight: 83, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","S"], def: ["A","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","D","D","E","D","-"], itl: ["B","B","B","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 26, name: { ja: "フアン・カバル", en: "Juan Cabal" }, club: { ja: "ユヴェントス", en: "Juventus" }, 
            age: 25, height: 186, weight: 80, pos: "DF", 
            stats: { atk: ["C","D","E","B","B","B"], def: ["B","B","B","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","C","C","E","D","-"], itl: ["C","B","B","B"], phy: ["A","A","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 5, name: { ja: "ケビン・カスターニョ", en: "Kevin Castaño" }, club: { ja: "クラスノダール", en: "Krasnodar" }, 
            age: 25, height: 176, weight: 72, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","D","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 6, name: { ja: "リチャルド・リオス", en: "Richard Ríos" }, club: { ja: "パルメイラス", en: "Palmeiras" }, 
            age: 26, height: 185, weight: 78, pos: "MF", 
            stats: { atk: ["B","B","C","C","C","C"], def: ["B","B","C","A","-","-"], spd: ["B","B","B","B"], tec: ["A","B","B","A","A","D","D","-"], itl: ["B","B","A","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 8, name: { ja: "ホルヘ・カラスカル", en: "Jorge Carrascal" }, club: { ja: "ディナモ・モスクワ", en: "Dynamo Moscow" }, 
            age: 28, height: 179, weight: 73, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["B","B","A","B"], tec: ["A","A","A","A","A","C","D","-"], itl: ["B","A","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 10, name: { ja: "ハメス・ロドリゲス", en: "James Rodríguez" }, club: { ja: "ラージョ・バジェカーノ", en: "Rayo Vallecano" }, 
            age: 34, height: 180, weight: 75, pos: "MF", 
            stats: { atk: ["A","S","A","E","E","D"], def: ["E","E","F","D","-","-"], spd: ["D","D","D","D"], tec: ["S","S","S","C","A","S","D","-"], itl: ["S","S","A","C"], phy: ["C","C","D"] } 
        },
        { 
            no: 11, name: { ja: "フアン・クアドラード", en: "Juan Cuadrado" }, club: { ja: "アタランタ", en: "Atalanta" }, 
            age: 38, height: 179, weight: 72, pos: "MF/DF", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["C","C","D","C","-","-"], spd: ["C","C","C","C"], tec: ["A","A","B","B","A","C","D","-"], itl: ["A","A","A","C"], phy: ["C","C","D"] } 
        },
        { 
            no: 15, name: { ja: "マテウス・ウリベ", en: "Mateus Uribe" }, club: { ja: "アル・サッド", en: "Al Sadd" }, 
            age: 35, height: 182, weight: 75, pos: "MF", 
            stats: { atk: ["B","C","D","C","C","C"], def: ["B","B","C","B","-","-"], spd: ["D","D","D","D"], tec: ["B","B","C","C","C","D","D","-"], itl: ["A","B","A","C"], phy: ["B","B","C"] } 
        },
        { 
            no: 16, name: { ja: "ジェフェルソン・レルマ", en: "Jefferson Lerma" }, club: { ja: "クリスタル・パレス", en: "Crystal Palace" }, 
            age: 31, height: 179, weight: 70, pos: "MF", 
            stats: { atk: ["B","C","D","A","B","A"], def: ["A","A","B","S","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","D","C","E","D","-"], itl: ["A","B","S","A"], phy: ["S","S","B"] } 
        },
        { 
            no: 20, name: { ja: "フアン・フェルナンド・キンテロ", en: "Juan Fernando Quintero" }, club: { ja: "ラシン・クラブ", en: "Racing Club" }, 
            age: 33, height: 169, weight: 64, pos: "MF", 
            stats: { atk: ["A","A","B","E","E","E"], def: ["E","E","F","D","-","-"], spd: ["D","D","D","D"], tec: ["S","S","S","C","A","S","E","-"], itl: ["A","S","B","D"], phy: ["D","D","D"] } 
        },
        { 
            no: 22, name: { ja: "ヤセル・アスプリージャ", en: "Yáser Asprilla" }, club: { ja: "ジローナ", en: "Girona" }, 
            age: 22, height: 175, weight: 68, pos: "MF/FW", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","S","A"], tec: ["A","A","A","A","A","C","D","-"], itl: ["B","A","B","C"], phy: ["B","C","C"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 7, name: { ja: "ルイス・ディアス", en: "Luis Díaz" }, club: { ja: "リヴァプール", en: "Liverpool" }, 
            age: 29, height: 180, weight: 73, pos: "FW", 
            stats: { atk: ["A","A","C","D","D","C"], def: ["C","C","D","A","-","-"], spd: ["S","S","S","S"], tec: ["B","B","B","S","S","D","E","-"], itl: ["A","A","A","C"], phy: ["S","B","B"] } 
        },
        { 
            no: 9, name: { ja: "ミゲル・ボルハ", en: "Miguel Borja" }, club: { ja: "リーベル・プレート", en: "River Plate" }, 
            age: 33, height: 183, weight: 84, pos: "FW", 
            stats: { atk: ["A","A","A","A","A","A"], def: ["D","D","E","C","-","-"], spd: ["D","D","D","D"], tec: ["C","C","D","D","C","E","E","-"], itl: ["B","B","A","A"], phy: ["B","S","B"] } 
        },
        { 
            no: 14, name: { ja: "ジョン・デュラン", en: "Jhon Durán" }, club: { ja: "アストン・ヴィラ", en: "Aston Villa" }, 
            age: 22, height: 185, weight: 80, pos: "FW", 
            stats: { atk: ["S","A","C","A","A","A"], def: ["D","D","E","B","-","-"], spd: ["A","A","B","A"], tec: ["C","C","D","B","C","E","E","-"], itl: ["C","B","B","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 18, name: { ja: "ルイス・シニステラ", en: "Luis Sinisterra" }, club: { ja: "ボーンマス", en: "Bournemouth" }, 
            age: 27, height: 172, weight: 69, pos: "FW", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","S","A"], tec: ["B","B","B","A","A","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 19, name: { ja: "ラファエル・サントス・ボレ", en: "Rafael Santos Borré" }, club: { ja: "インテルナシオナル", en: "Internacional" }, 
            age: 30, height: 174, weight: 70, pos: "FW", 
            stats: { atk: ["B","B","A","B","B","B"], def: ["C","C","D","A","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","C","B","E","E","-"], itl: ["B","B","A","B"], phy: ["A","B","B"] } 
        },
        { 
            no: 24, name: { ja: "ジョン・アリアス", en: "Jhon Arias" }, club: { ja: "フルミネンセ", en: "Fluminense" }, 
            age: 28, height: 168, weight: 66, pos: "FW/MF", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["C","C","D","A","-","-"], spd: ["A","A","S","A"], tec: ["A","A","A","A","A","D","E","-"], itl: ["B","A","B","C"], phy: ["S","C","B"] } 
        }
    ]
};