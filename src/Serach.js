/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import Searchtest from './Searchtest';
import './Serach.css';
function Serach() {
	return (
		<div className='loginScreen '>
			<Link to='/'>
				<button onClick='' className='btn'>
					HomeScreen
				</button>{' '}
			</Link>
			<h1 className='tt'>
				{' '}
				Search{' '}
				<span>
					{' '}
					<Searchtest />
				</span>
			</h1>
		</div>
	);
}
export default Serach;
