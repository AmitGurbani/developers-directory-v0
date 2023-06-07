
import React from 'react';
import { MdOpenInBrowser } from '@react-icons/all-files/md/MdOpenInBrowser';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaStackOverflow } from "@react-icons/all-files/fa/FaStackOverflow";

const UserCard: React.FC = () => {
	return (
		<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6">
			<div className="flex items-center gap-4">
				<img className="w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
				<div>
					<h5 className="text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
					<span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
					<div className='my-2'>
						<button type="button" className="text-gray-700 bg-gray-200 hover:bg-gray-800 hover:text-white focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center mr-2 dark:bg-slate-300 dark:text-slate-700 dark:hover:bg-slate-400 dark:hover:text-slate-200 dark:focus:ring-slate-100">
							<MdOpenInBrowser className='w-5 h-5' />
							<span className="sr-only">Open In Browser</span>
						</button>

						<button type="button" className="text-gray-700 bg-gray-200 hover:bg-gray-800 hover:text-white focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center mr-2 dark:bg-slate-300 dark:text-slate-700 dark:hover:bg-slate-400 dark:hover:text-slate-200 dark:focus:ring-slate-100">
							<FaTwitter className='w-5 h-5' />
							<span className="sr-only">Twitter</span>
						</button>

						<button type="button" className="text-gray-700 bg-gray-200 hover:bg-gray-800 hover:text-white focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center mr-2 dark:bg-slate-300 dark:text-slate-700 dark:hover:bg-slate-400 dark:hover:text-slate-200 dark:focus:ring-slate-100">
							<FaLinkedinIn className='w-5 h-5' />
							<span className="sr-only">LinkedIn</span>
						</button>

						<button type="button" className="text-gray-700 bg-gray-200 hover:bg-gray-800 hover:text-white focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center mr-2 dark:bg-slate-300 dark:text-slate-700 dark:hover:bg-slate-400 dark:hover:text-slate-200 dark:focus:ring-slate-100">
							<FaStackOverflow className='w-5 h-5' />
							<span className="sr-only">Stack Overflow</span>
						</button>
					</div>
				</div>
			</div>


			<div className='flex flex-wrap gap-y-2 my-3 mt-4'>
				<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
			</div>

			<div className="flex mt-4  text-center">
				<a href="#" className="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-1 focus:ring-green-300 font-medium rounded-lg text-sm  py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Download Resume</a>
			</div>
		</div>
	)
}
export default UserCard;