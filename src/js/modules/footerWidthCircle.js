export default function footerPulsationCircle() {
	//? ----- calculate :before circle for resize -----
	const css = `:root{
		--a-width:calc(105vw + ${window.innerWidth}px);
		--a-heigth:calc(180vh + ${window.innerHeight}px);
	}`,
	head = document.head || document.getElementsByTagName('head')[0],
	style = document.createElement('style');

	head.appendChild(style);

	style.type = 'text/css';
	if (style.styleSheet){
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
}