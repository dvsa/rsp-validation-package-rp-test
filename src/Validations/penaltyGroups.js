import Joi from 'joi';
import PenaltyGroupValidation from '../ValidationModels/penaltyGroupValidation';

export default (data) => {
	const joiResult = Joi.validate(data, PenaltyGroupValidation.request);
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
