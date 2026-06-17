import { jpData } from './data/jp.js';
import { nlData } from './data/nl.js';
import { tnData } from './data/tn.js';
import { seData } from './data/se.js';

const categories = [
    { id: 'atk', name: '攻撃', short: '攻', colorClass: 'gt-atk' },
    { id: 'def', name: '守備', short: '守', colorClass: 'gt-def' },
    { id: 'spd', name: '速さ', short: '速', colorClass: 'gt-spd' },
    { id: 'tec', name: '技術', short: '技', colorClass: 'gt-tec' },
    { id: 'itl', name: '知性', short: '知', colorClass: 'gt-itl' },
    { id: 'phy', name: '物理', short: '物', colorClass: 'gt-phy' }
];

const statLabels = {
    atk: ['シュート力', 'シュート精度', 'PK', 'ヘディング力', 'ヘディング精度', 'ジャンプ力'],
    def: ['対人守備', 'インターセプト', 'クリア', '守備貢献', 'セービング', 'ハイボール'],
    spd: ['最高速度', '加速力', '敏捷性', 'スプリント'],
    tec: ['ショートパス', 'ロングパス', 'スルーパス', 'ドリブル速度', 'ドリブル精度', 'FK/CK', 'スローイン', 'GKフィード'],
    itl: ['戦術理解', '予測・閃き', 'メンタル', 'セットプレー位置取り'],
    phy: ['スタミナ', '対人フィジカル', 'ケガしにくさ']
};

// データを結合
const scoutingData = [jpData, nlData, tnData, seData];

function calculateAvgRank(ranksArray) {
    const rankScores = { 'S':8, 'A':7, 'B':6, 'C':5, 'D':4, 'E':3, 'F':2, 'G':1 };
    let sum = 0;
    let count = 0;
    
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

function initBoard() {
    const tabsContainer = document.getElementById('tabs-container');
    const panelsContainer = document.getElementById('panels-container');
    const posOrder = ['FW', 'MF', 'DF', 'GK'];

    scoutingData.forEach((team, tIndex) => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${tIndex === 0 ? 'active' : ''}`;
        btn.dataset.team = team.id;
        btn.textContent = team.name;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.remove('active');
                b.style.backgroundColor = '#cbd5e1';
                b.style.color = '#334155';
            });
            document.querySelectorAll('.team-panel').forEach(p => p.classList.remove('active'));
            
            btn.classList.add('active');
            btn.style.backgroundColor = team.color;
            btn.style.color = 'white';
            document.getElementById(`panel-${team.id}`).classList.add('active');
        });
        
        if(tIndex === 0) {
            btn.style.backgroundColor = team.color;
            btn.style.color = 'white';
        }
        tabsContainer.appendChild(btn);

        const panel = document.createElement('div');
        panel.id = `panel-${team.id}`;
        panel.className = `team-panel ${tIndex === 0 ? 'active' : ''}`;

        const groupedPlayers = { FW: [], MF: [], DF: [], GK: [] };
        team.players.forEach(player => {
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
            posHeader.innerHTML = `${pos} <span class="pos-count">(${playersInPos.length}名)</span> <span class="pos-arrow">▼</span>`;
            posHeader.onclick = () => posGroup.classList.toggle('closed');

            const posList = document.createElement('div');
            posList.className = 'pos-list';

            playersInPos.forEach(player => {
                const summaries = categories.map(cat => ({
                    ...cat,
                    avgRank: calculateAvgRank(player.stats[cat.id])
                }));

                const row = document.createElement('div');
                row.className = 'player-row';
                row.style.borderLeftColor = team.color;

                const triggerHtml = `
                    <div class="player-trigger" onclick="this.parentElement.classList.toggle('open')">
                        <div class="player-main-info">
                            <div class="player-name-line">
                                <span class="player-name">#${player.no} ${player.name}</span>
                            </div>
                            <div class="player-sub-meta">
                                <span class="meta-club">${player.club}</span>
                                <span class="meta-specs">${player.age}歳 / ${player.height}cm / ${player.weight}kg / ${player.pos}</span>
                            </div>
                        </div>
                        <div class="summary-mini-grid">
                            ${summaries.map(s => {
                                const avgRankClass = s.avgRank === '-' ? 'rank-none' : `rank-${s.avgRank}`;
                                return `
                                <div class="summary-col">
                                    <span class="summary-label">${s.short}</span>
                                    <div class="summary-badge ${avgRankClass}">${s.avgRank}</div>
                                </div>
                                `;
                            }).join('')}
                        </div>
                        <span class="arrow-icon">▼</span>
                    </div>
                `;

                const detailGroupsHtml = categories.map(cat => {
                    const stats = player.stats[cat.id];
                    const labels = statLabels[cat.id];
                    
                    const rowsHtml = labels.map((label, idx) => {
                        if (stats[idx] === '-') return ''; 
                        const rankClass = stats[idx] === '-' ? 'rank-none' : `rank-${stats[idx]}`;
                        return `
                        <div class="detail-row">
                            <span class="detail-label">${label}</span>
                            <span class="rank-badge ${rankClass}">${stats[idx]}</span>
                        </div>
                        `;
                    }).join('');

                    return `
                        <div class="detail-group">
                            <div class="group-title ${cat.colorClass}">
                                ${cat.name}
                            </div>
                            ${rowsHtml}
                        </div>
                    `;
                }).join('');

                const detailPanelHtml = `
                    <div class="player-detail-panel">
                        <div class="detail-grid">
                            ${detailGroupsHtml}
                        </div>
                    </div>
                `;

                row.innerHTML = triggerHtml + detailPanelHtml;
                posList.appendChild(row);
            });

            posGroup.appendChild(posHeader);
            posGroup.appendChild(posList);
            panel.appendChild(posGroup);
        });

        panelsContainer.appendChild(panel);
    });
}

document.addEventListener('DOMContentLoaded', initBoard);