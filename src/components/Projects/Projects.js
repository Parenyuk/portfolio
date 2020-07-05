import React from "react";
import s from './Projects.module.css';
import Project from './Project/Project';
import toDoListImg from './../../assets/img/projects/todo.png';
import calculatorImg from './../../assets/img/projects/calculator.jpg';
import socialNetworkImg from './../../assets/img/projects/socialNetwork.jpg';
import {Fade} from "react-reveal";


const Projects = () => {
    const toDoListBgImg = {
        backgroundImage: `url(${toDoListImg})`,
    }
    const calculatorBgImg = {
        backgroundImage: `url(${calculatorImg})`,
    }
    const socialNetworkBgImg = {
        backgroundImage: `url(${socialNetworkImg})`,
    }

    return (
        <div className={s.projects}>
            <Fade bottom>
                <div className={s.container}>
                    <span className={s.title}>My projects</span>
                    <div className={s.line}></div>
                    <div className={s.projectWrapper}>
                        <Project title={'ToDo List'}
                                 description="There are many variations of passages of Lorem Ipsum available, but the majority have
                         suffered alteration in some form"
                                 style={toDoListBgImg}
                        />
                        <Project title={'Social network'}
                                 description=" Lorem Ipsum is simply dummy text of the printing
                         and typesetting industry."
                                 style={socialNetworkBgImg}
                        />
                        <Project title='Calculator'
                                 description=" Lorem Ipsum is simply dummy text of the printing
                         and typesetting industry."
                                 style={calculatorBgImg}
                        />
                        {/*<Project title='Social network'*/}
                        {/*         description=" Lorem Ipsum is simply dummy text of the printing*/}
                        {/*     and typesetting industry." />*/}
                    </div>
                </div>
            </Fade>
        </div>

    )
}
export default Projects;