import {getWelcomeMessage} from "../src/app";

describe("app getWelcomeMessage method test case", ()=> {

    it('Should be defined', () => {
        expect(getWelcomeMessage).toBe('Hello World');
    });
});

