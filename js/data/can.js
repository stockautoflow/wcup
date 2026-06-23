export const canData = {
    id: 'can',
    name: { ja: '🇨🇦 カナダ', en: '🇨🇦 Canada' },
    color: '#ff0000', // カナダレッド
    teamStats: {
        attributes: { offense: "B", defense: "B", depth: "C", teamwork: "B", intensity: "A", experience: "B" },
        styles: { possession: 45, pressing: 60, attackRoute: 30, playStyle: 40 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "デイン・セント・クレア", en: "Dayne St. Clair" }, club: { ja: "インテル・マイアミ", en: "Inter Miami" }, 
            age: 29, height: 190, weight: 82, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 16, name: { ja: "マクシム・クレポー", en: "Maxime Crépeau" }, club: { ja: "オーランド・シティ", en: "Orlando City" }, 
            age: 32, height: 181, weight: 80, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","B","A"], spd: ["D","D","C","D"], tec: ["C","B","E","E","E","E","E","B"], itl: ["B","B","B","C"], phy: ["C","B","B"] } 
        },
        { 
            no: 18, name: { ja: "オーウェン・グッドマン", en: "Owen Goodman" }, club: { ja: "バーンズリー", en: "Barnsley" }, 
            age: 22, height: 193, weight: 85, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","C","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "アリスター・ジョンストン", en: "Alistair Johnston" }, club: { ja: "セルティック", en: "Celtic" }, 
            age: 27, height: 180, weight: 77, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 3, name: { ja: "アルフィー・ジョーンズ", en: "Alfie Jones" }, club: { ja: "ミドルスブラ", en: "Middlesbrough" }, 
            age: 28, height: 185, weight: 78, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","B","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 4, name: { ja: "リュック・デ・フーゲロールズ", en: "Luc de Fougerolles" }, club: { ja: "フルハム", en: "Fulham" }, 
            age: 20, height: 186, weight: 76, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["C","C","B","C","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","C","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 5, name: { ja: "ジョエル・ウォーターマン", en: "Joel Waterman" }, club: { ja: "シカゴ・ファイアー", en: "Chicago Fire" }, 
            age: 30, height: 188, weight: 80, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["C","C","C","B","-","-"], spd: ["C","C","C","C"], tec: ["C","B","D","D","D","E","D","-"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 13, name: { ja: "デレク・コーネリアス", en: "Derek Cornelius" }, club: { ja: "マルセイユ", en: "Olympique de Marseille" }, 
            age: 28, height: 188, weight: 83, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","A","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","E","D","E","D","-"], itl: ["C","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 15, name: { ja: "モイーズ・ボンビト", en: "Moïse Bombito" }, club: { ja: "ニース", en: "OGC Nice" }, 
            age: 26, height: 190, weight: 84, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","A","B","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 19, name: { ja: "アルフォンソ・デイビス", en: "Alphonso Davies" }, club: { ja: "バイエルン", en: "Bayern Munich" }, 
            age: 25, height: 185, weight: 75, pos: "DF/MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["B","B","C","A","-","-"], spd: ["S","S","S","S"], tec: ["A","B","B","S","S","D","C","-"], itl: ["B","B","A","C"], phy: ["S","B","C"] } 
        },
        { 
            no: 22, name: { ja: "リッチー・ラリア", en: "Richie Laryea" }, club: { ja: "トロントFC", en: "Toronto FC" }, 
            age: 31, height: 175, weight: 68, pos: "DF/MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["A","A","B","A"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 23, name: { ja: "ニコ・シガー", en: "Niko Sigur" }, club: { ja: "ハイドゥク・スプリト", en: "Hajduk Split" }, 
            age: 22, height: 178, weight: 72, pos: "DF/MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","C","C","D","C","-"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 6, name: { ja: "マシュー・ショワニエール", en: "Mathieu Choinière" }, club: { ja: "ロサンゼルスFC", en: "Los Angeles FC" }, 
            age: 27, height: 175, weight: 70, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","C","C","D","D","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 7, name: { ja: "ステファン・エウスタキオ", en: "Stephen Eustáquio" }, club: { ja: "ポルト", en: "FC Porto" }, 
            age: 29, height: 176, weight: 71, pos: "MF", 
            stats: { atk: ["B","C","D","D","D","C"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["A","A","B","C","C","D","D","-"], itl: ["A","A","A","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 8, name: { ja: "イスマエル・コネ", en: "Ismaël Koné" }, club: { ja: "サッスオーロ", en: "Sassuolo" }, 
            age: 23, height: 188, weight: 76, pos: "MF", 
            stats: { atk: ["B","C","D","C","C","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","A","B"], tec: ["A","B","B","B","B","D","D","-"], itl: ["B","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 11, name: { ja: "リアム・ミラー", en: "Liam Millar" }, club: { ja: "ハル・シティ", en: "Hull City" }, 
            age: 26, height: 181, weight: 74, pos: "MF/FW", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["C","C","D","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 14, name: { ja: "ジェイコブ・シャッフェルバーグ", en: "Jacob Shaffelburg" }, club: { ja: "ロサンゼルスFC", en: "Los Angeles FC" }, 
            age: 26, height: 178, weight: 72, pos: "MF/FW", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["C","C","D","B","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["A","C","B"] } 
        },
        { 
            no: 21, name: { ja: "ジョナサン・オソリオ", en: "Jonathan Osorio" }, club: { ja: "トロントFC", en: "Toronto FC" }, 
            age: 33, height: 175, weight: 73, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","D","D","-"], itl: ["B","B","A","C"], phy: ["B","B","C"] } 
        },
        { 
            no: 25, name: { ja: "ネイサン・サリバ", en: "Nathan Saliba" }, club: { ja: "アンデルレヒト", en: "Anderlecht" }, 
            age: 22, height: 176, weight: 70, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","C","C","D","D","-"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 26, name: { ja: "マルセロ・フローレス", en: "Marcelo Flores" }, club: { ja: "UANLティグレス", en: "Tigres UANL" }, 
            age: 22, height: 165, weight: 60, pos: "MF/FW", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","S","A"], tec: ["B","B","A","A","A","D","E","-"], itl: ["C","A","B","C"], phy: ["C","D","C"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 9, name: { ja: "サイル・ラリン", en: "Cyle Larin" }, club: { ja: "マジョルカ", en: "RCD Mallorca" }, 
            age: 31, height: 188, weight: 83, pos: "FW", 
            stats: { atk: ["A","A","B","A","A","A"], def: ["D","D","E","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","C","C","E","E","-"], itl: ["B","B","A","A"], phy: ["B","A","B"] } 
        },
        { 
            no: 10, name: { ja: "ジョナサン・デイビッド", en: "Jonathan David" }, club: { ja: "ユベントス", en: "Juventus" }, 
            age: 26, height: 175, weight: 70, pos: "FW", 
            stats: { atk: ["A","A","A","C","C","C"], def: ["D","D","E","B","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","A","B","D","E","-"], itl: ["A","A","A","B"], phy: ["A","B","B"] } 
        },
        { 
            no: 12, name: { ja: "タニ・オルワセイ", en: "Tani Oluwaseyi" }, club: { ja: "ビジャレアル", en: "Villarreal" }, 
            age: 26, height: 188, weight: 82, pos: "FW", 
            stats: { atk: ["B","B","C","A","B","A"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["C","C","D","B","C","E","E","-"], itl: ["C","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 17, name: { ja: "テイジョン・ブキャナン", en: "Tajon Buchanan" }, club: { ja: "ビジャレアル", en: "Villarreal" }, 
            age: 27, height: 181, weight: 68, pos: "FW/MF", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["C","C","D","B","-","-"], spd: ["S","S","A","S"], tec: ["B","B","C","S","A","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 20, name: { ja: "アリ・アーメド", en: "Ali Ahmed" }, club: { ja: "ノリッジ", en: "Norwich City" }, 
            age: 25, height: 180, weight: 72, pos: "FW/MF", 
            stats: { atk: ["C","C","D","E","E","D"], def: ["C","C","D","B","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 24, name: { ja: "プロミス・デイビッド", en: "Promise David" }, club: { ja: "サンジロワーズ", en: "Union SG" }, 
            age: 24, height: 195, weight: 90, pos: "FW", 
            stats: { atk: ["B","B","C","A","A","S"], def: ["D","D","E","C","-","-"], spd: ["B","B","C","B"], tec: ["D","D","E","C","D","E","E","-"], itl: ["C","C","B","A"], phy: ["A","S","B"] } 
        }
    ]
};