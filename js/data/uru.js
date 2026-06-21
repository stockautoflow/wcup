export const uruData = {
    id: 'uru',
    name: { ja: '🇺🇾 ウルグアイ', en: '🇺🇾 Uruguay' },
    color: '#0038a8', // ウルグアイ・セレステ（水色/青）
    teamStats: {
        attributes: { offense: "A", defense: "A", depth: "B", teamwork: "A", intensity: "S", experience: "A" },
        styles: { possession: 50, pressing: 85, attackRoute: 50, playStyle: 70 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "セルヒオ・ロシェ", en: "Sergio Rochet" }, club: { ja: "インテルナシオナル", en: "Internacional" }, 
            age: 33, height: 190, weight: 82, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","A","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","B"], itl: ["B","B","B","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 12, name: { ja: "サンティアゴ・メレ", en: "Santiago Mele" }, club: { ja: "モンテレイ", en: "Monterrey" }, 
            age: 28, height: 185, weight: 80, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 23, name: { ja: "フェルナンド・ムスレラ", en: "Fernando Muslera" }, club: { ja: "エストゥディアンテス", en: "Estudiantes" }, 
            age: 40, height: 190, weight: 84, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","B","B"], spd: ["E","E","D","E"], tec: ["C","C","E","E","E","E","E","C"], itl: ["A","A","S","C"], phy: ["C","C","C"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "ホセ・マリア・ヒメネス", en: "José María Giménez" }, club: { ja: "アトレティコ・マドリー", en: "Atlético Madrid" }, 
            age: 31, height: 185, weight: 77, pos: "DF", 
            stats: { atk: ["C","D","E","A","A","S"], def: ["S","S","S","B","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","D","D","E","D","-"], itl: ["A","A","S","A"], phy: ["S","S","D"] } 
        },
        { 
            no: 3, name: { ja: "セバスティアン・カセレス", en: "Sebastián Cáceres" }, club: { ja: "クラブ・アメリカ", en: "Club América" }, 
            age: 26, height: 180, weight: 76, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","A"], def: ["A","A","B","B","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","D","D","E","D","-"], itl: ["B","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 4, name: { ja: "ロナルド・アラウホ", en: "Ronald Araújo" }, club: { ja: "バルセロナ", en: "Barcelona" }, 
            age: 27, height: 188, weight: 79, pos: "DF", 
            stats: { atk: ["C","D","E","S","A","S"], def: ["S","S","S","B","-","-"], spd: ["S","A","B","S"], tec: ["C","C","D","D","D","E","D","-"], itl: ["A","B","S","A"], phy: ["S","S","C"] } 
        },
        { 
            no: 13, name: { ja: "ギジェルモ・バレラ", en: "Guillermo Varela" }, club: { ja: "フラメンゴ", en: "Flamengo" }, 
            age: 33, height: 173, weight: 70, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["B","B","C"] } 
        },
        { 
            no: 16, name: { ja: "マティアス・オリベラ", en: "Mathías Olivera" }, club: { ja: "ナポリ", en: "Napoli" }, 
            age: 28, height: 185, weight: 78, pos: "DF", 
            stats: { atk: ["C","C","D","B","C","A"], def: ["A","A","B","A","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["B","B","A","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 17, name: { ja: "マティアス・ビーニャ", en: "Matías Viña" }, club: { ja: "リーベル・プレート", en: "River Plate" }, 
            age: 28, height: 175, weight: 73, pos: "DF", 
            stats: { atk: ["C","C","D","C","C","B"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 22, name: { ja: "ホアキン・ピケレス", en: "Joaquín Piquerez" }, club: { ja: "パルメイラス", en: "Palmeiras" }, 
            age: 27, height: 184, weight: 80, pos: "DF", 
            stats: { atk: ["C","C","D","C","C","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 24, name: { ja: "サンティ・ブエノ", en: "Santi Bueno" }, club: { ja: "ウォルヴァーハンプトン", en: "Wolverhampton" }, 
            age: 27, height: 191, weight: 83, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","A","A","B","-","-"], spd: ["C","C","C","C"], tec: ["C","B","D","D","D","E","D","-"], itl: ["B","B","B","A"], phy: ["A","S","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 5, name: { ja: "マヌエル・ウガルテ", en: "Manuel Ugarte" }, club: { ja: "マンチェスター・ユナイテッド", en: "Manchester United" }, 
            age: 25, height: 182, weight: 77, pos: "MF", 
            stats: { atk: ["C","D","E","D","D","C"], def: ["S","S","B","S","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","C","C","E","D","-"], itl: ["A","B","S","C"], phy: ["S","S","B"] } 
        },
        { 
            no: 6, name: { ja: "ロドリゴ・ベンタンクール", en: "Rodrigo Bentancur" }, club: { ja: "トッテナム・ホットスパー", en: "Tottenham Hotspur" }, 
            age: 28, height: 187, weight: 77, pos: "MF", 
            stats: { atk: ["B","C","D","C","C","C"], def: ["A","A","B","A","-","-"], spd: ["C","C","C","C"], tec: ["A","A","A","B","B","D","D","-"], itl: ["A","A","A","C"], phy: ["A","B","C"] } 
        },
        { 
            no: 7, name: { ja: "ニコラス・デ・ラ・クルス", en: "Nicolás de la Cruz" }, club: { ja: "フラメンゴ", en: "Flamengo" }, 
            age: 29, height: 167, weight: 65, pos: "MF", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["B","B","C","A","-","-"], spd: ["B","B","A","B"], tec: ["A","A","A","A","A","C","D","-"], itl: ["A","A","A","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 8, name: { ja: "フェデリコ・バルベルデ", en: "Federico Valverde" }, club: { ja: "レアル・マドリード", en: "Real Madrid" }, 
            age: 27, height: 182, weight: 78, pos: "MF", 
            stats: { atk: ["S","A","C","C","C","B"], def: ["A","A","B","S","-","-"], spd: ["S","S","A","S"], tec: ["S","A","A","A","A","C","D","-"], itl: ["S","S","S","C"], phy: ["S","S","A"] } 
        },
        { 
            no: 10, name: { ja: "ジョルジアン・デ・アラスカエタ", en: "Giorgian De Arrascaeta" }, club: { ja: "フラメンゴ", en: "Flamengo" }, 
            age: 32, height: 172, weight: 67, pos: "MF", 
            stats: { atk: ["A","A","C","D","D","D"], def: ["D","D","E","C","-","-"], spd: ["C","C","B","C"], tec: ["S","S","S","B","A","B","D","-"], itl: ["A","S","B","C"], phy: ["C","C","C"] } 
        },
        { 
            no: 11, name: { ja: "ファクンド・ペリストリ", en: "Facundo Pellistri" }, club: { ja: "パナシナイコス", en: "Panathinaikos" }, 
            age: 24, height: 175, weight: 68, pos: "MF", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["C","C","D","A","-","-"], spd: ["A","A","S","A"], tec: ["B","B","B","A","B","D","E","-"], itl: ["B","B","B","C"], phy: ["A","C","B"] } 
        },
        { 
            no: 14, name: { ja: "アグスティン・カノッビオ", en: "Agustín Canobbio" }, club: { ja: "フルミネンセ", en: "Fluminense" }, 
            age: 27, height: 175, weight: 74, pos: "MF", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["C","C","D","A","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 15, name: { ja: "エミリアーノ・マルティネス", en: "Emiliano Martínez" }, club: { ja: "パルメイラス", en: "Palmeiras" }, 
            age: 26, height: 184, weight: 76, pos: "MF", 
            stats: { atk: ["C","D","E","C","C","C"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","D","-"], itl: ["C","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 18, name: { ja: "ブライアン・ロドリゲス", en: "Brian Rodríguez" }, club: { ja: "クラブ・アメリカ", en: "Club América" }, 
            age: 26, height: 173, weight: 68, pos: "MF", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 20, name: { ja: "マクシミリアーノ・アラウホ", en: "Maximiliano Araújo" }, club: { ja: "スポルティング", en: "Sporting CP" }, 
            age: 26, height: 179, weight: 72, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["C","C","D","A","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","A","B","D","E","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 25, name: { ja: "フアン・マヌエル・サナブリア", en: "Juan Manuel Sanabria" }, club: { ja: "レアル・ソルトレイク", en: "Real Salt Lake" }, 
            age: 26, height: 173, weight: 68, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","C","C","D","D","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 26, name: { ja: "ロドリゴ・サラサール", en: "Rodrigo Zalazar" }, club: { ja: "ブラガ", en: "SC Braga" }, 
            age: 26, height: 178, weight: 73, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["C","C","D","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","B","B","D","D","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 9, name: { ja: "ダルウィン・ヌニェス", en: "Darwin Núñez" }, club: { ja: "アル・ヒラル", en: "Al-Hilal" }, 
            age: 26, height: 187, weight: 81, pos: "FW", 
            stats: { atk: ["S","B","C","A","B","S"], def: ["D","D","E","A","-","-"], spd: ["S","S","A","S"], tec: ["C","C","C","A","C","E","E","-"], itl: ["B","B","B","A"], phy: ["S","S","B"] } 
        },
        { 
            no: 19, name: { ja: "ロドリゴ・アギーレ", en: "Rodrigo Aguirre" }, club: { ja: "UANLティグレス", en: "Tigres UANL" }, 
            age: 31, height: 186, weight: 82, pos: "FW", 
            stats: { atk: ["B","B","C","A","B","A"], def: ["D","D","E","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","C","C","E","E","-"], itl: ["C","B","B","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 21, name: { ja: "フェデリコ・ビニャス", en: "Federico Viñas" }, club: { ja: "オビエド", en: "Real Oviedo" }, 
            age: 27, height: 180, weight: 82, pos: "FW", 
            stats: { atk: ["B","B","C","A","A","A"], def: ["D","D","E","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","C","C","E","E","-"], itl: ["C","B","B","A"], phy: ["A","S","C"] } 
        }
    ]
};