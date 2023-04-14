'use client';
import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Accordion = ({ info }) => {
	const [isOpen, setIsOpen] = useState(new Array(info.length).fill(false));

	const handleClick = (index) => {
		const newIsOpen = [...isOpen];
		newIsOpen[index] = !newIsOpen[index];
		setIsOpen(newIsOpen);
	};

	return (
		<>
			{info.map(({ id, title, body }, index) => (
				<article key={id} className="accordion">
					<button
						className="accordion__toggler"
						onClick={() => handleClick(index)}
					>
						<h3 className="accordion__title">{title}</h3>
						<span className="accordion__icon">
							{isOpen[index] ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
						</span>
					</button>

					<main
						className="accordion__content"
						style={isOpen[index] ? { display: 'block' } : { display: 'none' }}
					>
						<p className="accordion__text">{body}</p>
					</main>
				</article>
			))}
		</>
	);
};

export default Accordion;
