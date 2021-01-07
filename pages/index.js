import React, { useState } from "react";
import styles from "styles/pages/Home.module.scss";
import useTypewriter from "react-typewriter-hook";
import { useForm } from "react-hook-form";
import LocationIcon from "@material-ui/icons/PlaceOutlined";
import MailIcon from "@material-ui/icons/MailOutline";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import DepartmentCard from "components/DepartmentCard/DepartmentCard";

import departments from "data/departmentInfo";

import request from "util/request";

const Home = (props) => {
	const typing = useTypewriter("— Ideate. Innovate. Inspire.");
	const { register, handleSubmit, errors } = useForm();
	const [formState, setFormState] = useState({});

	const onSubmit = async (data) => {
		try {
			const response = await request.post("contact/", data);
			setFormState({ name: "", email: "", message: "" });
		} catch (err) {
			console.log(err);
		}
	};

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	return (
		<DefaultLayout>
			<main className={styles.main}>
				<div className={styles.landing}>
					<div className={styles.details}>
						<div className={styles.titleContainer}>
							<p className={styles.title}>NUS Fintech Society</p>
							<p className={styles.subtitle}>{typing}</p>
						</div>
						<div className={styles.aboutUs}>
							<div className={styles.descriptionContainer}>
								<p className={styles.about}>About Us</p>
							</div>
							<div className={styles.descriptionContainer}>
								<p className={styles.text}>
									NUS FinTech Society was founded under NUS
									School of Computing by a group of
									like-minded individuals with a passion in
									pursuing research and driving applications
									in the realms of Blockchain and Machine
									Learning. We currently have over 80 members,
									each with a strong grasp of their individual
									research areas.
								</p>
							</div>
						</div>
					</div>
				</div>
				<FadeInSection>
					<div id="ourTeam" className={styles.ourTeam}>
						<div className={styles.textContainer}>
							<h1>Our Team</h1>
							<div className={styles.underline}></div>
							<p>
								NUS FinTech Society comprises of four different
								teams: Operations, Machine Learning, DevOps, as
								well as Blockchain
							</p>
						</div>
						<div className={styles.cardsContainer}>
							{departments.map((department) => (
								<div
									className={styles.cardContainer}
									key={department.title}
								>
									<DepartmentCard
										id={department.title}
										title={department.title}
										description={department.description}
										icon={department.icon}
										route={department.route}
									/>
								</div>
							))}
						</div>
					</div>
				</FadeInSection>

				<FadeInSection>
					<div>
						<h1>Upcoming Events</h1>
					</div>
				</FadeInSection>

				<FadeInSection>
					<div className={styles.sponsors}>
						<h1 id="Sponsors">Sponsors</h1>
						<div className={styles.row}>
							<div className={styles.column}>
								<a href="https://www.blockventure.com/">
									<img
										className={styles.images}
										alt="BlockVenture"
										src="/sponsors/BlockVenture.png"
									></img>
								</a>
							</div>
							<div className={styles.column}>
								<a href="https://www.bnpparibas.com.sg/en/">
									<img
										className={styles.images}
										alt="bnp-paribas-logo"
										src="/sponsors/BnpParibasLogo.png"
									></img>
								</a>
							</div>
							<div className={styles.column}>
								<a href="https://www.db.com/singapore/">
									<img
										className={styles.images}
										alt="DeutscheBank"
										src="/sponsors/DeutschBank.png"
									></img>
								</a>
							</div>
							<div className={styles.column}>
								<a href="https://www.dytechlab.com/">
									<img
										className={styles.images}
										alt="DymnamicTechLab"
										src="/sponsors/DymnamicTechLab.png"
									></img>
								</a>
							</div>
							<div className={styles.column}>
								<a href="http://www.favour-capital.com/en/">
									<img
										className={styles.images}
										alt="FavourCapital"
										src="/sponsors/FavourCapital.png"
									></img>
								</a>
							</div>
						</div>

						<div className={styles.row}>
							<div className={styles.column}>
								<a href="https://wirexapp.com/en">
									<img
										className={styles.images}
										alt="Wirex"
										src="/sponsors/Wirex.png"
									></img>
								</a>
							</div>
							<div className={styles.column}>
								<a href="https://www.roostoo.com/">
									<img
										className={styles.images}
										alt="Roostoo"
										src="/sponsors/Roostoo.png"
									></img>
								</a>
							</div>
							<div className={styles.column}>
								<a href="https://ripple.com/">
									<img
										className={styles.images}
										alt="RippleLogo"
										src="/sponsors/RippleLogo.png"
									></img>
								</a>
							</div>
							<div className={styles.column}>
								<a href="https://www.sherjan.com/">
									<img
										className={styles.images}
										alt="Sherjan"
										src="/sponsors/Sherjan.png"
									></img>
								</a>
							</div>
							<div className={styles.column}>
								<a href="https://www.studentcoin.org/">
									<img
										className={styles.images}
										alt="StudentCoin"
										src="/sponsors/StudentCoin.png"
									></img>
								</a>
							</div>
						</div>
					</div>
				</FadeInSection>

				<div className={styles.contactUs} id="contact">
					<FadeInSection>
						<h1>Contact Us</h1>
						<div>
							<div className={styles.iconTextContainer}>
								<LocationIcon className={styles.icon} />
								<p>
									NUS School of Computing, COM1, 13 Computing
									Drive, Singapore 117417
								</p>
							</div>
							<div className={styles.iconTextContainer}>
								<MailIcon className={styles.icon} />
								<p>nusfintech@gmail.com</p>
							</div>
							<form
								onSubmit={handleSubmit(onSubmit)}
								autoComplete="off"
							>
								<div className={styles.inputContainer}>
									<input
										className={styles.input}
										id="name"
										name="name"
										placeholder="Name"
										ref={register({ required: true })}
										onChange={handleChange}
										value={formState.name}
									/>
									{errors.name && <p>Required</p>}
								</div>
								<div className={styles.inputContainer}>
									<input
										className={styles.input}
										id="email"
										name="email"
										placeholder="Email"
										onChange={handleChange}
										value={formState.email}
										ref={register({
											required: "Required",
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message:
													"Invalid email address",
											},
										})}
									/>
									{errors.email && (
										<p>{errors.email.message}</p>
									)}
								</div>
								<div className={styles.inputContainer}>
									<textarea
										className={styles.inputArea}
										placeholder="Message"
										id="message"
										name="message"
										onChange={handleChange}
										value={formState.message}
										ref={register({ required: true })}
									></textarea>
									{errors.message && <p>Required</p>}
								</div>
								<input
									type="submit"
									className={styles.submitButton}
									value="Send"
								/>
							</form>
						</div>
					</FadeInSection>
				</div>
			</main>
		</DefaultLayout>
	);
};

//component to allow fade in to happen just add <FadeInSection> to the parts you wanna fade in
function FadeInSection(props) {
	const [isVisible, setVisible] = React.useState(true);
	const domRef = React.useRef();
	React.useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setVisible(entry.isIntersecting));
		});
		observer.observe(domRef.current);
		return () => observer.unobserve(domRef.current);
	}, []);
	return (
		<div
			className={isVisible ? styles.fadeVisible : styles.fade}
			ref={domRef}
		>
			{props.children}
		</div>
	);
}

export default Home;
