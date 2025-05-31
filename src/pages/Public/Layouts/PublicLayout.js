import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PublicAppBar from '../../../components/Public/PublicAppBar'
import Footer from '../../../components/Public/Footer'

function PublicLayout() {
    const location = useLocation();
    const noFooterPaths = ['/', '/automobile', '/ittech', '/telecommunication', '/manufact', '/aerospace']; // Add paths where you don't want the footer

    const shouldShowFooter = !noFooterPaths.includes(location.pathname);

    return (
        <div>
            <PublicAppBar />
            <Outlet />
            {shouldShowFooter && <Footer />}
        </div>
    )
}

export default PublicLayout
