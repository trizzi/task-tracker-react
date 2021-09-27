import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button
				onClick={onAdd}
				color={showAdd ? 'red' : 'green'}
				text={showAdd ? 'close' : 'Add'}
			/>
		</header>
	);
};
Header.defaultProps = {
	title: 'Task Tracker',
};
Header.prototypes = {
	title: PropTypes.string,
};

export default Header;
