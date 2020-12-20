import React from "react";
import styles from "styles/pages/Home.module.scss";
import useTypewriter from "react-typewriter-hook";

import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import DepartmentCard from "components/DepartmentCard/DepartmentCard";

import departments from "data/departmentInfo";

const Home = (props) => {
	const typing = useTypewriter("Ideate. Innovate. Inspire.");
	return (
		<DefaultLayout>
			<main className={styles.main}>
				<div className={styles.landing}>
					<div className={styles.details}>
						<img
							src="/images/SocietyLogo.png"
							alt="society logo"
							className={styles.logo}
						/>
						<h1>NUS FinTech Society</h1>
						<p>{typing}</p>
					</div>
					<img
						src="/images/exco.png"
						alt="exco"
						className={styles.exco}
					/>
				</div>
				<FadeInSection>
					<div className={styles.aboutUs}>
						<h1>About Us</h1>
						<div className={styles.descriptionContainer}>
							<p>
								NUS FinTech Society was founded under NUS School
								of Computing by a group of like-minded
								individuals with a passion in pursuing research
								and driving applications in the realms of
								Blockchain and Machine Learning.
							</p>
						</div>
						<div className={styles.descriptionContainer}>
							<p id="ourTeam">
								We currently have over 80 members, each with a
								strong grasp of their individual research areas.
							</p>
						</div>
					</div>
				</FadeInSection>
				<FadeInSection>
					<div className={styles.ourTeam}>
						<h1>Our Team</h1>
						<div className={styles.cardsContainer}>
							{departments.map((department) => (
								<div className={styles.cardContainer}>
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
					<div>
						<h1 id="contactUs">Contact Us</h1>
					</div>
				</FadeInSection>

				<FadeInSection>
					<div className={styles.sponsors}>
						<h1 id="Sponsors">Sponsors</h1>
						<div class={styles.row}>
							<div class={styles.column}>
								<a href="https://www.blockventure.com/">
									<img
										className={styles.images}
										alt="BlockVenture"
										src="/sponsors/BlockVenture.png"
									></img>
								</a>
							</div>
							<div class={styles.column}>
								<a href="https://www.bnpparibas.com.sg/en/">
									<img
										className={styles.images}
										alt="bnp-paribas-logo"
										src="/sponsors/BnpParibasLogo.png"
									></img>
								</a>
							</div>
							<div class={styles.column}>
								<a href="https://www.db.com/singapore/">
									<img
										className={styles.images}
										alt="DeutscheBank"
										src="/sponsors/DeutschBank.png"
									></img>
								</a>
							</div>
							<div class={styles.column}>
								<a href="https://www.dytechlab.com/">
									<img
										className={styles.images}
										alt="DymnamicTechLab"
										src="/sponsors/DymnamicTechLab.png"
									></img>
								</a>
							</div>
							<div class={styles.column}>
								<a href="http://www.favour-capital.com/en/">
									<img
										className={styles.images}
										alt="FavourCapital"
										src="/sponsors/FavourCapital.png"
									></img>
								</a>
							</div>

							<div class={styles.column}>
								<a href="https://ripple.com/">
									<img
										className={styles.images}
										alt="RippleLogo"
										src="/sponsors/RippleLogo.png"
									></img>
								</a>
							</div>

							<div class={styles.column}>
								<a href="https://www.roostoo.com/">
									<img
										className={styles.images}
										alt="Roostoo"
										src="/sponsors/Roostoo.png"
									></img>
								</a>
							</div>
							<div class={styles.column}>
								<a href="https://www.sherjan.com/">
									<img
										className={styles.images}
										alt="Sherjan"
										src="/sponsors/Sherjan.png"
									></img>
								</a>
							</div>
							<div class={styles.column}>
								<a href="https://www.studentcoin.org/">
									<img
										className={styles.images}
										alt="StudentCoin"
										src="/sponsors/StudentCoin.png"
									></img>
								</a>
							</div>
							<div class={styles.column}>
								<a href="https://wirexapp.com/en">
									<img
										className={styles.images}
										alt="Wirex"
										src="/sponsors/Wirex.png"
									></img>
								</a>
							</div>
						</div>
					</div>
				</FadeInSection>
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
