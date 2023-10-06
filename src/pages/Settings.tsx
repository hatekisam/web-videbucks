import React from 'react'
import { settings } from '../utils/constants'
import forward from "../assets/forward.svg"
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Settings: React.FC = () => {
	return (
		<div className='w-full p-5 overflow-y-auto'>
			<Helmet>
				<title>Settings</title>
			</Helmet>
			<p className='font-lin text-xl font-semibold my-2'>Settings</p>
			<div>
				{settings.map((setting, i) => {
					return (
						<div key={i} className='my-3'>
							<p className='text-xl font-semibold my-2'>{setting.title}</p>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
								{setting.items.map((item, i) => {
									return (
										<Link to={item.link} key={i}>
											<div className='shadow-md flex justify-between items-center px-4 py-2 rounded-lg'>
												<div className='flex gap-3'>
													<img src={item.icon} alt="" />
													<div>
														<p className='font-semibold text-base my-1'>{item.title}</p>
														<p className='font-semibold text-sm text-gray-800  '>{item.body}</p>
													</div>
												</div>
												<div>
													<img src={forward} alt="" />
												</div>
											</div>
										</Link>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>

			<div className='mb-20'>
				<button className='px-4 py-2 rounded-full bg-gradient-to-br from-[#E179CB] to-[#D7DF4D] text-white'>Reset all Settings</button>
			</div>
		</div>
	)
}

export default Settings