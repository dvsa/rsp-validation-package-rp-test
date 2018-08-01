import paymentValidation from './Validations/payments';
import penaltyDocumentValidation from './Validations/penaltyDocuments';
import penaltyGroupValidation from './Validations/penaltyGroups';
import tokenValidation from './Validations/tokens';
import cpmsTransactionValidation from './Validations/cpmsTransaction';

const validationHandler = {
	paymentValidation,
	penaltyDocumentValidation,
	penaltyGroupValidation,
	tokenValidation,
	cpmsTransactionValidation,
};

export default validationHandler;
