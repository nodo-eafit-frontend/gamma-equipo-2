import NavbarMicrositio from '../../components/NavbarMicrositio';
import FooterMicrositio from '../../components/FooterMicrositio';
import Navbar from '../../components/Navbar';


const layoutMicrositio = ({ children }) => {
	return (
		<div>
			<Navbar />
			<NavbarMicrositio />
			{children}
			<FooterMicrositio />
			
			
		</div>
	);
};

export default layoutMicrositio;
