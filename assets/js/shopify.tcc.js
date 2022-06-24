	/*<![CDATA[*/
	(function () {
	  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
	  if (window.ShopifyBuy) {
		if (window.ShopifyBuy.UI) {
		  ShopifyBuyInit();
		} else {
		  loadScript();
		}
	  } else {
		loadScript();
	  }
	  function loadScript() {
		var script = document.createElement('script');
		script.async = true;
		script.src = scriptURL;
		(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
		script.onload = ShopifyBuyInit;
	  }
	  function ShopifyBuyInit() {
		var client = ShopifyBuy.buildClient({
		  domain: 'dominion-medical-centre.myshopify.com',
		  storefrontAccessToken: '9cc2d6611316abc3e05aa2a07b2eed5a',
		});
		ShopifyBuy.UI.onReady(client).then(function (ui) {
		  ui.createComponent('product', {
			id: '4778838982701',
			node: document.getElementById('product-component-1588370769298'),
			moneyFormat: '%24%7B%7Bamount%7D%7D',
			options: {
	  "product": {
		"styles": {
		  "product": {
			"@media (min-width: 601px)": {
			  "max-width": "calc(25% - 20px)",
			  "margin-left": "20px",
			  "margin-bottom": "50px"
			}
		  },
		  "button": {
			"font-size": "14px",
			"padding-top": "15px",
			"padding-bottom": "15px",
			":hover": {
			  "background-color": "#53a653"
			},
			"background-color": "#5cb85c",
			":focus": {
			  "background-color": "#53a653"
			},
			"border-radius": "39px",
			"padding-left": "33px",
			"padding-right": "33px"
		  },
		  "quantityInput": {
			"font-size": "14px",
			"padding-top": "15px",
			"padding-bottom": "15px"
		  }
		},
		"contents": {
		  "img": false,
		  "title": false,
		  "price": false
		},
		"text": {
		  "button": "+"
		}
	  },
	  "productSet": {
		"styles": {
		  "products": {
			"@media (min-width: 601px)": {
			  "margin-left": "-20px"
			}
		  }
		}
	  },
	  "modalProduct": {
		"contents": {
		  "img": false,
		  "imgWithCarousel": true,
		  "button": false,
		  "buttonWithQuantity": true
		},
		"styles": {
		  "product": {
			"@media (min-width: 601px)": {
			  "max-width": "100%",
			  "margin-left": "0px",
			  "margin-bottom": "0px"
			}
		  },
		  "button": {
			"font-size": "14px",
			"padding-top": "15px",
			"padding-bottom": "15px",
			":hover": {
			  "background-color": "#53a653"
			},
			"background-color": "#5cb85c",
			":focus": {
			  "background-color": "#53a653"
			},
			"border-radius": "39px",
			"padding-left": "33px",
			"padding-right": "33px"
		  },
		  "quantityInput": {
			"font-size": "14px",
			"padding-top": "15px",
			"padding-bottom": "15px"
		  }
		},
		"text": {
		  "button": "Add to cart"
		}
	  },
	  "cart": {
		"styles": {
		  "button": {
			"font-size": "14px",
			"padding-top": "15px",
			"padding-bottom": "15px",
			":hover": {
			  "background-color": "#53a653"
			},
			"background-color": "#5cb85c",
			":focus": {
			  "background-color": "#53a653"
			},
			"border-radius": "39px"
		  }
		},
		"text": {
		  "total": "Subtotal",
		  "button": "Checkout",
		  "noteDescription": "输入姓名，出生日期和会诊日期\nEnter name,date of birth and consult date"
		},
		"contents": {
		  "note": true
		}
	  },
	  "toggle": {
		"styles": {
		  "toggle": {
			"background-color": "#5cb85c",
			":hover": {
			  "background-color": "#53a653"
			},
			":focus": {
			  "background-color": "#53a653"
			}
		  },
		  "count": {
			"font-size": "14px"
		  }
		}
	  }
	},
		  });
		});
	  }
	})();
	/*]]>*/