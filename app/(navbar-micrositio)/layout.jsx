import NavbarMicrositio from '../../components/NavbarMicrositio';
import FooterMicrositio from '../../components/FooterMicrositio';


const layoutMicrositio = ({ children }) => {
	return (
		<div>
			<NavbarMicrositio />
			{children}
			<FooterMicrositio />
			
			
		</div>
	);
};

export default layoutMicrositio;
