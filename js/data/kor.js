export const korData = {
    id: 'kor',
    name: { ja: '🇰🇷 韓国', en: '🇰🇷 South Korea' },
    color: '#c60c30', // 韓国レッド
    teamStats: {
        attributes: { offense: "A", defense: "B", depth: "C", teamwork: "B", intensity: "A", experience: "B" },
        styles: { possession: 55, pressing: 65, attackRoute: 40, playStyle: 50 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "キム・スンギュ", en: "Kim Seung-gyu" }, club: { ja: "FC東京", en: "FC Tokyo" }, 
            age: 35, height: 187, weight: 84, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","B","E","E","E","E","E","B"], itl: ["C","C","B","C"], phy: ["C","B","C"] } 
        },
        { 
            no: 12, name: { ja: "ソン・ボムグン", en: "Song Bum-keun" }, club: { ja: "全北現代", en: "Jeonbuk Hyundai Motors" }, 
            age: 28, height: 194, weight: 88, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","C","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 21, name: { ja: "チョ・ヒョヌ", en: "Jo Hyeon-woo" }, club: { ja: "蔚山HD", en: "Ulsan HD" }, 
            age: 34, height: 189, weight: 75, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","B","A"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","B","B","C"], phy: ["C","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "イ・ハンボム", en: "Lee Han-beom" }, club: { ja: "ミッティラン", en: "FC Midtjylland" }, 
            age: 23, height: 190, weight: 80, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 4, name: { ja: "キム・ミンジェ", en: "Kim Min-jae" }, club: { ja: "バイエルン", en: "Bayern Munich" }, 
            age: 29, height: 190, weight: 88, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","S"], def: ["S","S","S","B","-","-"], spd: ["A","B","C","A"], tec: ["C","C","D","D","D","E","D","-"], itl: ["A","B","A","A"], phy: ["S","S","B"] } 
        },
        { 
            no: 5, name: { ja: "キム・テヒョン", en: "Kim Tae-hyeon" }, club: { ja: "鹿島", en: "Kashima Antlers" }, 
            age: 25, height: 186, weight: 82, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["C","B","B","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","B","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 13, name: { ja: "イ・テソク", en: "Lee Tae-seok" }, club: { ja: "オーストリア・ウィーン", en: "Austria Wien" }, 
            age: 23, height: 174, weight: 68, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","C","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 14, name: { ja: "チョ・ウィジェ", en: "Cho Wi-je" }, club: { ja: "全北現代", en: "Jeonbuk Hyundai Motors" }, 
            age: 27, height: 188, weight: 80, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","A"], def: ["C","B","B","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","B","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 15, name: { ja: "キム・ムンファン", en: "Kim Moon-hwan" }, club: { ja: "大田ハナシチズン", en: "Daejeon Hana Citizen" }, 
            age: 30, height: 173, weight: 64, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 16, name: { ja: "パク・ジンソプ", en: "Park Jin-seop" }, club: { ja: "浙江FC", en: "Zhejiang FC" }, 
            age: 30, height: 184, weight: 80, pos: "DF/MF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 22, name: { ja: "ソル・ヨンウ", en: "Seol Young-woo" }, club: { ja: "レッドスター", en: "Red Star Belgrade" }, 
            age: 27, height: 180, weight: 72, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 23, name: { ja: "イェンス・カストロップ", en: "Jens Castrop" }, club: { ja: "ボルシアMG", en: "Borussia MG" }, 
            age: 22, height: 178, weight: 74, pos: "DF/MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 3, name: { ja: "イ・ギヒョク", en: "Lee Ki-hyuk" }, club: { ja: "江原FC", en: "Gangwon FC" }, 
            age: 25, height: 184, weight: 76, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","D","-"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 6, name: { ja: "ファン・インボム", en: "Hwang In-beom" }, club: { ja: "フェイエノールト", en: "Feyenoord" }, 
            age: 29, height: 177, weight: 70, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["B","B","C","A","-","-"], spd: ["C","C","C","C"], tec: ["A","A","A","C","B","D","D","-"], itl: ["A","A","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 8, name: { ja: "ペク・スンホ", en: "Paik Seung-ho" }, club: { ja: "バーミンガム", en: "Birmingham City" }, 
            age: 29, height: 182, weight: 72, pos: "MF", 
            stats: { atk: ["B","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","D","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 10, name: { ja: "イ・ジェソン", en: "Lee Jae-sung" }, club: { ja: "マインツ", en: "1. FSV Mainz 05" }, 
            age: 33, height: 180, weight: 70, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["B","B","C","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","B","D","D","-"], itl: ["A","A","A","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 11, name: { ja: "ファン・ヒチャン", en: "Hwang Hee-chan" }, club: { ja: "ウルバーハンプトン", en: "Wolverhampton" }, 
            age: 30, height: 177, weight: 77, pos: "MF/FW", 
            stats: { atk: ["A","A","C","D","D","C"], def: ["D","D","E","B","-","-"], spd: ["S","S","A","S"], tec: ["C","C","C","S","A","D","E","-"], itl: ["B","B","B","C"], phy: ["A","S","C"] } 
        },
        { 
            no: 17, name: { ja: "ペ・ジュノ", en: "Bae Jun-ho" }, club: { ja: "ストーク・C", en: "Stoke City" }, 
            age: 22, height: 180, weight: 72, pos: "MF", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["B","B","A","B"], tec: ["B","B","B","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 19, name: { ja: "イ・ガンイン", en: "Lee Kang-in" }, club: { ja: "パリSG", en: "Paris Saint-Germain" }, 
            age: 25, height: 173, weight: 68, pos: "MF", 
            stats: { atk: ["A","A","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["B","A","S","B"], tec: ["S","S","S","A","S","S","D","-"], itl: ["A","S","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 20, name: { ja: "ヤン・ヒョンジュン", en: "Yang Hyun-jun" }, club: { ja: "セルティック", en: "Celtic" }, 
            age: 24, height: 179, weight: 73, pos: "MF/FW", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["C","C","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 24, name: { ja: "キム・ジンギュ", en: "Kim Jin-gyu" }, club: { ja: "全北現代", en: "Jeonbuk Hyundai Motors" }, 
            age: 29, height: 177, weight: 68, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","D","D","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 25, name: { ja: "オム・ジソン", en: "Eom Ji-sung" }, club: { ja: "スウォンジー", en: "Swansea City" }, 
            age: 24, height: 178, weight: 70, pos: "MF", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["C","C","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 26, name: { ja: "イ・ドンギョン", en: "Lee Dong-gyeong" }, club: { ja: "蔚山HD", en: "Ulsan HD" }, 
            age: 28, height: 175, weight: 68, pos: "MF", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["C","C","B","C"], tec: ["B","B","B","B","B","C","D","-"], itl: ["C","B","B","C"], phy: ["B","C","C"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 7, name: { ja: "ソン・フンミン", en: "Son Heung-min" }, club: { ja: "ロサンゼルスFC", en: "Los Angeles FC" }, 
            age: 33, height: 183, weight: 78, pos: "FW", 
            stats: { atk: ["S","S","A","C","C","C"], def: ["D","D","E","B","-","-"], spd: ["A","A","S","A"], tec: ["B","B","B","A","S","C","E","-"], itl: ["A","S","S","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 9, name: { ja: "チョ・ギュソン", en: "Cho Gue-sung" }, club: { ja: "ミッティラン", en: "FC Midtjylland" }, 
            age: 28, height: 189, weight: 82, pos: "FW", 
            stats: { atk: ["A","B","B","A","A","S"], def: ["D","D","E","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","E","-"], itl: ["C","B","B","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 18, name: { ja: "オ・ヒョンギュ", en: "Oh Hyeon-gyu" }, club: { ja: "ベシクタシュ", en: "Beşiktaş" }, 
            age: 25, height: 185, weight: 82, pos: "FW", 
            stats: { atk: ["A","B","C","A","B","A"], def: ["D","D","E","C","-","-"], spd: ["B","B","B","B"], tec: ["C","C","D","C","C","E","E","-"], itl: ["C","B","B","B"], phy: ["A","S","B"] } 
        }
    ]
};