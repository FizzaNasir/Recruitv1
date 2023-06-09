import { useState,useEffect } from 'react';
import styles from './Registration.module.css';
import Header from '../../components/Header/Header';
import CV from './CV/CV';

const Registration = (props) => {
  const sections = {
    basicInfo: 'Basic Info',
    workExp: 'Work Experience',
    project: 'Projects',
    education: 'Education',
    achievement: 'Achievements',
    other: 'Other',
  };
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      details: [],
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: {},
    },
  });
  useEffect(() => {
    console.log(resumeInformation);
  }, [resumeInformation]);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.heading}>Registration Form</div>
        <div className={styles.main}>
          <CV
            sections={sections}
            information={resumeInformation}
            setInformation={setResumeInformation}
          />
        </div>
      </div>
    </>
  );
};

export default Registration;
