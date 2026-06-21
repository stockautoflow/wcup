export const engData = {
    id: 'eng',
    name: { ja: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 イングランド', en: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England' },
    color: '#cf081f', // イングランドレッド
    teamStats: {
        attributes: { offense: "S", defense: "S", depth: "S", teamwork: "B", intensity: "A", experience: "A" },
        styles: { possession: 60, pressing: 60, attackRoute: 50, playStyle: 40 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "ジョーダン・ピックフォード", en: "Jordan Pickford" }, club: { ja: "エヴァートン", en: "Everton" }, 
            age: 32, height: 185, weight: 77, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","A","B"], spd: ["D","D","C","D"], tec: ["C","A","E","E","E","E","E","S"], itl: ["B","B","S","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 13, name: { ja: "ディーン・ヘンダーソン", en: "Dean Henderson" }, club: { ja: "クリスタル・パレス", en: "Crystal Palace" }, 
            age: 29, height: 188, weight: 85, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","B","E","E","E","E","E","B"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 23, name: { ja: "ジェームズ・トラッフォード", en: "James Trafford" }, club: { ja: "バーンリー", en: "Burnley" }, 
            age: 23, height: 192, weight: 82, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","B","E","E","E","E","E","B"], itl: ["C","C","C","C"], phy: ["C","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "エズリ・コンサ", en: "Ezri Konsa" }, club: { ja: "アストン・ヴィラ", en: "Aston Villa" }, 
            age: 28, height: 183, weight: 77, pos: "DF", 
            stats: { atk: ["C","D","E","A","A","A"], def: ["A","A","A","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","D","C","E","D","-"], itl: ["B","B","B","A"], phy: ["A","A","B"] } 
        },
        { 
            no: 3, name: { ja: "ニコ・オライリー", en: "Nico O'Reilly" }, club: { ja: "マンチェスター・シティ", en: "Manchester City" }, 
            age: 21, height: 188, weight: 78, pos: "DF/MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","B","B","D","D","-"], itl: ["C","B","C","C"], phy: ["B","B","C"] } 
        },
        { 
            no: 5, name: { ja: "ジョン・ストーンズ", en: "John Stones" }, club: { ja: "マンチェスター・シティ", en: "Manchester City" }, 
            age: 32, height: 188, weight: 70, pos: "DF", 
            stats: { atk: ["C","D","E","A","A","A"], def: ["S","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["S","S","B","C","B","E","D","-"], itl: ["S","A","A","A"], phy: ["B","A","C"] } 
        },
        { 
            no: 6, name: { ja: "マーク・グエイ", en: "Marc Guéhi" }, club: { ja: "クリスタル・パレス", en: "Crystal Palace" }, 
            age: 25, height: 182, weight: 82, pos: "DF", 
            stats: { atk: ["C","D","E","A","A","A"], def: ["A","A","A","B","-","-"], spd: ["A","A","B","A"], tec: ["B","B","C","C","C","E","D","-"], itl: ["A","B","A","A"], phy: ["A","A","B"] } 
        },
        { 
            no: 12, name: { ja: "トレヴォ・チャロバー", en: "Trevoh Chalobah" }, club: { ja: "チェルシー", en: "Chelsea" }, 
            age: 26, height: 190, weight: 83, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["B","B","B","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","D","C","E","D","-"], itl: ["B","B","B","A"], phy: ["B","A","B"] } 
        },
        { 
            no: 15, name: { ja: "ダン・バーン", en: "Dan Burn" }, club: { ja: "ニューカッスル", en: "Newcastle United" }, 
            age: 34, height: 201, weight: 87, pos: "DF", 
            stats: { atk: ["C","D","E","S","A","B"], def: ["B","B","S","B","-","-"], spd: ["D","D","E","D"], tec: ["C","C","D","E","D","E","D","-"], itl: ["B","B","A","S"], phy: ["B","S","B"] } 
        },
        { 
            no: 24, name: { ja: "リース・ジェームズ", en: "Reece James" }, club: { ja: "チェルシー", en: "Chelsea" }, 
            age: 26, height: 179, weight: 82, pos: "DF", 
            stats: { atk: ["A","B","C","C","C","B"], def: ["A","A","B","B","-","-"], spd: ["A","A","B","A"], tec: ["A","S","B","A","A","A","C","-"], itl: ["A","B","A","C"], phy: ["A","S","E"] } 
        },
        { 
            no: 25, name: { ja: "ジェド・スペンス", en: "Djed Spence" }, club: { ja: "トッテナム", en: "Tottenham Hotspur" }, 
            age: 25, height: 184, weight: 78, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["A","A","B","A"], tec: ["B","B","C","A","B","E","D","-"], itl: ["C","C","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 26, name: { ja: "ジャレル・クアンサー", en: "Jarell Quansah" }, club: { ja: "バイヤー・レヴァークーゼン", en: "Bayer Leverkusen" }, 
            age: 23, height: 190, weight: 82, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["B","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["A","A","B","D","C","E","D","-"], itl: ["B","B","B","A"], phy: ["B","A","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 4, name: { ja: "デクラン・ライス", en: "Declan Rice" }, club: { ja: "アーセナル", en: "Arsenal" }, 
            age: 27, height: 188, weight: 84, pos: "MF", 
            stats: { atk: ["B","C","D","B","B","B"], def: ["S","S","A","S","-","-"], spd: ["B","B","B","B"], tec: ["S","A","B","B","B","D","D","-"], itl: ["S","A","S","B"], phy: ["S","S","A"] } 
        },
        { 
            no: 8, name: { ja: "エリオット・アンダーソン", en: "Elliot Anderson" }, club: { ja: "ノッティンガム・フォレスト", en: "Nottingham Forest" }, 
            age: 23, height: 179, weight: 72, pos: "MF", 
            stats: { atk: ["B","C","C","D","D","C"], def: ["C","C","D","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","B","B","D","D","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 10, name: { ja: "ジュード・ベリンガム", en: "Jude Bellingham" }, club: { ja: "レアル・マドリード", en: "Real Madrid" }, 
            age: 22, height: 186, weight: 75, pos: "MF", 
            stats: { atk: ["A","A","B","A","A","A"], def: ["A","B","C","S","-","-"], spd: ["A","A","A","A"], tec: ["S","A","A","A","S","C","D","-"], itl: ["S","S","S","B"], phy: ["S","S","A"] } 
        },
        { 
            no: 14, name: { ja: "ジョーダン・ヘンダーソン", en: "Jordan Henderson" }, club: { ja: "ブレントフォード", en: "Brentford" }, 
            age: 35, height: 182, weight: 80, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","D"], def: ["B","B","C","A","-","-"], spd: ["D","D","D","D"], tec: ["B","A","B","D","C","D","D","-"], itl: ["A","B","S","C"], phy: ["C","B","B"] } 
        },
        { 
            no: 16, name: { ja: "コビー・メイヌー", en: "Kobbie Mainoo" }, club: { ja: "マンチェスター・ユナイテッド", en: "Manchester United" }, 
            age: 21, height: 175, weight: 71, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","S","B"], tec: ["A","A","A","A","S","D","D","-"], itl: ["A","S","A","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 17, name: { ja: "モーガン・ロジャーズ", en: "Morgan Rogers" }, club: { ja: "アストン・ヴィラ", en: "Aston Villa" }, 
            age: 23, height: 188, weight: 82, pos: "MF/FW", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["A","A","B","A"], tec: ["B","B","B","A","A","D","D","-"], itl: ["C","B","B","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 21, name: { ja: "エベレチ・エゼ", en: "Eberechi Eze" }, club: { ja: "アーセナル", en: "Arsenal" }, 
            age: 27, height: 173, weight: 67, pos: "MF", 
            stats: { atk: ["A","A","B","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","S","A"], tec: ["A","A","A","S","S","A","D","-"], itl: ["B","S","B","C"], phy: ["B","B","C"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 7, name: { ja: "ブカヨ・サカ", en: "Bukayo Saka" }, club: { ja: "アーセナル", en: "Arsenal" }, 
            age: 24, height: 178, weight: 72, pos: "FW", 
            stats: { atk: ["A","A","A","E","E","D"], def: ["C","C","D","A","-","-"], spd: ["S","S","S","S"], tec: ["A","A","A","S","S","B","D","-"], itl: ["A","S","A","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 9, name: { ja: "ハリー・ケイン", en: "Harry Kane" }, club: { ja: "バイエルン・ミュンヘン", en: "Bayern Munich" }, 
            age: 32, height: 188, weight: 86, pos: "FW", 
            stats: { atk: ["S","S","S","A","S","B"], def: ["D","D","E","B","-","-"], spd: ["D","D","D","D"], tec: ["A","A","A","C","B","A","D","-"], itl: ["S","S","S","A"], phy: ["B","A","B"] } 
        },
        { 
            no: 11, name: { ja: "マーカス・ラッシュフォード", en: "Marcus Rashford" }, club: { ja: "バルセロナ", en: "Barcelona" }, 
            age: 28, height: 180, weight: 70, pos: "FW", 
            stats: { atk: ["S","A","A","C","C","B"], def: ["E","E","F","D","-","-"], spd: ["S","S","A","S"], tec: ["B","B","B","S","A","A","D","-"], itl: ["B","A","B","C"], phy: ["B","A","C"] } 
        },
        { 
            no: 18, name: { ja: "アンソニー・ゴードン", en: "Anthony Gordon" }, club: { ja: "ニューカッスル", en: "Newcastle United" }, 
            age: 25, height: 183, weight: 72, pos: "FW", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["C","C","D","A","-","-"], spd: ["S","S","S","S"], tec: ["B","B","B","S","A","D","D","-"], itl: ["B","B","B","C"], phy: ["S","B","B"] } 
        },
        { 
            no: 19, name: { ja: "オリー・ワトキンス", en: "Ollie Watkins" }, club: { ja: "アストン・ヴィラ", en: "Aston Villa" }, 
            age: 30, height: 180, weight: 73, pos: "FW", 
            stats: { atk: ["A","A","A","A","A","A"], def: ["D","D","E","A","-","-"], spd: ["A","A","B","A"], tec: ["C","C","C","A","B","E","D","-"], itl: ["B","B","B","A"], phy: ["A","A","B"] } 
        },
        { 
            no: 20, name: { ja: "ノニ・マドゥエケ", en: "Noni Madueke" }, club: { ja: "アーセナル", en: "Arsenal" }, 
            age: 24, height: 176, weight: 70, pos: "FW", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["S","S","S","S"], tec: ["B","B","B","S","A","D","D","-"], itl: ["C","B","B","C"], phy: ["B","B","C"] } 
        },
        { 
            no: 22, name: { ja: "アイヴァン・トニー", en: "Ivan Toney" }, club: { ja: "アル・アハリ", en: "Al-Ahli" }, 
            age: 30, height: 185, weight: 83, pos: "FW", 
            stats: { atk: ["A","A","S","A","A","A"], def: ["D","D","E","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","B","A","D","-"], itl: ["B","B","S","A"], phy: ["B","S","B"] } 
        }
    ]
};