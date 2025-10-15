// ProfileSection.tsx
import React from 'react';
import type { Contact } from '../types';

// Prop 타입을 위한 인터페이스 정의
interface ProfileSectionProps {
  name: string;
  title: string;
  contact: Contact;
  image: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ name, title, contact, image }) => {
  return (
    <div className="profile-section">
      <div className="profile-image-wrapper">
        <img src={image} alt="Profile" className="profile-image" />
      </div>
      <h2 className="profile-name">{name}</h2>
      <p className="profile-title">{title}</p>
      
      <div className="contact-info">
        <p><span className="contact-label">이메일</span>{contact.email}</p>
        <p><span className="contact-label">연락처</span>{contact.phone}</p>
        <p><span className="contact-label">주소</span>{contact.address}</p>
        <p><span className="contact-label">홈페이지</span>{contact.website}</p>
      </div>
    </div>
  );
};

export default ProfileSection;