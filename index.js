require('./style.scss');
import App from './app';	

const tabs = new App({
	tabsContainer: document.querySelector('.tabs-column1'),
	tabsWindow: document.querySelector('.tabs'),
	tabs: document.querySelectorAll('.tab-switch'),
	tabsButtons: document.querySelectorAll('.tabs-column1-box'),
});

tabs.init();