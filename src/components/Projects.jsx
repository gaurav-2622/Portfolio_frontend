import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'Disaster Management App',
      description:
        'Developed a Disaster Management Mobile App in Kotlin using Android Studio, providing timely disaster warnings and emergency call management.',
      link: 'https://github.com/gaurav-2622/Disaster-Management-App'
    },
    {
      title: 'Online Auction System',
      description:
        'An online auction system using Spring Boot, Payment Gateway API, and JUnit for testing.',
      link: 'https://github.com/gaurav-2622/Online-Auction-System'
    },
    {
      title: 'Shortest Path Finder',
      description:
        'A shortest path finder using graphs, algorithms, and data structures for efficient path calculation.',
      link: 'https://github.com/gaurav-2622/Shortest-Path-Finder'
    }
  ]

  return (
    <section id='projects' className='bg-white px-8 py-16 text-gray-800'>
      <div className='mx-auto container'>
        <h2 className='mb-12 font-bold text-4xl text-center text-teal-600'>
          Projects
        </h2>
        <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='border-gray-200 bg-white hover:bg-gray-50 shadow-lg p-6 border rounded-lg transform transition-all duration-300 hover:scale-105'
            >
              <h3 className='mb-4 font-semibold text-2xl text-teal-600'>
                {project.title}
              </h3>
              <p className='mb-4 text-gray-700 text-sm'>{project.description}</p>
              <a
                href={project.link}
                className='inline-block mt-4 text-teal-500 hover:text-teal-700 transition duration-300'
              >
                <span className='font-medium'>View Project</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
