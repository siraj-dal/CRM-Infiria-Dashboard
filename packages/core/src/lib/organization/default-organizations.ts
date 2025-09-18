import { CurrenciesEnum, DefaultValueDateTypeEnum } from '@gauzy/contracts';

export const DEFAULT_EVER_ORGANIZATIONS = [
	{
		name: 'Ever Technologies LTD',
		currency: CurrenciesEnum.BGN,
		defaultValueDateType: DefaultValueDateTypeEnum.TODAY,
		imageUrl: 'assets/images/logos/infiria-large.jpg',
		isDefault: true,
		totalEmployees: 17
	},
	{
		name: 'Infiria Pvt. LTD',
		currency: CurrenciesEnum.ILS,
		defaultValueDateType: DefaultValueDateTypeEnum.TODAY,
		imageUrl: 'assets/images/logos/infiria-large.jpg',
		isDefault: false,
		totalEmployees: 0
	}
];

export const DEFAULT_ORGANIZATIONS = [
	{
		name: 'Default Company',
		currency: CurrenciesEnum.USD,
		defaultValueDateType: DefaultValueDateTypeEnum.TODAY,
		imageUrl: 'assets/images/logos/logo_Infiria.svg',
		isDefault: true,
		totalEmployees: 1
	}
];
