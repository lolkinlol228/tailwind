import React, { useState } from 'react';

// Интерфейсы для типизации
interface StatData {
  hp: number;
  atk: number;
  def: number;
  atkBonus: string;
  price?: number;
}

interface LevelDataType {
  [key: number]: StatData;
}

interface StatConfig {
  name: string;
  key: keyof StatData;
  icon: JSX.Element;
}

interface StatsConfigType {
  [key: string]: StatConfig;
}

interface StatRowProps {
  stat: StatConfig;
  index: number;
}

const CharacterStats: React.FC = () => {
  const levelData: LevelDataType = {
    20: { hp: 2202, atk: 43, def: 163, atkBonus: "0%", price: "Бесплатно" },
    40: { hp: 4257, atk: 84, def: 316, atkBonus: "0%", price: 20000 },
    50: { hp: 5420, atk: 107, def: 402, atkBonus: "6%", price: 40000 },
    60: { hp: 6735, atk: 133, def: 499, atkBonus: "12%", price: 60000 },
    70: { hp: 7897, atk: 156, def: 585, atkBonus: "12%", price: 80000 },
    80: { hp: 9060, atk: 179, def: 671, atkBonus: "18%", price: 100000 },
    90: { hp: 10222, atk: 202, def: 758, atkBonus: "24%", price: 120000 }
  };

  const availableLevels = Object.keys(levelData).map(Number); 
  const [level, setLevel] = useState<number>(availableLevels[0]);

  const statsConfig: StatsConfigType = {
    hp: {
      name: "Базовое HP",
      key: "hp",
      icon: (
        <svg aria-hidden="true" data-icon="hp_primary" width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="h-4 w-4 fill-current text-white">
          <path fill="currentColor" d="M3.5 7.654a.978.978 0 01.449-.571c1.51-.85 3.586 2.117 6.544.548 1.927 6.083-8.893 6.247-6.992.023zM7 14c-3.373 0-6.75-2.421-5.134-7.26A18.543 18.543 0 016.57.213.748.748 0 017 0a.751.751 0 01.432.212 18.543 18.543 0 014.705 6.528C13.749 11.579 10.376 14 7 14zm.22-12.19A.639.639 0 007 1.735a.649.649 0 00-.22.075C5.07 3.134 2.7 7.092 2.839 9.21A4.019 4.019 0 007 12.753a4.019 4.019 0 004.162-3.538c.139-2.123-2.231-6.081-3.942-7.405z" />
        </svg>
      )
    },
    atk: {
      name: "Базовая атака",
      key: "atk",
      icon: (
        <svg aria-hidden="true" data-icon="Atk" width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="h-4 w-4 fill-current text-white">
          <path fill="currentColor" d="M7.755 1.651l1.643 1.643 1.928-1.926L11.3.25a.228.228 0 01.228-.22h2.2a.228.228 0 01.228.229c-.121 2.66.556 2.457-1.337 2.4l-1.933 1.925L12.33 6.23a.228.228 0 010 .322c-1.167 1.208-.775.907-1.892-.106l-7.151 7.147a.457.457 0 01-.313.137 21.32 21.32 0 01-2.954.238 21.172 21.172 0 01.238-2.953.451.451 0 01.134-.319l7.146-7.153-.838-.839a.229.229 0 010-.323l.732-.73a.228.228 0 01.322 0z" />
        </svg>
      )
    },
    def: {
      name: "Базовая защита",
      key: "def",
      icon: (
        <svg aria-hidden="true" data-prefix="faga" data-icon="Def" width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="h-4 w-4 fill-current text-white">
          <path fill="currentColor" d="M13.442.726a.291.291 0 00-.175-.268C12.859.286 11.503 0 7 0S1.143.286.735.458a.291.291 0 00-.176.269v7.44a.868.868 0 00.125.453c1.579 2.6 5.347 4.855 6.16 5.339a.292.292 0 00.3 0c.79-.482 4.56-2.688 6.169-5.335a.868.868 0 00.127-.455zM7 11.968c.059.013-3.56-2.017-4.824-4.368V1.565s0-.452 4.824-.452z" />
        </svg>
      )
    },
    atkBonus: {
      name: "Сила атаки",
      key: "atkBonus",
      icon: (
        <svg aria-hidden="true" data-icon="Atk" width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="h-4 w-4 fill-current text-white">
          <path fill="currentColor" d="M11.53.031a.228.228 0 00-.23.219l.026 1.117-1.928 1.928-1.644-1.643a.228.228 0 00-.322 0l-.73.73a.229.229 0 000 .323l.837.838-7.146 7.154a.451.451 0 00-.135.319 21.172 21.172 0 00-.237 2.953 21.32 21.32 0 002.954-.239.457.457 0 00.312-.136L6.383 10.5a2.843 2.843 0 01-.117-.258l-.002-.006-.002-.01a3.019 3.019 0 01-.186-1.07c0-.352.056-.703.182-1.04l.006-.032.002-.004c.12-.316.296-.618.543-.875.247-.257.55-.454.877-.582A2.7 2.7 0 018.7 6.428a2.72 2.72 0 011.385.373l.353-.354c.183.166.319.308.434.432a.735.735 0 01.133-.115 1.28 1.28 0 01.724-.225h.612a.228.228 0 00-.012-.309l-1.643-1.646 1.932-1.926c1.893.057 1.217.26 1.338-2.4a.228.228 0 00-.228-.227h-2.2z" />
        </svg>
      )
    }
  };

  const getSliderPercentage = (): number => {
    const index = availableLevels.indexOf(level);
    return (index / (availableLevels.length - 1)) * 100;
  };

  const StatRow: React.FC<StatRowProps> = ({ stat, index }) => (
    <tr>
      <td className="flex flex-row items-center gap-2 text-text-color" style={{ backgroundColor: index % 2 === 0 ? 'rgb(80, 72, 111)' : 'rgb(67, 59, 98)' }}>
        <span>{stat.icon}</span>
        <span>{stat.name}</span>
      </td>
      <td className="text-right text-text-color" style={{ backgroundColor: index % 2 === 0 ? 'rgb(80, 72, 111)' : 'rgb(67, 59, 98)', paddingRight: '30px' }}>
        {levelData[level][stat.key]}
      </td>
    </tr>
  );

  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="flex items-center">
        <span className="text-text-color text-[30px] rounded-lg p-1" style={{ background: "rgb(93, 81, 135)", margin: "20px" }}>
          lv.{level}
        </span>
        <span className="text-text-color text-[30px] rounded-lg p-1 flex items-center" style={{ background: "rgb(93, 81, 135)" }}>
          Таблица
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 ml-2">
            <path fill="currentColor" d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 4v4h6V8zm8 0v4h6V8zm-8 6v4h6v-4zm8 0v4h6v-4z" />
          </svg>
        </span>
        <div className="w-full max-w-md mx-auto p-4">
          <input type="range" min="0" max={availableLevels.length - 1} value={availableLevels.indexOf(level)} onChange={(e) => setLevel(availableLevels[parseInt(e.target.value)])} className="slider w-full transform scale-110" style={{ background: `rgb(218, 216, 225)` }} />
        </div>
      </div>
      <table className="stat-table hover w-full">
        <tbody>
          {Object.values(statsConfig).map((stat, index) => (
            <StatRow key={stat.key} stat={stat} index={index} />
          ))}
        </tbody>
      </table>
      {levelData[level].price && (
        <div className='inline-flex items-center justify-center bg-newbgcolor w-full p-4 rounded-[15px]' style={{ border: "2px solid rgb(93, 81, 135)" }}>
          <a className='text-text-color'>Цена возвышения:</a> <span style={{ color: "rgb(220, 173, 247)", paddingLeft: '15px', fontWeight: "bold"}}>{levelData[level].price}</span>
        </div>
      )}
    </div>
  );
};

export default CharacterStats;
