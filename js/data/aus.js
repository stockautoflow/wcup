export const ausData = {
    id: 'aus',
    name: { ja: '🇦🇺 オーストラリア', en: '🇦🇺 Australia' },
    color: '#00843d', // オーストラリアグリーン
    teamStats: {
        attributes: { offense: "C", defense: "B", depth: "C", teamwork: "B", intensity: "A", experience: "B" },
        styles: { possession: 40, pressing: 50, attackRoute: 30, playStyle: 40 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "マシュー・ライアン", en: "Mathew Ryan" }, club: { ja: "レバンテ", en: "Levante UD" }, 
            age: 34, height: 184, weight: 82, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","B","A"], spd: ["D","D","C","D"], tec: ["C","B","D","E","E","E","E","B"], itl: ["B","B","A","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 12, name: { ja: "ポール・イッゾ", en: "Paul Izzo" }, club: { ja: "ラナース", en: "Randers FC" }, 
            age: 31, height: 185, weight: 80, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","C","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["C","B","B"] } 
        },
        { 
            no: 18, name: { ja: "パトリック・ビーチ", en: "Patrick Beach" }, club: { ja: "メルボルン・C", en: "Melbourne City" }, 
            age: 22, height: 190, weight: 83, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","C","C"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "ミロシュ・デゲネク", en: "Milos Degenek" }, club: { ja: "APOEL", en: "APOEL FC" }, 
            age: 32, height: 187, weight: 82, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["B","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 3, name: { ja: "アレッサンドロ・チルカーティ", en: "Alessandro Circati" }, club: { ja: "パルマ", en: "Parma" }, 
            age: 22, height: 190, weight: 84, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","A"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 4, name: { ja: "ジェイコブ・イタリアーノ", en: "Jacob Italiano" }, club: { ja: "グラーツァー", en: "Grazer AK" }, 
            age: 24, height: 175, weight: 70, pos: "DF/MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 5, name: { ja: "ジョーダン・ボス", en: "Jordan Bos" }, club: { ja: "フェイエノールト", en: "Feyenoord" }, 
            age: 23, height: 180, weight: 75, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["A","A","B","A"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 6, name: { ja: "ジェイソン・ゲリア", en: "Jason Geria" }, club: { ja: "新潟", en: "Albirex Niigata" }, 
            age: 33, height: 185, weight: 81, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 15, name: { ja: "カイ・トレウィン", en: "Kai Trewin" }, club: { ja: "ニューヨーク・C", en: "New York City FC" }, 
            age: 25, height: 185, weight: 78, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["C","C","B","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","B","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 16, name: { ja: "アジズ・ベヒッチ", en: "Aziz Behich" }, club: { ja: "メルボルン・C", en: "Melbourne City" }, 
            age: 35, height: 170, weight: 68, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","C","-"], itl: ["B","B","A","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 19, name: { ja: "ハリー・サウター", en: "Harry Souttar" }, club: { ja: "レスター・シティ", en: "Leicester City" }, 
            age: 27, height: 198, weight: 101, pos: "DF", 
            stats: { atk: ["C","D","E","S","S","S"], def: ["B","B","A","B","-","-"], spd: ["D","D","E","D"], tec: ["C","C","D","E","D","E","D","-"], itl: ["B","B","B","A"], phy: ["S","S","B"] } 
        },
        { 
            no: 21, name: { ja: "キャメロン・バージェス", en: "Cameron Burgess" }, club: { ja: "スウォンジー・C", en: "Swansea City" }, 
            age: 30, height: 194, weight: 88, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","B","B","-","-"], spd: ["C","C","D","C"], tec: ["C","C","D","E","D","E","D","-"], itl: ["C","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 25, name: { ja: "ルーカス・ヘリントン", en: "Lucas Herrington" }, club: { ja: "コロラド・ラピッズ", en: "Colorado Rapids" }, 
            age: 19, height: 188, weight: 80, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["C","C","C","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["D","C","C","C"], phy: ["B","A","C"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 8, name: { ja: "コナー・メトカーフ", en: "Connor Metcalfe" }, club: { ja: "ザンクト・パウリ", en: "FC St. Pauli" }, 
            age: 26, height: 183, weight: 76, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","D","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 10, name: { ja: "アイディン・フルスティッチ", en: "Ajdin Hrustic" }, club: { ja: "ヘラクレス", en: "Heracles Almelo" }, 
            age: 29, height: 183, weight: 75, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["C","C","D","C","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","B","B","C","D","-"], itl: ["B","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 13, name: { ja: "エイデン・オニール", en: "Aiden O'Neill" }, club: { ja: "ニューヨーク・C", en: "New York City FC" }, 
            age: 27, height: 181, weight: 75, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","D","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 14, name: { ja: "キャメロン・デブリン", en: "Cameron Devlin" }, club: { ja: "ハーツ", en: "Heart of Midlothian" }, 
            age: 28, height: 170, weight: 68, pos: "MF", 
            stats: { atk: ["C","D","E","E","E","D"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["C","C","C","C","C","D","D","-"], itl: ["B","B","A","C"], phy: ["S","B","B"] } 
        },
        { 
            no: 22, name: { ja: "ジャクソン・アーバイン", en: "Jackson Irvine" }, club: { ja: "ザンクト・パウリ", en: "FC St. Pauli" }, 
            age: 33, height: 189, weight: 82, pos: "MF", 
            stats: { atk: ["B","C","C","A","B","A"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","D","-"], itl: ["A","B","S","B"], phy: ["S","S","B"] } 
        },
        { 
            no: 24, name: { ja: "ポール・オコン・エングストラー", en: "Paul Okon-Engstler" }, club: { ja: "シドニーFC", en: "Sydney FC" }, 
            age: 21, height: 180, weight: 74, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","D","-"], itl: ["C","C","C","C"], phy: ["B","B","C"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 7, name: { ja: "マシュー・レッキー", en: "Mathew Leckie" }, club: { ja: "メルボルン・C", en: "Melbourne City" }, 
            age: 35, height: 181, weight: 80, pos: "FW", 
            stats: { atk: ["B","C","C","B","C","B"], def: ["C","C","D","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","E","-"], itl: ["B","B","A","B"], phy: ["B","B","C"] } 
        },
        { 
            no: 9, name: { ja: "モハメド・トゥーレ", en: "Mohamed Toure" }, club: { ja: "ノリッジ", en: "Norwich City" }, 
            age: 22, height: 186, weight: 82, pos: "FW", 
            stats: { atk: ["B","B","C","B","C","A"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["C","C","D","B","C","E","E","-"], itl: ["C","C","B","C"], phy: ["A","S","B"] } 
        },
        { 
            no: 11, name: { ja: "アワー・マビル", en: "Awer Mabil" }, club: { ja: "カステリョン", en: "CD Castellón" }, 
            age: 30, height: 179, weight: 73, pos: "FW", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 17, name: { ja: "ネストリ・イランクンダ", en: "Nestory Irankunda" }, club: { ja: "ワトフォード", en: "Watford" }, 
            age: 20, height: 175, weight: 73, pos: "FW", 
            stats: { atk: ["A","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["S","S","S","S"], tec: ["B","C","C","S","A","D","E","-"], itl: ["C","B","B","C"], phy: ["A","B","C"] } 
        },
        { 
            no: 20, name: { ja: "クリスティアン・ボルパト", en: "Cristian Volpato" }, club: { ja: "サッスオーロ", en: "Sassuolo" }, 
            age: 22, height: 187, weight: 75, pos: "FW/MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["B","B","B","B"], tec: ["A","A","A","A","A","C","D","-"], itl: ["B","A","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 23, name: { ja: "ニシャン・ベルピレイ", en: "Nishan Velupillay" }, club: { ja: "メルボルン・V", en: "Melbourne Victory" }, 
            age: 25, height: 181, weight: 75, pos: "FW", 
            stats: { atk: ["B","C","D","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","A","B","D","E","-"], itl: ["C","C","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 26, name: { ja: "テテ・イェンギ", en: "Tete Yengi" }, club: { ja: "町田", en: "FC Machida Zelvia" }, 
            age: 25, height: 196, weight: 88, pos: "FW", 
            stats: { atk: ["B","C","D","A","B","S"], def: ["D","D","E","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","C","C","E","E","-"], itl: ["C","C","B","A"], phy: ["A","S","B"] } 
        }
    ]
};