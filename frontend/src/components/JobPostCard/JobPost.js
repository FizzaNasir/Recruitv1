import styles from "./JobPost.module.css";
import Briefcase from "./briefcase-solid.svg";
import LocationDot from "./location-dot-solid.svg";
import MoneyBill from "./money-bill-1-regular.svg";

function JobPost() {
  return (
    <div className={styles.jobs_container}>
      <div className={styles.jobs_wrapper}>
        <div className={styles.jobs_client}>
          <img src="" alt="not found" />
        </div>
        <div className={styles.jobs_content}>
          <h4 className={styles.job_title}> Marketing Coordinator</h4>
          <div className={styles.sub_category}>Training</div>
          <div>
            <div>
              <p className={styles.clearfix}>
                <img
                  className={styles.meta_tag}
                  src={Briefcase}
                  alt="briefcase.svg"
                />
                <span> Paradigm</span>
              </p>

              <p className={styles.clearfix}>
                <img
                  className={styles.meta_tag}
                  src={LocationDot}
                  alt="location.svg"
                />
                <span>Lahore </span>
              </p>

              <p className={styles.clearfix}>
                <img
                  className={styles.meta_tag}
                  src={MoneyBill}
                  alt="moneybill.svg"
                />
                <span className={styles.mx_width}>
                  $40,000 - $10000,000 / year
                </span>
              </p>
            </div>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            veritatis iste harum tenetur accusantium animi nihil aliquid odit
            voluptatum veniam maxime labore...
          </div>
        </div>
      </div>
    </div>
  );
}
export default JobPost;
