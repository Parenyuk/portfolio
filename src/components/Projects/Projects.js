import React from "react";
import s from './Projects.module.css';
import Project from './Project/Project';
import toDoListImg from './../../assets/img/projects/todo.png';
import calculatorImg from './../../assets/img/projects/calculator.jpg';
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
    const gitHubBgImg = {
        backgroundImage: `url(${gitHubImage})`,
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
                                 description="Todolist using React and Typescript. In this project I made all CRUD-operations"
                                 style={toDoListBgImg}
                                 link={'https://github.com/Parenyuk/todolist-ts'}
                        />
                        <Project title='Github search app'
                                 description="In this project I realize search users by name,
                                 add lodash debounce to input,
                                 use SCSS to made mobile layout. "
                                 style={gitHubBgImg}
                                 link={'https://github.com/Parenyuk/githubsearchapp'}
                        />
                        <Project title='Cards'
                                 description={`It's team work. We realize a project in which you can make all 
                                 CRUD operation  using React, Redux, Typescript, SCSS`}
                                 style={calculatorBgImg}
                                 link={'https://github.com/Parenyuk/cards'}
                        />
                        <Project title='Twitter'
                                 description="It's a clone of Twitter. I made this project using React, Redux, Redux-saga, Typescript,
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
