export class Router {
    header: HTMLElement;
    currentPage: string = null;

	constructor(header: HTMLElement) {
        this.header = header;
		window.addEventListener("hashchange", this.onRedirect.bind(this));
		this.onRedirect();
	}

	onRedirect() {
		const newHash = window.location.hash;

		// Parse New URL
		let parsedHash = newHash.replace("#", "")
		if (parsedHash.trim() == "") parsedHash = "/";
		console.log(parsedHash);

        // Hide old page + show new page.
		if (this.currentPage) 
			this.currentView.hidePage((() => this.showPage(parsedHash)).bind(this));

        // Only show new page (first time only).    
		else this.showPage(parsedHash);
    }
    
    showPage(parsedHash) {
        this.currentPage = parsedHash;
        this.currentView.showPage();
        this.header.dataset.location = this.currentView.friendlyName // Change display text.
    }

	get currentView(): ISPAView {
		return (
			document.querySelector(`spa-view[path='${this.currentPage}']`) ||
			document.querySelector(`spa-view[path='404']`)
		);
	}
}