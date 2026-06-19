export const marData = {
    id: 'mar',
    name: { ja: '🇲🇦 モロッコ', en: '🇲🇦 Morocco' },
    color: '#c1272d', // モロッコレッド
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "ヤシン・ブヌ", en: "Yassine Bounou" }, club: { ja: "アル・ヒラル", en: "Al-Hilal" }, 
            age: 35, height: 195, weight: 78, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","S","S"], spd: ["D","D","C","D"], tec: ["C","B","D","E","E","E","E","A"], itl: ["B","S","S","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 12, name: { ja: "ムニル・モハメディ", en: "Munir Mohamedi" }, club: { ja: "RSベルカンヌ", en: "RS Berkane" }, 
            age: 37, height: 190, weight: 88, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","B"], itl: ["C","C","B","C"], phy: ["C","B","B"] } 
        },
        { 
            no: 23, name: { ja: "メディ・ベナブイド", en: "Mehdi Benabid" }, club: { ja: "AS FAR", en: "AS FAR" }, 
            age: 28, height: 188, weight: 82, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","C","C"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","C","C"], phy: ["C","B","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "アクラフ・ハキミ", en: "Achraf Hakimi" }, club: { ja: "パリ・サンジェルマン", en: "Paris Saint-Germain" }, 
            age: 27, height: 181, weight: 73, pos: "DF", 
            stats: { atk: ["B","C","C","D","D","C"], def: ["A","B","C","A","-","-"], spd: ["S","S","A","S"], tec: ["A","B","B","S","A","C","C","-"], itl: ["A","B","A","C"], phy: ["S","B","A"] } 
        },
        { 
            no: 3, name: { ja: "ヌサイル・マズラウィ", en: "Noussair Mazraoui" }, club: { ja: "マンチェスター・ユナイテッド", en: "Manchester United" }, 
            age: 28, height: 183, weight: 65, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["A","A","B","B","-","-"], spd: ["B","B","B","B"], tec: ["A","A","B","B","A","D","C","-"], itl: ["A","A","B","C"], phy: ["A","B","C"] } 
        },
        { 
            no: 5, name: { ja: "ナエフ・アゲルド", en: "Nayef Aguerd" }, club: { ja: "レアル・ソシエダ", en: "Real Sociedad" }, 
            age: 30, height: 190, weight: 76, pos: "DF", 
            stats: { atk: ["C","D","E","A","A","A"], def: ["A","A","A","B","-","-"], spd: ["B","B","C","B"], tec: ["B","A","C","D","C","E","D","-"], itl: ["A","B","B","A"], phy: ["B","A","B"] } 
        },
        { 
            no: 18, name: { ja: "アブデ・エザルズリ", en: "Abde Ezzalzouli" }, club: { ja: "レアル・ベティス", en: "Real Betis" }, 
            age: 24, height: 177, weight: 73, pos: "DF/FW", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["S","S","S","S"], tec: ["C","C","B","S","A","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 20, name: { ja: "アシュラフ・ダリ", en: "Achraf Dari" }, club: { ja: "アル・アハリ", en: "Al Ahly" }, 
            age: 27, height: 188, weight: 80, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","E","D","E","D","-"], itl: ["C","C","B","A"], phy: ["B","A","B"] } 
        },
        { 
            no: 24, name: { ja: "シャディー・リアド", en: "Chadi Riad" }, club: { ja: "クリスタル・パレス", en: "Crystal Palace" }, 
            age: 22, height: 186, weight: 78, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","B"], def: ["B","B","B","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","D","C","E","D","-"], itl: ["B","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 25, name: { ja: "アブデル・アブカル", en: "Abdel Abqar" }, club: { ja: "アラベス", en: "Deportivo Alavés" }, 
            age: 27, height: 188, weight: 82, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","B"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","E","D","E","D","-"], itl: ["C","C","B","B"], phy: ["B","A","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 4, name: { ja: "ソフィアン・アムラバト", en: "Sofyan Amrabat" }, club: { ja: "フェネルバフチェ", en: "Fenerbahçe" }, 
            age: 29, height: 185, weight: 70, pos: "MF", 
            stats: { atk: ["C","C","D","C","C","C"], def: ["S","A","B","S","-","-"], spd: ["C","C","C","C"], tec: ["B","A","B","C","C","D","D","-"], itl: ["A","A","S","C"], phy: ["S","S","A"] } 
        },
        { 
            no: 6, name: { ja: "アゼディン・ウナヒ", en: "Azzedine Ounahi" }, club: { ja: "パナシナイコス", en: "Panathinaikos" }, 
            age: 26, height: 182, weight: 73, pos: "MF", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["C","C","D","B","-","-"], spd: ["B","B","A","B"], tec: ["A","A","A","A","A","D","D","-"], itl: ["A","A","B","C"], phy: ["A","C","B"] } 
        },
        { 
            no: 8, name: { ja: "イスマエル・サイバリ", en: "Ismael Saibari" }, club: { ja: "PSV", en: "PSV Eindhoven" }, 
            age: 25, height: 185, weight: 80, pos: "MF", 
            stats: { atk: ["B","B","C","C","C","C"], def: ["C","C","D","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","A","B","D","D","-"], itl: ["B","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 10, name: { ja: "アミン・ハリット", en: "Amine Harit" }, club: { ja: "オリンピック・マルセイユ", en: "Olympique de Marseille" }, 
            age: 28, height: 180, weight: 67, pos: "MF", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["C","C","D","C","-","-"], spd: ["A","A","S","A"], tec: ["A","A","A","A","A","D","D","-"], itl: ["B","A","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 11, name: { ja: "ビラル・エル・ハヌス", en: "Bilal El Khannouss" }, club: { ja: "レスター・シティ", en: "Leicester City" }, 
            age: 22, height: 180, weight: 70, pos: "MF", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["C","C","D","C","-","-"], spd: ["B","B","A","B"], tec: ["A","A","S","B","A","D","D","-"], itl: ["B","A","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 14, name: { ja: "ウサマ・エル・アズジ", en: "Oussama El Azzouzi" }, club: { ja: "ボローニャ", en: "Bologna" }, 
            age: 25, height: 189, weight: 82, pos: "MF", 
            stats: { atk: ["C","D","E","C","C","C"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","E","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 15, name: { ja: "セリム・アマラー", en: "Selim Amallah" }, club: { ja: "バジャドリード", en: "Real Valladolid" }, 
            age: 29, height: 186, weight: 80, pos: "MF", 
            stats: { atk: ["B","C","D","C","C","C"], def: ["B","B","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","B","D","D","-"], itl: ["B","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 17, name: { ja: "アミル・リチャードソン", en: "Amir Richardson" }, club: { ja: "フィオレンティーナ", en: "Fiorentina" }, 
            age: 24, height: 195, weight: 80, pos: "MF", 
            stats: { atk: ["B","C","C","B","B","B"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","B","D","D","-"], itl: ["B","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 22, name: { ja: "ウサマ・タルガリン", en: "Oussama Targhalline" }, club: { ja: "ル・アーヴル", en: "Le Havre" }, 
            age: 24, height: 186, weight: 78, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","D","D","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 7, name: { ja: "ハキム・ツィエク", en: "Hakim Ziyech" }, club: { ja: "ガラタサライ", en: "Galatasaray" }, 
            age: 33, height: 181, weight: 65, pos: "FW", 
            stats: { atk: ["A","A","B","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["C","C","B","C"], tec: ["S","S","S","B","A","S","D","-"], itl: ["A","S","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 9, name: { ja: "アユブ・エル・カービ", en: "Ayoub El Kaabi" }, club: { ja: "オリンピアコス", en: "Olympiacos" }, 
            age: 32, height: 182, weight: 72, pos: "FW", 
            stats: { atk: ["A","A","A","A","A","A"], def: ["D","D","E","B","-","-"], spd: ["B","B","B","B"], tec: ["C","C","D","C","C","E","E","-"], itl: ["B","B","S","A"], phy: ["A","A","B"] } 
        },
        { 
            no: 13, name: { ja: "イリアス・アコマシュ", en: "Ilias Akhomach" }, club: { ja: "ビジャレアル", en: "Villarreal" }, 
            age: 22, height: 175, weight: 68, pos: "FW", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","S","A"], tec: ["B","B","B","A","A","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 16, name: { ja: "アブデルハミド・サビリ", en: "Abdelhamid Sabiri" }, club: { ja: "エミレーツ・クラブ", en: "Emirates Club" }, 
            age: 29, height: 186, weight: 80, pos: "FW/MF", 
            stats: { atk: ["A","B","B","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","B","A","D","-"], itl: ["C","B","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 19, name: { ja: "ユセフ・エン＝ネシリ", en: "Youssef En-Nesyri" }, club: { ja: "フェネルバフチェ", en: "Fenerbahçe" }, 
            age: 29, height: 189, weight: 73, pos: "FW", 
            stats: { atk: ["A","A","C","S","S","S"], def: ["D","D","E","B","-","-"], spd: ["A","A","B","A"], tec: ["C","C","D","B","C","E","E","-"], itl: ["B","B","A","S"], phy: ["A","S","B"] } 
        },
        { 
            no: 21, name: { ja: "ブライム・ディアス", en: "Brahim Díaz" }, club: { ja: "レアル・マドリード", en: "Real Madrid" }, 
            age: 26, height: 171, weight: 68, pos: "FW", 
            stats: { atk: ["A","A","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","S","S","A"], tec: ["A","A","S","S","S","C","D","-"], itl: ["A","S","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 26, name: { ja: "スフィアン・ラヒミ", en: "Soufiane Rahimi" }, club: { ja: "アル・アイン", en: "Al Ain" }, 
            age: 30, height: 180, weight: 72, pos: "FW", 
            stats: { atk: ["A","A","B","C","C","C"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","A","A","D","E","-"], itl: ["B","B","A","C"], phy: ["A","B","B"] } 
        }
    ]
};