/* eslint-disable @next/next/next-script-for-ga */
import { config, isProd } from 'helpers'
import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const originalRenderPage = ctx.renderPage

		// Run the React rendering logic synchronously
		ctx.renderPage = () =>
			originalRenderPage({
				// Useful for wrapping the whole react tree
				enhanceApp: App => App,
				// Useful for wrapping in a per-page basis
				enhanceComponent: Component => Component,
			})

		// Run the parent `getInitialProps`, it now includes the custom `renderPage`
		const initialProps = await Document.getInitialProps(ctx)

		return initialProps
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin=""
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;700&display=swap"
						rel="stylesheet"
					/>
					{isProd && (
						<>
							<script
								async
								src={`https://www.googletagmanager.com/gtag/js?id=${config.GOOGLE_ANALYTICS_ID}`}
							/>
							<script
								dangerouslySetInnerHTML={{
									__html: `
            				  window.dataLayer = window.dataLayer || [];
            				  function gtag(){dataLayer.push(arguments);}
            				  gtag('js', new Date());
            				  gtag('config', '${config.GOOGLE_ANALYTICS_ID}', { page_path: window.location.pathname });
            				`,
								}}
							/>
						</>
					)}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
