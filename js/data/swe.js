export const sweData = {
    id: 'swe',
    name: { ja: '🇸🇪 スウェーデン', en: '🇸🇪 Sweden' },
    color: '#005b99',
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "ヤコブ・ヴィデル・ゼッテルストレーム", en: "Jacob Widell Zetterström" }, club: { ja: "ダービー・カウンティ", en: "Derby County" }, 
            age: 27, height: 197, weight: 88, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","B"], itl: ["C","C","C","C"], phy: ["C","A","B"] } 
        },
        { 
            no: 12, name: { ja: "ヴィクター・ヨハンセン", en: "Viktor Johansson" }, club: { ja: "ストーク・シティ", en: "Stoke City" }, 
            age: 27, height: 185, weight: 80, pos: "GK", 
            stats: { atk: ["E","F","E","E","E","C"], def: ["D","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["C","B","B"] } 
        },
        { 
            no: 23, name: { ja: "クリストファー・ノルフェルト", en: "Kristoffer Nordfeldt" }, club: { ja: "AIKソルナ", en: "AIK Solna" }, 
            age: 36, height: 190, weight: 85, pos: "GK", 
            stats: { atk: ["E","F","E","E","E","C"], def: ["D","C","C","C","C","C"], spd: ["E","E","D","E"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","B","C"], phy: ["D","C","C"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "グスタフ・ラゲルビエルケ", en: "Gustaf Lagerbielke" }, club: { ja: "ブラガ", en: "SC Braga" }, 
            age: 26, height: 191, weight: 82, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","B"], def: ["C","B","B","C","-","-"], spd: ["C","C","C","C"], tec: ["C","B","C","D","D","E","D","-"], itl: ["C","C","B","B"], phy: ["B","A","B"] } 
        },
        { 
            no: 3, name: { ja: "ヴィクトル・リンデレフ", en: "Victor Lindelöf" }, club: { ja: "アストン・ヴィラ", en: "Aston Villa" }, 
            age: 31, height: 187, weight: 80, pos: "DF", 
            stats: { atk: ["C","D","E","B","B","B"], def: ["B","A","B","B","-","-"], spd: ["C","C","C","C"], tec: ["B","A","B","D","C","D","C","-"], itl: ["B","B","A","A"], phy: ["C","C","D"] } 
        },
        { 
            no: 4, name: { ja: "イサク・ヒエン", en: "Isak Hien" }, club: { ja: "アタランタ", en: "Atalanta" }, 
            age: 27, height: 191, weight: 84, pos: "DF", 
            stats: { atk: ["D","E","E","A","A","S"], def: ["A","B","A","B","-","-"], spd: ["B","C","C","B"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","B","A"], phy: ["B","S","B"] } 
        },
        { 
            no: 5, name: { ja: "ガブリエル・グドムンドソン", en: "Gabriel Gudmundsson" }, club: { ja: "リーズ・ユナイテッド", en: "Leeds United" }, 
            age: 27, height: 181, weight: 75, pos: "DF", 
            stats: { atk: ["C","D","E","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","B","C","D","C","-"], itl: ["C","C","B","C"], phy: ["A","C","B"] } 
        },
        { 
            no: 8, name: { ja: "ダニエル・スヴェンソン", en: "Daniel Svensson" }, club: { ja: "ボルシア・ドルトムント", en: "Borussia Dortmund" }, 
            age: 24, height: 183, weight: 75, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","C","C","-"], itl: ["C","C","B","C"], phy: ["A","C","B"] } 
        },
        { 
            no: 14, name: { ja: "ヤルマル・エクダル", en: "Hjalmar Ekdal" }, club: { ja: "バーンリー", en: "Burnley" }, 
            age: 27, height: 188, weight: 78, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","B"], def: ["C","B","B","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","B","B"], phy: ["B","B","B"] } 
        },
        { 
            no: 15, name: { ja: "カール・スターフェルト", en: "Carl Starfelt" }, club: { ja: "セルタ・ビーゴ", en: "Celta Vigo" }, 
            age: 31, height: 185, weight: 80, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","B"], def: ["B","B","B","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","B","B","B"], phy: ["B","A","B"] } 
        },
        { 
            no: 20, name: { ja: "エリック・スミス", en: "Eric Smith" }, club: { ja: "ザンクトパウリ", en: "FC St. Pauli" }, 
            age: 29, height: 192, weight: 83, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","B"], def: ["C","B","B","C","-","-"], spd: ["C","C","C","C"], tec: ["C","B","C","D","D","D","D","-"], itl: ["C","C","B","B"], phy: ["B","A","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 6, name: { ja: "ヘルマン・ヨハンソン", en: "Herman Johansson" }, club: { ja: "FCダラス", en: "FC Dallas" }, 
            age: 28, height: 180, weight: 75, pos: "MF", 
            stats: { atk: ["C","D","E","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","C","C","D","D","-"], itl: ["C","C","C","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 7, name: { ja: "ルーカス・ベリヴァル", en: "Lucas Bergvall" }, club: { ja: "トッテナム", en: "Tottenham Hotspur" }, 
            age: 20, height: 186, weight: 76, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","D"], def: ["C","C","D","C","-","-"], spd: ["C","B","B","C"], tec: ["B","B","A","B","A","C","D","-"], itl: ["B","A","C","C"], phy: ["C","C","C"] } 
        },
        { 
            no: 13, name: { ja: "ケン・セマ", en: "Ken Sema" }, club: { ja: "パフォスFC", en: "Pafos FC" }, 
            age: 33, height: 180, weight: 78, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","C","B","C","C","D","-"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 16, name: { ja: "イェスパー・カールストレーム", en: "Jesper Karlström" }, club: { ja: "ウディネーゼ", en: "Udinese" }, 
            age: 30, height: 183, weight: 80, pos: "MF", 
            stats: { atk: ["C","D","E","C","C","C"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","D","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 18, name: { ja: "ヤシン・アヤリ", en: "Yasin Ayari" }, club: { ja: "ブライトン", en: "Brighton" }, 
            age: 22, height: 172, weight: 68, pos: "MF", 
            stats: { atk: ["C","C","D","E","E","D"], def: ["C","C","D","C","-","-"], spd: ["B","B","A","B"], tec: ["B","B","B","B","B","D","D","-"], itl: ["C","B","C","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 19, name: { ja: "マティアス・スヴァンベリ", en: "Mattias Svanberg" }, club: { ja: "ヴォルフスブルク", en: "VfL Wolfsburg" }, 
            age: 27, height: 185, weight: 78, pos: "MF", 
            stats: { atk: ["B","C","C","C","C","C"], def: ["B","B","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","C","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 22, name: { ja: "ベスフォルト・ゼネリ", en: "Besfort Zeneli" }, club: { ja: "ユニオン・サンジロワーズ", en: "Union SG" }, 
            age: 23, height: 170, weight: 65, pos: "MF", 
            stats: { atk: ["C","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["B","B","A","B"], tec: ["C","C","B","B","B","D","E","-"], itl: ["C","C","C","C"], phy: ["C","D","C"] } 
        },
        { 
            no: 24, name: { ja: "エリオット・ストラウド", en: "Elliot Stroud" }, club: { ja: "ミャルビーAIF", en: "Mjällby AIF" }, 
            age: 23, height: 180, weight: 72, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","D","C","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","B","C","D","D","-"], itl: ["C","C","C","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 26, name: { ja: "タハ・アリ", en: "Taha Ali" }, club: { ja: "マルメFF", en: "Malmö FF" }, 
            age: 27, height: 172, weight: 65, pos: "MF", 
            stats: { atk: ["C","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","S","A"], tec: ["C","C","C","S","A","D","E","-"], itl: ["C","C","C","C"], phy: ["C","D","C"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 9, name: { ja: "アレクサンデル・イサク", en: "Alexander Isak" }, club: { ja: "リヴァプール", en: "Liverpool" }, 
            age: 26, height: 192, weight: 77, pos: "FW", 
            stats: { atk: ["A","S","A","B","B","B"], def: ["E","E","F","C","-","-"], spd: ["S","A","A","S"], tec: ["B","C","B","S","A","C","D","-"], itl: ["A","S","B","B"], phy: ["B","B","C"] } 
        },
        { 
            no: 10, name: { ja: "ベンジャミン・ニグレン", en: "Benjamin Nygren" }, club: { ja: "セルティック", en: "Celtic" }, 
            age: 24, height: 183, weight: 75, pos: "FW", 
            stats: { atk: ["C","C","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","C","C","C","D","E","-"], itl: ["C","C","C","C"], phy: ["C","C","C"] } 
        },
        { 
            no: 11, name: { ja: "アンソニー・エランガ", en: "Anthony Elanga" }, club: { ja: "ニューカッスル・ユナイテッド", en: "Newcastle United" }, 
            age: 24, height: 178, weight: 73, pos: "FW", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["S","S","A","S"], tec: ["C","C","C","S","B","D","D","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 17, name: { ja: "ヴィクトル・ギョケレス", en: "Viktor Gyökeres" }, club: { ja: "アーセナル", en: "Arsenal" }, 
            age: 28, height: 187, weight: 86, pos: "FW", 
            stats: { atk: ["S","S","A","A","A","A"], def: ["D","E","E","B","-","-"], spd: ["A","A","B","A"], tec: ["C","C","C","A","A","C","D","-"], itl: ["B","A","S","A"], phy: ["S","S","A"] } 
        },
        { 
            no: 21, name: { ja: "アレクサンデル・ベルンハルトソン", en: "Alexander Bernhardsson" }, club: { ja: "ホルシュタイン・キール", en: "Holstein Kiel" }, 
            age: 27, height: 185, weight: 75, pos: "FW", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","B","C","D","E","-"], itl: ["C","C","C","C"], phy: ["C","C","C"] } 
        },
        { 
            no: 25, name: { ja: "グスタフ・ニルソン", en: "Gustaf Nilsson" }, club: { ja: "クラブ・ブルッヘ", en: "Club Brugge" }, 
            age: 29, height: 196, weight: 88, pos: "FW", 
            stats: { atk: ["B","B","C","A","A","A"], def: ["D","D","E","B","-","-"], spd: ["D","D","D","D"], tec: ["D","D","E","D","D","E","E","-"], itl: ["C","C","B","A"], phy: ["B","S","B"] } 
        }
    ]
};