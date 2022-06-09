import React from 'react';
import { saveAs } from "file-saver";
import mobassher from '../../Assets/Images/mobassher.png'

const Banner = () => {
    const saveFile = () => {
        saveAs(
          'https://drive.google.com/u/0/uc?id=10ddbEN2GdmqRIquzDahxM07-nJ3rU3ox&export=download'
        );
      };


    return (
        <section class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse lg:px-20 justify-center items-center ">
                <div className='w-full lg:w-1/2 flex justify-center p-5'>
                    <img className="h-4/5 w-4/5 p-5" src={mobassher} class=" rounded-lg shadow-2xl" alt=''/>
                </div>
                <div className='w-full lg:w-2/3 p-5 '>
                    <h1 class="text-4xl font-bold">MD MOBASSHER HOSSAIN</h1>
                    <h2 class="py-3 text-3xl font-bold">Full-Stack Developer</h2>
                    <p>I'm a Full-stack Developer who is passionate about making error-free websites with 100% client satisfaction. 
                    I love to solve real-world problems. I am strategic, goal-oriented and always work with an end goal in mind. Over the past years, I created the 10s of websites for my clients. I pride myself on doing quality work. 
                    Most of the time I work with React, but some technologies I enjoy working with include JavaScript as well as WordPress.</p>

                    <div>
                        <button className='btn btn-primary px-8 mt-8' onClick={saveFile}>Download Resume</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;