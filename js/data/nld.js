export const nldData = {
    id: 'nld',
    name: { ja: '🇳🇱 オランダ', en: '🇳🇱 Netherlands' },
    color: '#f97316',
    teamStats: {
        attributes: { offense: "A", defense: "S", depth: "B", teamwork: "A", intensity: "B", experience: "A" },
        styles: { possession: 60, pressing: 55, attackRoute: 40, playStyle: 70 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "バルト・フェルブルッヘン", en: "Bart Verbruggen" }, club: { ja: "ブライトン", en: "Brighton" }, 
            age: 23, height: 194, weight: 89, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","B","A"], spd: ["C","C","C","C"], tec: ["C","B","C","E","E","E","E","A"], itl: ["B","B","B","B"], phy: ["B","A","B"] } 
        },
        { 
            no: 13, name: { ja: "ロビン・ルーフス", en: "Robin Roefs" }, club: { ja: "サンダーランド", en: "Sunderland" }, 
            age: 23, height: 190, weight: 82, pos: "GK", 
            stats: { atk: ["E","F","E","E","E","C"], def: ["D","C","C","C","C","C"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["C","B","B"] } 
        },
        { 
            no: 23, name: { ja: "マルク・フレッケン", en: "Mark Flekken" }, club: { ja: "レヴァークーゼン", en: "Bayer Leverkusen" }, 
            age: 33, height: 195, weight: 88, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","B","C","E","E","E","E","B"], itl: ["B","B","B","B"], phy: ["C","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "ルシャレル・ヘールトルイダ", en: "Lutsharel Geertruida" }, club: { ja: "サンダーランド", en: "Sunderland" }, 
            age: 25, height: 185, weight: 79, pos: "DF", 
            stats: { atk: ["C","D","E","B","B","B"], def: ["B","B","B","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","C","C","E","D","-"], itl: ["B","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 4, name: { ja: "フィルジル・ファン・ダイク", en: "Virgil van Dijk" }, club: { ja: "リヴァプール", en: "Liverpool" }, 
            age: 34, height: 195, weight: 92, pos: "DF", 
            stats: { atk: ["B","C","C","S","S","S"], def: ["S","S","S","A","-","-"], spd: ["B","C","C","B"], tec: ["A","S","B","D","C","D","D","-"], itl: ["S","S","S","S"], phy: ["B","S","B"] } 
        },
        { 
            no: 5, name: { ja: "ナタン・アケ", en: "Nathan Aké" }, club: { ja: "マンチェスター・シティ", en: "Manchester City" }, 
            age: 31, height: 180, weight: 75, pos: "DF", 
            stats: { atk: ["C","D","E","A","A","A"], def: ["A","A","A","B","-","-"], spd: ["B","A","B","B"], tec: ["B","A","C","C","C","E","C","-"], itl: ["A","A","A","A"], phy: ["A","A","C"] } 
        },
        { 
            no: 6, name: { ja: "ヤン・ポール・ファン・ヘッケ", en: "Jan Paul van Hecke" }, club: { ja: "ブライトン", en: "Brighton" }, 
            age: 26, height: 189, weight: 80, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","A","A","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","E","D","E","D","-"], itl: ["B","B","B","A"], phy: ["B","A","B"] } 
        },
        { 
            no: 15, name: { ja: "ミッキー・ファン・デ・フェン", en: "Micky van de Ven" }, club: { ja: "トッテナム", en: "Tottenham Hotspur" }, 
            age: 25, height: 193, weight: 81, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","A"], def: ["A","B","A","B","-","-"], spd: ["S","A","B","S"], tec: ["B","B","C","C","C","E","D","-"], itl: ["B","B","B","B"], phy: ["A","A","C"] } 
        },
        { 
            no: 22, name: { ja: "デンゼル・ダンフリース", en: "Denzel Dumfries" }, club: { ja: "インテル", en: "Inter Milan" }, 
            age: 30, height: 188, weight: 80, pos: "DF", 
            stats: { atk: ["B","C","D","A","B","A"], def: ["C","C","C","B","-","-"], spd: ["A","A","B","S"], tec: ["C","C","C","A","C","E","B","-"], itl: ["C","B","A","A"], phy: ["S","A","B"] } 
        },
        { 
            no: 25, name: { ja: "ヨレル・ハト", en: "Jorrel Hato" }, club: { ja: "チェルシー", en: "Chelsea" }, 
            age: 20, height: 182, weight: 76, pos: "DF", 
            stats: { atk: ["D","E","E","C","C","B"], def: ["B","B","B","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","C","C","E","D","-"], itl: ["B","B","B","C"], phy: ["B","B","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 3, name: { ja: "マルテン・デ・ローン", en: "Marten de Roon" }, club: { ja: "アタランタ", en: "Atalanta" }, 
            age: 35, height: 185, weight: 76, pos: "MF", 
            stats: { atk: ["C","D","E","C","C","C"], def: ["A","A","B","S","-","-"], spd: ["D","D","D","D"], tec: ["B","B","C","D","D","E","D","-"], itl: ["A","A","A","B"], phy: ["A","B","B"] } 
        },
        { 
            no: 7, name: { ja: "ジャスティン・クライファート", en: "Justin Kluivert" }, club: { ja: "ボーンマス", en: "Bournemouth" }, 
            age: 27, height: 171, weight: 67, pos: "MF/FW", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["C","C","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 8, name: { ja: "ライアン・フラーフェンベルフ", en: "Ryan Gravenberch" }, club: { ja: "リヴァプール", en: "Liverpool" }, 
            age: 24, height: 190, weight: 83, pos: "MF", 
            stats: { atk: ["B","B","C","C","C","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["A","A","B","A","A","D","D","-"], itl: ["B","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 12, name: { ja: "マッツ・ウィーファー", en: "Mats Wieffer" }, club: { ja: "ブライトン", en: "Brighton" }, 
            age: 26, height: 188, weight: 80, pos: "MF", 
            stats: { atk: ["C","C","D","B","B","B"], def: ["A","A","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","E","D","-"], itl: ["B","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 14, name: { ja: "タイアニ・ラインデルス", en: "Tijjani Reijnders" }, club: { ja: "マンチェスター・シティ", en: "Manchester City" }, 
            age: 27, height: 185, weight: 73, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["C","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["A","A","A","B","A","C","D","-"], itl: ["A","A","A","C"], phy: ["S","B","A"] } 
        },
        { 
            no: 16, name: { ja: "フース・ティル", en: "Guus Til" }, club: { ja: "PSV", en: "PSV Eindhoven" }, 
            age: 28, height: 186, weight: 78, pos: "MF", 
            stats: { atk: ["B","B","C","B","B","B"], def: ["C","C","D","A","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","C","C","E","D","-"], itl: ["B","B","B","A"], phy: ["A","B","B"] } 
        },
        { 
            no: 20, name: { ja: "トゥーン・コープマイネルス", en: "Teun Koopmeiners" }, club: { ja: "ユヴェントス", en: "Juventus" }, 
            age: 28, height: 183, weight: 77, pos: "MF", 
            stats: { atk: ["A","A","A","C","C","C"], def: ["B","B","C","B","-","-"], spd: ["C","C","C","C"], tec: ["A","S","A","C","B","S","D","-"], itl: ["A","A","A","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 21, name: { ja: "フレンキー・デ・ヨング", en: "Frenkie de Jong" }, club: { ja: "バルセロナ", en: "Barcelona" }, 
            age: 29, height: 180, weight: 74, pos: "MF", 
            stats: { atk: ["C","B","C","D","D","C"], def: ["B","A","C","B","-","-"], spd: ["B","A","A","B"], tec: ["S","S","S","B","S","C","D","-"], itl: ["S","S","A","C"], phy: ["A","B","D"] } 
        },
        { 
            no: 26, name: { ja: "クインテン・ティンバー", en: "Quinten Timber" }, club: { ja: "マルセイユ", en: "Marseille" }, 
            age: 24, height: 179, weight: 71, pos: "MF", 
            stats: { atk: ["B","C","D","C","C","C"], def: ["B","B","B","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","B","B","E","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 9, name: { ja: "ヴァウト・ヴェグホルスト", en: "Wout Weghorst" }, club: { ja: "アヤックス", en: "Ajax" }, 
            age: 33, height: 197, weight: 84, pos: "FW", 
            stats: { atk: ["A","A","A","S","S","A"], def: ["D","D","E","A","-","-"], spd: ["D","D","D","D"], tec: ["C","C","D","E","D","E","E","-"], itl: ["B","B","S","S"], phy: ["A","S","B"] } 
        },
        { 
            no: 10, name: { ja: "メンフィス・デパイ", en: "Memphis Depay" }, club: { ja: "コリンチャンス", en: "Corinthians" }, 
            age: 32, height: 176, weight: 78, pos: "FW", 
            stats: { atk: ["A","A","A","D","D","D"], def: ["E","E","F","D","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","B","A","A","D","-"], itl: ["A","A","B","C"], phy: ["C","C","C"] } 
        },
        { 
            no: 11, name: { ja: "コーディ・ガクポ", en: "Cody Gakpo" }, club: { ja: "リヴァプール", en: "Liverpool" }, 
            age: 27, height: 193, weight: 81, pos: "FW", 
            stats: { atk: ["A","A","B","B","B","B"], def: ["D","D","E","C","-","-"], spd: ["A","A","B","A"], tec: ["B","B","B","A","A","B","D","-"], itl: ["B","A","B","B"], phy: ["B","A","B"] } 
        },
        { 
            no: 17, name: { ja: "ノア・ラング", en: "Noa Lang" }, club: { ja: "ナポリ", en: "Napoli" }, 
            age: 26, height: 179, weight: 73, pos: "FW", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","E","F","D","-","-"], spd: ["A","A","A","A"], tec: ["C","C","B","A","A","C","E","-"], itl: ["C","B","B","C"], phy: ["C","C","C"] } 
        },
        { 
            no: 18, name: { ja: "ドニエル・マレン", en: "Donyell Malen" }, club: { ja: "ASローマ", en: "AS Roma" }, 
            age: 27, height: 179, weight: 76, pos: "FW", 
            stats: { atk: ["A","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["C","C","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 19, name: { ja: "ブライアン・ブロビー", en: "Brian Brobbey" }, club: { ja: "サンダーランド", en: "Sunderland" }, 
            age: 24, height: 180, weight: 78, pos: "FW", 
            stats: { atk: ["A","B","C","B","B","B"], def: ["D","D","E","C","-","-"], spd: ["A","A","B","A"], tec: ["C","C","D","B","C","E","E","-"], itl: ["C","C","B","C"], phy: ["B","S","B"] } 
        },
        { 
            no: 24, name: { ja: "クリセンシオ・サマーフィル", en: "Crysencio Summerville" }, club: { ja: "ウェストハム", en: "West Ham United" }, 
            age: 24, height: 174, weight: 68, pos: "FW", 
            stats: { atk: ["B","A","C","E","E","E"], def: ["D","D","E","C","-","-"], spd: ["S","S","S","S"], tec: ["C","C","B","S","A","C","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        }
    ]
};