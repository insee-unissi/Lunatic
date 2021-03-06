import { buildStyleObject } from 'utils/lib';

describe('style', () => {
	describe('buildStyleObject', () => {
		it('should return an empty object', () => {
			expect(buildStyleObject()).toEqual({});
			expect(buildStyleObject({})).toEqual({});
		});
		it('should return same object', () => {
			expect(buildStyleObject({ border: 'border' })).toEqual({
				border: 'border',
			});
		});
		it('should return object with camelCase keys', () => {
			expect(
				buildStyleObject({
					'border-top': '10',
					':hover': { 'background-color': 'pink' },
				})
			).toEqual({
				borderTop: '10',
				':hover': { backgroundColor: 'pink' },
			});
		});
	});
});
