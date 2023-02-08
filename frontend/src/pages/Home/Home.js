import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import JobPost from "../../components/JobPostCard/JobPost";
import bnr2 from "./recruuit.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllJobs } from "../../store/reduxStore";

function Home() {
  const { isLoading, jobs } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  return (
    // top banner
    <div className={styles.scrollableContainer}>
      <Header />
      {/* transparent  overlay */}
      <div className={styles.transparent}>
        <h2 className={styles.whiteTxt}>
          Make a Difference with Your Online Resume!
        </h2>
        <p className={styles.whiteTxt}>
          Discover your dream job, Start your career journey with us!
        </p>
        {/* create account button */}
        <a className={styles.transparentBtn} href="/signup">
          Create an Account
        </a>
      </div>
      {/* team discription */}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={`${styles.section} ${styles.btm_line}`}>
            <div className={styles.row}>
              <div className={`${styles.col_3} ${styles.rgt_line}`}>
                <div className={styles.fun_facts_wrapper}>
                  <h3 className={styles.fun_facts_number}>89,040</h3>
                  <div>Jobs Added</div>
                </div>
              </div>
              <div className={`${styles.col_3} ${styles.rgt_line}`}>
                <div className={styles.fun_facts_wrapper}>
                  <h3 className={styles.fun_facts_number}>1,000</h3>
                  <div>Active Resumes</div>
                </div>
              </div>
              <div className={styles.col_3}>
                <div className={styles.fun_facts_wrapper}>
                  <h3 className={styles.fun_facts_number}>41,110</h3>
                  <div>Positions Matched</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.about_container} ${styles.btm_line}`}>
          <div className={styles.about_content}>
            <div className={styles.about_txt}>
              <div className={styles.about_heading}>
                <p>Building Better Teams, Building Better Futures</p>
              </div>
              <p>
                Our mission is to empower job seekers to find fulfilling careers
                and help employers build strong, diverse teams. We also offer a
                variety of tools and resources to assist job seekers in their
                job search, such as resume building and interviewing tips.
              </p>
              <p>
                As an employer, you can also rely on us to help you find the
                best candidates for your open positions. We offer a wide range
                of recruitment services, including job posting, resume search,
                and applicant tracking, to make the hiring process as efficient
                as possible.
              </p>
              <div className={styles.mg_30}>
                <a className={styles.primaryBtn} href="#">
                  Learn more
                </a>
              </div>
            </div>
            <img className={styles.about_pic} src={bnr2} alt="img" />
          </div>
        </div>

        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <div className={styles.container}>
            <h2 className={`${styles.btm_line} ${styles.main_heading}`}>
              Recent Jobs
            </h2>
            {jobs.map((job) => (
              <JobPost
                key={job._id}
                jobTitle={job.title}
                // companyName={companyName}
                // companyProfile={companyProfile}
                location={job.location}
                jobMode={job.mode}
                jobType={job.type}
                salary={job.salaryRange}
                postTime={job.datePosted}
                id={job._id}
              />
            ))}

            <a className={styles.primaryBtn} href="jobListing">
              Browse All Jobs
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
