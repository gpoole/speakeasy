import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class Conversation {

	constructor(router) {
		this.router = router;
	}

	startConversation() {
		
	}

}