import styles from "./JobDescription.module.css";
import Header from "../../components/Header/Header";

function JobDescription() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>Job Title</h1>
          <p className={styles.job_desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non
            facilisis sem, eget scelerisque lectus. Etiam eget augue et quam
            convallis luctus eu quis enim. Duis lobortis massa quis consequat
            consequat. Sed accumsan elit blandit, elementum ex a, sollicitudin
            ex. Cras libero ex, viverra a libero a, gravida faucibus tellus.
            Aliquam ornare magna eget euismod semper. Nullam a ex et magna
            maximus dictum. Curabitur mattis, felis ac commodo sodales, erat
            orci eleifend metus, at convallis quam velit euismod orci.
          </p>

          <li>Duties </li>
          <ul>
            <li>Donec bibendum non nulla eu vehicula.</li>
            <li>Proin eu congue nisl, quis pellentesque nisl.</li>
            <li>Ut accumsan dignissim mi vitae gravida.</li>
            <li>Mauris faucibus a augue sed condimentum.</li>
          </ul>
          <li>Skills </li>
          <ul>
            <li>Cras sit amet malesuada neque.</li>
            <li>Integer ut sagittis mi, sit amet tincidunt elit.</li>
            <li>Sed ac molestie justo, vitae condimentum orci.</li>
            <li>
              Nulla vitae tellus tincidunt, tincidunt diam faucibus, vestibulum
              nulla.
            </li>
            <li>Donec bibendum ipsum nibh, ut imperdiet leo tristique a.</li>
            <li>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </li>
            <li>
              Duis neque nulla, lobortis at sem et, venenatis lobortis ligula.
            </li>
            <li>Proin nec elementum nulla, et iaculis est.</li>
            <li>Proin quis laoreet eros.</li>
          </ul>
        </div>
        <a className={styles.primaryBtn}>Apply Now</a>
      </div>
    </div>
  );
}
export default JobDescription;
