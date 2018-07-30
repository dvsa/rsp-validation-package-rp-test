import Joi from 'joi';
import PenaltyValidation from './penaltyValidation';

export default {
	request: Joi.object().keys({
		Timestamp: Joi.number().required(),
		Location: Joi.string().required(),
		SiteCode: Joi.number().required(),
		VehicleRegistration: Joi.string().required(),
		Penalties: Joi.array().items(PenaltyValidation.request).required(),
	}),
};

