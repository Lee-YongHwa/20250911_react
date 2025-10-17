// Resume.tsx
import React from 'react'
import {resumeData} from './data/resumeData'
import './App.css' // CSS 파일은 동일하게 사용 (별도 제공 필요)

// 개별 섹션 컴포넌트 import
import ProfileSection from './career/ProfileSection'
import ResumeSection from './career/ResumeSection'
import SkillBar from './career/SkillBar'

const App: React.FC = () => {
  return (
    <div className="resume-container">
      <div className="resume-content">
        <header className="resume-header">
          <h1>RESUME</h1>
          <hr />
        </header>

        <div className="main-layout">
          {/* 좌측 패널 */}
          <aside className="left-panel">
            <ProfileSection
              name={resumeData.name}
              title={resumeData.title}
              contact={resumeData.contact}
              image={resumeData.profileImage}
            />
          </aside>

          {/* 우측 콘텐츠 */}
          <main className="right-content">
            {/* 학력 섹션 */}
            <ResumeSection title="학력사항">
              {resumeData.education.map((item, index) => (
                <div key={index} className="section-item-edu">
                  <div className="item-left">
                    <p className="item-year">{item.year}</p>
                  </div>
                  <div className="item-right">
                    <p className="item-title-bold">{item.institution}</p>
                    <p className="item-subtitle">{item.major}</p>
                  </div>
                </div>
              ))}
            </ResumeSection>

            <hr className="section-divider" />

            {/* 경력 섹션 */}
            <ResumeSection title="경력사항">
              {resumeData.experience.map((item, index) => (
                <div key={index} className="section-item-exp">
                  <div className="item-left">
                    <p className="item-year">{item.duration}</p>
                  </div>
                  <div className="item-right">
                    <p className="item-title-bold">{item.company}</p>
                    <p className="item-subtitle">{item.role}</p>
                  </div>
                </div>
              ))}
            </ResumeSection>

            <hr className="section-divider" />

            {/* 자격증 섹션 */}
            <ResumeSection title="자격증">
              {resumeData.certificates.map((item, index) => (
                <div key={index} className="section-item-list">
                  <p className="item-title-bold">
                    {item.name} <span className="item-date">{item.date}</span>
                  </p>
                </div>
              ))}
            </ResumeSection>

            <hr className="section-divider" />

            {/* 수상 섹션 */}
            <ResumeSection title="수상">
              {resumeData.awards.map((item, index) => (
                <div key={index} className="section-item-list">
                  <p className="item-title-bold">{item.name}</p>
                  <p className="item-subtitle">{item.detail}</p>
                </div>
              ))}
            </ResumeSection>

            <hr className="section-divider" />

            {/* 업무 스킬 섹션 */}
            <ResumeSection title="업무 스킬">
              <div className="skills-list">
                {resumeData.skills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </ResumeSection>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
