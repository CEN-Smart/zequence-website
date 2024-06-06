import MainHeading from '../home-page/main-heading';

const OurValue = () => {
	return (
		<section className='bg-custom'>
			<MainHeading
				isCentered
				className={`
            max-w-5xl 
            w-full 
            mx-auto 
            lg:py-10
            px-3
            `}
				heading='Our core values'
			/>
		</section>
	);
};

export default OurValue;
