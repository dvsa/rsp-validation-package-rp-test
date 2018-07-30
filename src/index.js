import paymentValidation from './Validations/payments';
import penaltyDocumentValidation from './Validations/penaltyDocuments';
import penaltyGroupValidation from './Validations/penaltyGroups';
import tokenValidation from './Validations/tokens';

const validationHandler = {
	paymentValidation,
	penaltyDocumentValidation,
	penaltyGroupValidation,
	tokenValidation,
};

export default validationHandler;
