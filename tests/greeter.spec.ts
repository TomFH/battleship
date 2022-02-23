import { greeter } from '@app/greeter';

describe('greeter', () => {
    it('can give a greeting', () => {
        expect(greeter()).toBe('Hello World');
    });
});

