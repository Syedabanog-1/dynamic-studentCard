'use client'
import {motion} from 'framer-motion'

import Card from './components/Card'

export default function Page() {
  
  const studentInfo1 = {
    name: "Husaina",
    age: 16,
    rollNumber: "00426351",
    class: "12th Grade",
    imageUrl: ""
  }
  const studentInfo2 = {
    name: "Hifsa",
    age: 17,
    rollNumber: "00421247",
    class: "13th Grade",
    imageUrl: ""
  }
  const studentInfo3 = {
    name: "Salma",
    age: 14,
    rollNumber: "00428750",
    class: "10th Grade",
    imageUrl: ""
  }

  return (
    <motion.div className='lg:flex lg:gap-10 flex-row'>
      <Card student={studentInfo1} />
      <Card student={studentInfo2} />
      <Card student={studentInfo3} />
    </motion.div>
  )
}
