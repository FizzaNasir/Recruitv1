import styles from "./Search.module.css";
import Header from "../../components/Header/Header";
import JobPost from "../../components/JobPostCard/JobPost";

function Search() {
  const jobTitle = "Marketing Coordinator";
  const companyName = "Recruuit (Pvt.) Ltd";
  const location = "Lahore, Pakistan";
  const jobType = "Part Time";
  const jobMode = "Remote";
  const salary = "$40,000 - $10000,000 / year";
  const postTime = "Posted 11 months ago";
  const companyProfile = "./recruuit";
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <JobPost
          jobTitle={jobTitle}
          companyName={companyName}
          companyProfile={companyProfile}
          location={location}
          jobMode={jobMode}
          jobType={jobType}
          salary={salary}
          postTime={postTime}
        />
      </div>
    </div>
  );
}

export default Search;
