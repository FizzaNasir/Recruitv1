import React, { useState } from "react";
import Input from "../../components/InputField/InputField";
import styles from "./ContactUs.module.css";
import Header from "../../components/Header/Header";

function ContactUs() {
  const [inputValue, setInputValue] = useState({});
  // handle submit event (prevent from default)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", inputValue);
  };
  // handle change
  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  return (
    // block 1
    <div>
      <Header />
      <div className={styles.main_container}>
        <div className={styles.contact_container}>
          <h3>Quick Contact</h3>
          <p>
            If you have any questions simply use the following contact details.
          </p>
          <ul>
            <li>
              <a href="#">
                <i></i>
              </a>

              <h4>Address:</h4>
              <p>123 West Street, Melbourne Victoria 3000 Australia</p>
            </li>
            <li>
              <a href="#">
                <i></i>
              </a>
              <h4>Email:</h4>
              <p>info@example.com</p>
            </li>
            <li>
              <a href="#">
                <i></i>
              </a>
              <h4>PHONE</h4>
              <p>+61 3 8376 6284</p>
            </li>
          </ul>
        </div>
        {/* block 2 */}
        <form
          className={`${styles.contact_container} ${styles.contact_form}`}
          onSubmit={handleSubmit}
        >
          <div>
            <h2>Contact Us</h2>
          </div>
          <Input
            className={styles.inputFeild}
            Name="Name"
            Placeholder="Enter name"
            Value={inputValue.name}
            onChange={handleChange}
          />
          <Input
            className={styles.inputFeild}
            Name="Email"
            Placeholder="Enter email"
            Value={inputValue.email}
            onChange={handleChange}
            type="email"
          />
          <Input
            className={styles.inputFeild}
            Name="Message"
            Placeholder="Enter your message here"
            Value={inputValue.password}
            onChange={handleChange}
            type="textarea"
          />
          <input className={styles.primaryBtn} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
