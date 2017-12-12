import { greet } from "./greet";

describe('greet', ()=> {
    it('should include the name in the message', ()=> {
        let name = 'Johan';
        expect(greet(name)).toContain(name);
    })
})