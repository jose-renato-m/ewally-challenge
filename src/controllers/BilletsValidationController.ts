import { Request, Response } from 'express';

import isNumeric from '../utils/isNumeric';
import verifyFields from '../helpers/verifyField';
import dueDateCalculation from '../helpers/dueDateCalculation';
import buildBarCode from '../helpers/buildBarCode';
import validateVerificationCode from '../helpers/validateVerificationCode';
import printValue from '../helpers/printValue';

export default class BilletsValidationController {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static verify(request: Request, response: Response) {
    const { numeric_code } = request.body;

    // case user has entered with a row which contains dots or gaps
    const numeric_codeParsed: Array<string> = numeric_code
      .split('')
      .filter((number: string) => !['.', ' '].includes(number));

    if (!isNumeric(numeric_code.join('')))
      return response.status(403).json({ err: 'Campo inválido' });

    const size: number = numeric_codeParsed.length;

    if (size < 46 || size > 49)
      // the typed row must contains 47 or 48 fields
      return response.status(403).json({ err: 'Campo inválido' });

    // do the parsing of basic informations of typed row
    const codCurrency: string = numeric_codeParsed.slice(3, 4).join('');
    const factorDuedate: number = parseInt(
      numeric_codeParsed.slice(33, 37).join(''),
    );
    const value: string = numeric_codeParsed
      .slice(38, numeric_codeParsed.length)
      .join('');

    const fields: Array<string> = numeric_codeParsed.slice(0, 32);

    const field1: Array<string> = fields.slice(0, 10);
    const field2: Array<string> = fields.slice(10, 21);
    const field3: Array<string> = fields.slice(21, fields.length);

    if (!verifyFields([field1, field2, field3])) {
      return response.status(403).json({ err: 'Campo inválido' });
    }

    const dueDate: string = dueDateCalculation(factorDuedate);
    const barCode: string = buildBarCode(numeric_codeParsed);

    if (!validateVerificationCode(barCode.split(''))) {
      return response.status(403).json({ err: 'Campo inválido' });
    }

    return response
      .status(200)
      .json({ dueDate, value: printValue(codCurrency, value), barCode });
  }
}
