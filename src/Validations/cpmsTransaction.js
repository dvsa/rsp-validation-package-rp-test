import Joi from 'joi';
import cpmsTransactionValidation from '../ValidationModels/cpmsTransactionValidation';

export default (data) => {
	const joiResult = Joi.validate(data, cpmsTransactionValidation.request);
	if (joiResult.error) {
		return {
			valid: false,
			error: {
				message: `Invalid Input: ${joiResult.error.message}`,
			},
		};
	}
	return { valid: true, error: {} };
};
