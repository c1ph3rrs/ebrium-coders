import React, { useState } from 'react';
import './services.css';

const Services = () => {

    const [viewService, setViewService] = useState(0);

    const setViewState = (index) => {
        setViewService(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-mobile-android services__icon"></i>
                        <h3 className="services__title">Mobile App Development</h3>
                    </div>


                    <span className="services__button" onClick={ ()=> setViewState(1) } >View More <i className="uil uil-arrow-right services__button-icon"></i></span>


                    <div className={viewService === 1 ? "services__modal active-modal" : "services__modal"} >
                        <div className="services__modal-content">
                        <i onClick={ () => setViewState(0) } className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Mobile App Development</h3>
                            
                            <p className="services__modal-description">
                                Experienced mobile app developer specializing in Flutter and native development. Building robust, scalable and user-friendly mobile applications for iOS and Android platforms with a focus on performance and elegant UI/UX design.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Cross-platform mobile app development with Flutter/Dart
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Robust state management using Provider, Bloc, and Redux
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Secure authentication and data encryption implementation
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        API integration and offline data persistence
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Performance optimization and responsive UI design
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-brackets-curly services__icon"></i>
                        <h3 className="services__title">Web App <br/> Development</h3>
                    </div>


                    <span className="services__button" onClick={ ()=> setViewState(2) } >View More <i className="uil uil-arrow-right services__button-icon"></i></span>


                    <div className={viewService === 2 ? "services__modal active-modal" : "services__modal"} >
                        <div className="services__modal-content">
                        <i onClick={() => setViewService(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Web App Development</h3>
                            
                            <p className="services__modal-description">
                                Experienced web developer specializing in modern full-stack development with React, Node.js, and related technologies. Delivering scalable, high-performance web applications with clean code and exceptional user experiences.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Modern frontend development with React, Redux and Next.js
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Responsive and mobile-first web applications
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        RESTful API integration and backend development with Node.js
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Database design and implementation (MongoDB, PostgreSQL)
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Performance optimization and SEO best practices
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-database services__icon"></i>
                        <h3 className="services__title">Data Pipeline <br /> Engineering</h3>
                    </div>


                    <span className="services__button" onClick={ ()=> setViewState(3) }>View More  <i className="uil uil-arrow-right services__button-icon"></i></span>


                    <div className={viewService === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                        <i onClick={() => setViewService(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Data Pipeline Engineering</h3>
                            
                            <p className="services__modal-description">
                                Expert in web scraping and data pipeline engineering using Python, Selenium, and Scrapy. Specializing in automated data extraction, transformation, and loading into various databases with high efficiency and reliability.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Automated web scraping using Python, Selenium, and Scrapy
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Data extraction from dynamic JavaScript-heavy websites
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        ETL pipeline development and data transformation
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Data storage in MongoDB, Firebase, and MySQL databases
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Scalable and maintainable data pipeline architecture
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="services__content">
                    <div>
                        <i className="uil uil-cloud services__icon"></i>
                        <h3 className="services__title">Cloud Services</h3>
                    </div>


                    <span className="services__button" onClick={ ()=> setViewState(4) } >View More <i className="uil uil-arrow-right services__button-icon"></i></span>


                    <div className={viewService === 4 ? "services__modal active-modal" : "services__modal"} >
                        <div className="services__modal-content">
                        <i onClick={ () => setViewState(0) } className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">AWS Cloud Services</h3>
                            
                            <p className="services__modal-description">
                                Experienced AWS cloud architect specializing in designing, implementing and managing scalable cloud infrastructure. Expertise in serverless architecture, containerization, and cloud-native solutions.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        AWS Lambda and Serverless Architecture
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        EC2, ECS, and EKS Container Services
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        S3, RDS, and DynamoDB Database Solutions
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        CloudFront CDN and Route 53 DNS Services
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        CI/CD Pipeline with AWS CodePipeline
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-database services__icon"></i>
                        <h3 className="services__title">Database <br /> Development</h3>
                    </div>


                    <span className="services__button" onClick={ ()=> setViewState(5) } >View More <i className="uil uil-arrow-right services__button-icon"></i></span>


                    <div className={viewService === 5 ? "services__modal active-modal" : "services__modal"} >
                        <div className="services__modal-content">
                        <i onClick={() => setViewService(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Database Development</h3>
                            
                            <p className="services__modal-description">
                                Experienced database architect specializing in designing, implementing and optimizing both SQL and NoSQL database solutions. Focus on scalability, performance and data integrity.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        MongoDB and Firebase NoSQL Solutions
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        PostgreSQL and MySQL Database Design
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Database Performance Optimization
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Data Migration and ETL Processes
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Database Security and Access Control
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-server services__icon"></i>
                        <h3 className="services__title">Backend Services</h3>
                    </div>

                    <span className="services__button" onClick={ ()=> setViewState(6) }>View More  <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={viewService === 6 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                        <i onClick={() => setViewService(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Backend Services</h3>
                            
                            <p className="services__modal-description">
                                Experienced backend developer specializing in Python and Node.js with a focus on building scalable, secure and high-performance server-side applications.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        FastAPI and Flask API Development
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Node.js/Express REST APIs
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Database Integration and ORM Implementation
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Authentication and Authorization Systems
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        API Security and Performance Optimization
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services;