import React from 'react'
import Hero from '../Hero/Hero'
import StudentServices from '../StudentServices/StudentServices'
import PopularCourses from '../PopularCourses/PopularCourses'
import UKIntakes from '../UKIntakes/UKIntakes'

export const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <StudentServices></StudentServices>
        <PopularCourses></PopularCourses>
        <UKIntakes></UKIntakes>
    </div>
  )
}
