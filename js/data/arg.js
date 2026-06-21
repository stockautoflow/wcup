export const argData = {
    id: 'arg',
    name: { ja: '🇦🇷 アルゼンチン', en: '🇦🇷 Argentina' },
    color: '#43a1d5', // アルゼンチンブルー
    teamStats: {
        attributes: { offense: "S", defense: "S", depth: "A", teamwork: "S", intensity: "A", experience: "S" },
        styles: { possession: 60, pressing: 65, attackRoute: 70, playStyle: 60 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "フアン・ムッソ", en: "Juan Musso" }, club: { ja: "アトレティコ・マドリード", en: "Atlético Madrid" }, 
            age: 32, height: 191, weight: 93, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","B"], itl: ["C","C","B","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 12, name: { ja: "ヘロニモ・ルリ", en: "Gerónimo Rulli" }, club: { ja: "オリンピック・マルセイユ", en: "Olympique de Marseille" }, 
            age: 34, height: 189, weight: 84, pos: "GK", 
            stats: { atk: ["D","E","E","D","E","C"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","B","E","E","E","E","E","B"], itl: ["B","C","B","C"], phy: ["C","B","B"] } 
        },
        { 
            no: 23, name: { ja: "エミリアーノ・マルティネス", en: "Emiliano Martínez" }, club: { ja: "アストン・ヴィラ", en: "Aston Villa" }, 
            age: 33, height: 195, weight: 88, pos: "GK", 
            stats: { atk: ["D","E","S","D","E","B"], def: ["C","C","C","C","S","A"], spd: ["D","D","C","D"], tec: ["C","B","C","E","E","E","E","A"], itl: ["B","B","S","B"], phy: ["B","A","B"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "マルコス・セネシ", en: "Marcos Senesi" }, club: { ja: "ボーンマス", en: "Bournemouth" }, 
            age: 29, height: 185, weight: 80, pos: "DF", 
            stats: { atk: ["C","D","E","A","B","A"], def: ["B","B","A","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","D","D","E","D","-"], itl: ["B","B","B","A"], phy: ["B","A","B"] } 
        },
        { 
            no: 3, name: { ja: "ニコラス・タグリアフィコ", en: "Nicolás Tagliafico" }, club: { ja: "オリンピック・リヨン", en: "Olympique Lyonnais" }, 
            age: 33, height: 172, weight: 65, pos: "DF", 
            stats: { atk: ["C","D","E","C","C","B"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","E","D","-"], itl: ["B","B","A","C"], phy: ["A","C","B"] } 
        },
        { 
            no: 4, name: { ja: "ゴンサロ・モンティエル", en: "Gonzalo Montiel" }, club: { ja: "リーベル・プレート", en: "River Plate" }, 
            age: 29, height: 175, weight: 70, pos: "DF", 
            stats: { atk: ["C","C","S","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","E","C","-"], itl: ["B","B","S","C"], phy: ["A","C","B"] } 
        },
        { 
            no: 6, name: { ja: "リサンドロ・マルティネス", en: "Lisandro Martínez" }, club: { ja: "マンチェスター・ユナイテッド", en: "Manchester United" }, 
            age: 28, height: 175, weight: 77, pos: "DF", 
            stats: { atk: ["C","D","E","B","B","A"], def: ["A","S","A","B","-","-"], spd: ["B","B","B","B"], tec: ["A","A","B","D","C","E","D","-"], itl: ["S","A","S","B"], phy: ["A","A","C"] } 
        },
        { 
            no: 13, name: { ja: "クリスティアン・ロメロ", en: "Cristian Romero" }, club: { ja: "トッテナム・ホットスパー", en: "Tottenham Hotspur" }, 
            age: 28, height: 185, weight: 79, pos: "DF", 
            stats: { atk: ["C","D","E","A","A","S"], def: ["S","S","A","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","D","D","E","D","-"], itl: ["A","A","S","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 19, name: { ja: "ニコラス・オタメンディ", en: "Nicolás Otamendi" }, club: { ja: "ベンフィカ", en: "Benfica" }, 
            age: 38, height: 183, weight: 81, pos: "DF", 
            stats: { atk: ["C","D","E","A","A","A"], def: ["A","A","A","B","-","-"], spd: ["D","D","D","D"], tec: ["B","B","C","E","D","E","D","-"], itl: ["A","A","S","A"], phy: ["B","A","B"] } 
        },
        { 
            no: 25, name: { ja: "ファクンド・メディーナ", en: "Facundo Medina" }, club: { ja: "オリンピック・マルセイユ", en: "Olympique de Marseille" }, 
            age: 27, height: 184, weight: 78, pos: "DF", 
            stats: { atk: ["C","D","E","B","B","B"], def: ["B","B","B","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","D","D","E","D","-"], itl: ["B","B","A","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 26, name: { ja: "ナウエル・モリーナ", en: "Nahuel Molina" }, club: { ja: "アトレティコ・マドリード", en: "Atlético Madrid" }, 
            age: 28, height: 175, weight: 70, pos: "DF", 
            stats: { atk: ["B","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["A","A","B","A"], tec: ["B","B","C","B","B","E","C","-"], itl: ["B","B","B","C"], phy: ["A","C","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 5, name: { ja: "レアンドロ・パレデス", en: "Leandro Paredes" }, club: { ja: "ボカ・ジュニアーズ", en: "Boca Juniors" }, 
            age: 31, height: 180, weight: 75, pos: "MF", 
            stats: { atk: ["A","B","B","D","D","D"], def: ["B","B","C","B","-","-"], spd: ["D","D","D","D"], tec: ["A","S","A","D","C","A","D","-"], itl: ["A","A","A","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 7, name: { ja: "ロドリゴ・デ・パウル", en: "Rodrigo De Paul" }, club: { ja: "インテル・マイアミ", en: "Inter Miami" }, 
            age: 32, height: 180, weight: 70, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["B","B","C","S","-","-"], spd: ["C","C","C","C"], tec: ["A","A","A","B","B","C","D","-"], itl: ["A","A","S","C"], phy: ["S","B","A"] } 
        },
        { 
            no: 8, name: { ja: "バレンティン・バルコ", en: "Valentín Barco" }, club: { ja: "ストラスブール", en: "Strasbourg" }, 
            age: 21, height: 172, weight: 69, pos: "MF/DF", 
            stats: { atk: ["B","C","D","E","E","D"], def: ["C","C","D","B","-","-"], spd: ["A","A","A","A"], tec: ["B","B","B","A","A","B","D","-"], itl: ["B","B","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 11, name: { ja: "ジオバニ・ロ・チェルソ", en: "Giovani Lo Celso" }, club: { ja: "レアル・ベティス", en: "Real Betis" }, 
            age: 30, height: 177, weight: 68, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","D"], def: ["C","C","D","B","-","-"], spd: ["C","C","B","C"], tec: ["A","A","S","B","A","B","D","-"], itl: ["A","A","B","C"], phy: ["B","C","C"] } 
        },
        { 
            no: 14, name: { ja: "エセキエル・パラシオス", en: "Exequiel Palacios" }, club: { ja: "バイヤー・レバークーゼン", en: "Bayer Leverkusen" }, 
            age: 27, height: 177, weight: 70, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["B","A","B","A","-","-"], spd: ["C","C","C","C"], tec: ["A","A","A","C","B","D","D","-"], itl: ["A","A","A","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 20, name: { ja: "アレクシス・マク・アリスター", en: "Alexis Mac Allister" }, club: { ja: "リヴァプール", en: "Liverpool" }, 
            age: 27, height: 174, weight: 72, pos: "MF", 
            stats: { atk: ["B","A","A","D","D","D"], def: ["B","B","C","A","-","-"], spd: ["C","C","B","C"], tec: ["S","A","S","C","A","B","D","-"], itl: ["S","S","A","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 24, name: { ja: "エンソ・フェルナンデス", en: "Enzo Fernández" }, club: { ja: "チェルシー", en: "Chelsea" }, 
            age: 25, height: 178, weight: 76, pos: "MF", 
            stats: { atk: ["A","B","C","D","D","D"], def: ["B","B","C","B","-","-"], spd: ["C","C","C","C"], tec: ["S","S","A","C","B","B","D","-"], itl: ["S","A","A","C"], phy: ["A","B","B"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 9, name: { ja: "フリアン・アルバレス", en: "Julián Álvarez" }, club: { ja: "アトレティコ・マドリード", en: "Atlético Madrid" }, 
            age: 26, height: 170, weight: 71, pos: "FW", 
            stats: { atk: ["A","A","A","C","C","C"], def: ["C","C","D","S","-","-"], spd: ["A","A","A","S"], tec: ["B","B","B","A","A","C","D","-"], itl: ["A","A","A","B"], phy: ["S","B","A"] } 
        },
        { 
            no: 10, name: { ja: "リオネル・メッシ", en: "Lionel Messi" }, club: { ja: "インテル・マイアミ", en: "Inter Miami" }, 
            age: 38, height: 170, weight: 72, pos: "FW", 
            stats: { atk: ["A","S","S","E","E","E"], def: ["G","G","G","F","-","-"], spd: ["D","C","A","D"], tec: ["S","S","S","B","S","S","E","-"], itl: ["S","S","S","D"], phy: ["E","D","C"] } 
        },
        { 
            no: 15, name: { ja: "ニコラス・ゴンサレス", en: "Nicolás González" }, club: { ja: "アトレティコ・マドリード", en: "Atlético Madrid" }, 
            age: 28, height: 180, weight: 72, pos: "FW", 
            stats: { atk: ["B","B","C","A","A","A"], def: ["C","C","D","A","-","-"], spd: ["A","A","A","A"], tec: ["C","C","C","A","B","D","E","-"], itl: ["B","B","B","A"], phy: ["A","B","C"] } 
        },
        { 
            no: 16, name: { ja: "ティアゴ・アルマーダ", en: "Thiago Almada" }, club: { ja: "アトレティコ・マドリード", en: "Atlético Madrid" }, 
            age: 25, height: 171, weight: 62, pos: "FW/MF", 
            stats: { atk: ["B","B","B","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","S","A"], tec: ["B","B","A","S","S","A","E","-"], itl: ["B","A","B","C"], phy: ["B","D","B"] } 
        },
        { 
            no: 17, name: { ja: "ジュリアーノ・シメオネ", en: "Giuliano Simeone" }, club: { ja: "アトレティコ・マドリード", en: "Atlético Madrid" }, 
            age: 23, height: 173, weight: 68, pos: "FW", 
            stats: { atk: ["B","C","C","D","D","C"], def: ["C","C","D","A","-","-"], spd: ["A","A","A","A"], tec: ["C","C","C","A","B","D","E","-"], itl: ["C","B","S","C"], phy: ["A","C","B"] } 
        },
        { 
            no: 18, name: { ja: "ニコラス・パス", en: "Nico Paz" }, club: { ja: "コモ", en: "Como" }, 
            age: 21, height: 186, weight: 78, pos: "FW/MF", 
            stats: { atk: ["A","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["B","B","B","B"], tec: ["B","B","A","A","A","B","D","-"], itl: ["B","A","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 21, name: { ja: "ホセ・マヌエル・ロペス", en: "José Manuel López" }, club: { ja: "パルメイラス", en: "Palmeiras" }, 
            age: 25, height: 188, weight: 81, pos: "FW", 
            stats: { atk: ["B","B","C","A","A","A"], def: ["D","D","E","C","-","-"], spd: ["C","C","C","C"], tec: ["C","C","D","C","C","E","E","-"], itl: ["C","B","B","A"], phy: ["B","A","B"] } 
        },
        { 
            no: 22, name: { ja: "ラウタロ・マルティネス", en: "Lautaro Martínez" }, club: { ja: "インテル", en: "Inter Milan" }, 
            age: 28, height: 174, weight: 72, pos: "FW", 
            stats: { atk: ["A","S","A","A","A","A"], def: ["D","D","E","A","-","-"], spd: ["B","A","A","B"], tec: ["B","B","C","B","A","D","E","-"], itl: ["A","S","S","A"], phy: ["A","A","A"] } 
        }
    ]
};