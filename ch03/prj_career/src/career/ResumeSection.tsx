// ResumeSection.tsx
import React, { type PropsWithChildren } from 'react';

// Prop 타입을 위한 인터페이스 정의
interface ResumeSectionProps extends PropsWithChildren {
  title: string;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, children }) => {
  return (
    <section className="resume-section">
      <h3 className="section-title">{title}</h3>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default ResumeSection;