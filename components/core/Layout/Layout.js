import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";

import SiteContext from '@context/SiteContext'
import StoryblokService from '@utils/storyblok-service'



const Layout = ({ children, metadata = {} }) => {
  
	const { 
    store: {
      pushMain,
      isModalOpen,
    },
    handlePushMain,
    handleLocationPathname,
  } = useContext(SiteContext);

	const [loaded, setLoaded] = useState(false);
	const [trigger, setTrigger] = useState(false);

	useEffect(() => {
		if (window && loaded) {
      handleLocationPathname(window.location.pathname)
			handlePushMain(
        window.location.pathname !== "/" &&
        window.location.pathname !== "/integrations" && 
        window.location.pathname !== "/integrations/" &&
        window.location.pathname !== "/services" && 
        window.location.pathname !== "/services/" &&
        window.location.pathname !== "/projects" && 
        window.location.pathname !== "/projects/"
			)
		}
	}, [loaded]);

	useEffect(() => {
		if (window) {
			setLoaded(true);
		} else {
			setTimeout(() => {
				setTrigger((trigger) => !trigger);
			}, 500);
		}
	}, [trigger]);
  
  return <>
      <div className={`${isModalOpen ? 'has-modal-open' : ''}`}>
        <Head>          
        </Head>
        {/* <Header /> */}
        <main className={pushMain ? 'pushDown' : null}>
          {children}
        </main>
        {/* <Footer /> */}
        {/* <Overlay /> */}
      </div>
      {StoryblokService.bridge()}
  </>
};

export default Layout;
