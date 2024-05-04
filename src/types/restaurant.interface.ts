export interface IRestaurantItem {
	avgPreparationTime: string;
	id: string;
	logoUrl: string;
	name: string;
	rating: number;
	eta: string;
	minimumDeliveryFee: number;
	address: string;
}

export interface IDish {
	id: string;
	// isPromotion: boolean;
	oldPrice: number;
	name: string;
	description: string;
	price: number;
	available: boolean;
}

export interface IMenuItem {
	name: string;
	id: string;
	dishes: IDish[];
}
  
export interface IMenuDishList {
	title: string;
	data: IDish[];
}

export interface IFoodItem {
	id: string;
	name: string;
	price: number;
	available: boolean;
	selected: boolean;
}

export interface IDishOption {
	id: string;
	name: string;
	price: number;
	isRequired: boolean;
	available: boolean;
	min: number;
	max: number;
	foodItems: IFoodItem[];
}

export interface IFoodPack {
	id: string;
	name: string;
	price: number;
	available: boolean;
	selected: boolean;
}
  