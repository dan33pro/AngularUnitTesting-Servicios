import { ValueService } from './value.service';

fdescribe('ValueService', () => {
  let service: ValueService;
  
  beforeEach(() => {
    service = new ValueService();
  });

  it('should be create', () => {
    expect(service).toBeTruthy();
  });

  describe('Test for getValue', () => {
    // AAA
    it('Should return "my value"', () => {
      expect(service.getValue()).toBe('my value');
    });
  });

  describe('Test for setValue', () => {
    // AAA
    it('Should change the value', () => {
      expect(service.getValue()).toBe('my value');
      service.setValue('change');
      expect(service.getValue()).toBe('change');
    });
  });

  describe('Test for getPromiseValue', () => {
    // AAA
    it('Should return "promise value" from promise', (doneFn) => {
      service.getPromiseValue()
      .then((value) => {
        // assert
        expect(value).toBe('promise value');
        doneFn();
      });
    });

    it('Should return "promise value" from promise using async', async () => {
     const rta = await service.getPromiseValue();
     expect(rta).toBe('promise value');
    });
  });
});