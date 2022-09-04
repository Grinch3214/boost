export default function footerPulsationCircle() {
	//? ----- calculate :before circle for resize -----
	document.onreadystatechange = function(){
		if(document.readyState === 'complete'){
			calculateWidthForFooterBg()
		}
	}

	function calculateWidthForFooterBg() {
		const animatedRoot = document.styleSheets[0];
		animatedRoot.insertRule(`:root{
			--a-width:calc(105vw + ${window.innerWidth}px);
			--a-heigth:calc(180vh + ${window.innerHeight}px);
		}`);
	}
	// calculateWidthForFooterBg();
}