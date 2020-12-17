import React, { useEffect, useState } from 'react';
import Card from './Card';
import unicef12 from '../img/UNICEF12.jpg';
import unicef13 from '../img/UNICEF13.jpg';
import unicef24 from '../img/UNICEF24.jpg';
import unicef29 from '../img/UNICEF29.jpg';
import sign from '../img/Sign.png';

const History = () => {

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return function cleanup() {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const elementInViewport = (el) => {
		var top = el.offsetTop;
		var left = el.offsetLeft;
		var width = el.offsetWidth;
		var height = el.offsetHeight;
	  
		while(el.offsetParent) {
		  el = el.offsetParent;
		  top += el.offsetTop;
		  left += el.offsetLeft;
		}
	  
		return (
		  top >= window.pageYOffset &&
		  left >= window.pageXOffset &&
		  (top + height) <= (window.pageYOffset + window.innerHeight) &&
		  (left + width) <= (window.pageXOffset + window.innerWidth)
		);
	  }

	const handleScroll = (event) => {
		const textItems = document.querySelectorAll('.timeline-item.text-item');

		textItems.forEach(
			item => {
				if (elementInViewport(item)) {
					item.classList.add('animated');
				}
			}
		);
	};

    return (
        
			<div className="history_container">
				
				<div className="container">
				    <h2>Kan børn overhovedet gøre en forskel?</h2>
	        	    <p>Hvad ville du gøre hvis der var nogen der sagde at piger ikke måtte gå i skole men drenge godt måtte? Har du nogensinde hørt om Martin Luther King? Hvad er en aktivist rent faktisk? Få svar i videoen nedenfor.</p>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/hyZnmpFjdE8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<h2>Verden har altid været uretfærdig</h2>
					<p>Men der har også altid har været mennesker der har kæmpet for at gøre verden en lille smule bedre. Her har vi illustreret aktivismens historie på en tidslinje for at give et bedre overblik.</p>
				</div>

				<div className="timeline container">
					<div className="timeline-grid">
						<div className="timeline-item text-item">
							<div className="timeline-item-content">
								<img className="item-img" src={sign} />
								<div className="item-text">
									<div className="item-title">Demokratiets fødsel</div>
									<h3>508 BC</h3>
									<p>Første eksempel tager os tilbage til byen Athen i det gamle Grækenland. Her stillede folket sig op mod de rige magthaverne, der gennem flere hundrede år havde undertrykt dem.</p>
								</div>
							</div>
						</div>
						<div className="timeline-item title-item"></div>
						<div className="timeline-item gap"></div>
						<div className="timeline-item gap"></div>
						<div className="timeline-item title-item"></div>
						<div className="timeline-item text-item">
							<div className="timeline-item-content">
								<img className="item-img" src={sign} />
								<div className="item-text">
								<div className="item-title">Martin Luther</div>
									<h3>1517</h3>
									<p>Martin Luther var en sand aktivist, og hans handlinger må siges at have haft en enorm indflydelse. Luther var munken der startede Reformationen, og hans handlinger viser gode eksempler på aktivisme.</p>
								</div>
							</div>
						</div>
						<div className="timeline-item gap"></div>
						<div className="timeline-item gap"></div>
						<div className="timeline-item text-item">
							<div className="timeline-item-content">
								<img className="item-img" src={sign} />
								<div className="item-text">
								<div className="item-title">Olympe De Gouges</div>
									<h3>1789</h3>
									<p>En sej kvindelig aktivist ved navn Olympe De Gauges skrev et par år efter en lignende erklæring, der krævede, at kvinder også skulle have disse rettigheder. Hun syntes, at det var uretfærdigt at kvinder ikke skulle have de samme rettigheder som de andre. 
</p>
								</div>
							</div>
						</div>
						<div className="timeline-item title-item"></div>
						<div className="timeline-item gap"></div>
						<div className="timeline-item gap"></div>
						<div className="timeline-item title-item"></div>
						<div className="timeline-item text-item">
							<div className="timeline-item-content">
								<img className="item-img" src={sign} />
								<div className="item-text">
								<div className="item-title">MALALA YOUSAFZAI</div>
									<h3>1997</h3>
									<p>I Pakistan har piger dårligere muligheder for uddannelse end drenge, men Malalas far var skolelærer, og han insisterede på Malala skulle have de samme muligheder som en dreng. </p>
								</div>
							</div>
						</div>
						<div className="timeline-item gap"></div>
						<div className="timeline-item gap"></div>
						<div className="timeline-item text-item">
							<div className="timeline-item-content">
								<img className="item-img" src={sign} />
								<div className="item-text">
								<div className="item-title">GRETA THUNBERG</div>
									<h3>2003</h3>
									<p>Det er de færreste, der ikke har hørt om den svenske skolepige og klimaaktivist Greta Thunberg. I august 2018 udførte hun som 15-årig en aktivistisk handling ved at sætte sig foran den svenske Riksdag med et papskilt med teksten “Skölstrejk för klimatet”.</p>
								</div>
								
							</div>
						</div>
						<div className="timeline-item title-item"></div>
						<div className="timeline-item gap"></div>
						<div className="timeline-item gap"></div>
					</div>
				</div>
				
				<div className="history">
					<div className="container">
						<section className="rettigheder">
							<h2>Børnenes rettigheder</h2>
							<p>Du ved sikkert godt at du har ret til at gå i skole og have et tag over hovedet. Men, vidste du at det også er en rettighed at have adgang til information? eller at du skal kunne oprette og deltage i klubber? Der er mange forskellige børnerettigheder, der er med til at forbedre verden for børn over hele kloden. I år har vi fokus på de følgende 4 rettigheder, som du kan læse om nedenfor.</p>

							<div className="cards">
								
								<div class="card-item">
									<Card image={unicef12} text="Artikel 12_RESPEKT FOR BØRNS MENING: Børn har ret til frit at sige deres mening om emner, der er vigtige for dem. Voksne skal lytte og tage børn alvorligt." />
								</div>
								<div class="card-item">
									<Card image={unicef13} text="Artikel 13_DELING AF VIDEN: Børn har ret til at dele deres viden, tanker og følelser med andre ved at tale, tegne, skrive eller være kreativ på andre måder, med mindre det skader andre mennesker." />
								</div>
								<div class="card-item">
									<Card image={unicef24} text="Artikel 24_SUNDHED,VAND, MAD OG MILJØ: Børn har ret til den bedst mulige pleje og behandling, rent drikkevand, sund mad og et rent og sikkert miljø at leve i. Alle voksne og børn skal have information om, hvordan de kan holde sig sikre og sunde." />
								</div>
								<div class="card-item">
									<Card image={unicef29} text="Artikel 29_FORMÅL MED UDDANNELSE: Uddannelse skal hjælpe børn med helt at udvikle deres personligheder, talenter og evner. Uddannelsen skal lære dem at forstå deres egne rettigheder og at respektere andre menneskers rettigheder, kulturer og forskelligheder. Uddannelsen skal hjælpe børn med at leve fredeligt og beskytte miljøet." />
								</div>
							
					
							</div>
						</section>
					</div>
				</div>

				<div className="container">
				    <h2>Spil</h2>
	        	    <p>Spil et spil og lære om børnenes rettigheder.</p>
					<iframe
					src="http://zoekenndal.dk/4sem/nebula">
					</iframe>
				</div>
				<div className="container">
						<section className="rettigheder">
							<h2>Til læreren</h2>
							<p>På denne side præsenterer vi en række historiske eksempler, som kan bruges i det første modul til at illustrere aktivismens betydning for nutidens samfund. Disse kan være udgangspunktet for en fremlæggelse, men du er også selv velkommen til at skræddersy dit eget forløb. Vi starter tilbage i antikken, og fortsætter helt frem til det 20-århundrede.</p>
			</section>    </div>  </div>	
	);
};

export default History;