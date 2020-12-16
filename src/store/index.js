import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		img1: true,
		img2: false,
		img3: false,
		img4: false
	},
	mutations: {
		imgSlider(state, { img1, img2, img3, img4, color }) {
			state.img1 = img1;
			state.img2 = img2;
			state.img3 = img3;
			state.img4 = img4;
			const circle = document.querySelector('.circle');
			circle.style.background = color;
		}
	},
	actions: {},
	modules: {}
});
