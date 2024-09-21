import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import hooshopLogo from './logo.JPG';

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const email = queryParams.get("email");
        const password = queryParams.get("password");

        if (email && password) {
            setData({ email, password });
            if (validateEmail(email) && password) {
                handleSubmit(); // Auto-submit form if valid
            } else {
                setError("Invalid email or password.");
            }
        }
    }, [location.search]);

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault(); // Allow auto-submit without triggering default action
        try {
            const url = "https://msmetrackserver-6.onrender.com/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("employeeId", data.email); // Store employeeId
            localStorage.setItem("useremail", data.email); // Store useremail
            window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Login to Your Account</h1>
                        <input
                            type="email"
                            placeholder="Employee ID"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>
                            Sign In
                        </button>
                    </form>
                </div>
                <div className={styles.right}>
                    <img src={hooshopLogo} alt="Hooshop Logo" className={styles.company_logo} />
                    <h2 className={styles.slogan}>📈 Digital Bnega Bharat: Save Trees, Say Goodbye to Paper, Hello to Hooshop🌳</h2>
                </div>
            </div>
        </div>
    );
};

export default Login;
