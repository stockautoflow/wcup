export const ecuData = {
    id: 'ecu',
    name: { ja: '🇪🇨 エクアドル', en: '🇪🇨 Ecuador' },
    color: '#ffdd00', // エクアドルイエロー（文字が見やすいように調整）
    teamStats: {
        attributes: { offense: "B", defense: "A", depth: "C", teamwork: "B", intensity: "S", experience: "B" },
        styles: { possession: 45, pressing: 70, attackRoute: 30, playStyle: 40 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "エルナン・ガリンデス", en: "Hernán Galíndez" }, club: { ja: "ウラカン", en: "Huracán" }, 
            age: 39, height: 189, weight: 81, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","B","B"], spd: ["E","E","D","E"], tec: ["C","C","E","E","E","E","E","C"], itl: ["B","B","A","C"], phy: ["C","C","C"] } 
        },
        { 
            no: 12, name: { ja: "モイセス・ラミレス", en: "Moisés Ramírez" }, club: { ja: "キフィシア", en: "Kifisia" }, 
            age: 25, height: 185, weight: 78, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","C","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 22, name: { ja: "ゴンサロ・バジェ", en: "Gonzalo Valle" }, club: { ja: "キト", en: "LDU Quito" }, 
            age: 30, height: 186, weight: 80, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","C","C"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["C","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "フェリックス・トーレス", en: "Félix Torres" }, club: { ja: "インテルナシオナル", en: "Internacional" }, 
            age: 29, height: 187, weight: 79, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 3, name: { ja: "ピエロ・インカピエ", en: "Piero Hincapié" }, club: { ja: "アーセナル", en: "Arsenal" }, 
            age: 24, height: 184, weight: 76, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","A"], def: ["S","A","A","B","-","-"], spd: ["A","A","B","A"], tec: ["B","B","C","D","D","E","D","-"], itl: ["A","B","A","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 4, name: { ja: "ジョエル・オルドニェス", en: "Joel Ordóñez" }, club: { ja: "クラブ・ブルージュ", en: "Club Brugge" }, 
            age: 22, height: 188, weight: 82, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["B","B","B","B","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 6, name: { ja: "ウィリアム・パチョ", en: "Willian Pacho" }, club: { ja: "パリSG", en: "Paris Saint-Germain" }, 
            age: 24, height: 187, weight: 81, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","S"], def: ["A","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","D","D","E","D","-"], itl: ["B","B","B","A"], phy: ["S","S","B"] } 
        },
        { 
            no: 7, name: { ja: "ペルビス・エストゥピニャン", en: "Pervis Estupiñán" }, club: { ja: "ミラン", en: "AC Milan" }, 
            age: 28, height: 175, weight: 73, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","A","B","D","C","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 17, name: { ja: "アンヘロ・プレシアード", en: "Ángelo Preciado" }, club: { ja: "アトレチコ・ミネイロ", en: "Atlético Mineiro" }, 
            age: 28, height: 173, weight: 70, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["A","A","B","A"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 25, name: { ja: "ジャクソン・ポロソ", en: "Jackson Porozo" }, club: { ja: "ティフアナ", en: "Club Tijuana" }, 
            age: 25, height: 192, weight: 85, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["C","B","B","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","E","D","E","D","-"], itl: ["C","C","B","B"], phy: ["A","S","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 5, name: { ja: "ジョルディ・アルシバル", en: "Jordy Alcívar" }, club: { ja: "インディペンディエンテ・デル・バジェ", en: "Independiente del Valle" }, 
            age: 26, height: 172, weight: 68, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","D","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 8, name: { ja: "デニル・カスティージョ", en: "Denil Castillo" }, club: { ja: "ミッティラン", en: "FC Midtjylland" }, 
            age: 22, height: 189, weight: 78, pos: "MF", 
            stats: { atk: ["C","D","E","C","C","B"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","C","D","D","E","D","-"], itl: ["C","C","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 10, name: { ja: "ケンドリー・パエス", en: "Kendry Páez" }, club: { ja: "リバープレート", en: "River Plate" }, 
            age: 19, height: 177, weight: 68, pos: "MF", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["B","A","A","B"], tec: ["A","A","S","A","S","C","E","-"], itl: ["A","S","B","C"], phy: ["C","C","C"] } 
        },
        { 
            no: 14, name: { ja: "アラン・ミンダ", en: "Alan Minda" }, club: { ja: "アトレチコ・ミネイロ", en: "Atlético Mineiro" }, 
            age: 23, height: 171, weight: 65, pos: "MF/FW", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","S","A"], tec: ["B","B","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 15, name: { ja: "ペドロ・ビテ", en: "Pedro Vite" }, club: { ja: "プーマスUNAM", en: "Pumas UNAM" }, 
            age: 24, height: 170, weight: 64, pos: "MF", 
            stats: { atk: ["C","C","D","E","E","D"], def: ["C","C","D","C","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","B","B","D","D","-"], itl: ["C","B","B","C"], phy: ["C","C","C"] } 
        },
        { 
            no: 16, name: { ja: "アンソニー・バレンシア", en: "Anthony Valencia" }, club: { ja: "アントワープ", en: "Royal Antwerp" }, 
            age: 22, height: 175, weight: 68, pos: "MF/FW", 
            stats: { atk: ["C","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","B","B","D","E","-"], itl: ["C","C","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 19, name: { ja: "ゴンサロ・プラタ", en: "Gonzalo Plata" }, club: { ja: "フラメンゴ", en: "Flamengo" }, 
            age: 25, height: 178, weight: 71, pos: "MF/FW", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","S","A"], tec: ["B","B","B","A","A","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 20, name: { ja: "ニルソン・アングロ", en: "Nilson Angulo" }, club: { ja: "サンダーランド", en: "Sunderland" }, 
            age: 23, height: 180, weight: 72, pos: "MF/FW", 
            stats: { atk: ["C","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["C","C","C","B","B","D","E","-"], itl: ["C","C","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 21, name: { ja: "アラン・フランコ", en: "Alan Franco" }, club: { ja: "アトレチコ・ミネイロ", en: "Atlético Mineiro" }, 
            age: 27, height: 174, weight: 70, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 23, name: { ja: "モイセス・カイセド", en: "Moisés Caicedo" }, club: { ja: "チェルシー", en: "Chelsea" }, 
            age: 24, height: 178, weight: 73, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["S","S","B","S","-","-"], spd: ["B","B","B","B"], tec: ["A","A","B","C","C","D","D","-"], itl: ["A","A","S","C"], phy: ["S","S","A"] } 
        },
        { 
            no: 24, name: { ja: "ヤイマル・メディナ", en: "Yaimar Medina" }, club: { ja: "ゲンク", en: "KRC Genk" }, 
            age: 21, height: 172, weight: 66, pos: "MF", 
            stats: { atk: ["C","C","D","E","E","D"], def: ["C","C","D","C","-","-"], spd: ["B","B","A","B"], tec: ["B","B","C","B","B","D","D","-"], itl: ["C","C","B","C"], phy: ["B","C","C"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 9, name: { ja: "ジョン・イェボアー", en: "John Yeboah" }, club: { ja: "ベネツィア", en: "Venezia" }, 
            age: 25, height: 170, weight: 68, pos: "FW", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 11, name: { ja: "ケビン・ロドリゲス", en: "Kevin Rodríguez" }, club: { ja: "サンジロワーズ", en: "Union SG" }, 
            age: 26, height: 190, weight: 82, pos: "FW", 
            stats: { atk: ["B","B","C","A","B","A"], def: ["D","D","E","B","-","-"], spd: ["A","A","A","A"], tec: ["C","C","D","C","C","E","E","-"], itl: ["C","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 13, name: { ja: "エネル・バレンシア", en: "Enner Valencia" }, club: { ja: "パチューカ", en: "Pachuca" }, 
            age: 36, height: 177, weight: 74, pos: "FW", 
            stats: { atk: ["B","B","B","A","A","A"], def: ["D","D","E","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","C","C","E","E","-"], itl: ["B","B","A","A"], phy: ["C","B","C"] } 
        },
        { 
            no: 18, name: { ja: "ジョルディ・カイセド", en: "Jordy Caicedo" }, club: { ja: "ウラカン", en: "Huracán" }, 
            age: 28, height: 185, weight: 84, pos: "FW", 
            stats: { atk: ["B","C","C","A","B","A"], def: ["D","D","E","C","-","-"], spd: ["B","B","B","B"], tec: ["D","D","E","D","D","E","E","-"], itl: ["C","C","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 26, name: { ja: "ジェレミー・アレバロ", en: "Jeremy Arévalo" }, club: { ja: "シュツットガルト", en: "VfB Stuttgart" }, 
            age: 20, height: 182, weight: 75, pos: "FW", 
            stats: { atk: ["C","C","D","C","C","C"], def: ["D","D","E","C","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","C","C","E","E","-"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        }
    ]
};