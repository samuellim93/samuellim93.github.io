import React from 'react'
import Navbar from "./Navbar";
import Profile from "./Profile";
import SkillQualification from "./SkillQualification";
import Workhistory from "./Workhistory";
import Mywork from "./Mywork";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
        <Navbar />
        <Profile />
        <SkillQualification />
        <Workhistory />
        <Mywork />
        <Footer />
    </div>
  )
}

export default Home