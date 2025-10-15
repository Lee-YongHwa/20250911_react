// resumeData.ts
// resumeData.ts
import type {ResumeData} from '../types'

export const resumeData: ResumeData = {
  name: '수지',
  title: '디자이너',
  contact: {
    email: 'hello@greatsite.com',
    phone: '+123-456-7890',
    address: '(123) Anywhere St., Any City',
    website: 'www.reallygreatsite.com'
  },
  profileImage: '수지.png', // 실제 이미지 파일 경로
  education: [
    {
      year: '2017. 2월',
      institution: '한국대학교 본사',
      major: '시각 디자인 학과'
    },
    {
      year: '2015. 2월',
      institution: '한국대학교 본사',
      major: '시각 디자인 학과'
    }
  ],
  experience: [
    {
      company: '프리랜서',
      role: '그래픽 디자인 | 웹디자인',
      duration: '2022년 11월 - 현재'
    },
    {
      company: 'Baccelle 회사 | 과장',
      role: '그래픽 디자이너',
      duration: '2020년 4월 - 2022년 10월'
    },
    {
      company: 'Faupet 회사 | 대리',
      role: '그래픽 디자이너',
      duration: '2015년 7월 - 2020년 1월'
    }
  ],
  certificates: [
    {name: '웹디자인 기능사', date: '(2015년 7월)'},
    {name: '그래픽스 운용 기능사', date: '(2013년 7월)'}
  ],
  awards: [{name: '그래픽 디자인 대회 수상 (2020년 3월)', detail: '디자인 우수상 수상'}],
  skills: [
    {name: '그래픽 디자인', level: 90},
    {name: '웹 디자인', level: 85},
    {name: '일러스트', level: 80},
    {name: '모션 그래픽', level: 75}
  ]
}
