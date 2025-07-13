import image from "./assets/images/image-omelette.jpeg";
export default function Recipe() {
	return (
		<article className="flex flex-col justify-center items-center bg-white md:mx-[76px] md:my-[128px] xl:mx-auto xl:max-w-[736px] rounded-3xl">
			<div className="md:px-10 md:pt-10 w-full ">
				<img
					src={image}
					className="h-[171px] md:h-[300px] w-full md:rounded-xl"
				/>
			</div>
			<div className="p-8 py-10 md:px-10 md:pb-10 flex flex-col justify-center items-center gap-8">
				<header>
					<h1 className="text-preset-1 text-stone-900 mb-6">
						Simple Omelette Recipe
					</h1>
					<p className="text-preset-4 text-stone-600">
						An easy and quick dish, perfect for any meal. This classic omelette
						combines beaten eggs cooked to perfection, optionally filled with
						your choice of cheese, vegetables, or meats.
					</p>
				</header>

				<aside className="bg-rose-50 w-full p-6 rounded-xl">
					<h3 className="text-rose-800 text-preset-3 mb-4">Preparation time</h3>
					<ul className="list-disc marker:text-rose-800 text-preset-4 text-stone-600 list-outside pl-6 space-y-2">
						<li className="pl-4 text-preset-4">
							<b>Total:</b> Approximately 10 minutes
						</li>
						<li className="pl-4 text-preset-4">
							<b>Preparation:</b> 5 minutes
						</li>
						<li className="pl-4 text-preset-4">
							<b>Cooking:</b> 5 miniutes
						</li>
					</ul>
				</aside>

				<section className="text-left w-full">
					<h2 className="text-preset-2 text-brown-800 mb-6">Ingredients</h2>
					<ul className="list-disc marker:text-brown-800 text-preset-4 text-stone-600 list-outside pl-6 space-y-2">
						<li className="pl-4 text-preset-4">2-3 large eggs</li>
						<li className="pl-4 text-preset-4">Salt, to taste</li>
						<li className="pl-4 text-preset-4">Pepper, to taste</li>
						<li className="pl-4 text-preset-4">
							1 tablespoon of butter or oil
						</li>
						<li className="pl-4 text-preset-4">
							Optional fillings: cheese, diced vegetables, cooked meats, herbs
						</li>
					</ul>
				</section>

				<hr className="border-0 h-[1px] bg-stone-150 w-full" />

				<section className="text-left w-full">
					<h2 className="text-preset-2 text-brown-800 mb-6">Instructions</h2>
					<ol className="list-decimal marker:text-brown-800 marker:font-bold text-preset-4 text-stone-600 list-outside pl-6 space-y-2">
						<li className="pl-4 text-preset-4">
							<b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of
							salt and pepper until they are well mixed. You can add a
							tablespoon of water or milk for a fluffier texture.
						</li>
						<li className="pl-4 text-preset-4">
							<b>Heat the pan:</b> Place a non-stick frying pan over medium heat
							and add butter or oil.
						</li>
						<li className="pl-4 text-preset-4">
							<b>Cook the omelette:</b> Once the butter is melted and bubbling,
							pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
							surface.
						</li>
						<li className="pl-4 text-preset-4">
							<b>Add fillings (optional):</b> When the eggs begin to set at the
							edges but are still slightly runny in the middle, sprinkle your
							chosen fillings over one half of the omelette.
						</li>
						<li className="pl-4 text-preset-4">
							<b>Fold and serve:</b> As the omelette continues to cook,
							carefully lift one edge and fold it over the fillings. Let it cook
							for another minute, then slide it onto a plate.
						</li>
						<li className="pl-4 text-preset-4">
							<b>Enjoy:</b> Serve hot, with additional salt and pepper if
							needed.
						</li>
					</ol>
				</section>

				<hr className="border-0 h-[1px] bg-stone-150 w-full" />

				<section className="text-left w-full">
					<h2 className="text-preset-2 text-brown-800">Nutrition</h2>
					<p className="text-preset-4 text-stone-600 py-6">
						The table below shows nutritional values per serving without the
						additional fillings.
					</p>
					<table className="text-stone-600 w-full">
						<tbody>
							<tr className="border-b border-table-line border-stone-150 px-4 w-full">
								<td className="pb-3 pl-8 pr-4">Calories</td>
								<td className="pb-3 pl-8 pr-4 text-brown-800 text-preset-4-bold">
									277kcal
								</td>
							</tr>
							<tr className="border-b border-table-line border-stone-150">
								<td className="py-3 pl-8 pr-4">Carbs</td>
								<td className="py-3 pl-8 pr-4 text-brown-800 text-preset-4-bold">
									0g
								</td>
							</tr>
							<tr className="border-b border-table-line border-stone-150">
								<td className="py-3 pl-8 pr-4">Protein</td>
								<td className="py-3 pl-8 pr-4 text-brown-800 text-preset-4-bold">
									20g
								</td>
							</tr>
							<tr>
								<td className="py-3 pl-8 pr-4">Fat</td>
								<td className="py-3 pl-8 pr-4 text-brown-800 text-preset-4-bold">
									22g
								</td>
							</tr>
						</tbody>
					</table>
				</section>
			</div>
		</article>
	);
}
