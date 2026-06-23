export const autData = {
    id: 'aut',
    name: { ja: '🇦🇹 オーストリア', en: '🇦🇹 Austria' },
    color: '#ed2939', // オーストリアレッド
    teamStats: {
        attributes: { offense: "B", defense: "B", depth: "B", teamwork: "A", intensity: "S", experience: "B" },
        styles: { possession: 40, pressing: 90, attackRoute: 50, playStyle: 80 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "アレクサンダー・シュラーガー", en: "Alexander Schlager" }, club: { ja: "ザルツブルク", en: "Red Bull Salzburg" }, 
            age: 30, height: 184, weight: 77, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","B","C"], phy: ["C","B","B"] } 
        },
        { 
            no: 12, name: { ja: "フロリアン・ヴィーゲレ", en: "Florian Wiegele" }, club: { ja: "ヴィクトリア・ブルゼニ", en: "Viktoria Plzeň" }, 
            age: 25, height: 190, weight: 82, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","C","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 13, name: { ja: "パトリック・ペンツ", en: "Patrick Pentz" }, club: { ja: "ブレンビー", en: "Brøndby IF" }, 
            age: 29, height: 182, weight: 76, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","B","E","E","E","E","E","B"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "ダヴィド・アッフェングルーバー", en: "David Affengruber" }, club: { ja: "エルチェ", en: "Elche CF" }, 
            age: 25, height: 185, weight: 80, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 3, name: { ja: "ケヴィン・ダンソ", en: "Kevin Danso" }, club: { ja: "トッテナム", en: "Tottenham Hotspur" }, 
            age: 27, height: 190, weight: 86, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","S"], def: ["A","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","D","D","E","D","-"], itl: ["B","B","B","A"], phy: ["S","S","B"] } 
        },
        { 
            no: 5, name: { ja: "シュテファン・ポッシュ", en: "Stefan Posch" }, club: { ja: "マインツ", en: "1. FSV Mainz 05" }, 
            age: 29, height: 189, weight: 82, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["A","A","B","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","C","C","E","D","-"], itl: ["B","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 8, name: { ja: "ダヴィド・アラバ", en: "David Alaba" }, club: { ja: "レアル・マドリー", en: "Real Madrid" }, 
            age: 33, height: 180, weight: 78, pos: "DF", 
            stats: { atk: ["B","B","C","C","C","B"], def: ["A","A","B","A","-","-"], spd: ["C","C","C","C"], tec: ["S","S","A","C","B","A","D","-"], itl: ["S","S","S","A"], phy: ["B","B","C"] } 
        },
        { 
            no: 15, name: { ja: "フィリップ・ラインハルト", en: "Philipp Lienhart" }, club: { ja: "フライブルク", en: "SC Freiburg" }, 
            age: 29, height: 189, weight: 80, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["A","A","A","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","D","D","E","D","-"], itl: ["B","B","B","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 16, name: { ja: "フィリップ・ムウェネ", en: "Phillipp Mwene" }, club: { ja: "マインツ", en: "1. FSV Mainz 05" }, 
            age: 32, height: 170, weight: 68, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 22, name: { ja: "アレクサンダー・プラス", en: "Alexander Prass" }, club: { ja: "ホッフェンハイム", en: "TSG Hoffenheim" }, 
            age: 25, height: 180, weight: 74, pos: "DF/MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","B","D","C","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 23, name: { ja: "マルコ・フリードル", en: "Marco Friedl" }, club: { ja: "ブレーメン", en: "Werder Bremen" }, 
            age: 28, height: 187, weight: 82, pos: "DF", 
            stats: { atk: ["C","D","E","B","B","A"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","D","D","E","D","-"], itl: ["B","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 25, name: { ja: "ミヒャエル・スヴォボダ", en: "Michael Svoboda" }, club: { ja: "ヴェネツィア", en: "Venezia" }, 
            age: 27, height: 195, weight: 88, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","S"], def: ["B","B","B","C","-","-"], spd: ["D","D","D","D"], tec: ["C","C","D","E","D","E","D","-"], itl: ["C","C","B","B"], phy: ["A","S","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 4, name: { ja: "ザヴェル・シュラーガー", en: "Xaver Schlager" }, club: { ja: "ライプツィヒ", en: "RB Leipzig" }, 
            age: 28, height: 174, weight: 75, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["A","A","B","S","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","C","C","D","D","-"], itl: ["A","B","A","C"], phy: ["S","A","C"] } 
        },
        { 
            no: 6, name: { ja: "ニコラス・ザイヴァルト", en: "Nicolas Seiwald" }, club: { ja: "ライプツィヒ", en: "RB Leipzig" }, 
            age: 25, height: 179, weight: 75, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["A","A","B","S","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","C","C","D","D","-"], itl: ["A","B","A","C"], phy: ["S","A","B"] } 
        },
        { 
            no: 9, name: { ja: "マルセル・ザビッツァー", en: "Marcel Sabitzer" }, club: { ja: "ドルトムント", en: "Borussia Dortmund" }, 
            age: 32, height: 177, weight: 76, pos: "MF", 
            stats: { atk: ["A","A","B","D","D","C"], def: ["B","B","C","A","-","-"], spd: ["B","B","C","B"], tec: ["A","A","A","B","B","A","D","-"], itl: ["A","A","A","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 10, name: { ja: "フロリアン・グリリッチュ", en: "Florian Grillitsch" }, club: { ja: "プラガ", en: "SC Braga" }, 
            age: 30, height: 187, weight: 77, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","A","B","B","-","-"], spd: ["C","C","C","C"], tec: ["A","A","B","C","C","D","D","-"], itl: ["A","A","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 17, name: { ja: "カーニー・チュクエメカ", en: "Carney Chukwuemeka" }, club: { ja: "ドルトムント", en: "Borussia Dortmund" }, 
            age: 22, height: 187, weight: 75, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["C","C","D","B","-","-"], spd: ["A","A","A","A"], tec: ["A","A","A","A","A","D","D","-"], itl: ["B","A","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 18, name: { ja: "ロマーノ・シュミット", en: "Romano Schmid" }, club: { ja: "ブレーメン", en: "Werder Bremen" }, 
            age: 26, height: 168, weight: 67, pos: "MF", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["C","C","D","B","-","-"], spd: ["A","A","A","A"], tec: ["A","A","A","A","A","D","E","-"], itl: ["B","A","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 19, name: { ja: "デヤン・リュビチッチ", en: "Dejan Ljubičić" }, club: { ja: "シャルケ", en: "Schalke 04" }, 
            age: 28, height: 181, weight: 74, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","A","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","C","C","D","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 20, name: { ja: "コンラート・ライマー", en: "Konrad Laimer" }, club: { ja: "バイエルン", en: "Bayern Munich" }, 
            age: 29, height: 180, weight: 72, pos: "MF", 
            stats: { atk: ["B","C","D","D","D","C"], def: ["A","A","B","S","-","-"], spd: ["A","A","A","A"], tec: ["B","B","C","B","C","D","D","-"], itl: ["A","B","S","C"], phy: ["S","A","B"] } 
        },
        { 
            no: 21, name: { ja: "パトリック・ヴィマー", en: "Patrick Wimmer" }, club: { ja: "ヴォルフスブルク", en: "VfL Wolfsburg" }, 
            age: 25, height: 182, weight: 77, pos: "MF/FW", 
            stats: { atk: ["B","B","C","C","C","C"], def: ["C","C","D","A","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","A","B","D","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 24, name: { ja: "パウル・ヴァナー", en: "Paul Wanner" }, club: { ja: "PSV", en: "PSV Eindhoven" }, 
            age: 20, height: 185, weight: 72, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["B","A","A","B"], tec: ["A","A","S","A","A","D","E","-"], itl: ["A","S","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 26, name: { ja: "アレッサンドロ・シェプフ", en: "Alessandro Schöpf" }, club: { ja: "ヴォルフスベルガー", en: "Wolfsberger AC" }, 
            age: 32, height: 173, weight: 69, pos: "MF", 
            stats: { atk: ["C","C","D","E","E","D"], def: ["C","C","D","C","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","B","B","D","D","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 7, name: { ja: "マルコ・アルナウトヴィッチ", en: "Marko Arnautović" }, club: { ja: "ツルヴェナ・ズヴェズダ", en: "Red Star Belgrade" }, 
            age: 37, height: 192, weight: 83, pos: "FW", 
            stats: { atk: ["A","A","A","A","A","A"], def: ["E","E","F","D","-","-"], spd: ["D","D","D","D"], tec: ["A","A","B","C","A","E","E","-"], itl: ["A","A","S","A"], phy: ["C","S","C"] } 
        },
        { 
            no: 11, name: { ja: "ミヒャエル・グレゴリッチュ", en: "Michael Gregoritsch" }, club: { ja: "アウクスブルク", en: "FC Augsburg" }, 
            age: 32, height: 193, weight: 88, pos: "FW", 
            stats: { atk: ["A","A","B","S","A","S"], def: ["D","D","E","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","C","E","E","-"], itl: ["B","B","B","A"], phy: ["B","S","B"] } 
        },
        { 
            no: 14, name: { ja: "サーシャ・カライジッチ", en: "Saša Kalajdžić" }, club: { ja: "LASKリンツ", en: "LASK" }, 
            age: 28, height: 200, weight: 90, pos: "FW", 
            stats: { atk: ["B","A","C","S","S","S"], def: ["D","D","E","C","-","-"], spd: ["D","D","D","D"], tec: ["C","C","D","D","C","E","E","-"], itl: ["C","B","B","A"], phy: ["C","S","D"] } 
        }
    ]
};