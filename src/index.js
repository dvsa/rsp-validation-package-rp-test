import paymentValidation from './Validations/payments';
import penaltyDocumentValidation from './Validations/penaltyDocuments';
import tokenValidation from './Validations/tokens';

const validationHandler = {
	paymentValidation,
	penaltyDocumentValidation,
	tokenValidation,
};

export default validationHandler;
