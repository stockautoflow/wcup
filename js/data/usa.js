export const usaData = {
    id: 'usa',
    name: { ja: '🇺🇸 アメリカ合衆国', en: '🇺🇸 USA' },
    color: '#3c3b6e', // アメリカンネイビー
    teamStats: {
        attributes: { offense: "B", defense: "B", depth: "B", teamwork: "B", intensity: "A", experience: "B" },
        styles: { possession: 50, pressing: 65, attackRoute: 40, playStyle: 50 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "マット・ターナー", en: "Matt Turner" }, club: { ja: "ニューイングランド・レボリューション", en: "New England Revolution" }, 
            age: 31, height: 191, weight: 79, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","A","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","B"], itl: ["B","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 24, name: { ja: "マット・フリーズ", en: "Matt Freese" }, club: { ja: "ニューヨーク・シティFC", en: "New York City FC" }, 
            age: 27, height: 191, weight: 84, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 25, name: { ja: "クリス・ブレイディ", en: "Chris Brady" }, club: { ja: "シカゴ・ファイアー", en: "Chicago Fire" }, 
            age: 22, height: 191, weight: 85, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["B","A","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "セルジーニョ・デスト", en: "Sergiño Dest" }, club: { ja: "PSV", en: "PSV Eindhoven" }, 
            age: 25, height: 173, weight: 62, pos: "DF", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["C","C","D","B","-","-"], spd: ["A","A","S","A"], tec: ["B","B","B","S","S","D","C","-"], itl: ["B","B","B","C"], phy: ["A","C","C"] } 
        },
        { 
            no: 3, name: { ja: "クリス・リチャーズ", en: "Chris Richards" }, club: { ja: "クリスタル・パレス", en: "Crystal Palace" }, 
            age: 26, height: 188, weight: 84, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","D","D","E","D","-"], itl: ["B","B","B","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 5, name: { ja: "アントニー・ロビンソン", en: "Antonee Robinson" }, club: { ja: "フルハム", en: "Fulham" }, 
            age: 28, height: 183, weight: 73, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","A","-","-"], spd: ["S","S","A","S"], tec: ["B","B","C","A","B","D","C","-"], itl: ["B","B","B","C"], phy: ["S","B","B"] } 
        },
        { 
            no: 6, name: { ja: "オーストン・トラスティ", en: "Auston Trusty" }, club: { ja: "セルティック", en: "Celtic" }, 
            age: 27, height: 191, weight: 84, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","A"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 12, name: { ja: "マイルズ・ロビンソン", en: "Miles Robinson" }, club: { ja: "FCシンシナティ", en: "FC Cincinnati" }, 
            age: 29, height: 188, weight: 84, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","A","B","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 13, name: { ja: "ティム・リーム", en: "Tim Ream" }, club: { ja: "シャーロットFC", en: "Charlotte FC" }, 
            age: 38, height: 186, weight: 82, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","B"], def: ["B","B","B","B","-","-"], spd: ["E","E","D","E"], tec: ["B","B","C","E","D","E","D","-"], itl: ["A","A","S","B"], phy: ["C","B","C"] } 
        },
        { 
            no: 16, name: { ja: "アレックス・フリーマン", en: "Alex Freeman" }, club: { ja: "ビジャレアル", en: "Villarreal" }, 
            age: 21, height: 185, weight: 75, pos: "DF", 
            stats: { atk: ["C","D","E","C","C","B"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["C","C","D","C","C","E","D","-"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 18, name: { ja: "マックス・アーフステン", en: "Max Arfsten" }, club: { ja: "コロンバス・クルー", en: "Columbus Crew" }, 
            age: 25, height: 185, weight: 77, pos: "DF/MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 22, name: { ja: "マーク・マッケンジー", en: "Mark McKenzie" }, club: { ja: "トゥールーズ", en: "Toulouse" }, 
            age: 27, height: 183, weight: 82, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","A"], def: ["B","B","B","B","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 23, name: { ja: "ジョー・スカリー", en: "Joe Scally" }, club: { ja: "ボルシアMG", en: "Borussia MG" }, 
            age: 23, height: 184, weight: 80, pos: "DF", 
            s