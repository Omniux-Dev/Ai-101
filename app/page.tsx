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
	title: 'AI SEO 101 | OMNIUX',
	description:
		'Is your business appearing in ChatGPT? Learn how to optimize your web presence for the future of search.',
	authors: [
		{
			name: 'OMNIUX',
		},
	],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://ai101.omniux.io/',
		title: 'AI SEO 101 | OMNIUX',
		description:
			'Is your business appearing in ChatGPT? Learn how to optimize your web presence for the future of search.',
		images: {
			url: `https://web.omniux.io/og-image.png`,
			width: 800,
			height: 600,
			alt: 'AI SEO 101 | OMNIUX.',
		},
		siteName: 'AI SEO 101 | OMNIUX',
	},
};
