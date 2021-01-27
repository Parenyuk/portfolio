import React from "react";
import s from './Projects.module.css';
import Project from './Project/Project';
import toDoListImg from './../../assets/img/projects/todo.png';
import calculatorImg from './../../assets/img/projects/calculator.jpg';
import socialNetworkImg from './../../assets/img/projects/socialNetwork.jpg';
import twitterImage from './../../assets/img/projects/twitter.jpg';
import gitHubImage from './../../assets/img/projects/gitHub.jpg'
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
                                 description="Todolist using React and Typescript with all CRUD-operations"
                                 style={toDoListBgImg}
                                 link={'https://github.com/Parenyuk/todolist-ts'}
                        />
                        <Project title={'Github search app'}
                                 description="In this pet-project I realize search user by name from github API,
                                 add lodash debounce to input,
                                 use pre-processor SCSS to made mobile layout. "
                                 style={gitHubImage}
                                 link={'https://github.com/Parenyuk/githubsearchapp'}
                        />
                        <Project title='Cards'
                                 description={`It's team work. We realize a project in which you can make all 
                                 CRUD operation with Cards using React, Redux, Typescript, pre-processor SCSS`}
                                 style={calculatorBgImg}
                                 link={'https://github.com/Parenyuk/cards'}
                        />
                        <Project title='Twitter'
                                 description="I made a Twitter Clone using React, Redux, Redux-saga, Typescript,
                                 Material UI"
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
