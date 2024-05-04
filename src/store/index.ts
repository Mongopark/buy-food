import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IDish, IFoodPack, IDishOption, IFoodItem } from "../types/restaurant.interface"
import { Notification, NotificationResponse } from "expo-notifications";

type actionType = 'add' | 'remove';

type cartActionType = actionType | 'migrate';

export interface IOptions {
    dishId: string;
    dishOpts: IDishOption[],
    foodPacks: IFoodPack[],
}

export interface ICustomer {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
}

export interface ISelectedDish extends IDish {
    cumPrice: number;
    totalDishPrice: number;
    quantity: number;
    dishOptions: IDishOption[];
    foodPack: IFoodPack | undefined;
}

interface ICustomerState {
    customer: ICustomer;
    accessToken: string | null;
    refreshToken: string | null;
    restaurantId: string;
    accessTokenExpirationTime: number;
    dishUpdated: string;
    customerDishes: ISelectedDish[];
    cart: ISelectedDish[];
    cartRestaurantId: string;
    options: IOptions[];
    fcmToken: string;
    notification: boolean | Notification | NotificationResponse;
}

interface IActions {
    updateCustomerEmail: (email: string) => void;
    updateCustomer: (newCustomer: ICustomer) => void;
    updateToken: (token: string, expiration: number) => void;
    updateRefreshToken: () => void;
    updateStore: (customer: ICustomer, token: string, refresh: string, expiration: number) => void;
    updateRestaurantId: (restaurantId: string) => void
    updateDishOption: (dishOption: IDishOption, dishId: string, action: actionType) => void
    updateFoodPack: (foodPack: IFoodPack, dishId: string, action: actionType) => void
    updateFoodItemsInDishOptions: (foodItem: IFoodItem, dishId: string, dishOpt: IDishOption, action: actionType) => void;
    updateCustomerDishes: (dish: IDish, action: actionType) => void;
    updateCartRestaurantId: (restaurantId: string) => void;
    updateOpts: (dishId: string, dishOpts: IDishOption[], foodPack: IFoodPack[], action: cartActionType) => void;
    clearCart: () => void;
    clearCustomerDishes: () => void;
    updateCart: (dish: ISelectedDish, action: cartActionType) => void;
    updateFcmToken: (token: string) => void;
    updateNotification: (notif: Notification | NotificationResponse) => void;
    logout: () => void;
}

const useCustomerStore = create<ICustomerState & IActions>()(devtools(persist((set) => ({
    customer: { id: '', firstName: '', lastName: '', email: '' },
    accessToken: null,
    refreshToken: null,
    accessTokenExpirationTime: 0,
    restaurantId: '',
    fcmToken: '',
    cartRestaurantId: '',
    customerDishes: [],
    cart: [],
    dishUpdated: "",
    options: [],
    notification: false,
    updateFcmToken: (token: string) => set({fcmToken: token}),
    updateStore: (customer, token, refresh, expiration) => set({customer, accessToken: token, refreshToken: refresh, accessTokenExpirationTime: expiration}),
    updateRestaurantId: (restaurantId) => set({ restaurantId }),
    updateCustomerEmail: (email: string) => set((state) => ({ customer: { ...state.customer, email } })),
    updateCustomer: (newCustomer) => set({ customer: newCustomer }),
    updateCartRestaurantId: (restaurantId: string) => set({cartRestaurantId: restaurantId}),
    updateToken: (token: string, expiration: number) => {
        set((state) => ({ customer: { ...state.customer, accessToken: token, accessTokenExpiration: expiration } }))
    },
    updateRefreshToken: () => set({ refreshToken: null }),
    updateDishOption: (dishOpt: IDishOption, dishId: string, action: actionType) => {
        set((state) => {
            if (action === 'add') {
                let totalPrice = 0;

                const existingDish = state.customerDishes.find((dish) => dish.id === dishId);

                const dishesNotOfConcern = state.customerDishes.filter((dish) => dish.id !== dishId);
                
                if (existingDish === undefined) return state;

                const existingDishOption = existingDish.dishOptions.find((option) => option.id === dishOpt.id);

                //* check if the dishoption is the same
                if (existingDishOption === undefined) {
                    //* if no add to the dish options array and update the price
            
                    const newDishOpts = [...existingDish.dishOptions, dishOpt];
                    existingDish.dishOptions = newDishOpts;

                    // console.log("i got here...");
                    // console.log("new dish opts: ", newDishOpts);

                    const allOptionsTotalPrice = existingDish.dishOptions.map((opt) => opt.foodItems.map((item) => item.price).reduce((acc, curr) => (acc + curr), 0)).reduce((acc, curr) => (acc + curr), 0);
                    
                    if (existingDish.foodPack) {
                        totalPrice = allOptionsTotalPrice + existingDish.foodPack.price + existingDish.price;
                    } else {
                        totalPrice = allOptionsTotalPrice + existingDish.price;
                    }

                    return {
                        dishUpdated: Math.random().toString(),
                        customerDishes: [...dishesNotOfConcern, {...existingDish, cumPrice: totalPrice, dishOptions: [...newDishOpts], totalDishPrice: totalPrice * existingDish.quantity}]
                    }
                }

                //* if yes update the price
                const otherOptions = existingDish.dishOptions.filter((opt) => opt.id !== dishOpt.id);

                const newOptions = [...otherOptions, dishOpt];

                existingDish.dishOptions = newOptions;

                const allOptionsTotalPrice = existingDish.dishOptions.map((opt) => opt.foodItems.map((item) => item.price).reduce((acc, curr) => (acc + curr), 0)).reduce((acc, curr) => (acc + curr), 0);
                    
                if (existingDish.foodPack) {
                    totalPrice = allOptionsTotalPrice + existingDish.foodPack.price + existingDish.price;
                } else {
                    totalPrice = allOptionsTotalPrice + existingDish.price;
                }

                return {
                    dishUpdated: Math.random().toString(),
                    customerDishes: [...dishesNotOfConcern, {...existingDish, cumPrice: totalPrice, dishOptions: [...newOptions], totalDishPrice: totalPrice * existingDish.quantity}]
                }


                // const updatedDishes = state.customerDishes.map(dish => {
                //     if (dish.id === dishId) {
                //         let existingDishOption = dish.dishOptions.find(opt => opt.id === dishOpt.id);

                //         if (existingDishOption !== undefined) {
                //             let valid = existingDishOption.id
                //             // console.log("the dish options i am setting it to....",  [ dishOpt ]);
                            
                //             return {
                //                 ...dish,
                //                 dishOptions: [ dishOpt ]
                //             }
                //         } else {
                //             return {
                //                 ...dish,
                //                 dishOptions: [...dish.dishOptions, dishOpt]
                //             };
                //         }
                //     }
    
                //     return dish;
                // });
            } else {
                //remove the most recent one....
                const updatedDishes = state.customerDishes.map(dish => {
                    if (dish.id === dishId) {
                        if (dish.dishOptions.find((opt) => opt.id === dishOpt.id) === undefined) {
                            return dish;
                        } else {
                            return {
                                ...dish,
                                dishOptions: dish.dishOptions.filter((opt) => opt.id !== dishOpt.id)
                            }
                        }
                    }
    
                    return dish;
                });
    
                return {
                    dishUpdated: Math.random().toString(),
                    customerDishes: updatedDishes
                }
            }
        });
    },
    updateFoodPack: (pack: IFoodPack, dishId: string, action: actionType) => {
        set((state) => {
            if (action === 'add') {
                //* as they can be only one foodpack the add action replaces the existing foodpack
                const updatedDishes = state.customerDishes.map(dish => {
                    if (dish.id === dishId) {
                        if (dish.foodPack !== undefined) {
                            const oldPack = dish.foodPack;

                            return {
                                ...dish,
                                cumPrice: (dish.cumPrice - oldPack.price) + pack.price,
                                totalDishPrice: (dish.totalDishPrice - oldPack.price) + pack.price,
                                foodPack: pack,
                            }
                        } else {
                            return {
                                ...dish,
                                cumPrice: dish.cumPrice + pack.price,
                                totalDishPrice: dish.totalDishPrice + pack.price,
                                foodPack: pack,
                            }
                        }
                    }

                    return dish;
                });
                
                return {
                    dishUpdated: Math.random().toString(),
                    customerDishes: updatedDishes
                }
            } else {
                const updatedDishes = state.customerDishes.map(dish => {
                    if (dish.id === dishId) {
                        if (dish.foodPack === undefined) return dish;
                        return {
                            ...dish,
                            cumPrice: dish.cumPrice - dish.foodPack.price,
                            totalDishPrice: dish.totalDishPrice - dish.foodPack.price,
                            foodPack: undefined,
                        }
                    }

                    return dish;
                });
                
                return {
                    dishUpdated: Math.random().toString(),
                    customerDishes: updatedDishes
                }
            }
        });
    },
    updateFoodItemsInDishOptions: (foodItem: IFoodItem, dishId: string, dishOpt: IDishOption, action: actionType) => {
        set((state) => {
            let existingDish = state.customerDishes.find((dish) => dish.id === dishId)

            if (existingDish === undefined) return state;

            if (action === 'add') {

                let existingDishOption = existingDish.dishOptions.find((opt) => opt.id === dishOpt.id);

                if (existingDishOption === undefined) {
                    existingDishOption = dishOpt;
                }

                existingDishOption.foodItems.push(foodItem);

                let foodItemPrices = existingDishOption.foodItems.map(item => item.price);

                let totalPrices = foodItemPrices.reduce((prevPrice, currPrice) => {
                    return prevPrice + currPrice
                }, 0)

                existingDishOption.price = totalPrices;

                let optIndex = existingDish.dishOptions.indexOf(existingDishOption);

                if (optIndex < 0) return state;

                existingDish.dishOptions[optIndex] = existingDishOption;

                let dishIndex = state.customerDishes.indexOf(existingDish);

                if (dishIndex < 0) return state;

                state.customerDishes[dishIndex] = existingDish;

                console.log("the updated customer dishes: ", state.customerDishes);
                return {
                    customerDishes: state.customerDishes
                }

            } else {
                let existingDishOption = existingDish.dishOptions.find((opt) => opt.id === dishOpt.id);

                console.log(existingDishOption);
                if (existingDishOption === undefined) {
                    console.log("i got here....");
                    return state;
                };

                let newFoodItems = existingDishOption.foodItems.filter((foodItm) => (foodItm.id !== foodItem.id))
                
                existingDishOption.foodItems = newFoodItems;
                
                let foodItemPrices = existingDishOption.foodItems.map(item => item.price);

                let totalPrices = foodItemPrices.reduce((prevPrice, currPrice) => {
                    return prevPrice + currPrice
                }, 0)

                existingDishOption.price = totalPrices;

                let optIndex = existingDish.dishOptions.indexOf(existingDishOption);

                if (optIndex < 0) return state;

                existingDish.dishOptions[optIndex] = existingDishOption;

                let dishIndex = state.customerDishes.indexOf(existingDish);

                if (dishIndex < 0) return state;

                state.customerDishes[dishIndex] = existingDish;

                console.log("the updated customer dishes: ", state.customerDishes);

                return {
                    customerDishes: state.customerDishes
                }
            }
        })
    },
    updateCustomerDishes: (dish: IDish, action: actionType) => {
        set((state) => {
            if (action === 'add') {
                const existingDish = state.customerDishes.find((existingDish) => existingDish.id === dish.id);
                
                if (existingDish === undefined) {
                    return {
                        dishUpdated: Math.random().toString(),
                        customerDishes: [...state.customerDishes, {...dish, quantity: 1, dishOptions: [], foodPack: undefined, totalDishPrice: dish.price, cumPrice: dish.price}]
                    }
                } else {
                    const updatedDishes = state.customerDishes.map((existingDish) => {
                        if (existingDish.id === dish.id) {
                            let updatedQuantity = existingDish.quantity + 1;

                            return {...existingDish, quantity: updatedQuantity, totalDishPrice: existingDish.cumPrice * updatedQuantity};
                        }
    
                        return existingDish;
                    });

                    return {
                        dishUpdated: Math.random().toString(),
                        customerDishes: updatedDishes
                    }
                }

                // if (existingDish === undefined) {
                //     return {
                //         customerDishes: [...state.customerDishes, {...dish, quantity: 1, dishOptions: [], foodPack: undefined }],
                //     }   
                // } else {

                // }
            } else {
                const updatedDishes = state.customerDishes.map((existingDish) => {
                    if (existingDish.id === dish.id && existingDish.quantity > 1) {
                        let updatedQuantity = existingDish.quantity - 1;

                        return {...existingDish, quantity: updatedQuantity, totalDishPrice: existingDish.cumPrice * updatedQuantity};
                    }
                    
                    if (existingDish.id === dish.id && existingDish.quantity === 1) {
                        return {
                            id: "",
                            name: "",
                            description: "",
                            price: 0,
                            available: false,
                            quantity: 0,
                            totalDishPrice: 0,
                            oldPrice: 0,
                            dishOptions: [],
                            cumPrice: 0,
                            foodPack: undefined,
                        };
                    }

                    return existingDish;
                });

                return {
                    dishUpdated: Math.random().toString(),
                    customerDishes: updatedDishes.filter((removedDish) => removedDish.id !== ""),
                }

                // const existingDishes = state.customerDishes.filter(edish => (edish.id === dish.id));

                // if (existingDishes.length === 0) {
                //     return {
                //         customerDishes: state.customerDishes.filter(edish => (edish.id !== dish.id))
                //     }
                // } else {
                //     return {
                //         customerDishes: [...state.customerDishes.filter(edish => (edish.id !== dish.id)), existingDishes[existingDishes.length - 1]]
                //     }
                // }
            }
        })
    },
    updateOpts: (dishId: string, dishOpts: IDishOption[], foodPacks: IFoodPack[], action: cartActionType) => {
        set((state) => {
            if (action === 'add') {
                const newOpts = state.options.map((opt) => {
                    if (opt.dishId === dishId) {
                        return { ...opt, dishOpts, foodPacks }
                    };

                    return opt
                });

                return {
                    options: newOpts
                }

            } else {
                const newOpts: IOptions = { dishId: dishId, dishOpts, foodPacks }
                
                return {
                    options: [...state.options, newOpts]
                }
            }
        });
    },
    clearCustomerDishes: () => set({ customerDishes: [] }),
    updateCart: (dish: ISelectedDish, action: cartActionType) => {
        set((state) => {
            if (action === 'add') {
                let indexOfFocus: number = 0;

                //! do a deep check of the dishoptions to find out if we are updating the right cart
                // const existingCartItems = state.cart.filter((cartItem) => cartItem.id === dish.id);

                // if (existingCartItems.length === 0) return state;

                const similarityCheck = state.cart.some((cartItem, index) => {
                    indexOfFocus = index

                    const deepCheck = cartItem.dishOptions.every((opt, optIndex) => { 
                        const foodItemsDeepCheck = opt.foodItems.every((item, itemIndex) => {
                            return dish.dishOptions[optIndex]?.foodItems[itemIndex].id === item.id;
                        });

                        // console.log("====================================================");
                        // console.log("food items deep: ", foodItemsDeepCheck);
                        // console.log("full third: ", dish.dishOptions[optIndex].id === opt.id && opt.foodItems.length === dish.dishOptions[optIndex].foodItems.length
                        //     && foodItemsDeepCheck);

                        return dish.dishOptions[optIndex]?.id === opt.id && opt.foodItems.length === dish.dishOptions[optIndex].foodItems.length
                            && foodItemsDeepCheck;
                    });

                    // console.log("============================================================================");
                    // console.log("first condition: ", cartItem.id === dish.id
                    // && cartItem.dishOptions.length === dish.dishOptions.length
                    // && cartItem.foodPack === dish.foodPack && deepCheck);
    

                    return cartItem.id === dish.id
                        && cartItem.dishOptions.length === dish.dishOptions.length
                        && cartItem.foodPack?.id === dish.foodPack?.id && deepCheck   
                });

                console.log("the index", indexOfFocus);

                // console.log("the index", state.cart[similarityCheck]);

                if (similarityCheck) {
                    let existingCartItem = state.cart[indexOfFocus];

                    // console.log("the dish.....", dish);
                    // console.log("existingCartItem: ", existingCartItem);

                    const updatedCart = state.cart.map((cartItem, index) => {
                        if (indexOfFocus === index) {
                            let updatedQuantity = existingCartItem.quantity + 1;
                            // console.log("what i am getting in the map: ", cartItem);
                            return { ...existingCartItem, quantity: updatedQuantity, totalDishPrice: existingCartItem.cumPrice * updatedQuantity }
                        }
    
                        return cartItem;
                    });

                    return {
                        cart: updatedCart
                    }
                } else {
                    return state
                }
            } else if (action === 'migrate') {
                let indexOfFocus: number = 0;
            
                const dishToAddToCart = state.customerDishes.find(existingDish => existingDish.id === dish.id);

                if (dishToAddToCart === undefined) return state;

                //check if the dish i am adding is in the cart already with the same dishoptions and foodpack
                const alreadyExists = state.cart.some((cartItem, index) => {
                    indexOfFocus = index

                    const deepCheck = cartItem.dishOptions.every((opt, optIndex) => { 
                        const foodItemsDeepCheck = opt.foodItems.every((item, itemIndex) => {
                            return dish.dishOptions[optIndex]?.foodItems[itemIndex].id === item.id;
                        });

                        // console.log("====================================================");
                        // console.log("food items deep: ", foodItemsDeepCheck);
                        // console.log("full third: ", dish.dishOptions[optIndex].id === opt.id && opt.foodItems.length === dish.dishOptions[optIndex].foodItems.length
                        //     && foodItemsDeepCheck);

                        return dish.dishOptions[optIndex]?.id === opt.id && opt.foodItems.length === dish.dishOptions[optIndex].foodItems.length
                            && foodItemsDeepCheck;
                    });

                    // console.log("============================================================================");
                    // console.log("first condition: ", cartItem.id === dish.id
                    // && cartItem.dishOptions.length === dish.dishOptions.length
                    // && cartItem.foodPack === dish.foodPack && deepCheck);
    

                    return cartItem.id === dish.id
                        && cartItem.dishOptions.length === dish.dishOptions.length
                        && cartItem.foodPack?.id === dish.foodPack?.id && deepCheck   
                });

                // console.log("same thing in cart: ", alreadyExists);

                if (alreadyExists) {
                    const updatedCart = state.cart.map((cartItem, index) => {
                        if (indexOfFocus === index) {
                            let newQuantity = cartItem.quantity + dish.quantity;
                            return { ...cartItem, quantity: newQuantity, totalDishPrice: cartItem.cumPrice * newQuantity };
                        }

                        return cartItem;
                    });

                    return {
                        dishUpdated: Math.random().toString(),
                        customerDishes: state.customerDishes.filter((existingDish) => existingDish.id !== updatedCart[indexOfFocus].id),
                        cart: updatedCart
                    }

                } else {
                    return {
                        dishUpdated: Math.random().toString(),
                        customerDishes: state.customerDishes.filter((existingDish) => existingDish.id !== dish.id),
                        cart: [...state.cart, dishToAddToCart]
                    }
                }

            } else {
                let indexOfFocus = 0;

                //! do a deep check of the dishoptions to find out if we are updating the right cart
                // const existingCartItems = state.cart.filter((cartItem) => cartItem.id === dish.id);

                const similarityCheck = state.cart.some((cartItem, index) => {
                    indexOfFocus = index;
                    return cartItem.dishOptions.length === dish.dishOptions.length
                        && cartItem.id === dish.id
                        && cartItem.foodPack?.id === dish.foodPack?.id
                        && cartItem.dishOptions.every((opt, optIndex) => {
                            return dish.dishOptions[optIndex]?.id === opt.id
                                && dish.dishOptions[optIndex].foodItems.length === opt.foodItems.length
                                && opt.foodItems.every((item, itemIndex) => {
                                return dish.dishOptions[optIndex].foodItems[itemIndex]?.id === item.id
                            });
                        });
                });

                if (similarityCheck) {
                    let itemOfFocus = state.cart[indexOfFocus];

                    /* 
                        return existingDish.id !== dish.id &&
                        existingDish.dishOptions.every((opt, optIndex) => {
                            return dish.dishOptions[optIndex] !== opt && opt.foodItems.every((item, itemIndex) => {
                                dish.dishOptions[optIndex].foodItems[itemIndex] !== item
                            });
                        }); 
                    */

                    if (itemOfFocus.quantity === 1) {
                        return {
                            cart: state.cart.filter((_, index) => index !== indexOfFocus)
                        }
                    }

                    if (itemOfFocus.quantity > 1) {
                        const updatedCart = state.cart.map((cartItem, index) => {
                            if (index === indexOfFocus) {
                                let updatedQuantity = cartItem.quantity - 1;
                                return { ...cartItem, quantity: updatedQuantity, totalDishPrice: cartItem.cumPrice * updatedQuantity };
                            }

                            return cartItem;
                        });

                        return {
                            cart: updatedCart,
                        }
                    } else {
                        return state;
                    }
                } else {
                    return state;
                }
            }
        });
    },
    updateNotification: (notif) => {
        set((state) => {
            return {
                ...state,
                notification: notif
            }
        })
    },
    clearCart: () => {
        set({ cart: [] });
    },
    logout: () => set({customer: {id: '', firstName: '', lastName: '', email: ''}, accessToken: null, refreshToken: null, accessTokenExpirationTime: 0}),
}), {
    name: 'zustand-store',
    storage: createJSONStorage(() => AsyncStorage),
})));

export {
    useCustomerStore
}
