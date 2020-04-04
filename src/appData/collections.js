const Collections = [
    {
        id: 1,
        categoryTitle: 'everyday value',
        linkUrl: 'everyday-value',
        items: [
            {
                id: 1,
                image: '/collections/everyday/1st.jpg',
                title: 'RICE AND SPICE',
                description: 'Rice And Spice',
                route: 'meals/everyday-value/1',
                backRoute: 'meals/everyday-value',
                price: 250,
                addon: [
                    {
                        addon_id: 1,
                        expand: 'panel1',
                        aria_controls: 'panel1bh-content', 
                        drink_title: 'Select Drink 1',
                        products: [
                            {
                                id: 1,
                                value: 'Pepsi'
                            },
                            {
                                id: 2,
                                value: '7Up'
                            },
                            {
                                id: 3,
                                value: 'Mirinda'
                            },
                            {
                                id: 4,
                                value: 'Mountain Dew'
                            },
                            {
                                id: 5,
                                value: 'Diet Pepsi'
                            },
                            {
                                id: 6,
                                value: 'Diet 7Up'
                            }
                        ]
                    },
                    {
                        addon_id: 2,
                        expand: 'panel2',
                        aria_controls: 'panel2bh-content',
                        drink_title: 'Select Drink 2', 
                        products: [
                            {
                                id: 7,
                                value: 'Pepsi'
                            },
                            {
                                id: 8,
                                value: '7Up'
                            },
                            {
                                id: 9,
                                value: 'Mirinda'
                            },
                            {
                                id: 10,
                                value: 'Mountain Dew'
                            },
                            {
                                id: 11,
                                value: 'Diet Pepsi'
                            },
                            {
                                id: 12,
                                value: 'Diet 7Up'
                            }
                        ]
                    },
                    {
                        addon_id: 3,
                        expand: 'panel3',
                        aria_controls: 'panel3bh-content',
                        drink_title: 'Select Drink 3', 
                        products: [

                        ]
                    },
                    {
                        addon_id: 4,
                        expand: 'panel4',
                        aria_controls: 'panel4bh-content', 
                        drink_title: 'Adds On',
                        products: [
                            {
                                id: 1,
                                title: 'Dinner Roll',
                                Pro_price: 20,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 2,
                                title: 'Mayo Dip',
                                Pro_price: 20,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 3,
                                title: 'Coleslaw',
                                Pro_price: 40,
                                quantity: 1,
                                isChecked: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                image: '/collections/everyday/2nd.jpg',
                title: 'KRUNCH BURGER',
                description: 'Enjoy a crispy Krunchy chicken fillet on a bed of lettuce with a soft bun, topped with spicy mayo and our signature..',
                route: 'meals/everyday-value/2',
                backRoute: 'meals/everyday-value',
                price: 180
            },
            {
                id: 3,
                image: '/collections/everyday/3rd.jpg',
                title: 'KRUNCH BURGER WITH DRINK',
                description: 'Krunch Burger + 345 ml Drink',
                route: 'meals/everyday-value/3',
                backRoute: 'meals/everyday-value',
                price: 250
            },
            {
                id: 4,
                image: '/collections/everyday/4th.jpg',
                title: 'KRUNCH COMBO',
                description: 'Krunch Burger + Reg Fries + 345 ml DrinkEnjoy a crispy crunchy chicken fillet on a bed of lettuce with a soft bun, ..',
                route: 'meals/everyday-value/4',
                backRoute: 'meals/everyday-value',
                price: 350
            },
            {
                id: 5,
                image: '/collections/everyday/5th.jpg',
                title: 'KRUNCH CHICKEN COMBO',
                description: 'Krunch Burger + 1Pc Chicken + 345 ml Drink. Enjoy a crispy crunchy chicken fillet on a bed of lettuce with a soft b..',
                route: 'meals/everyday-value/5',
                backRoute: 'meals/everyday-value',
                price: 390
            },
            {
                id: 6,
                image: '/collections/everyday/6th.jpg',
                title: 'CHICKEN AND CHIPS',
                description: '2 Pc Chicken + 1 Dip + 1 Fries + 1 Dinner Roll',
                route: 'meals/everyday-value/6',
                backRoute: 'meals/everyday-value',
                price: 350
            },
            {
                id: 7,
                image: '/collections/everyday/7th.jpg',
                title: 'CHICKEN AND RICE',
                description: "KFC's famous arabian rice with krunch fillet on top, drizzled with our signature vietnamese dip",
                route: 'meals/everyday-value/7',
                backRoute: 'meals/everyday-value',
                price: 230
            }
        ]
    },

    {
        id: 2,
        categoryTitle: 'Make It a Meal',
        linkUrl: 'make-it-a-meal',
        items: [
            {
                id: 1,
                image: '/collections/makeitmeal/1st.jpg',
                title: 'KENTUCKY',
                description: 'Indulge in the taste of crispy Zinger fillet, beef pepperoni, cheese and signature sauce',
                route: 'meals/make-it-a-meal/1',
                backRoute: 'meals/make-it-a-meal',
                price: 440
            },
            {
                id: 2,
                image: '/collections/makeitmeal/2nd.jpg',
                title: 'ZINGER STACKER',
                description: 'Marinated fillets with our signature spicy sauce,cheese,and loaded with jalapenos,all of this wrapped in a new bun',
                route: 'meals/make-it-a-meal/2',
                backRoute: 'meals/make-it-a-meal',
                price: 450
            },
            {
                id: 3,
                image: '/collections/makeitmeal/3rd.jpg',
                title: 'ZINGER',
                description: 'Delicious pieces of juicy chicken thigh with KFC Spicy Zinger Recipe, fresh lettuce in a fresh round bun',
                route: 'meals/make-it-a-meal/3',
                backRoute: 'meals/make-it-a-meal',
                price: 420
            },
            {
                id: 4,
                image: '/collections/makeitmeal/4th.jpg',
                title: 'MIGHTY ZINGER',
                description: 'Delicious pieces of juicy chicken thigh with KFC Spicy Zinger Recipe, cheese, fresh lettuce in a fresh round bun su..',
                route: 'meals/make-it-a-meal/4',
                backRoute: 'meals/make-it-a-meal',
                price: 530
            },
            {
                id: 5,
                image: '/collections/makeitmeal/5th.jpg',
                title: 'TWISTER',
                description: 'Zinger Fillets drizzled with pepper mayo, diced tomatoes and fresh lettuce, wrapped in a lightly toasted tortilla. ..',
                route: 'meals/make-it-a-meal/5',
                backRoute: 'meals/make-it-a-meal',
                price: 300
            }
        ]
    },

    {
        id: 3,
        categoryTitle: 'Meal Box',
        linkUrl: 'meal-box',
        items: [
            {
                id: 1,
                image: '/collections/mealbox/1st.jpg',
                title: 'TWISTY BOX',
                description: '1 Twister + 1 Fries + Drink + Coleslaw + 1 Pc Chicken',
                route: 'meals/meal-box/1',
                backRoute: 'meals/meal-box',
                price: 580
            },
            {
                id: 2,
                image: '/collections/mealbox/2nd.jpg',
                title: 'BONELESS BOX',
                description: '4 Zinger Strips + 1 Coleslaw + Fries + Drink + 1 Dip + 1 Dinner Roll',
                route: 'meals/meal-box/2',
                backRoute: 'meals/meal-box',
                price: 520
            },
            {
                id: 3,
                image: '/collections/mealbox/3rd.jpg',
                title: 'WOW BOX',
                description: '1 Zinger Burger + 1 Pc Chicken + 1 Fries + 1 Drink + 1 Coleslaw',
                route: 'meals/meal-box/3',
                backRoute: 'meals/meal-box',
                price: 695
            },
            {
                id: 4,
                image: '/collections/mealbox/4th.jpeg',
                title: 'XTREME BOX',
                description: '2 Zingers + 2 Pcs Hot & Crispy Chicken + 1 Large Fries + 2 Drinks',
                route: 'meals/meal-box/4',
                backRoute: 'meals/meal-box',
                price: 1095
            },
            {
                id: 5,
                image: '/collections/mealbox/5th.jpg',
                title: 'CRISPY BOX',
                description: '5 Pcs Hot & Crispy Chicken + 1 Large Fries + 2 Drinks',
                route: 'meals/meal-box/5',
                backRoute: 'meals/meal-box',
                price: 850
            },
        ]
    },

    {
        id: 4,
        categoryTitle: 'Sharing',
        linkUrl: 'sharing',
        items: [
            {
                id: 1,
                image: '/collections/sharing/1st.jpg',
                title: 'TRIPLE TREAT',
                description: '3 Krunch Burgers + 3 Reg Drinks',
                route: 'meals/sharing/1',
                backRoute: 'meals/sharing',
                price: 595,
                addon: [
                    {
                        addon_id: 1,
                        expand: 'panel1',
                        aria_controls: 'panel1bh-content', 
                        drink_title: 'Select Drink 1',
                        products: [
                            {
                                id: 1,
                                value: 'Pepsi'
                            },
                            {
                                id: 2,
                                value: '7Up'
                            },
                            {
                                id: 3,
                                value: 'Mirinda'
                            },
                            {
                                id: 4,
                                value: 'Mountain Dew'
                            },
                            {
                                id: 5,
                                value: 'Diet Pepsi'
                            },
                            {
                                id: 6,
                                value: 'Diet 7Up'
                            }
                        ]
                    },
                    {
                        addon_id: 2,
                        expand: 'panel2',
                        aria_controls: 'panel2bh-content',
                        drink_title: 'Select Drink 2', 
                        products: [
                            {
                                id: 7,
                                value: 'Pepsi'
                            },
                            {
                                id: 8,
                                value: '7Up'
                            },
                            {
                                id: 9,
                                value: 'Mirinda'
                            },
                            {
                                id: 10,
                                value: 'Mountain Dew'
                            },
                            {
                                id: 11,
                                value: 'Diet Pepsi'
                            },
                            {
                                id: 12,
                                value: 'Diet 7Up'
                            }
                        ]
                    },
                    {
                        addon_id: 3,
                        expand: 'panel3',
                        aria_controls: 'panel3bh-content',
                        drink_title: 'Select Drink 3', 
                        products: [
                            {
                                id: 13,
                                value: 'Pepsi'
                            }
                        ]
                    },
                    {
                        addon_id: 4,
                        expand: 'panel4',
                        aria_controls: 'panel4bh-content', 
                        drink_title: 'Adds On',
                        products: [
                            {
                                id: 1,
                                title: 'Dinner Roll',
                                Pro_price: 20,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 2,
                                title: 'Mayo Dip',
                                Pro_price: 20,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 3,
                                title: 'Vietnamese Dip Sauce',
                                Pro_price: 20,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 4,
                                title: 'Coleslaw',
                                Pro_price: 40,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 5,
                                title: 'Corn on the Cob',
                                Pro_price: 120,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 6,
                                title: 'Fresh Fries Bucket Mayo',
                                Pro_price: 20,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 7,
                                title: 'Fresh Fries Bucket (Vietnamese)',
                                Pro_price: 220,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 8,
                                title: 'Honey Mustard Dip',
                                Pro_price: 220,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 9,
                                title: '1 Pc Chicken',
                                Pro_price: 30,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 10,
                                title: 'Hot Wings (10 Pcs)',
                                Pro_price: 180,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 11,
                                title: 'Krunch Burger 1 Cheese',
                                Pro_price: 40,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 12,
                                title: 'Krunch Burger 2 Cheese',
                                Pro_price: 40,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 13,
                                title: 'Krunch Burger 3 Cheese',
                                Pro_price: 40,
                                quantity: 1,
                                isChecked: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                image: '/collections/sharing/2nd.jpg',
                title: 'VALUE BUCKET',
                description: '9 Pcs Hot & Crispy Chicken',
                route: 'meals/sharing/2',
                backRoute: 'meals/sharing',
                price: 1150,
                addon: [
                    {
                        addon_id: 1,
                        expand: 'panel1',
                        aria_controls: 'panel1bh-content', 
                        drink_title: 'Add Drink',
                        products: [
                            {
                                id: 1,
                                value: 'Pepsi',
                                price: 90
                            },
                            {
                                id: 2,
                                value: '7Up',
                                price: 90
                            },
                            {
                                id: 3,
                                value: 'Mirinda',
                                price: 90
                            },
                            {
                                id: 4,
                                value: 'Mountain Dew',
                                price: 90
                            },
                            {
                                id: 5,
                                value: 'Diet Pepsi',
                                price: 90
                            },
                            {
                                id: 6,
                                value: 'Diet 7Up',
                                price: 90
                            }
                        ]
                    },
                    {
                        addon_id: 4,
                        expand: 'panel4',
                        aria_controls: 'panel4bh-content', 
                        drink_title: 'Adds On',
                        products: [
                            {
                                id: 1,
                                title: '1 Pc Chicken',
                                Pro_price: 180,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 2,
                                title: 'Coleslae',
                                Pro_price: 40,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 3,
                                title: 'Corn on the Cob',
                                Pro_price: 120,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 4,
                                title: 'Hot Wings (10 Pcs)',
                                Pro_price: 390,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 5,
                                title: 'Vietnamese Dip Sauce',
                                Pro_price: 20,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 6,
                                title: 'Mayo Dip',
                                Pro_price: 20,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 7,
                                title: 'Honey Mustard Dip',
                                Pro_price: 30,
                                quantity: 1,
                                isChecked: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                image: '/collections/sharing/3rd.jpeg',
                title: 'FAMILY BUCKET',
                description: '9 Pcs Chicken + 2 Coleslaws + 1 Fries Bucket + 1.5L Drink',
                route: 'meals/sharing/3',
                backRoute: 'meals/sharing',
                price: 1550,
                addon: [
                    {
                        addon_id: 1,
                        expand: 'panel1',
                        aria_controls: 'panel1bh-content', 
                        drink_title: 'Select Drink',
                        products: [
                            {
                                id: 1,
                                value: 'Pepsi',
                            },
                            {
                                id: 2,
                                value: '7Up',
                            },
                            {
                                id: 3,
                                value: 'Mirinda',
                            },
                            {
                                id: 4,
                                value: 'Mountain Dew',
                            },
                            {
                                id: 5,
                                value: 'Diet Pepsi',
                            },
                            {
                                id: 6,
                                value: 'Diet 7Up',
                            }
                        ]
                    },
                    {
                        addon_id: 4,
                        expand: 'panel4',
                        aria_controls: 'panel4bh-content', 
                        drink_title: 'Adds On',
                        products: [
                            {
                                id: 1,
                                title: 'Dinner Roll',
                                Pro_price: 20,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 2,
                                title: 'Mayo Dip',
                                Pro_price: 20,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 3,
                                title: 'Vietnamese Dip Sauce',
                                Pro_price: 20,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 4,
                                title: '1 Pc Chicken',
                                Pro_price: 180,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 5,
                                title: 'Coleslae',
                                Pro_price: 40,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 6,
                                title: 'Corn on the Cob',
                                Pro_price: 120,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 7,
                                title: 'Hot Wings (10 Pcs)',
                                Pro_price: 390,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 8,
                                title: 'Honey Mustard Dip',
                                Pro_price: 30,
                                quantity: 1,
                                isChecked: false
                            },
                            {
                                id: 9,
                                title: 'Add Spice to Fries',
                                Pro_price: 10,
                                quantity: 1,
                                isChecked: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 4,
                image: '/collections/sharing/4th.jpeg',
                title: 'FAMILY FESTIVAL 1',
                description: '2 Zingers + 2 Krunch Burgers + 4 Pcs Chicken + 2 Dinner Rolls + 1.5 Ltr Drink',
                route: 'meals/sharing/4',
                backRoute: 'meals/sharing',
                price: 1595
            },
            {
                id: 5,
                image: '/collections/sharing/5th.jpeg',
                title: 'FAMILY FESTIVAL 2',
                description: '4 Zinger Burgers + 4 Pcs Chicken + 2 Dinner Rolls + 1.5 Ltr Drink',
                route: 'meals/sharing/5',
                backRoute: 'meals/sharing',
                price: 1795
            },
        ]
    },

    {
        id: 5,
        categoryTitle: 'Promotions',
        linkUrl: 'promotion',
        items: [
            {
                id: 1,
                image: '/collections/promotions/1st.jpg',
                title: 'TRIPLE TREAT',
                description: '3 Krunch Burgers + 3 Reg Drinks',
                route: 'meals/promotion/1',
                backRoute: 'meals/promotion',
                price: 595,
                addon: [
                    {
                        addon_id: 1,
                        expand: 'panel1',
                        aria_controls: 'panel1bh-content', 
                        drink_title: 'Select Drink 1',
                        products: [
                            {
                                id: 1,
                                value: 'Pepsi'
                            },
                            {
                                id: 2,
                                value: '7Up'
                            },
                            {
                                id: 3,
                                value: 'Mirinda'
                            },
                            {
                                id: 4,
                                value: 'Mountain Dew'
                            },
                            {
                                id: 5,
                                value: 'Diet Pepsi'
                            },
                            {
                                id: 6,
                                value: 'Diet 7Up'
                            }
                        ]
                    },
                    {
                        addon_id: 2,
                        expand: 'panel2',
                        aria_controls: 'panel2bh-content',
                        drink_title: 'Select Drink 2', 
                        products: [
                            {
                                id: 7,
                                value: 'Pepsi'
                            },
                            {
                                id: 8,
                                value: '7Up'
                            },
                            {
                                id: 9,
                                value: 'Mirinda'
                            },
                            {
                                id: 10,
                                value: 'Mountain Dew'
                            },
                            {
                                id: 11,
                                value: 'Diet Pepsi'
                            },
                            {
                                id: 12,
                                value: 'Diet 7Up'
                            }
                        ]
                    },
                    {
                        addon_id: 3,
                        expand: 'panel3',
                        aria_controls: 'panel3bh-content',
                        drink_title: 'Select Drink 3', 
                        products: [
                            {
                                id: 13,
                                value: 'Pepsi'
                            }
                        ]
                    },
                    {
                        addon_id: 4,
                        expand: 'panel4',
                        aria_controls: 'panel4bh-content', 
                        drink_title: 'Adds On',
                        products: [
                            {
                                id: 1,
                                title: 'Dinner Roll',
                                Pro_price: 20
                            },
                            {
                                id: 2,
                                title: 'Mayo Dip',
                                Pro_price: 20
                            },
                            {
                                id: 3,
                                title: 'Vietnamese Dip Sauce',
                                Pro_price: 20
                            },
                            {
                                id: 4,
                                title: 'Coleslaw',
                                Pro_price: 40
                            },
                            {
                                id: 5,
                                title: 'Corn on the Cob',
                                Pro_price: 120
                            },
                            {
                                id: 6,
                                title: 'Fresh Fries Bucket Mayo',
                                Pro_price: 20
                            },
                            {
                                id: 7,
                                title: 'Fresh Fries Bucket (Vietnamese)',
                                Pro_price: 220
                            },
                            {
                                id: 8,
                                title: 'Honey Mustard Dip',
                                Pro_price: 220
                            },
                            {
                                id: 9,
                                title: '1 Pc Chicken',
                                Pro_price: 30
                            },
                            {
                                id: 10,
                                title: 'Hot Wings (10 Pcs)',
                                Pro_price: 180
                            },
                            {
                                id: 11,
                                title: 'Krunch Burger 1 Cheese',
                                Pro_price: 40
                            },
                            {
                                id: 12,
                                title: 'Krunch Burger 2 Cheese',
                                Pro_price: 40
                            },
                            {
                                id: 13,
                                title: 'Krunch Burger 3 Cheese',
                                Pro_price: 40
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                image: '/collections/promotions/2nd.png',
                title: '2 AWESOME',
                description: '2 Zingers + 2 Regular Drinks',
                route: 'meals/promotion/2',
                backRoute: 'meals/promotion',
                price: 795,
                addon: [
                    {
                        addon_id: 1,
                        expand: 'panel1',
                        aria_controls: 'panel1bh-content', 
                        drink_title: 'Select Drink 1',
                        products: [
                            {
                                id: 1,
                                value: 'Pepsi'
                            },
                            {
                                id: 2,
                                value: '7Up'
                            },
                            {
                                id: 3,
                                value: 'Mirinda'
                            },
                            {
                                id: 4,
                                value: 'Mountain Dew'
                            },
                            {
                                id: 5,
                                value: 'Diet Pepsi'
                            },
                            {
                                id: 6,
                                value: 'Diet 7Up'
                            }
                        ]
                    },
                    {
                        addon_id: 2,
                        expand: 'panel2',
                        aria_controls: 'panel2bh-content',
                        drink_title: 'Select Drink 2', 
                        products: [
                            {
                                id: 7,
                                value: 'Pepsi'
                            },
                            {
                                id: 8,
                                value: '7Up'
                            },
                            {
                                id: 9,
                                value: 'Mirinda'
                            },
                            {
                                id: 10,
                                value: 'Mountain Dew'
                            },
                            {
                                id: 11,
                                value: 'Diet Pepsi'
                            },
                            {
                                id: 12,
                                value: 'Diet 7Up'
                            }
                        ]
                    },
                    {
                        addon_id: 4,
                        expand: 'panel4',
                        aria_controls: 'panel4bh-content', 
                        drink_title: 'Adds On',
                        products: [
                            {
                                id: 1,
                                title: 'Dinner Roll',
                                Pro_price: 20
                            },
                            {
                                id: 2,
                                title: 'Mayo Dip',
                                Pro_price: 20
                            },
                            {
                                id: 3,
                                title: 'Vietnamese Dip Sauce',
                                Pro_price: 20
                            },
                            {
                                id: 4,
                                title: 'Coleslaw',
                                Pro_price: 40
                            },
                            {
                                id: 5,
                                title: 'Corn on the Cob',
                                Pro_price: 120
                            },
                            {
                                id: 6,
                                title: 'Fresh Fries Bucket Mayo',
                                Pro_price: 20
                            },
                            {
                                id: 7,
                                title: 'Fresh Fries Bucket (Vietnamese)',
                                Pro_price: 220
                            },
                            {
                                id: 8,
                                title: 'Honey Mustard Dip',
                                Pro_price: 30
                            },
                            {
                                id: 9,
                                title: '1 Pc Chicken',
                                Pro_price: 40
                            },
                            {
                                id: 10,
                                title: 'Hot Wings (10 Pcs)',
                                Pro_price: 390
                            },
                            {
                                id: 11,
                                title: 'Cheese Slice Zinger Burger 1',
                                Pro_price: 40
                            },
                            {
                                id: 12,
                                title: 'Cheese Slice Zinger Burger 2',
                                Pro_price: 40
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                image: '/collections/promotions/3rd.png',
                title: 'ALL STAR DEAL',
                description: '1 Mighty Zinger + 1 Stacker + 1 Kentucky +  1 Zinger + 1.5L Drink',
                route: 'meals/promotion/3',
                backRoute: 'meals/promotion',
                price: 1345,
                addon: [
                    {
                        addon_id: 1,
                        expand: 'panel1',
                        aria_controls: 'panel1bh-content', 
                        drink_title: 'Select Drink',
                        products: [
                            {
                                id: 1,
                                value: 'Pepsi'
                            },
                            {
                                id: 2,
                                value: '7Up'
                            },
                            {
                                id: 3,
                                value: 'Mirinda'
                            },
                            {
                                id: 4,
                                value: 'Mountain Dew'
                            },
                            {
                                id: 5,
                                value: 'Diet Pepsi'
                            },
                            {
                                id: 6,
                                value: 'Diet 7Up'
                            }
                        ]
                    },
                    {
                        addon_id: 4,
                        expand: 'panel4',
                        aria_controls: 'panel4bh-content', 
                        drink_title: 'Adds On',
                        products: [
                            {
                                id: 1,
                                title: 'Dinner Roll',
                                Pro_price: 20
                            },
                            {
                                id: 2,
                                title: 'Mayo Dip',
                                Pro_price: 20
                            },
                            {
                                id: 3,
                                title: 'Vietnamese Dip Sauce',
                                Pro_price: 20
                            },
                            {
                                id: 4,
                                title: 'Coleslaw',
                                Pro_price: 40
                            },
                            {
                                id: 5,
                                title: 'Corn on the Cob',
                                Pro_price: 120
                            },
                            {
                                id: 6,
                                title: 'Fresh Fries Bucket Mayo',
                                Pro_price: 20
                            },
                            {
                                id: 7,
                                title: 'Fresh Fries Bucket (Vietnamese)',
                                Pro_price: 220
                            },
                            {
                                id: 8,
                                title: 'Honey Mustard Dip',
                                Pro_price: 30
                            },
                            {
                                id: 9,
                                title: '1 Pc Chicken',
                                Pro_price: 40
                            },
                            {
                                id: 10,
                                title: 'Hot Wings (10 Pcs)',
                                Pro_price: 390
                            },
                            {
                                id: 11,
                                title: 'Mighty Zinger Cheese Slice',
                                Pro_price: 40
                            },
                            {
                                id: 12,
                                title: 'Stacker Cheese Slice',
                                Pro_price: 40
                            },
                            {
                                id: 13,
                                title: 'Zinger Burger Cheese Slice',
                                Pro_price: 40
                            },
                            {
                                id: 14,
                                title: 'Kentucky Burger Cheese Slice',
                                Pro_price: 40
                            }
                        ]
                    }
                ]
            },
            {
                id: 4,
                image: '/collections/promotions/4th.png',
                title: 'LUNCH DEAL',
                description: '1 Pc. Chicken + 1 Arabian Rice + 1 Reg Drink + Vietnamese sauce *Deal available in lunch hour from 12 PM to 4 PM',
                route: 'meals/promotion/4',
                backRoute: 'meals/promotion',
                price: 330,
                addon: [
                    {
                        addon_id: 1,
                        expand: 'panel1',
                        aria_controls: 'panel1bh-content', 
                        drink_title: 'Select Drink',
                        products: [
                            {
                                id: 1,
                                value: 'Pepsi'
                            },
                            {
                                id: 2,
                                value: '7Up'
                            },
                            {
                                id: 3,
                                value: 'Mirinda'
                            },
                            {
                                id: 4,
                                value: 'Mountain Dew'
                            },
                            {
                                id: 5,
                                value: 'Diet Pepsi'
                            },
                            {
                                id: 6,
                                value: 'Diet 7Up'
                            }
                        ]
                    },
                    {
                        addon_id: 4,
                        expand: 'panel4',
                        aria_controls: 'panel4bh-content', 
                        drink_title: 'Adds On',
                        products: [
                            {
                                id: 1,
                                title: 'Dinner Roll',
                                Pro_price: 20
                            },
                            {
                                id: 2,
                                title: 'Mayo Dip',
                                Pro_price: 20
                            },
                            {
                                id: 3,
                                title: 'Vietnamese Dip Sauce',
                                Pro_price: 20
                            },
                            {
                                id: 4,
                                title: 'Coleslaw',
                                Pro_price: 40
                            },
                            {
                                id: 5,
                                title: 'Corn on the Cob',
                                Pro_price: 120
                            },
                            {
                                id: 6,
                                title: 'Fresh Fries Bucket Mayo',
                                Pro_price: 20
                            },
                            {
                                id: 7,
                                title: 'Fresh Fries Bucket (Vietnamese)',
                                Pro_price: 220
                            },
                            {
                                id: 8,
                                title: 'Honey Mustard Dip',
                                Pro_price: 30
                            },
                            {
                                id: 9,
                                title: '1 Pc Chicken',
                                Pro_price: 40
                            },
                            {
                                id: 10,
                                title: 'Hot Wings (10 Pcs)',
                                Pro_price: 390
                            }
                        ]
                    }
                ]
            },
            {
                id: 5,
                image: '/collections/promotions/5th.jpg',
                title: 'MINGLE BUCKET',
                description: 'Hot Wings + Fries Bucket. Consisting of a bucket of hot wings tossed in BBQ sauce paired with a scrumptious bucket ..',
                route: 'meals/promotion/5',
                backRoute: 'meals/promotion',
                price: 390
            },
            {
                id: 6,
                image: '/collections/promotions/6th.jpeg',
                title: 'XTREME BOX',
                description: '2 Zingers + 2 Pcs Hot & Crispy Chicken + 1 Large Fries + 2 Drinks',
                route: 'meals/promotion/6',
                backRoute: 'meals/promotion',
                price: 1095
            },
            {
                id: 7,
                image: '/collections/promotions/7th.jpg',
                title: 'CRISPY BOX',
                description: '5 Pcs Hot & Crispy Chicken + 1 Large Fries + 2 Drinks',
                route: 'meals/promotion/7',
                backRoute: 'meals/promotion',
                price: 850
            }
        ]
    },

    {
        id: 6,
        categoryTitle: 'Snacks',
        linkUrl: 'snacks',
        items: [
            {
                id: 1,
                image: '/collections/snacks/1st.jpg',
                title: 'CHICKY MEAL 1',
                description: '1 Krunch Burger + 1 Chicky Fries + 1 Drink/Slice + 1 Toy',
                route: 'meals/snacks/1',
                backRoute: 'meals/snacks',
                price: 350
            },
            {
                id: 2,
                image: '/collections/snacks/2nd.jpg',
                title: 'CHICKY MEAL 2',
                description: '4 Nuggets +1 Chicky Fries + 1 Drink/Slice + 1 Toy',
                route: 'meals/snacks/2',
                backRoute: 'meals/snacks',
                price: 325
            },
            {
                id: 3,
                image: '/collections/snacks/3rd.jpg',
                title: '1 CHICKEN PIECE',
                description: 'Who says you always have to share food? Get your very own KFC scrumptious chicken piece at an amazing price!',
                route: 'meals/snacks/3',
                backRoute: 'meals/snacks',
                price: 180
            },
            {
                id: 4,
                image: '/collections/snacks/4th.jpg',
                title: 'FRENCH FRIES BUCKET [VIETNAMESE]',
                description: 'Enjoy our amazing bucket of fries with vietnamese dip',
                route: 'meals/snacks/4',
                backRoute: 'meals/snacks',
                price: 220
            },
            {
                id: 5,
                image: '/collections/snacks/5th.jpg',
                title: 'COLESLAW',
                description: 'It is made from fresh vegetables, all blended with a delicious, creamy dressing',
                route: 'meals/snacks/5',
                backRoute: 'meals/snacks',
                price: 40
            },
            {
                id: 6,
                image: '/collections/snacks/6th.jpeg',
                title: 'SNACK BUCKET',
                description: '4 Hot Wings + 4 Hot Shots + 2 Zinger Strips + 1 Dip',
                route: 'meals/snacks/6',
                backRoute: 'meals/snacks',
                price: 390
            },
            {
                id: 7,
                image: '/collections/snacks/7th.jpg',
                title: 'FRENCH FRIES',
                description: 'The perfect accompaniment to your KFC meal. Enjoy our golden fries with your favorite meal',
                route: 'meals/snacks/7',
                backRoute: 'meals/snacks',
                price: 160
            },
            {
                id: 8,
                image: '/collections/snacks/8th.jpg',
                title: 'FRENCH FRIES BUCKET [MAYO]',
                description: 'Enjoy our amazing bucket of..',
                route: 'meals/snacks/8',
                backRoute: 'meals/snacks',
                price: 220
            },
            {
                id: 9,
                image: '/collections/snacks/9th.jpg',
                title: '6 PCS NUGGETS',
                description: 'ou wont be able to resist our hot and flavorsome Chicken Nuggets, which will keep you coming back for more',
                route: 'meals/snacks/9',
                backRoute: 'meals/snacks',
                price: 290
            },
            {
                id: 10,
                image: '/collections/snacks/10th.jpg',
                title: '9 PCS NUGGETS',
                description: 'You wont be able to resist our hot and flavorsome Chicken Nuggets, which will keep you coming back for more',
                route: 'meals/snacks/10',
                backRoute: 'meals/snacks',
                price: 380
            },
            {
                id: 11,
                image: '/collections/snacks/11th.jpg',
                title: 'HOT SHOTS - 9 PCS',
                description: 'They’re tasty, they’re hot; they’re 9 Pieces of HOT SHOTS and they’re absolutely delectable!',
                route: 'meals/snacks/11',
                backRoute: 'meals/snacks',
                price: 300
            },
            {
                id: 12,
                image: '/collections/snacks/12th.jpg',
                title: 'HOT WINGS - 10 PCS',
                description: 'Spicy and Fiery hot, get ready for a ride of flavor and spice with KFC Hot Wings',
                route: 'meals/snacks/12',
                backRoute: 'meals/snacks',
                price: 390
            }
        ]
    },

    {
        id: 7,
        categoryTitle: 'midnight-deals-starts* 12:00am',
        linkUrl: 'midnight-deals-starts-12:00am',
        items: [
            {
                id: 1,
                image: '/collections/midnight/1st.png',
                title: 'MIDNIGHT DEAL 1',
                description: '1 Zinger Burger + 1 Drink',
                route: 'meals/midnight-deals-starts-12:00am/1',
                backRoute: 'meals/midnight-deals-starts-12:00am',
                price: 300
            },
            {
                id: 2,
                image: '/collections/midnight/2nd.png',
                title: 'MIDNIGHT DEAL 2',
                description: '2 Krunch Burgers + 2x 345 ml Drinks',
                route: 'meals/midnight-deals-starts-12:00am/2',
                backRoute: 'meals/midnight-deals-starts-12:00am',
                price: 390
            },
            {
                id: 3,
                image: '/collections/midnight/3rd.png',
                title: 'MIDNIGHT DEAL 3',
                description: '1 Mighty Zinger + 1 Regular Drink',
                route: 'meals/midnight-deals-starts-12:00am/3',
                backRoute: 'meals/midnight-deals-starts-12:00am',
                price: 499
            },
            {
                id: 4,
                image: '/collections/midnight/4th.png',
                title: 'MIDNIGHT DEAL 4',
                description: '10 Pcs Hot wings + 1 Regular Drink',
                route: 'meals/midnight-deals-starts-12:00am/4',
                backRoute: 'meals/midnight-deals-starts-12:00am',
                price: 400
            }
        ]
    }
]

export default Collections;