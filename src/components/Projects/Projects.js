import React from "react";
import s from './Projects.module.css';
import Project from './Project/Project';
import toDoListImg from './../../assets/img/projects/todo.png';
import calculatorImg from './../../assets/img/projects/calculator.jpg';
import socialNetworkImg from './../../assets/img/projects/socialNetwork.jpg';
import twitterImage from './../../assets/img/projects/twitter.jpg'
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
    const twitterBgImg = {
        backgroundImage: `url(${twitterImage})`,
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
                                 link={'https://github.com/Parenyuk/todolist-ts'}
                        />
                        <Project title={'Social network'}
                                 description=" Lorem Ipsum is simply dummy text of the printing
                         and typesetting industry."
                                 style={socialNetworkBgImg}
                                 link={'https://github.com/Parenyuk/network'}
                        />
                        <Project title='Cards'
                                 description=" Lorem Ipsum is simply dummy text of the printing
                         and typesetting industry."
                                 style={calculatorBgImg}
                                 link={'https://github.com/Parenyuk/cards'}
                        />
                        <Project title='Twitter'
                                 description=" Lorem Ipsum is simply dummy text of the printing
                             and typesetting industry."
                                 link={'https://github.com/Parenyuk/twitter'}
                                 style={twitterBgImg}
                        />

                    </div>
                </div>
            </Fade>
        </div>

    )
}
export default Projects;
