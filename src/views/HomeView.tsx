import Carousel from "../components/Carousel";
import {rune_list} from "../data/lists/rune-list.ts";
import ItemDisplaySquare from "../components/ItemDisplaySquare";
import {log_list} from "../data/lists/log-list.ts";
import {bar_list} from "../data/lists/bar-list.ts";

function HomeView() {
	return (
		<div>
			<h1>Home</h1>
			<Carousel>
				{log_list.map((item) => <ItemDisplaySquare id={item}/> )}
			</Carousel>
			<Carousel speed={10}>
				{rune_list.map((item) => <ItemDisplaySquare id={item}/> )}
			</Carousel>
			<Carousel speed={2}>
				{bar_list.map((item) => <ItemDisplaySquare id={item}/> )}
			</Carousel>
			<Carousel speed={2} clones={20}>
				{[<ItemDisplaySquare id={bar_list[0]}/>]}
			</Carousel>
		</div>
	);
}

export default HomeView;