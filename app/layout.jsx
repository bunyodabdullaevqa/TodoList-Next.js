import './globals.css';
const layout = ({ children }) => {
	return (
		<html>
			<body>
				<div className='h-screen w-full '>{children}</div>
			</body>
		</html>
	);
};

export default layout;
