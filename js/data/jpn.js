export const jpnData = {
    id: 'jpn',
    name: { ja: '🇯🇵 日本', en: '🇯🇵 Japan' },
    color: '#0f2c59',
        teamStats: {
        attributes: { offense: "B", defense: "A", depth: "C", teamwork: "A", intensity: "S", experience: "B" },
        styles: { 
            possession: 45, // カウンター(0) ⇔ ポゼッション(100)
            pressing: 85,   // リトリート(0) ⇔ ハイプレス(100)
            attackRoute: 30, // サイド(0) ⇔ 中央(100)
            playStyle: 80    // 個人技(0) ⇔ 組織構築(100)
        }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "鈴木 彩艶", en: "Zion Suzuki" }, club: { ja: "パルマ", en: "Parma" }, 
            age: 23, height: 190, weight: 100, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","A"], def: ["C","C","C","C","B","A"], spd: ["C","C","B","C"], tec: ["C","B","D","E","E","E","E","A"], itl: ["C","C","B","B"], phy: ["B","S","B"] } 
        },
        { 
            no: 12, name: { ja: "大迫 敬介", en: "Keisuke Osako" }, club: { ja: "サンフレッチェ広島", en: "Sanfrecce Hiroshima" }, 
            age: 26, height: 188, weight: 86, pos: "GK", 
            stats: { atk: ["E","F","E","E","E","C"], def: ["D","C","C","C","C","C"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["C","B","B"] } 
        },
        { 
            no: 23, name: { ja: "早川 友基", en: "Tomoki Hayakawa" }, club: { ja: "鹿島アントラーズ", en: "Kashima Antlers" }, 
            age: 27, height: 187, weight: 81, pos: "GK", 
            stats: { atk: ["E","F","E","E","E","C"], def: ["D","C","C","C","C","C"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["C","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "菅原 由勢", en: "Yukinari Sugawara" }, club: { ja: "ヴェルダー・ブレーメン", en: "Werder Bremen" }, 
            age: 25, height: 179, weight: 69, pos: "DF", 
            stats: { atk: ["B","C","C","D","D","C"], def: ["C","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["A","B","B","B","B","A","C","-"], itl: ["B","B","B","C"], phy: ["A","C","B"] } 
        },
        { 
            no: 3, name: { ja: "谷口 彰悟", en: "Shogo Taniguchi" }, club: { ja: "シント＝トロイデンVV", en: "Sint-Truidense VV" }, 
            age: 34, height: 183, weight: 75, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","C"], def: ["C","B","B","C","-","-"], spd: ["D","D","D","D"], tec: ["B","B","C","E","E","E","D","-"], itl: ["B","B","A","B"], phy: ["C","C","C"] } 
        },
        { 
            no: 4, name: { ja: "板倉 滉", en: "Ko Itakura" }, club: { ja: "アヤックス", en: "Ajax" }, 
            age: 29, height: 186, weight: 75, pos: "DF", 
            stats: { atk: ["C","D","E","B","B","B"], def: ["A","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","C","C","E","D","-"], itl: ["B","A","A","B"], phy: ["B","B","C"] } 
        },
        { 
            no: 5, name: { ja: "長友 佑都", en: "Yuto Nagatomo" }, club: { ja: "FC東京", en: "FC Tokyo" }, 
            age: 39, height: 170, weight: 68, pos: "DF", 
            stats: { atk: ["D","E","E","E","E","D"], def: ["C","C","C","A","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["B","B","S","C"], phy: ["B","C","A"] } 
        },
        { 
            no: 16, name: { ja: "渡辺 剛", en: "Tsuyoshi Watanabe" }, club: { ja: "フェイエノールト", en: "Feyenoord" }, 
            age: 29, height: 186, weight: 80, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","A","C","-","-"], spd: ["C","C","D","C"], tec: ["C","C","D","E","E","E","D","-"], itl: ["C","C","B","B"], phy: ["B","A","B"] } 
        },
        { 
            no: 20, name: { ja: "瀬古 歩夢", en: "Ayumu Seko" }, club: { ja: "ル・アーヴルAC", en: "Le Havre AC" }, 
            age: 26, height: 185, weight: 72, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","B"], def: ["C","B","B","C","-","-"], spd: ["C","C","C","C"], tec: ["B","A","C","E","E","E","D","-"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 21, name: { ja: "伊藤 洋輝", en: "Hiroki Ito" }, club: { ja: "バイエルン・ミュンヘン", en: "Bayern Munich" }, 
            age: 27, height: 188, weight: 84, pos: "DF", 
            stats: { atk: ["C","D","E","B","C","B"], def: ["A","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["A","A","B","C","C","D","D","-"], itl: ["B","B","B","B"], phy: ["B","A","C"] } 
        },
        { 
            no: 22, name: { ja: "冨安 健洋", en: "Takehiro Tomiyasu" }, club: { ja: "アヤックス", en: "Ajax" }, 
            age: 27, height: 188, weight: 84, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["S","A","A","A","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","C","C","E","C","-"], itl: ["A","A","A","B"], phy: ["C","A","E"] } 
        },
        { 
            no: 25, name: { ja: "鈴木 淳之介", en: "Junnosuke Suzuki" }, club: { ja: "FCコペンハーゲン", en: "FC Copenhagen" }, 
            age: 22, height: 180, weight: 73, pos: "DF", 
            stats: { atk: ["D","E","E","C","C","C"], def: ["C","C","C","C","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","D","D","E","D","-"], itl: ["C","C","C","C"], phy: ["B","C","B"] } 
        },

        // ==========================================
        // MF / FW
        // ==========================================
        { 
            no: 6, name: { ja: "町野 修斗", en: "Shuto Machino" }, club: { ja: "ボルシアMG", en: "Borussia MG" }, 
            age: 26, height: 185, weight: 80, pos: "FW", 
            stats: { atk: ["B","B","B","B","B","B"], def: ["D","D","E","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","C","C","C","D","E","-"], itl: ["C","C","B","B"], phy: ["B","B","B"] } 
        },
        { 
            no: 7, name: { ja: "田中 碧", en: "Ao Tanaka" }, club: { ja: "リーズ・ユナイテッド", en: "Leeds United" }, 
            age: 27, height: 180, weight: 74, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","D"], def: ["B","B","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","D","D","-"], itl: ["B","A","B","C"], phy: ["A","C","B"] } 
        },
        { 
            no: 8, name: { ja: "久保 建英", en: "Takefusa Kubo" }, club: { ja: "レアル・ソシエダ", en: "Real Sociedad" }, 
            age: 25, height: 173, weight: 67, pos: "MF/FW", 
            stats: { atk: ["B","A","B","E","E","E"], def: ["D","C","E","C","-","-"], spd: ["B","A","S","A"], tec: ["A","A","S","A","S","A","D","-"], itl: ["A","S","B","C"], phy: ["B","D","D"] } 
        },
        { 
            no: 9, name: { ja: "後藤 啓介", en: "Keisuke Goto" }, club: { ja: "シント＝トロイデンVV", en: "Sint-Truidense VV" }, 
            age: 21, height: 191, weight: 78, pos: "FW", 
            stats: { atk: ["B","C","C","B","B","B"], def: ["E","E","F","D","-","-"], spd: ["C","C","D","C"], tec: ["C","C","D","D","D","E","E","-"], itl: ["C","C","C","B"], phy: ["C","B","B"] } 
        },
        { 
            no: 10, name: { ja: "堂安 律", en: "Ritsu Doan" }, club: { ja: "アイントラハト・フランクフルト", en: "Eintracht Frankfurt" }, 
            age: 28, height: 172, weight: 70, pos: "MF", 
            stats: { atk: ["A","B","A","D","D","D"], def: ["C","C","D","A","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","B","B","B","D","-"], itl: ["B","B","A","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 11, name: { ja: "前田 大然", en: "Daizen Maeda" }, club: { ja: "セルティック", en: "Celtic" }, 
            age: 28, height: 173, weight: 67, pos: "FW", 
            stats: { atk: ["C","C","E","C","C","B"], def: ["B","C","D","S","-","-"], spd: ["S","S","A","S"], tec: ["D","D","E","B","C","E","D","-"], itl: ["C","C","A","C"], phy: ["S","B","A"] } 
        },
        { 
            no: 13, name: { ja: "中村 敬斗", en: "Keito Nakamura" }, club: { ja: "スタッド・ランス", en: "Stade de Reims" }, 
            age: 25, height: 180, weight: 75, pos: "MF/FW", 
            stats: { atk: ["A","A","C","D","D","D"], def: ["D","E","F","C","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","A","A","C","E","-"], itl: ["C","B","B","C"], phy: ["C","C","C"] } 
        },
        { 
            no: 14, name: { ja: "伊東 純也", en: "Junya Ito" }, club: { ja: "KRCゲンク", en: "KRC Genk" }, 
            age: 33, height: 176, weight: 66, pos: "FW", 
            stats: { atk: ["B","C","C","E","E","D"], def: ["D","C","E","B","-","-"], spd: ["A","A","A","S"], tec: ["C","B","C","S","A","C","D","-"], itl: ["C","B","B","C"], phy: ["A","C","A"] } 
        },
        { 
            no: 15, name: { ja: "鎌田 大地", en: "Daichi Kamada" }, club: { ja: "クリスタル・パレス", en: "Crystal Palace" }, 
            age: 29, height: 184, weight: 76, pos: "MF", 
            stats: { atk: ["B","B","B","D","D","D"], def: ["B","B","C","A","-","-"], spd: ["C","C","C","C"], tec: ["A","A","S","C","B","B","D","-"], itl: ["A","A","A","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 17, name: { ja: "鈴木 唯人", en: "Yuito Suzuki" }, club: { ja: "SCフライブルク", en: "SC Freiburg" }, 
            age: 24, height: 175, weight: 70, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","D"], def: ["D","D","E","C","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","B","B","C","E","-"], itl: ["B","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 18, name: { ja: "上田 綺世", en: "Ayase Ueda" }, club: { ja: "フェイエノールト", en: "Feyenoord" }, 
            age: 27, height: 182, weight: 76, pos: "FW", 
            stats: { atk: ["A","A","A","A","A","A"], def: ["D","D","E","B","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","C","C","D","E","-"], itl: ["C","B","B","A"], phy: ["B","B","B"] } 
        },
        { 
            no: 19, name: { ja: "小川 航基", en: "Koki Ogawa" }, club: { ja: "NECナイメヘン", en: "NEC Nijmegen" }, 
            age: 28, height: 186, weight: 78, pos: "FW", 
            stats: { atk: ["B","B","B","A","A","B"], def: ["D","D","E","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","E","-"], itl: ["C","C","B","A"], phy: ["B","B","B"] } 
        },
        { 
            no: 24, name: { ja: "佐野 海舟", en: "Kaishu Sano" }, club: { ja: "1.FSVマインツ05", en: "1.FSV Mainz 05" }, 
            age: 25, height: 176, weight: 67, pos: "MF", 
            stats: { atk: ["C","D","E","C","C","C"], def: ["B","A","B","A","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","C","C","E","D","-"], itl: ["B","B","A","C"], phy: ["S","B","B"] } 
        },
        { 
            no: 26, name: { ja: "塩貝 健人", en: "Kento Shiogai" }, club: { ja: "VfLヴォルフスブルク", en: "VfL Wolfsburg" }, 
            age: 21, height: 180, weight: 77, pos: "FW", 
            stats: { atk: ["B","C","C","B","C","B"], def: ["D","D","E","B","-","-"], spd: ["B","B","B","B"], tec: ["C","C","D","C","C","E","E","-"], itl: ["C","C","A","B"], phy: ["A","A","B"] } 
        }
    ]
};