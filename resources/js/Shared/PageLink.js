import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import classNames from 'classnames';

const PageLink = ({ active, label, url }) => {
    const className = classNames(
        [
            'mr-1 mb-1',
            'px-4 py-3',
            'border rounded',
            'text-sm',
            'hover:bg-white',
            'focus:border-indigo-700 focus:text-indigo-700'
        ],
        {
            'bg-white': active,
            'ml-auto': label === 'Next'
        }
    );
    return (
        <InertiaLink className={className} href={url}>
            {label}
        </InertiaLink>
    );
};

export default ({links}) => {

    return (
        <div className="flex flex-col items-center my-12">
            <div className="flex text-gray-700">
                <div
                    className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="feather feather-chevron-left w-6 h-6">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </div>
                <div className="flex h-12 font-medium rounded-full bg-gray-200">
                    <div
                        className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">1
                    </div>
                    <div
                        className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white ">2
                    </div>
                    <div
                        className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">3
                    </div>
                    <div
                        className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">...
                    </div>
                    <div
                        className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">13
                    </div>
                    <div
                        className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">14
                    </div>
                    <div
                        className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">15
                    </div>
                    <div
                        className="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">2
                    </div>
                </div>
                <div
                    className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="feather feather-chevron-right w-6 h-6">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    );
};
