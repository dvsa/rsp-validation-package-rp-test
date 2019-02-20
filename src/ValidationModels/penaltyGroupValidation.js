import Joi from 'joi';
import PenaltyValidation from './penaltyValidation';

export default {
	request: Joi.object().keys({
		Offset: Joi.number().required(),
		Timestamp: Joi.number().required(),
		Location: Joi.string().required(),
		SiteCode: Joi.number().required(),
		VehicleRegistration: Joi.string().required().regex(/^[0-9A-Z,]*$/),
		Penalties: Joi.array().items(PenaltyValidation.request).required(),
	}),
};
