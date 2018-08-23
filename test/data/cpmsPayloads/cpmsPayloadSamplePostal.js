const today = new Date(Date.now()).toISOString().split('T')[0];
export default {
	total_amount: 120.00,
	postal_order_number: '4567,585',
	slip_number: '1234',
	batch_number: '2468',
	receipt_date: today,
	customer_reference: '15xedqh86uw0_FPN',
	scope: 'POSTAL_ORDER',
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
