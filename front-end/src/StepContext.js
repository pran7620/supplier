

import axios from "axios";
import { useFormik } from "formik";
import React, { createContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from "./App";
import { DemoSchema } from "./Schemas/demo";

const MultiStepContext = createContext();

function StepContext() {
    const [currentStep, setStep] = useState(1);
    const [finalData, setFinalData] = useState([]);
    const navigate = useNavigate();

    const initialValues = {
        companyName: "",
        // address: "",
        // company_city: "",
        // telephone_number: "",
        // email_company: "",
        // website_address: "",
        // representative_name: "",
        // designation_name_representative: "",
        // email_representative: "",
        // mobile_number: "",
        established_year: null,
        // // details_of_service: "",
        // year1: null,
        // inr1: "",
        // year2: null,
        // inr2: "",
        // year3: null,
        // inr3: "",
        // geographicService: "",
        // businessType: "",
        // legalStructure: "",
        // customLegalStructure: "",
        // category: "",
        // subcategory: "",
        // bank_name: "",
        // bank_address: "",
        // benificiary_name: "",
        // internation_baccount_number: "",
        // swift_bank_bic_code: "",
        // account_currency: "",
        // bank_account_number: "",
        // gst_no: "",
        // pan_no: "",
        // tan_no: "",
        // uin_no: "",
        // urn_no: "",
        // is_msme: false,
        // is_shop_act: false,
        // balance_sheet_certificate: null,
        // income_certificate: null,
        // consent: false,
    };

    const styles = {
        input: {
            "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
                display: "none",
            },
            "&[type=number]": {
                MozAppearance: "textfield",
            },
        },
    };

    const notify = () => {
        toast.success('Form Submitted Successfully ', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    };

    const submitForm = async (data) => {
 

        const formData = new FormData();

        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        try {
            const response = await axios.post("/api/v1/submitData", formData);
            setFinalData(response.data);
            navigate("/ThankyouPage");
        } catch (error) {
            console.error("Error submitting form:", error.message);
            notify();
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema: DemoSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: function (values, { resetForm }) {
    
            setStep(1);
            submitForm(values);
            resetForm();
        },
    });

    const contextValue = useMemo(() => ({
        values: formik.values,
        setErrors: formik.setErrors,
        errors: formik.errors,
        touched: formik.touched,
        setTouched: formik.setTouched,
        handleChange: formik.handleChange,
        handleBlur: formik.handleBlur,
        handleSubmit: formik.handleSubmit,
        setFieldValue: formik.setFieldValue,
        resetForm: formik.resetForm,
        styles,
        submitForm,
        currentStep,
        setStep,
    }), [formik, styles, submitForm, currentStep]);


    

    return (
        <MultiStepContext.Provider value={contextValue}>
            <App />
        </MultiStepContext.Provider>
    );
}

export { MultiStepContext, StepContext };



