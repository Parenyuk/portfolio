import React from "react";
import s from './Projects.module.css';
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={s.projects}>
            <div className={s.container}>
                <span className={s.title}>My projects</span>
                <div className={s.line}></div>
                <div className={s.projectWrapper}>
                    <Project title={'ToDo List'}
                             description="There are many variations of passages of Lorem Ipsum available, but the majority have
                         suffered alteration in some form" />
                    <Project title={'Social network'}
                             description=" Lorem Ipsum is simply dummy text of the printing
                         and typesetting industry." />
                    <Project title='Calculator'
                             description=" Lorem Ipsum is simply dummy text of the printing
                         and typesetting industry." />
                    <Project title='Social network'
                             description=" Lorem Ipsum is simply dummy text of the printing
                         and typesetting industry." />
                </div>



            </div>
        </div>

    )
}
export default Projects;