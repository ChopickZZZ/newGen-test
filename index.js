// Список курсов
let courses = [
	{ name: "Courses in England", prices: [0, 100] },
	{ name: "Courses in Germany", prices: [500, null] },
	{ name: "Courses in Italy", prices: [100, 200] },
	{ name: "Courses in Russia", prices: [null, 400] },
	{ name: "Courses in China", prices: [50, 250] },
	{ name: "Courses in USA", prices: [200, null] },
	{ name: "Courses in Kazakhstan", prices: [56, 324] },
	{ name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

//Функция, фильтрующая курсы
const filterCoursesByPrice = (courses, range) => {

	let [lowestRangePrice, highestRangePrice] = range
	if (highestRangePrice === null) {
		highestRangePrice = Infinity
	}

	return courses
		.filter(course => {
			const { prices } = course
			let [lowestCoursePrice, highestCoursePrice] = prices

			highestCoursePrice === null
				? highestCoursePrice = Infinity
				: highestCoursePrice = highestCoursePrice

			if (lowestCoursePrice >= lowestRangePrice && highestCoursePrice <= highestRangePrice) {
				return course
			}
		})
		.sort((firstCourse, secondCourse) => firstCourse.prices[0] - secondCourse.prices[0])
}