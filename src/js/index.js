import { isWebp } from './modules/webp.js';

isWebp();

const arr = [1, 2, 4, 5];

const addNewArr = array => {
	const newArr = array.map(item => item + 2);
	return newArr;
};

addNewArr(arr);
