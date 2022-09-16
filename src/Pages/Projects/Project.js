import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({project}) => {
    const {img1, name, type, description} = project;
    const navigate = useNavigate();

    const navigateToProjectDetail = (name) => {
        navigate(`/${name}`, {state: project});
    }

    return (
        <div className="card bg-base-100 border border-1 border-primary ">
            <div className='h-40  overflow-auto shadow '>
               <figure><img className='h-full' src={img1} alt="tool" /></figure>
            </div>
             <div className="card-body p-4 justify-between items-between">
                    <div>
                        <h2 className="text-justify text-xl mb-3 font-semibold text-primary">{name}</h2>
                        <h2 className="text-justify mb-2 font-semibold">{type}</h2>
                        <p className="text-justify "> {description.slice(0,70)}...</p>
                    </div>
                    <div className="card-actions justify-end items-end mt-3">
                        <div  onClick={() => navigateToProjectDetail(name)}  className=" btn  btn-primary text-white bg-primary">Details</div> 
                    </div>
                </div>
        </div>
    );
};

export default Project;