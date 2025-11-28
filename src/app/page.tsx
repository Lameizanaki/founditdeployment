import React from 'react';
import NavHeader from './components/styles/landingpage_styles/nav_header';
import Search from './components/styles/landingpage_styles/search_header';
import HeroSection from './components/styles/landingpage_styles/hero_sec';
import OneLineContent from './components/styles/landingpage_styles/aline_con';
import ChooseYourPlat from './components/styles/landingpage_styles/choose_platform';
import PopularCategories from './components/styles/landingpage_styles/pop_categories';
import CommunityPage from './components/styles/landingpage_styles/community_learn';
import TrustByCreator from './components/styles/landingpage_styles/trust_by_creator';
import ChoosePlan from './components/styles/landingpage_styles/choose_plan';
import ActionTrio from './components/styles/landingpage_styles/trio_action';
import Footer from './components/styles/landingpage_styles/footer';
import FeaturedServices from './components/styles/landingpage_styles/feature_service';
import ReadyToUseProducts from './components/styles/landingpage_styles/ready_to_use_product';
import Inspiration from './components/styles/landingpage_styles/inspiration';
import HireTalent from './components/styles/landingpage_styles/hire_talent';
import ScrollToTopButton from './components/styles/landingpage_styles/ScrollToTopButton';
export default function LandingPage() {
    return (
        <div className="w-full overflow-hidden">
            <NavHeader/>
            <Search/>
            <HeroSection/>
            <OneLineContent/>
            <ChooseYourPlat/>
            <PopularCategories/>
            <section id='feature' className='scroll-mt-24'>
                <FeaturedServices />
            </section>
            <section id='ready' className='scroll-mt-24'>
                <ReadyToUseProducts/>
            </section>
            <Inspiration/>
            <section id='hire' className='scroll-mt-24'>
                <HireTalent/>
            </section>
            <CommunityPage/>
            <TrustByCreator/>
            <ChoosePlan/>
            <ActionTrio/>
            <ScrollToTopButton/>
            <Footer/>
        </div>
    )
}