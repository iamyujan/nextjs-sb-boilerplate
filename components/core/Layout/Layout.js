import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'


import Nav from "../Nav";
import s from "./Layout.module.scss";
import Footer from "../Footer";

import SiteContext from '@context/SiteContext'
import DemoModal from "@components/ui/DemoModal/DemoModal";
import StoryblokService from '@utils/storyblok-service'



const Layout = ({ children, metadata = {} }) => {
  const router = useRouter()

  const {
    title = "Headless Lab",
    description = "Increase conversion rates, maximize average order value, and improve SEO & PPC advertising results. Leverage your existing Shopify store into a progressive web app, in no time.",
    og_title = title,
    og_description = description,
    og_image = '',
    twitter_title = title,
    twitter_description = description,
    twitter_image = '',
  } = metadata
  
	const { 
    store: {
      pushMain,
      isDemoModalOpen,
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
      <div className={`${s.layout} ${isDemoModalOpen ? s.hasOpenModal : ''}`}>
        <Head>          
          <title>{title}</title>
          <meta name="description" content={description} />

          <meta property="og:title" content={og_title} />
          <meta property="og:description" content={og_description} />
          {og_image ?
            <meta property="og:image" content={og_image} />
          : null}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`http://headlesslab.com${router.asPath}`} />
          
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={twitter_title} />
          <meta name="twitter:description" content={twitter_description} />
          <meta name="twitter:url" content={`http://headlesslab.com${router.asPath}`} />
          <meta name="twitter:image" content={twitter_image} />

          <link rel="icon" href="/favicon.ico" />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-62WQ241S6M"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments)}
                  gtag('js', new Date());

                  gtag('config', 'G-62WQ241S6M');
                `,
            }}
          />

          {/* ProximaNova */}
          <link rel="preload" href="https://use.typekit.net/aea8pgc.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
          <noscript><link rel="stylesheet" href="https://use.typekit.net/aea8pgc.css" /></noscript>
        </Head>
        <Nav />
        <main className={pushMain ? s.pushMain : null}>
          {children}
        </main>
        <Footer />
        <DemoModal />
        <div className={s.overlay} />
      </div>
      {StoryblokService.bridge()}
  </>
};

export default Layout;
