import { Link } from "gatsby"
import PropTypes, { nominalTypeHack } from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
	<header
		style={{
			background: `rebeccapurple`,
			marginBottom: `1.45rem`,
		}}
	>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.45rem 1.0875rem`,
				display: "flex"
			}}
		>
			<h1 style={{ margin: 0, flex: 1 }}>
				<Link
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`,
					}}
				>
					{siteTitle}
				</Link>
			</h1>
			<a style={{
				border: "1px solid #fff", fontSize: "15px", borderRadius: "4px",
				color: "#fff", padding: "3px 10px", textDecoration: "none"
			}} href="https://github.com/nirajrajgor/todo" target="_blank">Github</a>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
