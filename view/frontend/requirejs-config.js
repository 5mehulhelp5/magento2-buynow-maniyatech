/**
 * ManiyaTech
 *
 * @author        Milan Maniya
 * @package       ManiyaTech_BuyNow
 */

var config = {
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'ManiyaTech_BuyNow/js/catalog-add-to-cart-mixin': true
            },
        }
    }
};
