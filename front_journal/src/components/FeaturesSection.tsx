import React, { useEffect } from 'react'
import FeatureCard from './FeatureCard'
import type {Feature} from '../types/feature'

const options = [
  {value: '', label: '전체 보기'},
  {value: 't', label: '제목'},
  {value: 'c', label: '내용'},
  {value: 'w', label: '작성자'},
  {value: 'tc', label: '제목 + 내용'},
  {value: 'tcw', label: '제목 + 내용 + 작성자'},
]

useEffect(()=>{
  let compare = MediaQueryList.get('page')
  const page 
})

const features: Feature[] = [
  {
    icon: 'bi-collection',
    title: 'Fresh new layout',
    description: "With Bootstrap 5, we've created a fresh new layout for this template!"
  },
  {
    icon: 'bi-cloud-download',
    title: 'Free to download',
    description: 'As always, Start Bootstrap has a powerful collection of free templates.'
  },
  {
    icon: 'bi-card-heading',
    title: 'Jumbotron hero header',
    description: 'The heroic part of this template is the jumbotron hero header!'
  },
  {
    icon: 'bi-bootstrap',
    title: 'Feature boxes',
    description: "We've created some custom feature boxes using Bootstrap icons!"
  },
  {
    icon: 'bi-code',
    title: 'Simple clean code',
    description: 'We keep our dependencies up to date and squash bugs as they come!'
  },
  {
    icon: 'bi-patch-check',
    title: 'A name you trust',
    description:
      'Start Bootstrap has been the leader in free Bootstrap templates since 2013!'
  }
]

const FeaturesSection: React.FC = () => {
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
