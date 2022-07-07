import { EnclosePipe } from "./enclose.pipe";
describe('EnclosePipe', () => {
    it('create an instance', () => {
      const pipe = new EnclosePipe();
      expect(pipe).toBeTruthy();
    });
    it('should display curly if curly value is passed', () => {
      const pipe = new EnclosePipe();
      expect(pipe.transform("Msg1","curly")).toEqual('{Msg1}');
    });
    it('should display square if square value is passed', () => {
      const pipe = new EnclosePipe();
      expect(pipe.transform("Msg2","square")).toEqual('[Msg2]');
    });
    it('should display msg with in "(...)" if any other value is passed', () => {
        const pipe = new EnclosePipe();
        expect(pipe.transform("Msg3")).toEqual('(Msg3)');
      });
  });
  