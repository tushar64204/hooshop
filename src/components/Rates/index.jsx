import React from 'react';
import styles from './styles.module.css';

const Rates = () => {
    const toggleContent = () => {
        const hiddenContent = document.querySelector(`.${styles.paymentContent}`);
        hiddenContent.style.display = hiddenContent.style.display === 'none' ? 'block' : 'none';
    }

    const generateQRCode = () => {
        const upiId = '9992659320@ybl';
        const amount = '2500';
        const transactionNote = 'Payment for Offer';
        const qrData = `upi://pay?pa=${upiId}&pn=PaperPalace&am=${amount}&tn=${transactionNote}`;
        document.getElementById('upiLink').href = qrData;
    }

    return (
        <div className={styles.main_container}>
            <header className={styles.navbar}>
                <h1>Digital Menu Card Service Proposal</h1>
                <button className={styles.white_btn} href="/Main">home</button>
            </header>

            <div className={styles.container}>
                <header>
                    <img src="/digimenu.png" width="100%" alt="DigiMenu" />
                    <h1>Digital Menu Card Service Proposal</h1>
                </header>

                <section>
                    <h2>Introduction</h2>
                    <p>Dear Shopkeepers,</p>
                    <p>We are excited to introduce our digital menu card service, designed to enhance the customer experience at your establishment by providing a seamless and interactive way to browse your offerings, place orders, and make payments.</p>
                </section>

                <section>
                    <h2>Who Can Benefit?</h2>
                    <p>This proposal is for all types of businesses that need to take payments digitally with ease, including:</p>
                    <ul>
                        <li>Restaurant owners</li>
                        <li>Hotel Room</li>
                        <li>Simple shopkeepers</li>
                        <li>Library book rental services</li>
                        <li>Any other small businesses</li>
                    </ul>
                    <p>Each shop can create a DigiCardMenu and place its QR code in front of the shop so that customers can place orders outside the shop, helping to control the crowd inside small shops.</p>
                </section>

                <section>
                    <h2>Benefits</h2>
                    <ul>
                        <li><strong>Enhanced customer experience:</strong> Easy ordering and navigation.</li>
                        <li><strong>Increased average order value:</strong> Encourages higher spending through cart value limit.</li>
                        <li><strong>Streamlined operations:</strong> Automated invoicing and order notification.</li>
                        <li><strong>Improved communication:</strong> Direct order integration with WhatsApp.</li>
                        <li><strong>Easy access:</strong> Customers can easily view the menu and place orders.</li>
                    </ul>
                </section>

                <section>
                    <h2>Service Overview</h2>
                    <ul>
                        <li><strong>Digital Menu Card:</strong> An interactive and visually appealing digital menu card that showcases your products or services.</li>
                        <li><strong>Cart with 499 Value Limit:</strong> A cart system that allows customers to add items and place orders only when the cart value exceeds ₹499.</li>
                        <li><strong>Invoice Generation:</strong> Automatic invoice generation for orders above ₹499.</li>
                        <li><strong>WhatsApp Order Integration:</strong> The ability to send orders directly to your WhatsApp number for easy order management.</li>
                        <li><strong>Print Invoice:</strong> An option for customers to print their invoices for their records.</li>
                    </ul>
                </section>

                <section>
                    <h2>Pricing</h2>
                    <h2>Special Limited Time Offer</h2>
                    <p><strong>50% Discount:</strong> For a limited time, we are offering a 50% discount on all services. Don't miss this opportunity to enhance your business at half the cost!</p>
                    <p><strong>Free Consultation:</strong> We offer a free consultation to help you</p>
                    <p>The cost of creating a digital menu card with UPI payment options depends on several factors such as the complexity of the menu, the number of items, design requirements, and integration with existing systems. Here is a rough estimate:</p>
                    <ul>
                        <li><strong>Basic Menu Card (up to 50 items):</strong> <span className={styles.oldPrice}>₹5,000 - ₹10,000</span> ₹2,500 - ₹5,000</li>
                        <li><strong>Medium-Complexity Menu Card (50-100 items):</strong> <span className={styles.oldPrice}>₹10,000 - ₹20,000</span> ₹5,000 - ₹10,000</li>
                        <li><strong>Advanced Menu Card (100+ items, custom design, animations):</strong> <span className={styles.oldPrice}>₹20,000 - ₹50,000</span> ₹10,000 - ₹25,000</li>
                    </ul>
                    <p><strong>Additional Services:</strong></p>
                    <ul>
                        <li><strong>UPI Payment Gateway Integration:</strong> <span className={styles.oldPrice}>₹2,000 - ₹5,000</span> ₹1,000 - ₹2,500</li>
                        <li><strong>Mobile Optimization:</strong> <span className={styles.oldPrice}>₹1,000 - ₹3,000</span> ₹500 - ₹1,500</li>
                        <li><strong>Maintenance and Updates (optional):</strong> <span className={styles.oldPrice}>₹1,000 - ₹5,000 per month</span> ₹500 - ₹2,500 per month</li>
                    </ul>
                </section>

                <section className={styles.offerSection}>
                    <h2>New Service Launch: Limited Time Special Offers Await!</h2>
                    <p>Get All Benefits at just <span className={styles.highlight}>₹2,500</span> with one month free service. We will maintain your catalogue during the month at no cost.</p>
                    <p>What you get? You will receive the following services at ₹2,500:</p>
                    <ul>
                        <li>Digital UPI enabled menu card</li>
                        <li>Send us item details on WhatsApp and we will make your catalogue (up to 50 items)</li>
                        <li>Send us your logo, restaurant name, and contact details, and we will add them to your catalogue</li>
                        <li>Send us your WhatsApp number, and we will send you order details on WhatsApp</li>
                        <li>Send us your UPI ID, and we will add it to your catalogue</li>
                    </ul>
                    <p>(After one month service, a nominal charge for maintenance of ₹20/day is collected at the month end. These charges help cover hosting and other services costs.)</p>
                    <p> We will add, delete, or change up to 3 items daily for you.</p>
                    <button onClick={toggleContent}>Proceed to Payment</button>

                    <div className={styles.paymentContent}>
                        <h3>Select Payment Method</h3>
                        <label>
                            <input type="radio" name="paymentMethod" value="UPI" onChange={generateQRCode} /> UPI APP
                        </label>

                        <div id="upiDetails" style={{ display: 'none' }}>
                            <a id="upiLink" className={styles.upiLink} href="#" target="_blank">Pay via UPI app in Mobile</a>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Why Choose Our Service?</h2>
                    <ul>
                        <li><strong>User-Friendly:</strong> The web app is designed to be intuitive and easy for your customers to use.</li>
                        <li><strong>Customizable:</strong> We can tailor the design and features to match your business's brand and specific needs.</li>
                        <li><strong>Convenient:</strong> The integration with WhatsApp and the ability to print invoices streamline the order management process.</li>
                        <li><strong>Affordable:</strong> Competitive pricing with options for additional services based on your requirements.</li>
                    </ul>
                </section>

                <section>
                    <h2>Next Steps</h2>
                    <p>We would love to discuss this proposal further and understand your specific needs. Please feel free to contact us at msmemitratushar@gmail.com to schedule a meeting or to ask any questions.</p>
                    <p>Thank you for considering our digital menu card service. We look forward to the opportunity to work with you and contribute to the success of your business.</p>
                </section>

                <div className={styles.service}>
                    <div className={styles.serviceIcon}></div>
                    <p>Lets understand digitalmenucard benifits</p>
                    <p>Please note: This video was not created by us, but it demonstrates the use of a digital menu card.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2Zxcnx1Q_7U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <footer>
                    <p>&copy; 2023 MSME Mitra. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}

export default Rates;
