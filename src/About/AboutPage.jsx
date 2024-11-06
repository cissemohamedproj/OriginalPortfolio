import classes from './AboutPage.module.css';



export default function AboutPage(){

    return(
        <>
            <div className='container'>         

                <div className={classes.profile}>
                    <h1 className='title'> Qui suis-je ?</h1>
                    <p className={classes.name}>Je suis <span>Cissé Mohamed,</span> Développeur <span>web/mobile,</span> Full Stack </p>
                    <p className={classes.description}>
                    Développeur web et mobile avec plus de trois ans d'expérience, je suis spécialisé dans la création de solutions complètes et performantes, allant de sites front-end modernes et réactifs aux applications mobiles robustes. Freelance polyvalent, je maîtrise des technologies innovante, ce qui me permet de concevoir des projets adaptés aux besoins de mes clients. Mon expertise s'étend également à la création d'applications Android et au développement full stack, garantissant une parfaite intégration et une expérience utilisateur optimisée.                    </p>
                </div>

                <div className={classes.box}>
                    <div className={classes.left}>
                        <div className={classes.boxText}>
                            <h2>3+</h2>
                            <p>ans d'expérience</p>
                        </div>
                        <div className={classes.boxText}>
                            <h2>70+</h2>
                            <p>projets réalisés</p>
                        </div>
                        <div className={classes.boxText}>
                            <h2>50+</h2>
                            <p>clients satisfaits</p>
                        </div>
                        <div className={classes.boxText}>
                            <h2>10+</h2>
                            <p>technologies</p>
                        </div>
                    </div>

                    <div className={classes.right}>
                        <h3>Ce que je peux faire</h3>

                         
                            <div className={classes.content}>
                                <img src='ui.png' alt='Ui UX' className={classes.icon} />
                                <div>
                                <h4>UI/UX Design</h4>
                                <p>Création d'interfaces utilisateur intuitives et esthétiques.</p>
                                </div>
                            </div>
                        

                        
                            <div className={classes.content}>

                                <img src='web.png' alt='Web' className={classes.icon} />
                                <div>
                                <h4>Conception de sites web</h4>
                                <p>Développement de sites web réactifs et performants.</p>
                                </div>
                            </div>
                        

                      
                            <div className={classes.content}>

                                <img src='app.png' alt='app' className={classes.icon} />
                                <div>
                                <h4>Développement d'applications mobiles</h4>
                                <p>Création d'applications mobiles fonctionnelles et attrayantes.</p>
                                </div>
                            </div>
                        
                       

                        


                    </div>
                </div>
            </div>
        </>
    );
}
