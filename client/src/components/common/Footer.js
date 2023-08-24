const Footer = () => {
	 const link = "https://github.com/srwr-tech";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> Mohammad Sarwer {" "}
			<a href={link} target={target}>
				GitHub
			</a>
		</div>
	);
};

export default Footer;
