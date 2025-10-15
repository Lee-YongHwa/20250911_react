// SkillBar.tsx
import React from 'react';
import type { SkillItem } from '../types';

// Prop 타입을 위한 인터페이스 정의
interface SkillBarProps extends SkillItem {}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  return (
    <div className="skill-item">
      <p className="skill-name">{name}</p>
      <div className="skill-bar-outer">
        <div 
          className="skill-bar-inner" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;