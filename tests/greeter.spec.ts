import { greeter } from '../src/greeter';
import { expect } from 'chai';

describe('greeter', () => {
    it('can give a greeting', () => {
        expect(greeter()).equals('Hello World');
    });
});

