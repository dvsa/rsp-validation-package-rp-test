import expect from 'expect';

import cpmsTransactionValidation from './cpmsTransaction';

let paymentObject;

describe('cpmsTransactionValidation', () => {
	beforeEach(() => {
		const today = new Date(Date.now()).toISOString().split('T')[0];
		paymentObject = {
			redirect_uri: 'https://8pp5fzn8ih.execute-api.eu-west-1.amazonaws.com/dev/payment-code/15xedqh86uw0/receipt',
			total_amount: 120.00,
			customer_reference: '15xedqh86uw0_FPN',
			scope: 'CARD',
			country_code: 'gb',
			customer_manager_name: 'test',
			customer_name: 'test',
			customer_address: {
				line_1: 'test',
				line_2: 'test',
				line_3: 'test',
				line_4: 'test',
				city: 'test',
				postcode: 'test',
			},
			payment_data: [
				{
					line_identifier: '1',
					amount: 60.00,
					net_amount: 60.00,
					tax_amount: 0.00,
					allocated_amount: 60.00,
					tax_code: 'O',
					tax_rate: '0',
					sales_reference: '3124531097085_BB99BB',
					product_reference: 'RoadSidePayments',
					product_description: 'Fixed_Penalties',
					invoice_date: today,
					receiver_reference: '3124531097085_FPN',
					receiver_name: 'DVSA RSP',
					receiver_address: {
						line_1: 'DVSA Fixed Penalty Office',
						line_2: 'Ellipse',
						line_3: 'Padley Road',
						line_4: '',
						city: 'Swansea',
						postcode: 'SA18AN',
					},
					rule_start_date: today,
					deferment_period: '1',
					sales_person_reference: 'DVSA RSP',
					user_id: '1234',
				},
				{
					line_identifier: '2',
					amount: 60.00,
					net_amount: 60.00,
					tax_amount: 0.00,
					allocated_amount: 60.00,
					tax_code: 'O',
					tax_rate: '0',
					sales_reference: '741258096325_BB99BB',
					product_reference: 'RoadSidePayments',
					product_description: 'Fixed_Penalties',
					invoice_date: today,
					receiver_reference: '741258096325_FPN',
					receiver_name: 'DVSA RSP',
					receiver_address: {
						line_1: 'DVSA Fixed Penalty Office',
						line_2: 'Ellipse',
						line_3: 'Padley Road',
						line_4: '',
						city: 'Swansea',
						postcode: 'SA18AN',
					},
					rule_start_date: today,
					deferment_period: '1',
					sales_person_reference: 'DVSA RSP',
					user_id: '1234',
				},
			],
		};
	});

	describe('when a valid payment object is passed for validation', () => {
		it('should return valid set to true', () => {
			const validationResult = cpmsTransactionValidation(paymentObject);
			expect(validationResult.error.message).toBeUndefined();
			expect(validationResult.valid).toBe(true);
		});
	});

	describe('when a blank object is passed for validation', () => {
		it('should return valid set to false', () => {
			const validationResult = cpmsTransactionValidation({});
			expect(validationResult.valid).toBe(false);
		});
	});

	describe('when null is passed for validation', () => {
		it('should return valid set to false', () => {
			const validationResult = cpmsTransactionValidation(null);
			expect(validationResult.valid).toBe(false);
		});
	});

	describe('when included payment item doesn\'t match payment item schema', () => {
		it('should return valid set to false', () => {
			delete paymentObject.payment_data[0].sales_reference;
			const validationResult = cpmsTransactionValidation(paymentObject);
			expect(validationResult.valid).toBe(false);
		});
	});

	describe('when payment object array is empty', () => {
		it('should return valid set to false', () => {
			paymentObject.payment_data = [];
			const validationResult = cpmsTransactionValidation(paymentObject);
			expect(validationResult.valid).toBe(false);
		});
	});

});
