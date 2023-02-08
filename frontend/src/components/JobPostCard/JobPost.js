import styles from "./JobPost.module.css";

function JobPost({
  jobTitle,
  companyName,
  companyProfile,
  location,
  jobType,
  jobMode,
  salary,
  postTime,
}) {
  return (
    <div className={styles.jobs_container}>
      <a href="./jobDescription">
        <div className={styles.jobs_wrapper}>
          {/* <div className={styles.jobs_client}>
            <img src="" alt="not found" />
          </div> */}
          <div className={styles.jobs_content}>
            <h4 className={styles.job_title}> {jobTitle}</h4>
            <div className={styles.sub_category}>
              <a className={styles.link} href={companyProfile}>
                {companyName}
              </a>
            </div>
            <div className={styles.location}>
              <p>{location}</p>
            </div>
            <div>
              <p className={styles.clearfix}>
                <svg
                  className={styles.meta_tag}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z" />
                </svg>
                <span>{jobType}</span>
              </p>
              <p className={styles.clearfix}>
                <svg
                  className={styles.meta_tag}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zM384 352c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z" />
                </svg>
                <span>{jobMode}</span>
              </p>
              <p className={styles.clearfix}>
                <svg
                  className={styles.meta_tag}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M400 256C400 317.9 349.9 368 288 368C226.1 368 176 317.9 176 256C176 194.1 226.1 144 288 144C349.9 144 400 194.1 400 256zM272 224V288H264C255.2 288 248 295.2 248 304C248 312.8 255.2 320 264 320H312C320.8 320 328 312.8 328 304C328 295.2 320.8 288 312 288H304V208C304 199.2 296.8 192 288 192H272C263.2 192 256 199.2 256 208C256 216.8 263.2 224 272 224zM0 128C0 92.65 28.65 64 64 64H512C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128zM48 176V336C83.35 336 112 364.7 112 400H464C464 364.7 492.7 336 528 336V176C492.7 176 464 147.3 464 112H112C112 147.3 83.35 176 48 176z" />
                </svg>
                <span>{salary}</span>
              </p>
            </div>
            <p>{postTime}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
export default JobPost;
