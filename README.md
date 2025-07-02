# ManiyaTech BuyNow module for Magento 2

The ManiyaTech Buy Now module for Magento 2 adds a powerful "Buy Now" button to your product listing, view, search, and advanced search pages. It allows customers to bypass the regular add-to-cart flow and proceed directly to checkout — improving conversions and offering a faster purchase experience.

### Key Features

<ul>
    <li>⚡ Enable/Disable Buy Now Globally: Toggle the entire module with a single switch from admin.</li>
    <li>📄 Flexible Page Targeting: Enable "Buy Now" on:</li>
        <ul>
            <li>Product listing (category) pages</li>
            <li>Product view (detail) pages</li>
            <li>Search results page</li>
            <li>Advanced search results page</li>
        </ul>
    <li>🧠 Smart Cart Management: Option to either:</li>
        <ul>
            <li>Empty the cart before Buy Now (single product checkout), or</li>
            <li>Keep existing products in the cart</li>
        </ul>
    <li>✏️ Customizable Button Title: Set your own Buy Now button label via system config.</li>
    <li>🧩 Injectable Custom Button Code: Easily add the "Buy Now" button to custom templates using the provided HTML snippet.</li>
    <li>🔐 FormKey & Session Validation: Secure request handling ensures Magento standards are met.</li>
    <li>✅ Admin Configuration Ready: Fully integrated with Magento's native system config for seamless backend control.</li>
</ul>

# Add Buy Now in custom template

If you wish to add the button to custom product templates, use following code snippet:

```
    $buyNowBtnHtml = $this->getLayout()
        ->createBlock(\ManiyaTech\BuyNow\Block\Product\ListProduct::class)
        ->setProduct($_item)
        ->setButtonTitle('Buy Now')
        ->setTemplate('ManiyaTech_BuyNow::buynow.phtml')
        ->toHtml();
    echo $buyNowBtnHtml;
```

<b>Change `$_item` to current product object.</b>

## How to install ManiyaTech_BuyNow module

### Composer Installation

Run the following command in Magento 2 root directory to install ManiyaTech_BuyNow module via composer.

#### Install

```
composer require maniyatech/magento2-buynow
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy -f
```

#### Update

```
composer update maniyatech/magento2-buynow
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy -f
```

Run below command if your store is in the production mode:

```
php bin/magento setup:di:compile
```

### Manual Installation

If you prefer to install this module manually, kindly follow the steps described below - 

- Download the latest version [here](https://github.com/maniyatech/magento2-buynow/archive/refs/heads/main.zip) 
- Create a folder path like this `app/code/ManiyaTech/BuyNow` and extract the `main.zip` file into it.
- Navigate to Magento root directory and execute the below commands.

```
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy -f
```
