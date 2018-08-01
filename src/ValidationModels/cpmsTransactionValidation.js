import Joi from 'joi';

const today = new Date(Date.now()).toISOString().split('T')[0];

const paymentDataSchema = {
	line_identifier: Joi.string().regex(/^[0-9]+$/).required(),
	amount: Joi.number().precision(2).required(),
	net_amount: Joi.number().precision(2).required(),
	tax_amount: Joi.number().precision(2).required(),
	allocated_amount: Joi.number().precision(2).required(),
	tax_code: Joi.string().valid('O').required(),
	tax_rate: Joi.string().valid('0').required(),
	sales_reference: Joi.string().token().required(),
	product_reference: Joi.string().valid('RoadSidePayments').required(),
	product_description: Joi.string().valid('Fixed_Penalties', 'Immobilisation', 'Court_Deposits').required(),
	invoice_date: Joi.date().min(today).required(),
	receiver_reference: Joi.string().token().required(),
	receiver_name: Joi.string().valid('DVSA RSP').required(),
	receiver_address: Joi.object().keys({
		line_1: Joi.string().required(),
		line_2: Joi.string().required(),
		line_3: Joi.string().required(),
		line_4: Joi.string().empty(''),
		city: Joi.string().required(),
		postcode: Joi.string().required(),
	}),
	rule_start_date: Joi.date().min(today).required(),
	deferment_period: Joi.string().valid('1').required(),
	sales_person_reference: Joi.string().valid('DVSA RSP').required(),
	user_id: Joi.string().required(),
};

export default {
	request: Joi.object().keys({
		redirect_uri: Joi.string().required(),
		total_amount: Joi.number().integer().min(10).max(9999),
		customer_reference: Joi.string().required(),
		scope: Joi.string().valid('CARD', 'CHEQUE', 'CNP', 'CASH', 'POSTAL_ORDER', 'REPORT', 'CHARGE_BACK', 'CHEQUE_RD').required(),
		country_code: Joi.string().valid('gb').required(),
		customer_manager_name: Joi.string().regex(/^[a-z]+$/).required(),
		customer_name: Joi.string().regex(/^[a-z]+$/).required(),
		customer_address: Joi.object().keys({
			line_1: Joi.string().required(),
			line_2: Joi.string().required(),
			line_3: Joi.string().required(),
			line_4: Joi.string().empty(''),
			city: Joi.string().required(),
			postcode: Joi.string().required(),
		}),
		payment_data: Joi.array().items(Joi.object(paymentDataSchema)).min(1).max(10),
	}),
};
