import React, { Component } from 'react';
import { Card, Divider, Segment, Header } from 'semantic-ui-react';
import Footer from '../Footer';

let consult = [
	{
		name: 'In Person Consultation',
		price: 'Varies',
		desc: `$35 Fee required to cover the artists time and does not go toward the total cost of the procedure.`
	},
	{
		name: 'Plasma Consultation',
		price: 'Free For a limited time!',
		desc: `Learn about whether or not plasma fibroblast skin tightening is a good match for you!
		30 minutes Free`
	}
];

let browServices = [
	{
		name: '3D Hairstroke Microblading',
		price: '$350',
		desc: `Ultra soft healed results. Fill in the gaps in your natural brows with 3D-looking hair strokes that look like real eyebrows, not makeup. Follow up sessions are not included, please book separately. ($100 non-refundable booking fee required)`
	},
	{
		name: 'Blade & Shade Brows',
		price: '$350',
		desc: `A combination of microblading and ombre shading that produces a natural, but slightly more filled in, look. Follow up session not included, must book separately. ($100 non-refundable booking fee required)`
	},
	{
		name: 'Microbladed Lashliner',
		price: '$200',
		desc: `A soft and natural looking semi-permanent lashline enhancement. Top line only. Very natural and painless microbladed eyeliner. Meant to enhance the lashline to make it appear fuller and darker. NOT a "makeup" look when healed. ($100 non-refundable booking fee required. Follow up appt not included, please book separately.)`
	},
	{
		name: 'Permanent Eyeliner',
		price: '$250',
		desc: `A sultry & smoked-out eyeliner placed close to the lashline. Top and bottom liner. This service is performed with a tattoo machine and is permanent. Permanent eyeliner on top and bottom lid for extra definition. Smoky and natural, no wing. ($100 non-refundable booking fee required. Follow up not included, please book separately.)`
	},
	{
		name: 'Brow Removal',
		price: 'Starting $150',
		desc: `One session of brow removal. Multiple sessions may be needed. Maddie uses the Rejuvi product/technique.`
	}
];

let touchups = [
	{
		name: '2 to 6 Month Touch Up',
		price: '$150',
		desc: `EXISTING CLIENTELE ONLY. For previous Moth Maiden Clients only! If you've had work done elsewhere, call us first. (Pricing is $150 but listed as $100 so a non-refundable deposit of that amount can be made at the time of booking.)`
	},
	{
		name: '6 to 9 Month Touch Up',
		price: '$200',
		desc: `EXISTING CLIENTELE ONLY. For previous Moth Maiden Clients only! If you've had work done elsewhere, call us first. (Pricing is $200 but listed as $100 so a non-refundable deposit of that amount can be made at the time of booking.)`
	},
	{
		name: '9 to 12 Month Touch Up',
		price: '$250',
		desc: `EXISTING CLIENTELE ONLY. For previous Moth Maiden Clients only! If you've had work done elsewhere, call us first. (Pricing is $250 but listed as $100 so a non-refundable deposit of that amount can be made at the time of booking.)`
	},
	{
		name: '12 to 18 Month Touch Up',
		price: '$300',
		desc: `EXISTING CLIENTELE ONLY. For previous Moth Maiden Clients only! If you've had work done elsewhere, call us first. (Pricing is $300 but listed as $100 so a non-refundable deposit of that amount can be made at the time of booking.)`
	}
];

let eyeServices = [
	{
		name: 'Upper Eyelid Tightening',
		price: '$800',
		desc: `Includes one sessiom of plasma skin tightening. Full pricing $800 with a $100 retainer required upon booking.Includes one session of plasma skin tightening. Plasma Consultation must be had in person with Maddie prior to booking a procedure.`
	},
	{
		name: 'Lower Eyelid Tightening',
		price: '$600',
		desc: `Includes one session of plasma skin tightening. Full pricing $600 with a $100 retainer required upon booking. Plasma Consultation must be had in person with Maddie prior to booking a procedure.`
	}
];

let plasmaServices = [
	{
		name: 'Plasma Lip Flip',
		price: '$400',
		desc: `Includes one session of plasma skin tightening. Full pricing $400 with a $100 retainer required upon booking. Plasma Consultation must be had in person with Maddie prior to booking a procedure.`
	},
	{
		name: 'Plasma Neck Tightening',
		price: 'Starts at $995',
		desc: `Includes one session of plasma skin tightening. Full pricing varies depending on size of area with a $100 retainer required upon booking. Plasma Consultation must be had in person with Maddie prior to booking a procedure.`
	},
	{
		name: 'New Mommy Makeover',
		price: 'Starts at $995',
		desc: `Full or partial area tummy tightening using plasma pen technology. Full pricing begins at $995 with a $100 retainer required upon booking. Plasma Consultation must be had in person with Maddie prior to booking a procedure.`
	},
	{
		name: 'Sun Spot/Skin Tag Removal',
		price: 'Varies',
		desc: `Sun spot/skin tag removal using Plasma pen technology. Free phone consultation with Maddie required prior to booking. $75 for fewer than 5 sun spots/skin tags, $150 for fewer than 10 spots. For more than 10, please call for pricing.`
	},
	{
		name: `Plasma Brow Lift`,
		price: '$500',
		desc: `Includes one session of plasma skin tightening. Full pricing $500 with a $100 retainer required upon booking. Plasma Consultation must be had in person with Maddie prior to booking a procedure.`
	},
	{
		name: `Stretch Mark Plasma Treatment`,
		price: 'Starts at $500',
		desc: `Includes one session of plasma skin tightening. Full pricing varies with a $100 retainer required upon booking. Plasma Consultation must be had in person with Maddie prior to booking a procedure.`
	}
];

class Services extends Component {
	displayServices = services =>
		services.map(service => (
			<Card>
				<Card.Content style={{ background: 'whitesmoke' }}>
					<Segment
						style={{
							color: 'black',
							margin: 'auto',
							fontSize: '1.5em',
							textAlign: 'center'
						}}>
						{service.name}
					</Segment>
				</Card.Content>
				<Card.Content>
					<Card.Description>{service.desc}</Card.Description>
				</Card.Content>
				<Card.Content extra style={{ background: 'whitesmoke' }}>
					<Segment
						style={{
							color: 'black',
							margin: 'auto',
							fontSize: '1.5em',
							textAlign: 'center'
						}}>
						{service.price}
					</Segment>
				</Card.Content>
			</Card>
		));

	render() {
		let style = {
			fontSize: '3em',
			fontFamily: 'Volkhov, serif',
			color: 'white',
			textShadow: '2px 2px 4px #444'
		};
		return (
			<>
				<div
					style={{
						paddingTop: '5vh',
						color: 'black',
						backgroundImage:
							'linear-gradient(to bottom, #b87333 , whitesmoke, #b87333)'
					}}>
					{/* <h1 style={style}>Consultation</h1> */}
					<Divider style={{ ...style, marginTop: '1.5em' }} horizontal>
						CONSULTATION
					</Divider>

					<Card.Group centered style={{ padding: '6em' }} stackable>
						{this.displayServices(consult)}
					</Card.Group>
					{/* <h1 style={style}>Brows</h1> */}
					<Divider style={style} horizontal>
						Brows
					</Divider>
					<Card.Group centered style={{ padding: '6em' }} stackable>
						{this.displayServices(browServices)}
					</Card.Group>
					{/* <h1 style={style}>Eyes</h1> */}
					<Divider style={style} horizontal>
						Eyes
					</Divider>
					<Card.Group centered style={{ padding: '6em' }} stackable>
						{this.displayServices(eyeServices)}
					</Card.Group>
					{/* <h1 style={style}>Touch Ups</h1> */}
					<Divider style={style} horizontal>
						Touch Ups
					</Divider>
					<Card.Group centered style={{ padding: '6em' }} stackable>
						{this.displayServices(touchups)}
					</Card.Group>
					{/* <h1 style={style}>Plasma</h1>
					 */}
					<Divider style={style} horizontal>
						Plasma
					</Divider>
					<Card.Group centered style={{ padding: '6em' }} stackable>
						{this.displayServices(plasmaServices)}
					</Card.Group>
				</div>
				<Footer />
			</>
		);
	}
}

export default Services;
