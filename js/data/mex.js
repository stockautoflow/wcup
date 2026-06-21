export const mexData = {
    id: 'mex',
    name: { ja: '🇲🇽 メキシコ', en: '🇲🇽 Mexico' },
    color: '#006847', // メキシコグリーン
    teamStats: {
        attributes: { offense: "B", defense: "B", depth: "B", teamwork: "B", intensity: "A", experience: "A" },
        styles: { possession: 55, pressing: 65, attackRoute: 40, playStyle: 60 }
    },
    players: [
        // ==========================================
        // GK
        // ==========================================
        { 
            no: 1, name: { ja: "ラウール・ランヘル", en: "Raúl Rangel" }, club: { ja: "グアダラハラ・チバス", en: "CD Guadalajara" }, 
            age: 26, height: 190, weight: 82, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","B","C"], phy: ["B","A","B"] } 
        },
        { 
            no: 12, name: { ja: "カルロス・アセベド", en: "Carlos Acevedo" }, club: { ja: "サントス・ラグナ", en: "Santos Laguna" }, 
            age: 30, height: 184, weight: 76, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","B"], def: ["C","C","C","C","B","B"], spd: ["D","D","C","D"], tec: ["C","C","E","E","E","E","E","C"], itl: ["C","C","B","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 13, name: { ja: "ギジェルモ・オチョア", en: "Guillermo Ochoa" }, club: { ja: "AELリマソル", en: "AEL Limassol" }, 
            age: 40, height: 185, weight: 78, pos: "GK", 
            stats: { atk: ["E","F","E","D","E","C"], def: ["C","C","C","C","S","A"], spd: ["E","E","D","E"], tec: ["C","C","E","E","E","E","E","C"], itl: ["B","S","S","C"], phy: ["C","C","C"] } 
        },

        // ==========================================
        // DF
        // ==========================================
        { 
            no: 2, name: { ja: "ホルヘ・サンチェス", en: "Jorge Sánchez" }, club: { ja: "PAOK", en: "PAOK FC" }, 
            age: 28, height: 175, weight: 73, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 3, name: { ja: "セサル・モンテス", en: "César Montes" }, club: { ja: "ロコモティフ・モスクワ", en: "Lokomotiv Moscow" }, 
            age: 29, height: 191, weight: 86, pos: "DF", 
            stats: { atk: ["D","E","E","A","B","A"], def: ["B","A","A","B","-","-"], spd: ["C","C","D","C"], tec: ["C","B","D","E","D","E","D","-"], itl: ["B","B","B","A"], phy: ["A","S","B"] } 
        },
        { 
            no: 4, name: { ja: "エドソン・アルバレス", en: "Edson Álvarez" }, club: { ja: "フェネルバフチェ", en: "Fenerbahçe" }, 
            age: 28, height: 187, weight: 73, pos: "DF/MF", 
            stats: { atk: ["C","C","D","A","B","A"], def: ["A","A","A","S","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","D","C","E","D","-"], itl: ["B","B","A","A"], phy: ["S","A","B"] } 
        },
        { 
            no: 5, name: { ja: "ヨハン・バスケス", en: "Johan Vásquez" }, club: { ja: "ジェノア", en: "Genoa" }, 
            age: 27, height: 184, weight: 78, pos: "DF", 
            stats: { atk: ["D","E","E","B","B","A"], def: ["B","A","B","B","-","-"], spd: ["B","B","C","B"], tec: ["C","C","D","D","D","E","D","-"], itl: ["B","B","B","B"], phy: ["A","A","B"] } 
        },
        { 
            no: 15, name: { ja: "イスラエル・レジェス", en: "Israel Reyes" }, club: { ja: "クラブ・アメリカ", en: "Club América" }, 
            age: 26, height: 179, weight: 73, pos: "DF", 
            stats: { atk: ["C","D","E","C","C","B"], def: ["B","B","B","B","-","-"], spd: ["B","B","C","B"], tec: ["B","B","C","C","C","E","D","-"], itl: ["C","B","B","B"], phy: ["B","B","B"] } 
        },
        { 
            no: 20, name: { ja: "マテオ・チャベス", en: "Mateo Chávez" }, club: { ja: "AZアルクマール", en: "AZ Alkmaar" }, 
            age: 22, height: 174, weight: 68, pos: "DF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","B","D","C","-"], itl: ["C","C","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 23, name: { ja: "ヘスス・ガジャルド", en: "Jesús Gallardo" }, club: { ja: "トルーカ", en: "Deportivo Toluca" }, 
            age: 31, height: 176, weight: 74, pos: "DF/MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["C","C","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","C","B","C","D","C","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },

        // ==========================================
        // MF
        // ==========================================
        { 
            no: 6, name: { ja: "エリック・リラ", en: "Erik Lira" }, club: { ja: "クルス・アスル", en: "Cruz Azul" }, 
            age: 26, height: 172, weight: 68, pos: "MF", 
            stats: { atk: ["C","D","E","D","D","C"], def: ["B","B","B","A","-","-"], spd: ["C","C","C","C"], tec: ["B","B","C","C","C","D","D","-"], itl: ["C","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 7, name: { ja: "ルイス・ロモ", en: "Luis Romo" }, club: { ja: "グアダラハラ・チバス", en: "CD Guadalajara" }, 
            age: 31, height: 184, weight: 78, pos: "MF", 
            stats: { atk: ["B","C","D","C","C","C"], def: ["B","B","B","B","-","-"], spd: ["C","C","C","C"], tec: ["B","B","B","C","C","D","D","-"], itl: ["B","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 8, name: { ja: "アルバロ・フィダルゴ", en: "Álvaro Fidalgo" }, club: { ja: "レアル・ベティス", en: "Real Betis" }, 
            age: 29, height: 174, weight: 68, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","D"], def: ["C","C","D","C","-","-"], spd: ["C","C","B","C"], tec: ["A","A","A","B","A","C","D","-"], itl: ["A","A","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 17, name: { ja: "オルベリン・ピネダ", en: "Orbelín Pineda" }, club: { ja: "AEKアテネ", en: "AEK Athens" }, 
            age: 30, height: 169, weight: 63, pos: "MF", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["C","C","D","B","-","-"], spd: ["B","B","A","B"], tec: ["A","A","B","A","A","D","D","-"], itl: ["B","A","B","C"], phy: ["A","C","B"] } 
        },
        { 
            no: 18, name: { ja: "オベド・バルガス", en: "Obed Vargas" }, club: { ja: "アトレティコ・マドリード", en: "Atlético Madrid" }, 
            age: 20, height: 175, weight: 68, pos: "MF", 
            stats: { atk: ["C","C","D","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","B","B","D","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 19, name: { ja: "ヒルベルト・モラ", en: "Gilberto Mora" }, club: { ja: "ティフアナ", en: "Club Tijuana" }, 
            age: 17, height: 165, weight: 60, pos: "MF", 
            stats: { atk: ["C","C","D","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["B","A","S","B"], tec: ["B","B","A","A","A","D","E","-"], itl: ["B","A","C","C"], phy: ["C","D","C"] } 
        },
        { 
            no: 24, name: { ja: "ルイス・チャベス", en: "Luis Chávez" }, club: { ja: "ディナモ・モスクワ", en: "Dynamo Moscow" }, 
            age: 30, height: 178, weight: 73, pos: "MF", 
            stats: { atk: ["S","A","C","D","D","C"], def: ["B","B","C","B","-","-"], spd: ["C","C","C","C"], tec: ["A","A","B","C","B","A","D","-"], itl: ["B","B","B","C"], phy: ["A","B","B"] } 
        },
        { 
            no: 26, name: { ja: "ブライアン・グティエレス", en: "Brian Gutiérrez" }, club: { ja: "グアダラハラ・チバス", en: "CD Guadalajara" }, 
            age: 22, height: 178, weight: 70, pos: "MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["C","C","D","C","-","-"], spd: ["B","B","A","B"], tec: ["B","B","A","A","B","D","D","-"], itl: ["C","B","B","C"], phy: ["B","C","C"] } 
        },

        // ==========================================
        // FW
        // ==========================================
        { 
            no: 9, name: { ja: "ラウール・ヒメネス", en: "Raúl Jiménez" }, club: { ja: "フラム", en: "Fulham" }, 
            age: 35, height: 188, weight: 81, pos: "FW", 
            stats: { atk: ["A","A","A","A","A","A"], def: ["D","D","E","C","-","-"], spd: ["D","D","D","D"], tec: ["B","B","C","C","B","E","E","-"], itl: ["B","B","A","A"], phy: ["C","A","C"] } 
        },
        { 
            no: 10, name: { ja: "アレクシス・ベガ", en: "Alexis Vega" }, club: { ja: "トルーカ", en: "Deportivo Toluca" }, 
            age: 28, height: 173, weight: 77, pos: "FW", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["D","D","E","C","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","A","B","C","E","-"], itl: ["C","B","B","C"], phy: ["B","B","C"] } 
        },
        { 
            no: 11, name: { ja: "サンティアゴ・ヒメネス", en: "Santiago Giménez" }, club: { ja: "ACミラン", en: "AC Milan" }, 
            age: 25, height: 183, weight: 79, pos: "FW", 
            stats: { atk: ["A","A","A","A","A","A"], def: ["D","D","E","B","-","-"], spd: ["B","B","B","B"], tec: ["C","C","D","B","C","E","E","-"], itl: ["B","B","B","A"], phy: ["A","A","B"] } 
        },
        { 
            no: 14, name: { ja: "アルマンド・ゴンサレス", en: "Armando González" }, club: { ja: "グアダラハラ・チバス", en: "CD Guadalajara" }, 
            age: 23, height: 178, weight: 72, pos: "FW", 
            stats: { atk: ["B","B","C","C","C","C"], def: ["D","D","E","C","-","-"], spd: ["B","B","B","B"], tec: ["C","C","C","B","C","E","E","-"], itl: ["C","C","C","C"], phy: ["B","B","B"] } 
        },
        { 
            no: 16, name: { ja: "フリアン・キニョネス", en: "Julián Quiñones" }, club: { ja: "アル・カーディシーヤ", en: "Al Qadsiah" }, 
            age: 29, height: 178, weight: 78, pos: "FW", 
            stats: { atk: ["A","B","C","B","B","A"], def: ["C","C","D","B","-","-"], spd: ["A","A","A","A"], tec: ["C","C","C","A","B","E","E","-"], itl: ["C","B","B","C"], phy: ["A","A","B"] } 
        },
        { 
            no: 21, name: { ja: "セサル・ウエルタ", en: "César Huerta" }, club: { ja: "アンデルレヒト", en: "Anderlecht" }, 
            age: 25, height: 171, weight: 65, pos: "FW", 
            stats: { atk: ["B","B","C","E","E","D"], def: ["D","D","E","C","-","-"], spd: ["A","A","A","A"], tec: ["C","C","B","A","B","D","E","-"], itl: ["C","B","B","C"], phy: ["B","C","B"] } 
        },
        { 
            no: 22, name: { ja: "ギジェルモ・マルティネス", en: "Guillermo Martínez" }, club: { ja: "UNAMプマス", en: "Pumas UNAM" }, 
            age: 31, height: 191, weight: 84, pos: "FW", 
            stats: { atk: ["B","B","C","A","A","S"], def: ["D","D","E","C","-","-"], spd: ["D","D","D","D"], tec: ["D","D","E","D","D","E","E","-"], itl: ["C","C","B","A"], phy: ["B","S","B"] } 
        },
        { 
            no: 25, name: { ja: "ロベルト・アルバラド", en: "Roberto Alvarado" }, club: { ja: "グアダラハラ・チバス", en: "CD Guadalajara" }, 
            age: 27, height: 176, weight: 70, pos: "FW/MF", 
            stats: { atk: ["B","B","C","D","D","C"], def: ["C","C","D","B","-","-"], spd: ["B","B","B","B"], tec: ["B","B","B","B","B","D","E","-"], itl: ["B","B","B","C"], phy: ["B","C","B"] } 
        }
    ]
};