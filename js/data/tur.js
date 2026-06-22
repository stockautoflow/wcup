export const turData = {
    id: 'tur',
    name: { ja: '🇹🇷 トルコ', en: '🇹🇷 Turkey' },
    color: '#e30a17', // トルコレッド
    teamStats: {
        attributes: { offense: "B", defense: "B", depth: "B", teamwork: "B", intensity: "A", experience: "B" },
        styles: { possession: 55, pressing: 60, attackRoute: 40, playStyle: 50 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "メルト・ギュノク", en: "Mert Günok" }, club: { ja: "フェネルバフチェ", en: "Fenerbahçe" }, 
            age: 37, height: 196, weight: 92, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","B","A"], spd: ["E","E","D","E"], tec: ["C","C","E","E","E","E","E","C"], itl: ["B","B","B","C"], phy: ["C","B","B"] } 
        },
        { 
            no: 12, name: { ja: "アルタイ・バユンドゥル", en: "Altay Bayındır" }, club: { ja: "マンチェスター・ユナイテッド", en: "Manchester United" }, 
            age: 28, height: 198, weight: 88, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 23, name: { ja: "ウールジャン・チャクル", en: "Uğurcan Çakır" }, club: { ja: "ガラタサライ", en: "Galatasaray" }, 
            age: 30, height: 191, weight: 78, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "ゼキ・チェリク", en: "Zeki Çelik" }, club: { ja: "ローマ", en: "AS Roma" }, 
            age: 29, height: 180, weight: 78, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 3, name: { ja: "メリフ・デミラル", en: "Merih Demiral" }, club: { ja: "アルアハリ", en: "Al-Ahli" }, 
            age: 28, height: 190, weight: 86, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","S"], def: ["A","A","A","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","E","D","E","D","-"], itl: ["B","B","A","A"], phy: ["S","S","B"] } 
        },
        { 
            no: 4, name: { ja: "チャーラル・ソユンジュ", en: "Çağlar Söyüncü" }, club: { ja: "フェネルバフチェ", en: "Fenerbahçe" }, 
            age: 30, height: 185, weight: 82, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["A","A","B","B","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","D","D","E","D","-"], itl: ["B","B","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 13, name: { ja: "エレン・エルマル", en: "Eren Elmalı" }, club: { ja: "ガラタサライ", en: "Galatasaray" }, 
            age: 25, height: 180, weight: 73, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","C","C","D","C","-"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 14, name: { ja: "アブドゥルケリム・バルダクチ", en: "Abdülkerim Bardakcı" }, club: { ja: "ガラタサライ", en: "Galatasaray" }, 
            age: 31, height: 185, weight: 82, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["B","B","A","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","D","D","E","D","-"], itl: ["B","B","B","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 15, name: { ja: "オザン・カバク", en: "Ozan Kabak" }, club: { ja: "ホッフェンハイム", en: "TSG Hoffenheim" }, 
            age: 26, height: 186, weight: 86, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["B","A","A","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","D","D","E","D","-"], itl: ["B","B","B","B"], phy: ["A","S","C"] } 
        },
        { 
            no: 18, name: { ja: "メルト・ミュルドゥル", en: "Mert Müldür" }, club: { ja: "フェネルバフチェ", en: "Fenerbahçe" }, 
            age: 27, height: 184, weight: 74, pos: "DF", 
            stats: { atk: ["B","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 20, name: { ja: "フェルディ・カディオール", en: "Ferdi Kadıoğlu" }, club: { ja: "ブライトン", en: "Brighton" }, 
            age: 26, height: 174, weight: 68, pos: "DF", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["B","B","C","A","-","-"], spd: ["A","A","A","A"], tec: ["A","B","B","A","A","D","C","-"], itl: ["B","B","B","C"], phy: ["S","C","B"] } 
        },
        { 
            no: 25, name: { ja: "サメト・アカイドゥン", en: "Samet Akaydin" }, club: { ja: "チャイクル・リゼスポル", en: "Çaykur Rizespor" }, 
            age: 32, height: 190, weight: 83, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","E","D","E","D","-"], itl: ["C","C","B","B"], phy: ["A","S","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 5, name: { ja: "サリフ・エズジャン", en: "Salih Özcan" }, club: { ja: "ドルトムント", en: "Borussia Dortmund" }, 
            age: 28, height: 182, weight: 74, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","D","-"], itl: ["B","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 6, name: { ja: "オルクン・コクチュ", en: "Orkun Kökçü" }, club: { ja: "ベシクタシュ", en: "Beşiktaş" }, 
            age: 25, height: 175, weight: 70, pos: "MF", 
            stats: { atk: ["A","B","C","D","D","D"], def: ["C","C","D","B","-","-"], spd: ["C","C","B","C"], tec: ["A","A","A","B","B","B","D","-"], itl: ["B","A","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 10, name: { ja: "ハカン・チャルハノール", en: "Hakan Çalhanoğlu" }, club: { ja: "インテル", en: "Inter Milan" }, 
            age: 32, height: 178, weight: 76, pos: "MF", 
            stats: { atk: ["S","A","A","D","D","D"], def: ["B","B","C","A","-","-"], spd: ["C","C","C","C"], tec: ["S","S","S","C","B","S","D","-"], itl: ["S","S","A","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 16, name: { ja: "イスマイル・ユクセク", en: "İsmail Yüksek" }, club: { ja: "フェネルバフチェ", en: "Fenerbahçe" }, 
            age: 27, height: 183, weight: 75, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","A","B","A","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","C","C","D","D","-"], itl: ["B","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 22, name: { ja: "カーン・アイハン", en: "Kaan Ayhan" }, club: { ja: "ガラタサライ", en: "Galatasaray" }, 
            age: 31, height: 185, weight: 84, pos: "MF", 
            stats: { atk: ["C","C","D","A","B","A"], def: ["B","B","A","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","D","C","E","D","-"], itl: ["B","B","B","B"], phy: ["A","S","B"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 7, name: { ja: "ケレム・アクトゥルコール", en: "Kerem Aktürkoğlu" }, club: { ja: "フェネルバフチェ", en: "Fenerbahçe" }, 
            age: 27, height: 173, weight: 68, pos: "FW", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","A","B","D","E","-"], itl: ["B","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 8, name: { ja: "アルダ・ギュレル", en: "Arda Güler" }, club: { ja: "R・マドリー", en: "Real Madrid" }, 
            age: 21, height: 175, weight: 68, pos: "FW", 
            stats: { atk: ["A","A","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["B","A","S","B"], tec: ["A","A","S","A","S","A","E","-"], itl: ["A","S","B","C"], phy: ["C","D","C"] } 
        },
        { 
            no: 9, name: { ja: "デニズ・ギュル", en: "Deniz Gül" }, club: { ja: "ポルト", en: "FC Porto" }, 
            age: 21, height: 190, weight: 82, pos: "FW", 
            stats: { atk: ["B","B","C","A","B","A"], def: ["D","D","E","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","C","C","E","E","-"], itl: ["C","C","B","B"], phy: ["A","S","B"] } 
        },
        { 
            no: 11, name: { ja: "ケナン・ユルディズ", en: "Kenan Yıldız" }, club: { ja: "ユベントス", en: "Juventus" }, 
            age: 21, height: 185, weight: 75, pos: "FW", 
            stats: { atk: ["A","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","S","A","D","E","-"], itl: ["B","A","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 17, name: { ja: "イルファン・ジャン・カフベジ", en: "İrfan Can Kahveci" }, club: { ja: "カスムパシャ", en: "Kasımpaşa" }, 
            age: 30, height: 176, weight: 71, pos: "FW", 
            stats: { atk: ["A","B","C","D","D","C"], def: ["C","C","D","C","-","-"], spd: ["C","C","B","C"], tec: ["A","A","A","B","A","B","D","-"], itl: ["B","A","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 19, name: { ja: "ユヌス・アクギュン", en: "Yunus Akgün" }, club: { ja: "ガラタサライ", en: "Galatasaray" }, 
            age: 25, height: 173, weight: 65, pos: "FW", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 21, name: { ja: "バルシュ・ユルマズ", en: "Barış Alper Yılmaz" }, club: { ja: "ガラタサライ", en: "Galatasaray" }, 
            age: 26, height: 186, weight: 80, pos: "FW", 
            stats: { atk: ["B","B","C","A","B","A"], def: ["C","C","D","A","-","-"], spd: ["S","S","A","S"], tec: ["C","C","C","A","B","E","E","-"], itl: ["C","B","B","B"], phy: ["S","S","B"] } 
        },
        { 
            no: 24, name: { ja: "オウズ・アイドゥン", en: "Oğuz Aydın" }, club: { ja: "フェネルバフチェ", en: "Fenerbahçe" }, 
            age: 25, height: 183, weight: 76, pos: "FW", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["C","C","C","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 26, name: { ja: "ジャン・ウズン", en: "Can Uzun" }, club: { ja: "フランクフルト", en: "Eintracht Frankfurt" }, 
            age: 20, height: 186, weight: 78, pos: "FW", 
            stats: { atk: ["A","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","A","A","D","E","-"], itl: ["B","A","B","C"], phy: ["B","B","B"] } 
        }
    ]
};