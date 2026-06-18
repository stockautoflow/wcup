import { possibleTeams } from './data/teams.js';

// ==========================================
// 多言語辞書 (i18n)
// ==========================================
const i18n = {
    title: { ja: "W杯2026 スカウティングダッシュボード", en: "World Cup 2026 Scouting Dashboard" },
    age: { ja: "歳", en: "yo" },
    playersCount: { ja: "名", en: "players" },
    categories: [
        { id: 'atk', name: { ja: '攻撃', en: 'Attack' }, short: { ja: '攻', en: 'ATK' }, colorClass: 'gt-atk' },
        { id: 'def', name: { ja: '守備', en: 'Defense' }, short: { ja: '守', en: 'DEF' }, colorClass: 'gt-def' },
        { id: 'spd', name: { ja: '速さ', en: 'Speed' }, short: { ja: '速', en: 'SPD' }, colorClass: 'gt-spd' },
        { id: 'tec', name: { ja: '技術', en: 'Technique' }, short: { ja: '技', en: 'TEC' }, colorClass: 'gt-tec' },
        { id: 'itl', name: { ja: '知性', en: 'Intelligence' }, short: { ja: '知', en: 'ITL' }, colorClass: 'gt-itl' },
        { id: 'phy', name: { ja: '物理', en: 'Physical' }, short: { ja: '物', en: 'PHY' }, colorClass: 'gt-phy' }
    ],
    stats: {
        atk: [
            { ja: 'シュート力', en: 'Shot Power' }, { ja: 'シュート精度', en: 'Shot Accuracy' }, { ja: 'PK', en: 'Penalty Kick' },
            { ja: 'ヘディング力', en: 'Heading Power' }, { ja: 'ヘディング精度', en: 'Heading Accuracy' }, { ja: 'ジャンプ力', en: 'Jumping' }
        ],
        def: [
            { ja: '対人守備', en: '1v1 Defending' }, { ja: 'インターセプト', en: 'Interceptions' }, { ja: 'クリア', en: 'Clearances' },
            { ja: '守備貢献', en: 'Def. Contribution' }, { ja: 'セービング', en: 'Saving' }, { ja: 'ハイボール', en: 'High Balls' }
        ],
        spd: [
            { ja: '最高速度', en: 'Top Speed' }, { ja: '加速力', en: 'Acceleration' }, { ja: '敏捷性', en: 'Agility' }, { ja: 'スプリント', en: 'Sprint' }
        ],
        tec: [
            { ja: 'ショートパス', en: 'Short Pass' }, { ja: 'ロングパス', en: 'Long Pass' }, { ja: 'スルーパス', en: 'Through Ball' },
            { ja: 'ドリブル速度', en: 'Dribble Speed' }, { ja: 'ドリブル精度', en: 'Dribble Accuracy' }, { ja: 'FK/CK', en: 'FK/CK' },
            { ja: 'スローイン', en: 'Throw-in' }, { ja: 'GKフィード', en: 'GK Distribution' }
        ],
        itl: [
            { ja: '戦術理解', en: 'Tactical Awareness' }, { ja: '予測・閃き', en: 'Anticipation/Flair' },
            { ja: 'メンタル', en: 'Mentality' }, { ja: 'セットプレー位置取り', en: 'Set-piece Positioning' }
        ],
        phy: [
            { ja: 'スタミナ', en: 'Stamina' }, { ja: '対人フィジカル', en: 'Physical Strength' }, { ja: 'ケガしにくさ', en: 'Injury Resistance' }
        ]
    }
};

// ==========================================
// 状態管理
// ==========================================
let currentLang = 'ja';
let activeTeamId = null; 
let scoutingData = [];

// ==========================================
// ユーティリティ関数
// ==========================================

// 多言語対応の保護関数（データが古い形式でもエラーを防ぐ）
function t(value) {
    if (!value) return '';
    if (typeof value === 'string') return value; 
    return value[currentLang] || value['ja'] || '';
}

// 平均ランクの計算（「-」は計算から除外）
function calculateAvgRank(ranksArray) {
    const rankScores = { 'S':8, 'A':7, 'B':6, 'C':5, 'D':4, 'E':3, 'F':2, 'G':1 };
    let sum = 0, count = 0;
    
    ranksArray.forEach(r => {
        if (r !== '-') { 
            sum += (rankScores[r] || 1); 
            count++; 
        }
    });
    
    if (count === 0) return '-';
    
    const avg = Math.round(sum / count);
    const reverseScores = { 8:'S', 7:'A', 6:'B', 5:'C', 4:'D', 3:'E', 2:'F', 1:'G' };
    return reverseScores[avg] || 'G';
}

// ==========================================
// データの動的読み込み
// ==========================================
async function loadData() {
    for (const teamId of possibleTeams) {
        try {
            // teams.js のリストに基づいてファイルを動的に読み込む
            const module = await import(`./data/${teamId}.js`);
            const data = Object.values(module)[0];
            scoutingData.push(data);
        } catch (error) {
            // ファイルが存在しない場合（404エラー）は無視して次へ進む
        }
    }

    // 読み込めたデータが1つ以上あれば、最初のチームをアクティブにする
    if (scoutingData.length > 0) {
        activeTeamId = scoutingData[0].id;
    }

    // 画面を描画
    renderBoard();
}

// ==========================================
// 画面の描画ロジック
// ==========================================
function renderBoard() {
    // タイトルの言語切り替え
    document.getElementById('main-title').textContent = i18n.title[currentLang];
    
    const tabsContainer = document.getElementById('tabs-container');
    const panelsContainer = document.getElementById('panels-container');
    
    // 再描画のために中身をクリア
    tabsContainer.innerHTML = '';
    panelsContainer.innerHTML = '';

    // ポジションの表示順序
    const posOrder = ['FW', 'MF', 'DF', 'GK'];

    scoutingData.forEach(team => {
        // -------------------------
        // 1. タブの生成
        // -------------------------
        const btn = document.createElement('button');
        btn.className = `tab-btn ${team.id === activeTeamId ? 'active' : ''}`;
        btn.textContent = t(team.name);
        
        if (team.id === activeTeamId) {
            btn.style.backgroundColor = team.color;
            btn.style.color = 'white';
        }
        
        btn.addEventListener('click', () => {
            activeTeamId = team.id;
            renderBoard(); // タブ切り替え時に再描画
        });
        tabsContainer.appendChild(btn);

        // -------------------------
        // 2. パネルの生成
        // -------------------------
        const panel = document.createElement('div');
        panel.id = `panel-${team.id}`;
        panel.className = `team-panel ${team.id === activeTeamId ? 'active' : ''}`;

        // 選手をポジションごとに分類
        const groupedPlayers = { FW: [], MF: [], DF: [], GK: [] };
        team.players.forEach(player => {
            const mainPos = player.pos.split('/')[0]; // "MF/FW" の場合は "MF" に分類
            if (!groupedPlayers[mainPos]) groupedPlayers[mainPos] = [];
            groupedPlayers[mainPos].push(player);
        });

        // ポジション順にグループを描画
        posOrder.forEach(pos => {
            const playersInPos = groupedPlayers[pos];
            if (!playersInPos || playersInPos.length === 0) return;

            const posGroup = document.createElement('div');
            posGroup.className = 'pos-group';

            // アコーディオンヘッダー
            const posHeader = document.createElement('div');
            posHeader.className = 'pos-header';
            posHeader.innerHTML = `${pos} <span class="pos-count">(${playersInPos.length} ${i18n.playersCount[currentLang]})</span> <span class="pos-arrow">▼</span>`;
            posHeader.onclick = () => posGroup.classList.toggle('closed');

            const posList = document.createElement('div');
            posList.className = 'pos-list';

            // 選手ごとの行を生成
            playersInPos.forEach(player => {
                const summaries = i18n.categories.map(cat => ({
                    ...cat,
                    avgRank: calculateAvgRank(player.stats[cat.id])
                }));

                const row = document.createElement('div');
                row.className = 'player-row';
                row.style.borderLeftColor = team.color;

                // 選手概要（クリックで開閉）
                const triggerHtml = `
                    <div class="player-trigger" onclick="this.parentElement.classList.toggle('open')">
                        <div class="player-main-info">
                            <div class="player-name-line">
                                <span class="player-name">#${player.no} ${t(player.name)}</span>
                            </div>
                            <div class="player-sub-meta">
                                <span class="meta-club">${t(player.club)}</span>
                                <span class="meta-specs">${player.age}${i18n.age[currentLang]} / ${player.height}cm / ${player.weight}kg / ${player.pos}</span>
                            </div>
                        </div>
                        <div class="summary-mini-grid">
                            ${summaries.map(s => `
                                <div class="summary-col">
                                    <span class="summary-label">${s.short[currentLang]}</span>
                                    <div class="summary-badge ${s.avgRank === '-' ? 'rank-none' : `rank-${s.avgRank}`}">${s.avgRank}</div>
                                </div>
                            `).join('')}
                        </div>
                        <span class="arrow-icon">▼</span>
                    </div>
                `;

                // 詳細スタッツパネル
                const detailGroupsHtml = i18n.categories.map(cat => {
                    const stats = player.stats[cat.id];
                    const labels = i18n.stats[cat.id];
                    
                    const rowsHtml = labels.map((labelObj, idx) => {
                        if (stats[idx] === '-') return ''; // 非該当項目は非表示
                        const rankClass = stats[idx] === '-' ? 'rank-none' : `rank-${stats[idx]}`;
                        return `
                        <div class="detail-row">
                            <span class="detail-label">${labelObj[currentLang]}</span>
                            <span class="rank-badge ${rankClass}">${stats[idx]}</span>
                        </div>
                        `;
                    }).join('');

                    return `
                        <div class="detail-group">
                            <div class="group-title ${cat.colorClass}">${cat.name[currentLang]}</div>
                            ${rowsHtml}
                        </div>
                    `;
                }).join('');

                row.innerHTML = triggerHtml + `<div class="player-detail-panel"><div class="detail-grid">${detailGroupsHtml}</div></div>`;
                posList.appendChild(row);
            });

            posGroup.appendChild(posHeader);
            posGroup.appendChild(posList);
            panel.appendChild(posGroup);
        });

        panelsContainer.appendChild(panel);
    });
}

// ==========================================
// イベントリスナーの登録と初期化
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const btnJa = document.getElementById('btn-ja');
    const btnEn = document.getElementById('btn-en');

    if (btnJa && btnEn) {
        // 日本語ボタン
        btnJa.addEventListener('click', () => {
            currentLang = 'ja';
            btnJa.classList.add('active');
            btnEn.classList.remove('active');
            renderBoard();
        });

        // 英語ボタン
        btnEn.addEventListener('click', () => {
            currentLang = 'en';
            btnEn.classList.add('active');
            btnJa.classList.remove('active');
            renderBoard();
        });
    }

    // 🌟 データの動的読み込みを開始
    loadData();
});