import { possibleTeams } from './data/teams.js';

// ==========================================
// 多言語辞書 (i18n)
// ==========================================
const i18n = {
    title: { ja: "W杯2026 スカウティングダッシュボード", en: "World Cup 2026 Scouting Dashboard" },
    age: { ja: "歳", en: "yo" },
    playersCount: { ja: "名", en: "players" },
    
    // 🌟 チーム評価用テキスト（新規追加）
    teamEval: {
        titleA: { ja: "チーム総合力", en: "Team Attributes" },
        titleB: { ja: "戦術スタイル", en: "Tactical Styles" },
        attr: {
            offense: { ja: "攻撃力", en: "Offense" },
            defense: { ja: "守備力", en: "Defense" },
            depth: { ja: "選手層", en: "Depth" },
            teamwork: { ja: "組織力", en: "Teamwork" },
            intensity: { ja: "運動量", en: "Intensity" },
            experience: { ja: "経験値", en: "Experience" }
        },
        style: {
            possession: { left: { ja: "カウンター", en: "Counter" }, right: { ja: "ポゼッション", en: "Possession" } },
            pressing: { left: { ja: "リトリート", en: "Retreat" }, right: { ja: "ハイプレス", en: "High Press" } },
            attackRoute: { left: { ja: "サイド", en: "Wing" }, right: { ja: "中央", en: "Center" } },
            playStyle: { left: { ja: "個人技", en: "Individual" }, right: { ja: "組織構築", en: "Teamwork" } }
        }
    },

    categories: [
        { id: 'atk', name: { ja: '攻撃', en: 'Attack' }, short: { ja: '攻', en: 'ATK' }, colorClass: 'gt-atk' },
        { id: 'def', name: { ja: '守備', en: 'Defense' }, short: { ja: '守', en: 'DEF' }, colorClass: 'gt-def' },
        { id: 'spd', name: { ja: '速さ', en: 'Speed' }, short: { ja: '速', en: 'SPD' }, colorClass: 'gt-spd' },
        { id: 'tec', name: { ja: '技術', en: 'Technique' }, short: { ja: '技', en: 'TEC' }, colorClass: 'gt-tec' },
        { id: 'itl', name: { ja: '知性', en: 'Intelligence' }, short: { ja: '知', en: 'ITL' }, colorClass: 'gt-itl' },
        { id: 'phy', name: { ja: '物理', en: 'Physical' }, short: { ja: '物', en: 'PHY' }, colorClass: 'gt-phy' }
    ],
    stats: {
        atk: [{ ja: 'シュート力', en: 'Shot Power' }, { ja: 'シュート精度', en: 'Shot Accuracy' }, { ja: 'PK', en: 'Penalty Kick' }, { ja: 'ヘディング力', en: 'Heading Power' }, { ja: 'ヘディング精度', en: 'Heading Accuracy' }, { ja: 'ジャンプ力', en: 'Jumping' }],
        def: [{ ja: '対人守備', en: '1v1 Defending' }, { ja: 'インターセプト', en: 'Interceptions' }, { ja: 'クリア', en: 'Clearances' }, { ja: '守備貢献', en: 'Def. Contribution' }, { ja: 'セービング', en: 'Saving' }, { ja: 'ハイボール', en: 'High Balls' }],
        spd: [{ ja: '最高速度', en: 'Top Speed' }, { ja: '加速力', en: 'Acceleration' }, { ja: '敏捷性', en: 'Agility' }, { ja: 'スプリント', en: 'Sprint' }],
        tec: [{ ja: 'ショートパス', en: 'Short Pass' }, { ja: 'ロングパス', en: 'Long Pass' }, { ja: 'スルーパス', en: 'Through Ball' }, { ja: 'ドリブル速度', en: 'Dribble Speed' }, { ja: 'ドリブル精度', en: 'Dribble Accuracy' }, { ja: 'FK/CK', en: 'FK/CK' }, { ja: 'スローイン', en: 'Throw-in' }, { ja: 'GKフィード', en: 'GK Distribution' }],
        itl: [{ ja: '戦術理解', en: 'Tactical Awareness' }, { ja: '予測・閃き', en: 'Anticipation/Flair' }, { ja: 'メンタル', en: 'Mentality' }, { ja: 'セットプレー位置取り', en: 'Set-piece Positioning' }],
        phy: [{ ja: 'スタミナ', en: 'Stamina' }, { ja: '対人フィジカル', en: 'Physical Strength' }, { ja: 'ケガしにくさ', en: 'Injury Resistance' }]
    }
};

let currentLang = 'ja';
let activeTeamId = null; 
let scoutingData = [];

function t(value) {
    if (!value) return '';
    if (typeof value === 'string') return value; 
    return value[currentLang] || value['ja'] || '';
}

function calculateAvgRank(ranksArray) {
    const rankScores = { 'S':8, 'A':7, 'B':6, 'C':5, 'D':4, 'E':3, 'F':2, 'G':1 };
    let sum = 0, count = 0;
    ranksArray.forEach(r => { if (r !== '-') { sum += (rankScores[r] || 1); count++; } });
    if (count === 0) return '-';
    const avg = Math.round(sum / count);
    const reverseScores = { 8:'S', 7:'A', 6:'B', 5:'C', 4:'D', 3:'E', 2:'F', 1:'G' };
    return reverseScores[avg] || 'G';
}

async function loadData() {
    if (possibleTeams.length === 0) return;

    const firstTeamId = 'jpn';
    try {
        const module = await import(`./data/${firstTeamId}.js`);
        const data = Object.values(module)[0];
        scoutingData.push(data);
        activeTeamId = data.id;
        renderBoard();
    } catch (error) {}

    const remainingTeams = possibleTeams.filter(id => id !== firstTeamId);
    const promises = remainingTeams.map(teamId => import(`./data/${teamId}.js`).catch(() => null));
    const modules = await Promise.all(promises);

    modules.forEach(module => {
        if (module) scoutingData.push(Object.values(module)[0]);
    });

    scoutingData.sort((a, b) => possibleTeams.indexOf(a.id) - possibleTeams.indexOf(b.id));
    renderBoard();
}

function renderBoard() {
    document.getElementById('main-title').textContent = i18n.title[currentLang];
    const tabsContainer = document.getElementById('tabs-container');
    const panelsContainer = document.getElementById('panels-container');
    tabsContainer.innerHTML = '';
    panelsContainer.innerHTML = '';

    scoutingData.forEach(team => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${team.id === activeTeamId ? 'active' : ''}`;
        btn.textContent = t(team.name);
        if (team.id === activeTeamId) {
            btn.style.backgroundColor = team.color;
            btn.style.color = 'white';
        }
        btn.addEventListener('click', () => {
            activeTeamId = team.id;
            renderBoard();
        });
        tabsContainer.appendChild(btn);
    });

    const activeTeam = scoutingData.find(t => t.id === activeTeamId);
    if (!activeTeam) return;

    const panel = document.createElement('div');
    panel.id = `panel-${activeTeam.id}`;
    panel.className = `team-panel active`;

    // ==========================================
    // 🌟 国（チーム）の総合評価パネルを生成
    // ==========================================
    const tStats = activeTeam.teamStats || {
        attributes: { offense: "-", defense: "-", depth: "-", teamwork: "-", intensity: "-", experience: "-" },
        styles: { possession: 50, pressing: 50, attackRoute: 50, playStyle: 50 }
    };
    const attrs = tStats.attributes;
    const styles = tStats.styles;

    const teamSummaryHtml = `
        <div class="team-summary-card" style="border-left-color: ${activeTeam.color}">
            <div class="ts-attributes">
                <div class="ts-section-title">${i18n.teamEval.titleA[currentLang]}</div>
                <div class="ts-attr-grid">
                    ${['offense', 'defense', 'depth', 'teamwork', 'intensity', 'experience'].map(key => `
                        <div class="ts-attr-item">
                            <span class="ts-attr-label">${i18n.teamEval.attr[key][currentLang]}</span>
                            <div class="summary-badge ${attrs[key] === '-' ? 'rank-none' : `rank-${attrs[key]}`}">${attrs[key]}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="ts-styles">
                <div class="ts-section-title">${i18n.teamEval.titleB[currentLang]}</div>
                ${['possession', 'pressing', 'attackRoute', 'playStyle'].map(key => `
                    <div class="ts-style-item">
                        <div class="ts-style-labels">
                            <span>${i18n.teamEval.style[key].left[currentLang]}</span>
                            <span>${i18n.teamEval.style[key].right[currentLang]}</span>
                        </div>
                        <div class="ts-style-bar-bg">
                            <div class="ts-style-marker"></div>
                            <div class="ts-style-bar-fill" style="width: ${styles[key]}%; background-color: ${activeTeam.color}"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    panel.innerHTML = teamSummaryHtml;

    // ==========================================
    // 以降、選手リストの生成（変更なし）
    // ==========================================
    const posOrder = ['FW', 'MF', 'DF', 'GK'];
    const groupedPlayers = { FW: [], MF: [], DF: [], GK: [] };
    
    activeTeam.players.forEach(player => {
        const mainPos = player.pos.split('/')[0];
        if (!groupedPlayers[mainPos]) groupedPlayers[mainPos] = [];
        groupedPlayers[mainPos].push(player);
    });

    posOrder.forEach(pos => {
        const playersInPos = groupedPlayers[pos];
        if (!playersInPos || playersInPos.length === 0) return;

        const posGroup = document.createElement('div');
        posGroup.className = 'pos-group';

        const posHeader = document.createElement('div');
        posHeader.className = 'pos-header';
        posHeader.innerHTML = `${pos} <span class="pos-count">(${playersInPos.length} ${i18n.playersCount[currentLang]})</span> <span class="pos-arrow">▼</span>`;
        posHeader.onclick = () => posGroup.classList.toggle('closed');

        const posList = document.createElement('div');
        posList.className = 'pos-list';

        playersInPos.forEach(player => {
            const summaries = i18n.categories.map(cat => ({ ...cat, avgRank: calculateAvgRank(player.stats[cat.id]) }));
            const row = document.createElement('div');
            row.className = 'player-row';
            row.style.borderLeftColor = activeTeam.color;

            const triggerHtml = `
                <div class="player-trigger" onclick="this.parentElement.classList.toggle('open')">
                    <div class="player-main-info">
                        <div class="player-name-line"><span class="player-name">#${player.no} ${t(player.name)}</span></div>
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
                    </div><span class="arrow-icon">▼</span>
                </div>
            `;

            const detailGroupsHtml = i18n.categories.map(cat => {
                const stats = player.stats[cat.id];
                const labels = i18n.stats[cat.id];
                const rowsHtml = labels.map((labelObj, idx) => {
                    if (stats[idx] === '-') return ''; 
                    const rankClass = stats[idx] === '-' ? 'rank-none' : `rank-${stats[idx]}`;
                    return `<div class="detail-row"><span class="detail-label">${labelObj[currentLang]}</span><span class="rank-badge ${rankClass}">${stats[idx]}</span></div>`;
                }).join('');
                return `<div class="detail-group"><div class="group-title ${cat.colorClass}">${cat.name[currentLang]}</div>${rowsHtml}</div>`;
            }).join('');

            row.innerHTML = triggerHtml + `<div class="player-detail-panel"><div class="detail-grid">${detailGroupsHtml}</div></div>`;
            posList.appendChild(row);
        });

        posGroup.appendChild(posHeader);
        posGroup.appendChild(posList);
        panel.appendChild(posGroup);
    });

    panelsContainer.appendChild(panel);
}

document.addEventListener('DOMContentLoaded', () => {
    const btnJa = document.getElementById('btn-ja');
    const btnEn = document.getElementById('btn-en');
    if (btnJa && btnEn) {
        btnJa.addEventListener('click', () => { currentLang = 'ja'; btnJa.classList.add('active'); btnEn.classList.remove('active'); renderBoard(); });
        btnEn.addEventListener('click', () => { currentLang = 'en'; btnEn.classList.add('active'); btnJa.classList.remove('active'); renderBoard(); });
    }
    loadData();
});