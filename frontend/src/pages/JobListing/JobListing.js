import styles from "./JobListing.module.css";
import Header2 from "../../components/Header2/Header2";
import JobPost from "../../components/JobPostCard/JobPost";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllJobs } from "../../store/reduxStore";

function JobListing() {
  const companyName = "Recruuit (Pvt.) Ltd";
  const companyProfile = "./recruuit";

  const { isLoading, jobs } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  const handleSearch = (keyword) => {
    const filteredData = jobs.filter((item) => item.includes(keyword));
    console.log(filteredData);
  };

  return (
    <div>
      <Header2 onSearch={handleSearch} />
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <div className={styles.container}>
          <h4>Recent Jobs</h4>
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
        </div>
      )}
    </div>
  );
}

export default JobListing;
