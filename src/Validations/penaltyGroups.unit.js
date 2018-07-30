import expect from 'expect';

import penaltyGroupValidation from './penaltyGroups';

let penaltyGroup;

describe('penaltyGroupValidation', () => {
	beforeEach(() => {
		penaltyGroup = {
			Timestamp: 1531997422,
			SiteCode: -1,
			Location: 'Trowell Services',
			VehicleRegistration: 'AA 123',
			Penalties: [
				{
					ID: '820500000878_FPN',
					Hash: '6a1e32a2a319c7674fbd83f34cb07b35fdc1cecab261fd02450da821c359d74d',
					Enabled: true,
					Offset: 1521331200,
					Origin: 'APP',
					Value: {
						penaltyType: 'FPN',
						paymentStatus: 'UNPAID',
						paymentToken: 'XXX generated paymentToken XXX',
						formNo: 'FPN 11/08',
						referenceNo: '820500000878',
						driverDetails: {
							name: 'John Doe',
							address: '999 Baker Street, NW1 5LA, LONDON',
							licenceNumber: 'JDOE801127JA09901',
						},
						vehicleDetails: {
							regNo: 'YYYYYYY',
							make: 'Robin Reliant',
							nationality: 'UK',
						},
						trailerDetails: {
							number1: '3',
							number2: '4',
						},
						nonEndorsableOffence: [
							'INCORRECT USE OF MODE SWITCH - ARTICLE 34(5) EU 165/2014, 27/10/2016',
						],
						penaltyAmount: '50',
						paymentDueDate: 479945700,
						officerName: 'Jack Reacher',
						dateTime: 1476180720,
						placeWhereIssued: 'BLACKWALL TUNNEL A, PAVILLION WAY, METROPOLITAN',
						officerID: 'Z7F6yxnw--6DJf4sLsxjg_S-3Gvrl5MxV-1iY7RRNiA',
						siteCode: 0,
					},
				},
			],
		};
	});

	describe('when a valid penalty group passed for validation', () => {
		it('should return valid set to true', () => {
			const validationResult = penaltyGroupValidation(penaltyGroup);
			expect(validationResult.error.message).toBeUndefined();
			expect(validationResult.valid).toBe(true);
		});
	});

	describe('when a blank object passed for validation', () => {
		it('should return valid set to false', () => {
			const validationResult = penaltyGroupValidation({});
			expect(validationResult.valid).toBe(false);
		});
	});

	describe('when null passed for validation', () => {
		it('should return valid set to false', () => {
			const validationResult = penaltyGroupValidation(null);
			expect(validationResult.valid).toBe(false);
		});
	});

	describe('when included penalty doesn\'t match penalty document schema', () => {
		it('should return valid set to false', () => {
			delete penaltyGroup.Penalties[0].ID;
			const validationResult = penaltyGroupValidation(penaltyGroup);
			expect(validationResult.valid).toBe(false);
		});
	});

});
