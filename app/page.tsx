import { Metadata } from 'next';

export default async function Home() {
	// return (
	// 	<div>
	// 	  <h1>PDF Viewer using react-pdf and Next.js</h1>
	// 	  <PDFViewer pdfUrl="/marketing-services.pdf" />
	// 	</div>
	//   );
	return (
		<div style={{ height: '100vh' }}>
			<object
				data='ai-101.pdf'
				type='application/pdf'
				width='100%'
				height='100%'>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<h1
						style={{
							width: '100%',
							marginTop: 32,
							textAlign: 'center',
							fontSize: '20px',
						}}>
						{' '}
						Please confirm you are not a robot
					</h1>
					<a
						href='ai-101.pdf'
						style={{
							marginTop: 32,
							border: 'solid',
							borderColor: '#151414',
							borderRadius: '12px',
							background: '#1E1D1D',
							paddingLeft: 24,
							paddingRight: 24,
							paddingTop: 12,
							paddingBottom: 12,
						}}>
						Confirm
					</a>
				</div>
			</object>
		</div>
	);
}

export const metadata: Metadata = {
	title: 'Helping you build a legendary business | OMNIUX',
	description:
		'A marketing team, finance gurus, & tech department. Business accelerators at your service',
	authors: [
		{
			name: 'OMNIUX',
		},
	],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://web.omniux.io/',
		title: 'Helping you build a legendary business | OMNIUX',
		description:
			'A marketing team, finance gurus, & tech department. Business accelerators at your service',
		images: {
			url: `https://web.omniux.io/og-image.png`,
			width: 800,
			height: 600,
			alt: 'Helping you build a legendary business | OMNIUX.',
		},
		siteName: 'OMNIUX Pitch Deck',
	},
};
