import axios from "axios";
import { defineStore } from "pinia";

interface State {
	searchTerm: string;
	seriesType: string;
	resultData: {
		title: string;
		href: string;
		img: string;
		latestChapter: number;
		source: string;
	}[];
}

export const useSeriesStore = defineStore("seriesStore", {
	state: (): State => {
		return {
			searchTerm: "",
			seriesType: "",
			resultData: [],
		};
	},

	actions: {
		async update(searchTerm: string, seriesType: string) {
			this.searchTerm = searchTerm;
			this.seriesType = seriesType;

			await axios
				.get(
					`https://yasse.live/${this.seriesType}?title=${this.searchTerm}&orderByLatestChapter=true`,
				)
				.then((res) => {
					this.resultData = res.data;
				})
				.catch((err) => {
					throw err;
				});
		},
	},
});
