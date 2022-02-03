const getChars = text => text.split('');
const word1 = getChars('React');
const word2 = getChars('Playground');

const HeroBanner = () => {
	return (
		<section className="hero-banner-area flex flex-center-all">
			<div className="container">
				<h1 className="title">
					<span className="subtitle">My</span>

					<span className="word">
						{word1.map((char, i) => <span key={char + i} className="char">{char}</span>)}
					</span>{' '}

					<span className="word">
						{word2.map((char, i) => <span key={char + i} className="char">{char}</span>)}
					</span>
				</h1>

				<p>Practice, Learn and Fun</p>
			</div>
		</section>
	);
};

export default HeroBanner;
