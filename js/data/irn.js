export const irnData = {
    id: 'irn',
    name: { ja: '🇮🇷 イラン', en: '🇮🇷 Iran' },
    color: '#239f40', // イラングリーン
    teamStats: {
        attributes: { offense: "B", defense: "B", depth: "C", teamwork: "B", intensity: "A", experience: "B" },
        styles: { possession: 40, pressing: 45, attackRoute: 30, playStyle: 40 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "アリレザ・ベイランバンド", en: "Alireza Beiranvand" }, club: { ja: "トラクター", en: "Tractor SC" }, 
            age: 33, height: 194, weight: 85, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","A","A"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","S","A"], itl: ["B","B","A","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 12, name: { ja: "パヤム・ニアズマンド", en: "Payam Niazmand" }, club: { ja: "ペルセポリス", en: "Persepolis" }, 
            age: 31, height: 193, weight: 82, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","D","C"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 22, name: { ja: "ホセイン・ホセイニ", en: "Hossein Hosseini" }, club: { ja: "セパハン", en: "Sepahan" }, 
            age: 33, height: 189, weight: 80, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","D","C"], itl: ["C","C","B","C"], phy: ["C","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "サレー・ハルダニ", en: "Saleh Hardani" }, club: { ja: "エステグラル", en: "Esteghlal" }, 
            age: 27, height: 176, weight: 70, pos: "DF", 
            stats: { atk: ["C","D","E","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","B","C","D","C","-"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 3, name: { ja: "エフサン・ハジサフィ", en: "Ehsan Hajsafi" }, club: { ja: "セパハン", en: "Sepahan" }, 
            age: 36, height: 176, weight: 73, pos: "DF/MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","B","C","B","-","-"], spd: ["D","D","D","D"], tec: ["B","B","C","C","C","B","C","-"], itl: ["A","B","A","C"], phy: ["C","C","B"] } 
        },
        { 
            no: 4, name: { ja: "ショジャー・ハリルザデー", en: "Shojae Khalilzadeh" }, club: { ja: "トラクター", en: "Tractor SC" }, 
            age: 37, height: 182, weight: 78, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","A","B","-","-"], spd: ["D","D","D","D"], tec: ["C","C","D","E","D","E","D","-"], itl: ["B","B","A","A"], phy: ["C","A","C"] } 
        },
        { 
            no: 5, name: { ja: "ミラド・モハマディ", en: "Milad Mohammadi" }, club: { ja: "ペルセポリス", en: "Persepolis" }, 
            age: 32, height: 178, weight: 73, pos: "DF", 
            stats: { atk: ["C","D","E","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["C","C","D","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 13, name: { ja: "ホセイン・カナーニ", en: "Hossein Kanaani" }, club: { ja: "ペルセポリス", en: "Persepolis" }, 
            age: 32, height: 188, weight: 82, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","A","B","-","-"], spd: ["C","C","C","C"], tec: ["C","B","D","D","D","E","D","-"], itl: ["B","B","B","A"], phy: ["B","A","B"] } 
        },
        { 
            no: 17, name: { ja: "アリア・ユセフィ", en: "Aria Yousefi" }, club: { ja: "セパハン", en: "Sepahan" }, 
            age: 24, height: 177, weight: 72, pos: "DF", 
            stats: { atk: ["C","D","E","D","D","C"], def: ["C","C","C","C","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","C","C","D","C","-"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 19, name: { ja: "アリー・ネマティ", en: "Ali Nemati" }, club: { ja: "フーラード", en: "Foolad" }, 
            age: 30, height: 182, weight: 76, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","B"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","B","B"], phy: ["B","A","B"] } 
        },
        { 
            no: 23, name: { ja: "ラミン・レザイーアン", en: "Ramin Rezaeian" }, club: { ja: "フーラード", en: "Foolad" }, 
            age: 36, height: 171, weight: 70, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","B","C","-"], itl: ["B","B","A","C"], phy: ["C","B","C"] } 
        },
        { 
            no: 25, name: { ja: "ダニエル・エイリ", en: "Daniel Eiri" }, club: { ja: "マラバーン", en: "Malavan" }, 
            age: 22, height: 185, weight: 78, pos: "DF", 
            stats: { atk: ["D","E","E","B","C","B"], def: ["C","C","C","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","D","D","E","D","-"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 6, name: { ja: "サイード・エザトラヒ", en: "Saeid Ezatolahi" }, club: { ja: "アルアハリ", en: "Shabab Al-Ahli" }, 
            age: 29, height: 190, weight: 82, pos: "MF", 
            stats: { atk: ["C","C","D","B","C","B"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","D","-"], itl: ["B","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 7, name: { ja: "アリレザ・ジャハンバクシュ", en: "Alireza Jahanbakhsh" }, club: { ja: "デンデル", en: "Dender" }, 
            age: 32, height: 180, weight: 78, pos: "MF/FW", 
            stats: { atk: ["A","B","C","C","C","C"], def: ["C","C","D","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","B","B","C","C","-"], itl: ["B","B","A","C"], phy: ["B","B","C"] } 
        },
        { 
            no: 8, name: { ja: "モハマド・モヘビ", en: "Mohammad Mohebi" }, club: { ja: "ロストフ", en: "FC Rostov" }, 
            age: 27, height: 188, weight: 80, pos: "MF/FW", 
            stats: { atk: ["B","B","C","B","B","B"], def: ["C","C","D","B","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","B","B","D","E","-"], itl: ["C","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 14, name: { ja: "サマン・ゴッドス", en: "Saman Ghoddos" }, club: { ja: "カルバ", en: "Ittihad Kalba" }, 
            age: 32, height: 176, weight: 73, pos: "MF", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["C","C","D","C","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","B","B","D","-"], itl: ["B","B","B","C"], phy: ["C","C","C"] } 
        },
        { 
            no: 15, name: { ja: "ルーズベヒ・チェシミ", en: "Rouzbeh Cheshmi" }, club: { ja: "エステグラル", en: "Esteghlal" }, 
            age: 32, height: 192, weight: 85, pos: "MF/DF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["B","B","B","A","-","-"], spd: ["D","D","D","D"], tec: ["C","C","D","D","D","E","D","-"], itl: ["B","B","A","B"], phy: ["B","S","B"] } 
        },
        { 
            no: 16, name: { ja: "メフディ・トラビ", en: "Mehdi Torabi" }, club: { ja: "トラクター", en: "Tractor SC" }, 
            age: 31, height: 185, weight: 75, pos: "MF", 
            stats: { atk: ["B","C","D","D","D","C"], def: ["C","C","D","C","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","B","C","D","-"], itl: ["C","B","B","C"], phy: ["B","B","C"] } 
        },
        { 
            no: 21, name: { ja: "モハマド・ゴルバニ", en: "Mohammad Ghorbani" }, club: { ja: "アルワフダ", en: "Al Wahda" }, 
            age: 25, height: 186, weight: 78, pos: "MF", 
            stats: { atk: ["C","C","D","C","C","C"], def: ["B","B","C","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","C","C","C","D","D","-"], itl: ["C","C","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 26, name: { ja: "アミルモハンマド・ラザギニア", en: "Amirmohammad Razzaghinia" }, club: { ja: "エステグラル", en: "Esteghlal" }, 
            age: 20, height: 178, weight: 70, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","C","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","C","C","D","D","-"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 9, name: { ja: "メフディ・タレミ", en: "Mehdi Taremi" }, club: { ja: "オリンピアコス", en: "Olympiacos" }, 
            age: 33, height: 187, weight: 82, pos: "FW", 
            stats: { atk: ["A","A","A","A","A","A"], def: ["D","D","E","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","B","B","E","E","-"], itl: ["A","A","S","A"], phy: ["A","A","B"] } 
        },
        { 
            no: 10, name: { ja: "メフディ・ガエディ", en: "Mehdi Ghayedi" }, club: { ja: "アルナスル", en: "Al-Nasr" }, 
            age: 27, height: 166, weight: 60, pos: "FW", 
            stats: { atk: ["B","B","C","E","E","E"], def: ["E","E","F","D","-","-"], spd: ["A","A","S","A"], tec: ["B","C","C","A","A","D","E","-"], itl: ["C","B","B","C"], phy: ["C","D","C"] } 
        },
        { 
            no: 11, name: { ja: "アリ・アリプール", en: "Ali Alipour" }, club: { ja: "ペルセポリス", en: "Persepolis" }, 
            age: 30, height: 181, weight: 76, pos: "FW", 
            stats: { atk: ["B","B","C","B","C","B"], def: ["D","D","E","C","-","-"], spd: ["B","B","B","B"], tec: ["C","C","D","C","C","E","E","-"], itl: ["C","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 18, name: { ja: "アミロホセイン・ホセインザデー", en: "Amirhossein Hosseinzadeh" }, club: { ja: "トラクター", en: "Tractor SC" }, 
            age: 25, height: 175, weight: 70, pos: "FW", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["B","B","A","B"], tec: ["C","C","C","B","B","D","E","-"], itl: ["C","C","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 20, name: { ja: "シャフリヤール・モガンロウ", en: "Shahriyar Moghanlou" }, club: { ja: "カルバ", en: "Ittihad Kalba" }, 
            age: 31, height: 193, weight: 85, pos: "FW", 
            stats: { atk: ["B","B","C","A","A","S"], def: ["D","D","E","C","-","-"], spd: ["D","D","D","D"], tec: ["D","D","E","D","D","E","E","-"], itl: ["C","C","B","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 24, name: { ja: "デニス・ダルガヒ", en: "Dennis Dargahi" }, club: { ja: "スタンダール・リエージュ", en: "Standard Liège" }, 
            age: 22, height: 180, weight: 74, pos: "FW", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","C","C","E","E","-"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        }
    ]
};