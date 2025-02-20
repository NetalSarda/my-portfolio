import ProjectCard from '@/components/Project/ProjectCard'
import React from 'react'

const page = () => {
  return (
    <div>
      {
        ["1","2","3"].map(el=>{
          return <ProjectCard key={el}/>
        })
      }
    </div>
  )
}

export default page
