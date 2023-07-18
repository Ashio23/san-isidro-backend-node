import { TestBed } from '@automock/jest';
import { POST_EXAMPLE_ADAPTER, PostExamplePort } from './port';
import { PostExampleUseCase } from './post-example.use-case';

describe('PostExampleUseCase', () => {
  //DEFINICIONES
  let underTest: PostExampleUseCase;
  let postExamplePort: PostExamplePort;
  beforeEach(() => {
    //se utiliza TestBed por sobre el nativo de nest, por facilidad de uso.
    const { unit, unitRef } = TestBed.create(PostExampleUseCase).compile();
    underTest = unit;
    postExamplePort = unitRef.get(POST_EXAMPLE_ADAPTER);
  });
  describe('addData', () => {
    it('should call port with provided data', () => {
      const expected = { foo: 'bar' };
      const postExamplePortSpy = jest.spyOn(postExamplePort, 'addData');
      underTest.addData(expected as any);
      expect(postExamplePortSpy).toHaveBeenCalledWith(expected);
    });
    it('should return value by port', () => {
      const expected = { foo: 'bar' };
      jest
        .spyOn(postExamplePort, 'addData')
        .mockReturnValueOnce(expected as any);
      const actual = underTest.addData({} as any);
      expect(actual).toEqual(expected);
    });
  });
});
