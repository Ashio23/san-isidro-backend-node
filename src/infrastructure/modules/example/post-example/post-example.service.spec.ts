import { TestBed } from '@automock/jest';
import { PostExampleService } from './post-example.service';
import { BadRequestException } from '@nestjs/common';

describe('PostExampleService', () => {
  let underTest: PostExampleService;
  beforeEach(() => {
    const { unit } = TestBed.create(PostExampleService).compile();
    underTest = unit;
  });
  describe('addData', () => {
    describe('when proccess is succesfuly', () => {
      it('deberia devolver un success', () => {
        const payload: Record<'key', string> = { key: '1' };
        const actual = underTest.addData(payload as any);
        //toMatchInlineSnapshot genera el codigo en el mommento de ejecucion del test.
        //valida si es el mismo que tenia, en caso contrario se puede modificar apretando la u
        expect(actual).toMatchInlineSnapshot(`
          {
            "message": "Ejemplo creado exitosamente",
            "status": "success",
          }
        `);
      });
    });
    describe('when the proccess failure', () => {
      it('deberia devolver bad request exeption', () => {
        expect(() => underTest.addData({} as any)).toThrow(BadRequestException);
      });
    });
  });
});
