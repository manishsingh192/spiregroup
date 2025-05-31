import React from 'react';
import PublicLayout from '../../pages/Public/Layouts/PublicLayout';
import { Route, Routes } from 'react-router-dom';
// import Automobile from '../../pages/Public/Pages/Automobile/Automobile';
import ItTech from '../../pages/Public/Pages/ItTechno/ItTech';
import Telecommunication from '../../pages/Public/Pages/Telecom/Telecommunication';
import Manufacturing from '../../pages/Public/Pages/Manufact/Manufact';
import Aerospace from '../../pages/Public/Pages/Aerospace/Aerospace';
import HomePublic from '../../pages/Public/Pages/Home/Home';
import HomeAutomobile from '../../pages/Public/Pages/Automobile/AutomobilePage/Pages/Home';
import Aboutus from '../../pages/Public/Pages/Automobile/AutomobilePage/Pages/Aboutus';
import Contact from '../../pages/Public/Pages/Automobile/AutomobilePage/Pages/Contact';
import Career from '../../pages/Public/Pages/Automobile/AutomobilePage/Pages/Career';
import AerospacePage from '../../pages/Public/Pages/Aerospace/AerospacePage/AerospacePage';
import ItTechnoPage from '../../pages/Public/Pages/ItTechno/ItTechnoPage/ItTechnoPage'
import TelecomPage from '../../pages/Public/Pages/Telecom/TelecomPage/TelecomPage'
import ManufactPage from '../../pages/Public/Pages/Manufact/ManufactPage/ManufactPage';
import HomeExp from '../../pages/Public/Pages/Home/HomeExplore/HomeExp';

const PublicRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<PublicLayout />}>
                    <Route index element={<HomePublic />} />
                    <Route path='/homeexplore' element={<HomeExp />} />
                    <Route path="/ittech" element={<ItTech />} />
                    <Route path="/telecommunication" element={<Telecommunication />} />
                    <Route path="/manufact" element={<Manufacturing />} />
                    <Route path="/aerospace" element={<Aerospace />} />
                    <Route path='/automobilepage' element={<HomeAutomobile />} />
                    <Route path='/aerospacepage' element={<AerospacePage />} />
                    <Route path='/ittechnopage' element={<ItTechnoPage />} />
                    <Route path='/telecommunicationpage' element={<TelecomPage />} />
                    <Route path='/manufactpage' element={<ManufactPage />} />
                    <Route path='/about' element={<Aboutus />} />
                    <Route path='/career' element={<Career />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>

            </Routes>
        </>
    )
}

export default PublicRoutes;
