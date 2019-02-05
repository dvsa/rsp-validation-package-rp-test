import Joi from 'joi';

const paymentDetailsSchema = {
	AuthCode: Joi.string(),
	PaymentRef: Joi.string().regex(/^[A-Z0-9-]*$/),
	PaymentAmount: Joi.number().integer().min(10).max(9999),
	PaymentDate: Joi.number().integer(),
	PaymentMethod: Joi.string().regex(/^(CARD|CHEQUE|CASH|POSTAL)$/),
};


export default {
	request: Joi.object().keys({
		PenaltyReference: Joi.string().required().regex(/^[0-9]{12,13}$/),
		PenaltyType: Joi.string().regex(/^(IM|CDN|FPN)$/).required(),
		PenaltyStatus: Joi.string().regex(/^(PAID|UNPAID)$/).required(),
		PaymentDetail: Joi.object(paymentDetailsSchema).required(),
	}),
};
