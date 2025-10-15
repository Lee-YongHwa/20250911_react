// types.ts

export interface Contact {
  email: string
  phone: string
  address: string
  website: string
}

export interface EducationItem {
  year: string
  institution: string
  major: string
}

export interface ExperienceItem {
  company: string
  role: string
  duration: string
}

export interface CertificateItem {
  name: string
  date: string
}

export interface AwardItem {
  name: string
  detail: string
}

export interface SkillItem {
  name: string
  level: number // 0-100 범위의 숫자
}

export interface ResumeData {
  name: string
  title: string
  contact: Contact
  profileImage: string
  education: EducationItem[]
  experience: ExperienceItem[]
  certificates: CertificateItem[]
  awards: AwardItem[]
  skills: SkillItem[]
}
