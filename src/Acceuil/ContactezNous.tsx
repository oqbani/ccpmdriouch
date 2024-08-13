import React, { useEffect, useRef, useState } from "react";
import Logo from "/logodriouch.png";
import { Link, useLocation } from "react-router-dom";
// AOS
import Aos from "aos";
import "aos/dist/aos.css";
// Formik & Yup
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { apiContact } from "../Helpers/Api";

const ContactezNous: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const elementId = "contacteznous";
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const notify = () =>
    toast.success("Merci ! Votre message a bien été envoyé.");
  // i18n
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo(0, 0);
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);

  const formRef = useRef<HTMLFormElement>(null);

  const validationSchema = Yup.object().shape({
    from_name: Yup.string().required("nom est requis"),
    from_email: Yup.string()
      .email("Email invalide")
      .required("L'email est requis"),
    message: Yup.string().required("Le message est requis"),
  });

  const initialValues = {
    from_name: "",
    from_email: "",
    message: "",
  }

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      notify();

      try {
        const response = await axios.post(apiContact, values, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status !== 200) {
          throw new Error("Failed to send email");
        }

        console.log("Email sent successfully!");
        formik.resetForm();
      } catch (error) {
        console.error("Error sending email:", error);
      }
    },
  });

  return (
    <div
      className="my-3"
      id="contacteznous"
      style={{ marginLeft: "5%", width: "90%" }}
      dir={direction}
    >
      <div
        className="top-services d-flex align-items-center my-2 gap-3"
        data-aos="fade-right"
      >
        <div className="avant-ligne"></div>
        <h1 className="text-decoration-underline">{t("contact.title")}</h1>
        <div className="apres-ligne"></div>
      </div>
      <div className="top-contact m-3" data-aos="fade-right">
        <h5 className=" text-center">{t("contact.head")}</h5>
      </div>
      <div
        className="contact-content my-3 d-flex align-items-center justify-content-center gap-5"
        data-aos="fade-left"
      >
        <h4 className="text-center">{t("contact.soustitle")}</h4>
        <div className="contact-top-img">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div
        className="contact-form container w-100 d-flex justify-content-center align-items-center gap-4"
        data-aos="fade-right"
      >
        <div className="contact-bg">
          <div className="contact-bg-img"></div>
          <div className="contact-bg-content p-0">
            <ul className="d-flex justify-content-center gap-2 flex-column w-100 h-100 p-0">
              <li>
                <h5>
                  <Link to="/contact">{t("contact.num")}</Link>
                </h5>
                <a href="tel: +212536899768">
                  <h4
                    className=" fw-bold"
                    style={{ letterSpacing: "2px", textDecoration: "none" }}
                  >
                    002120536367666
                  </h4>
                </a>

                <a href="tel: +2120536367666">
                <img src="/driouchnum.png" style={{ maxHeight: "8rem" }} alt="" />
                </a>
              </li>
              <li className="w-100">
                <h5 className="w-100 text-center">
                  <Link to="">{t("contact.whatsapp")}</Link>
                </h5>
                <div
                  className="bg-white d-flex gap-2 justify-content-between align-items-center"
                  style={{
                    maxWidth: "22rem",
                    height: "2.3rem",
                    border: ".3rem solid green",
                    borderRadius: "5rem",
                  }}
                >
                  <h4
                    className="fw-bolder d-flex gap-2 mt-2 justify-content-center align-items-center px-2"
                    style={{
                      width: "11rem",
                      fontSize: "1rem",
                      background: "green",
                      border: ".2rem solid green",
                      borderRadius: "5rem",
                    }}
                  >
                    <img
                      src="/old-phone-32.png"
                      className=""
                      style={{ width: "1.5rem" }}
                      alt=""
                    />
                    <span>{t("num-vert.title")}</span>
                  </h4>
                  <a href="tel: +212800002164">
                    <h4
                      className="fw-bolder pt-1 px-2 text-center"
                      style={{
                        color: "green",
                        textAlign: "justify",
                        letterSpacing: "2px",
                      }}
                    >
                      0801083132{" "}
                    </h4>
                  </a>
                </div>
                <p style={{ fontSize: ".7rem" }} className=" fw-bolder">
                  {t("num-vert.soustitle")}
                </p>
                <a href="tel: +2120801083132">
                  <img
                    src="/driouchnumvert.png"
                    style={{ maxHeight: "8rem" }}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-form-content" data-aos="fade-right">
          <h3
            className="mb-3 fw-semibold text-decoration-underline"
            style={{ fontSize: "14pt" }}
          >
            {t("contact.form-text")}
          </h3>

          <form
            ref={formRef}
            onSubmit={formik.handleSubmit}
            className="d-flex gap-3 flex-column"
            data-aos="fade-left"
          >
            <input
              type="text"
              className="px-4 py-3 border-0 shadow-none"
              placeholder={`${t("contact.input-nom")}`}
              name="from_name"
              value={formik.values.from_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.from_name && formik.errors.from_name ? (
              <div className="error">{formik.errors.from_name} *</div>
            ) : null}
            <input
              type="email"
              className="px-4 py-3 border-0 shadow-none"
              placeholder={`${t("contact.input-email")}`}
              name="from_email"
              value={formik.values.from_email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.from_email && formik.errors.from_email ? (
              <div className="error">{formik.errors.from_email} *</div>
            ) : null}
            <textarea
              className="px-4 py-3 border-0 shadow-none"
              style={{ height: "120px" }}
              placeholder={`${t("contact.textarea-message")}`}
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="error">{formik.errors.message} *</div>
            ) : null}
            <button
              type="submit"
              className="btn-form-contact"
            >
              {t("contact.form-btn")}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" />
    </div>
  );
};

export default ContactezNous;
