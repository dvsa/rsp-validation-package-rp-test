export default (data) => {

	if (data.checkBits !== '0000') {
		return { valid: false, error: { message: 'check bits not zero' } };
	}

	if (data.paymentAmount >= 10000 || data.paymentAmount < 10) {
		return { valid: false, error: { message: 'Payment amount must be between 10 and 9999' } };
	}

	if (data.docType !== 0 && data.docType !== 1 && data.docType !== 2) {
		return { valid: false, error: { message: 'Invalid docType value' } };
	}

	if (data.docType !== 1 && (data.parsedRef.length < 12 || data.parsedRef.length > 13)) {
		return { valid: false, error: { message: 'Invalid reference length' } };
	}
	if (data.docType === 1) {
		if (!data.formattedRef.match(/^[1-9][0-9]{0,5}-[0-1]-[1-9][0-9]{0,5}-IM$/)) {
			return { valid: false, error: { message: 'Invalid reference' } };
		}
	}
	return { valid: true, error: {} };
};
