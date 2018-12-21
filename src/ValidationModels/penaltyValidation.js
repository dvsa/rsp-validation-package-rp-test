import Joi from 'joi';

const driverSchema = {
	name: Joi.string(),
	address: Joi.string(),
	licenceNumber: Joi.string(),
};

const vehicleSchema = {
	regNo: Joi.string().required().min(1).max(10)
		.regex(/^[A-Z0-9a-z]{1,10}$/),
	make: Joi.string(),
	nationality: Joi.string(),
};

const trailerSchema = {
	number1: Joi.string(),
	number2: Joi.string(),
};


const valueSchema = {
	penaltyType: Joi.string().regex(/^(IM|CDN|FPN)$/).required(),
	paymentStatus: Joi.string(), // .regex(/^(UNPAID|PAID)$/).required(),
	paymentAuthCode: Joi.string(),
	// .when('paymentStatus', { is: 'PAID', then: Joi.required() }),
	paymentDate: Joi.number().integer(),
	// .when('paymentStatus', { is: 'PAID', then: Joi.required() }),
	paymentToken: Joi.string().required(),
	formNo: Joi.string(),
	referenceNo: Joi.string().required().min(8).max(18),
	driverDetails: Joi.object(driverSchema),
	vehicleDetails: Joi.object(vehicleSchema).required(),
	trailerDetails: Joi.object(trailerSchema),
	nonEndorsableOffence: Joi.array().items(Joi.string()),
	penaltyAmount: Joi.number().integer().required().min(10)
		.max(9999),
	paymentDueDate: Joi.number().integer(),
	officerName: Joi.string().required(),
	dateTime: Joi.number().integer().required(),
	issuedDateTime: Joi.number().integer(),
	placeWhereIssued: Joi.string(),
	officerID: Joi.string().required(),
	siteCode: Joi.number().integer().required(),
	inPenaltyGroup: Joi.boolean().required(),
};

export default {
	request: Joi.object().keys({
		ID: Joi.string().required(),
		Hash: Joi.string().required(),
		Enabled: Joi.boolean().required(),
		Offset: Joi.number(),
		Value: Joi.object(valueSchema),
		Origin: Joi.string(),
		VehicleRegistration: Joi.string(),
	}),
};
