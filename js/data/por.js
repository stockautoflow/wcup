export const porData = {
    id: 'por',
    name: { ja: '🇵🇹 ポルトガル', en: '🇵🇹 Portugal' },
    color: '#e42518', // ポルトガルレッド
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "ディオゴ・コスタ", en: "Diogo Costa" }, club: { ja: "ポルト", en: "FC Porto" }, 
            age: 26, height: 186, weight: 82, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","S","A"], spd: ["D","D","C","D"], tec: ["C","B","C","E","E","E","E","S"], itl: ["B","A","A","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 12, name: { ja: "ジョゼ・サ", en: "José Sá" }, club: { ja: "ウォルヴァーハンプトン", en: "Wolverhampton" }, 
            age: 33, height: 192, weight: 84, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","A","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","B"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 22, name: { ja: "ルイ・シルヴァ", en: "Rui Silva" }, club: { ja: "スポルティングCP", en: "Sporting CP" }, 
            age: 32, height: 191, weight: 91, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","B"], itl: ["C","C","B","C"], phy: ["C","B","B"] } 
        },
        { 
            no: 27, name: { ja: "リカルド・ヴェーリョ", en: "Ricardo Velho" }, club: { ja: "ファレンセ", en: "SC Farense" }, 
            age: 27, height: 190, weight: 83, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["C","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "ネルソン・セメド", en: "Nélson Semedo" }, club: { ja: "フェネルバフチェ", en: "Fenerbahçe" }, 
            age: 32, height: 177, weight: 69, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","B","B","E","C","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 3, name: { ja: "ルベン・ディアス", en: "Rúben Dias" }, club: { ja: "マンチェスター・シティ", en: "Manchester City" }, 
            age: 29, height: 187, weight: 83, pos: "DF", 
            stats: { atk: ["C","D","E","S","A","S"], def: ["S","S","S","B","-","-"], spd: ["B","B","C","B"], tec: ["B","A","C","D","D","E","D","-"], itl: ["S","S","S","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 4, name: { ja: "トマス・アラウージョ", en: "Tomás Araújo" }, club: { ja: "ベンフィカ", en: "Benfica" }, 
            age: 24, height: 187, weight: 80, pos: "DF", 
            stats: { atk: ["C","D","E","B","B","B"], def: ["B","B","B","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","D","C","E","D","-"], itl: ["C","B","B","B"], phy: ["B","B","B"] } 
        },
        { 
            no: 5, name: { ja: "ディオゴ・ダロト", en: "Diogo Dalot" }, club: { ja: "マンチェスター・ユナイテッド", en: "Manchester United" }, 
            age: 27, height: 183, weight: 76, pos: "DF", 
            stats: { atk: ["B","C","D","C","C","B"], def: ["A","A","B","A","-","-"], spd: ["A","A","B","A"], tec: ["B","B","B","B","B","D","C","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 6, name: { ja: "マテウス・ヌネス", en: "Matheus Nunes" }, club: { ja: "マンチェスター・シティ", en: "Manchester City" }, 
            age: 27, height: 183, weight: 76, pos: "MF/DF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","A","A","D","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 13, name: { ja: "レナト・ヴェイガ", en: "Renato Veiga" }, club: { ja: "ビジャレアル", en: "Villarreal" }, 
            age: 22, height: 190, weight: 84, pos: "DF/MF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["B","B","B","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","D","C","E","D","-"], itl: ["C","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 14, name: { ja: "ゴンサロ・イナシオ", en: "Gonçalo Inácio" }, club: { ja: "スポルティングCP", en: "Sporting CP" }, 
            age: 24, height: 185, weight: 78, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["A","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["A","S","B","D","C","E","D","-"], itl: ["B","B","B","A"], phy: ["B","A","B"] } 
        },
        { 
            no: 20, name: { ja: "ジョアン・カンセロ", en: "João Cancelo" }, club: { ja: "バルセロナ", en: "Barcelona" }, 
            age: 32, height: 182, weight: 74, pos: "DF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["A","A","A","A"], tec: ["A","A","A","A","S","C","C","-"], itl: ["A","A","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 25, name: { ja: "ヌーノ・メンデス", en: "Nuno Mendes" }, club: { ja: "パリ・サンジェルマン", en: "Paris Saint-Germain" }, 
            age: 24, height: 176, weight: 73, pos: "DF", 
            stats: { atk: ["B","C","D","D","D","B"], def: ["A","B","B","A","-","-"], spd: ["S","S","S","S"], tec: ["B","B","B","S","A","D","C","-"], itl: ["B","B","B","C"], phy: ["A","A","D"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 8, name: { ja: "ブルーノ・フェルナンデス", en: "Bruno Fernandes" }, club: { ja: "マンチェスター・ユナイテッド", en: "Manchester United" }, 
            age: 31, height: 179, weight: 69, pos: "MF", 
            stats: { atk: ["A","S","A","D","D","C"], def: ["B","B","C","S","-","-"], spd: ["B","B","B","B"], tec: ["S","S","S","B","A","S","D","-"], itl: ["S","S","S","C"], phy: ["S","B","S"] } 
        },
        { 
            no: 10, name: { ja: "ベルナルド・シウバ", en: "Bernardo Silva" }, club: { ja: "マンチェスター・シティ", en: "Manchester City" }, 
            age: 31, height: 173, weight: 64, pos: "MF", 
            stats: { atk: ["B","A","C","E","E","D"], def: ["B","B","C","S","-","-"], spd: ["B","B","S","B"], tec: ["S","A","S","A","S","C","D","-"], itl: ["S","S","S","C"], phy: ["S","C","A"] } 
        },
        { 
            no: 15, name: { ja: "ジョアン・ネヴェス", en: "João Neves" }, club: { ja: "パリ・サンジェルマン", en: "Paris Saint-Germain" }, 
            age: 21, height: 174, weight: 66, pos: "MF", 
            stats: { atk: ["C","C","D","C","C","C"], def: ["A","A","B","S","-","-"], spd: ["B","B","A","B"], tec: ["A","A","A","B","A","D","D","-"], itl: ["A","A","S","C"], phy: ["S","B","B"] } 
        },
        { 
            no: 21, name: { ja: "ルベン・ネヴェス", en: "Rúben Neves" }, club: { ja: "アル・ヒラル", en: "Al-Hilal" }, 
            age: 29, height: 180, weight: 80, pos: "MF", 
            stats: { atk: ["A","A","B","D","D","C"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["A","S","A","C","B","A","D","-"], itl: ["A","A","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 23, name: { ja: "ヴィティーニャ", en: "Vitinha" }, club: { ja: "パリ・サンジェルマン", en: "Paris Saint-Germain" }, 
            age: 26, height: 172, weight: 64, pos: "MF", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["B","B","C","A","-","-"], spd: ["B","B","A","B"], tec: ["S","A","S","A","S","C","D","-"], itl: ["S","S","A","C"], phy: ["A","C","B"] } 
        },
        { 
            no: 24, name: { ja: "サム・コスタ", en: "Samú Costa" }, club: { ja: "マジョルカ", en: "RCD Mallorca" }, 
            age: 25, height: 184, weight: 78, pos: "MF", 
            stats: { atk: ["C","C","D","C","C","C"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","D","D","-"], itl: ["B","B","B","C"], phy: ["A","A","B"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 7, name: { ja: "クリスティアーノ・ロナウド", en: "Cristiano Ronaldo" }, club: { ja: "アル・ナスル", en: "Al-Nassr" }, 
            age: 41, height: 187, weight: 83, pos: "FW", 
            stats: { atk: ["S","S","S","S","S","S"], def: ["G","G","G","F","-","-"], spd: ["D","D","C","D"], tec: ["B","C","C","C","B","A","E","-"], itl: ["S","S","S","S"], phy: ["D","S","A"] } 
        },
        { 
            no: 9, name: { ja: "ゴンサロ・ラモス", en: "Gonçalo Ramos" }, club: { ja: "パリ・サンジェルマン", en: "Paris Saint-Germain" }, 
            age: 25, height: 185, weight: 79, pos: "FW", 
            stats: { atk: ["A","A","A","A","A","A"], def: ["C","C","D","A","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","B","D","E","-"], itl: ["B","B","B","A"], phy: ["A","A","B"] } 
        },
        { 
            no: 11, name: { ja: "ジョアン・フェリックス", en: "João Félix" }, club: { ja: "アル・ナスル", en: "Al-Nassr" }, 
            age: 26, height: 181, weight: 70, pos: "FW", 
            stats: { atk: ["A","A","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["B","B","A","B"], tec: ["A","A","S","A","S","C","D","-"], itl: ["A","S","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 16, name: { ja: "フランシスコ・トリンコン", en: "Francisco Trincão" }, club: { ja: "スポルティングCP", en: "Sporting CP" }, 
            age: 26, height: 184, weight: 73, pos: "FW", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","A","A","D","D","-"], itl: ["B","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 17, name: { ja: "ラファエウ・レオン", en: "Rafael Leão" }, club: { ja: "ACミラン", en: "AC Milan" }, 
            age: 27, height: 188, weight: 81, pos: "FW", 
            stats: { atk: ["A","A","C","C","C","B"], def: ["E","E","F","D","-","-"], spd: ["S","S","S","S"], tec: ["B","B","B","S","S","D","E","-"], itl: ["B","A","B","C"], phy: ["B","S","B"] } 
        },
        { 
            no: 18, name: { ja: "ペドロ・ネト", en: "Pedro Neto" }, club: { ja: "チェルシー", en: "Chelsea" }, 
            age: 26, height: 172, weight: 62, pos: "FW", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["S","S","S","S"], tec: ["B","B","B","S","A","C","D","-"], itl: ["B","B","B","C"], phy: ["B","C","E"] } 
        },
        { 
            no: 19, name: { ja: "ゴンサロ・ゲデス", en: "Gonçalo Guedes" }, club: { ja: "レアル・ソシエダ", en: "Real Sociedad" }, 
            age: 29, height: 179, weight: 72, pos: "FW", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","A","B","D","D","-"], itl: ["B","B","B","C"], phy: ["B","B","C"] } 
        },
        { 
            no: 26, name: { ja: "フランシスコ・コンセイソン", en: "Francisco Conceição" }, club: { ja: "ユヴェントス", en: "Juventus" }, 
            age: 23, height: 170, weight: 64, pos: "FW", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","S","S","A"], tec: ["B","B","B","S","S","C","D","-"], itl: ["B","B","S","C"], phy: ["B","C","B"] } 
        }
    ]
};