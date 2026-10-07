import { Routes, Route } from 'react-router-dom';
import NotFound from '../NotFound';
import FreezoneOverview from './freezone/FreezoneOverview';
import IFZAPage from './freezone/details/IFZAPage';
import ServiceGuide from '../../components/layout/ServiceGuide';
import freezoneGuides from '../../data/freezoneGuides';
import '../../styles/pages/business/FreezonePages.css';

const FreezonePages = () => {
	return (
		<Routes>
			<Route path="/" element={<FreezoneOverview />} />
			<Route path="/ifza" element={<IFZAPage />} />
			{freezoneGuides.map((guide) => (
				<Route key={guide.path} path={guide.path.replace('/business/freezone', '')} element={<ServiceGuide guide={guide} />} />
			))}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default FreezonePages;
