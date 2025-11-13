import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import FreezoneOverview from './freezone/FreezoneOverview';
import DMCCPage from './freezone/details/DMCCPage';
import JAFZAPage from './freezone/details/JAFZAPage';
import DWTCPage from './freezone/details/DWTCPage';
import SHAMSPage from './freezone/details/SHAMSPage';
import DICPage from './freezone/details/DICPage';
import DMCPage from './freezone/details/DMCPage';
import DKPPage from './freezone/details/DKPPage';
import IFZAPage from './freezone/details/IFZAPage';
import DIFCPage from './freezone/details/DIFCPage';
import RAKEZPage from './freezone/details/RAKEZPage';
import MeydanPage from './freezone/details/MeydanPage';
import SPCPage from './freezone/details/SPCPage';
import AFZPage from './freezone/details/AFZPage';
import MasdarPage from './freezone/details/MasdarPage';
import SRTIPPage from './freezone/details/SRTIPPage';
import DAFZAPage from './freezone/details/DAFZAPage';
import NuventuresPage from './freezone/details/NuventuresPage';
import RAKICCPage from './freezone/details/RAKICCPage';
import '../../styles/pages/business/FreezonePages.css';

const FreezonePages = () => {
	return (
		<Routes>
			<Route path="/" element={<FreezoneOverview />} />
			<Route path="/dmcc" element={<DMCCPage />} />
			<Route path="/jafza" element={<JAFZAPage />} />
			<Route path="/dwtc" element={<DWTCPage />} />
			<Route path="/shams" element={<SHAMSPage />} />
			<Route path="/dic" element={<DICPage />} />
			<Route path="/dmc" element={<DMCPage />} />
			<Route path="/dkp" element={<DKPPage />} />
			<Route path="/ifza" element={<IFZAPage />} />
			<Route path="/difc" element={<DIFCPage />} />
			<Route path="/rakez" element={<RAKEZPage />} />
			<Route path="/meydan" element={<MeydanPage />} />
			<Route path="/spc" element={<SPCPage />} />
			<Route path="/afz" element={<AFZPage />} />
			<Route path="/masdar" element={<MasdarPage />} />
			<Route path="/srtip" element={<SRTIPPage />} />
			<Route path="/dafza" element={<DAFZAPage />} />
			<Route path="/nuventures" element={<NuventuresPage />} />
			<Route path="/rakicc" element={<RAKICCPage />} />

			{/* Keep other existing routes */}

		</Routes>
	);
};

export default FreezonePages;