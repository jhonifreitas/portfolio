import { useState } from 'react';

import './style.css';

import { Skill as SkillModel } from '../interfaces/skill';
import { Profile } from '../interfaces/profile';

import Loader from '../components/loader';
import Header from '../components/header';
import Top from '../components/top';
import About from '../components/about';
import Skill from '../components/skill';
import Service from '../components/service';
import Portfolio from '../components/portfolio';
import Footer from '../components/footer';

import SkillApi from '../services/apis/skill.service';
import ProfileApi from '../services/apis/profile.service';

export default function App() {

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile>();
  const [skills, setSkills] = useState<SkillModel[]>([]);

  useState(async () => {

    // PROFILE
    const profileId = process.env.REACT_APP_PROFILE_ID;
    if (profileId) {
      const profile = await ProfileApi.getById(profileId);
      setProfile(profile);
    }

    // SKILLS
    const skills = await SkillApi.getAll();
    skills.sort((a, b) => b.percent - a.percent);
    setSkills(skills);

    setLoading(false);
  });

  return (
    <>
      <Loader isVisible={loading} />

      {!loading && profile &&
        <>
          <Header />
          <Top profile={profile} />
          <About profile={profile} />
          <Skill skills={skills} />
          <Service />
          <Portfolio profile={profile} /> 
          <Footer />
        </>
      }
    </>
  );
}
