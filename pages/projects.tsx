import React from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { projectList } from '../data/projectsData';

const Projects = () => {
  return (
    <Layout>
      <h2>Projects I&apos;ve built</h2>
      <div className='mb-10 lg:mb-20'>
        {projectList.map((project) => (
          <ProjectCard key={project.title} info={project} />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
