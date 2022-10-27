import { useEffect } from "react";
import {Link, useLoaderData} from "react-router-dom";
import CourseCard from "../../components/course-card/CourseCard";
import GetApps from "../../components/get-our-app/GetApps";
import OurTeam from "../../components/our-team/OurTeam";
import Stats from "../../components/stats/Stats";
import Subscribe from "../../components/subscribe/Subscribe";

const Home = () => {
    const {premiumCourses} = useLoaderData()
    
    return (
        <div>
            <section className="bg-white text-black dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto flex flex-col items-center px-4 py-12 text-center md:py-32 md:px-10 lg:px-32 lg:w-1/2">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                        Welcome to largest online leaning platform
                    </h1>
                    <p className="px-8 mt-8 mb-6 text-lg">
                        Join our coureses to ensure a better career
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <Link to='/courses' className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-400 dark:text-gray-900">
                            Get started
                        </Link>
                        <Link to='blog' className="px-8 py-3 m-2 text-lg font-semibold rounded bg-green-400 dark:bg-white dark:text-gray-900">
                            Learn more
                        </Link>
                    </div>
                </div>
                <div className="w-11/12 lg:w-4/5 mx-auto flex flex-col gap-8 pb-12">
                    <p className="text-xl lg:text-3xl font-semibold text-center uppercase">Our Premium courses</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-4">
                        {
                            premiumCourses.map(el => <CourseCard key={el.id} course={el}/>)
                        }
                    </div>
                </div>
                <div>
                    <GetApps />
                    <Stats />
                    <Subscribe />
                    <OurTeam />
                </div>
            </section>
        </div>
    );
};

export default Home;
