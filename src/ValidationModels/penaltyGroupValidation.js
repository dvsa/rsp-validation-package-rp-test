import Joi from 'joi';
import PenaltyValidation from './penaltyValidation';

const extendPenaltyDocumentSchema = () => {
	return PenaltyValidation.request.concat(Joi.object({
		Value: Joi.object({
			inPenaltyGroup: Joi.boolean().required(),
		}),
	}));
};

export default {
	request: Joi.object().keys({
		Timestamp: Joi.number().required(),
		Location: Joi.string().required(),
		SiteCode: Joi.number().required(),
		VehicleRegistration: Joi.string().required(),
		Penalties: Joi.array().items(extendPenaltyDocumentSchema()).required(),
	}),
};
