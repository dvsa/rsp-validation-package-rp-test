import PenaltyGroupValidation from '../ValidationModels/penaltyGroupValidation';

export default (data) => {
	const schema = PenaltyGroupValidation.request;
	const joiResult = schema.validate(data);
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
