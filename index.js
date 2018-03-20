import Joi from 'joi';

import paymentValidation from './validations/payments';
import penaltyDocumentValidation from './validations/penaltyDocuments';
import tokenValidation from './validations/token';

const validationHandler = {
	paymentValidation,
	penaltyDocumentValidation,
	tokenValidation,
};

export default validationHandler;