document.addEventListener('DOMContentLoaded', function () {
    let productSelects = document.querySelectorAll('.js--product-select');
    if (productSelects.length === 0) return;
    productSelects.forEach(function (select) {
        select.addEventListener('change', function () {
            const productItem = this.closest('.product-item');
            const priceElement = productItem.querySelector('.money');
            const totalPriceElement = productItem.querySelector('.js--total-price');
            let newItemPrice;
            let newFullPrice;
            switch (this.value) {
                case '3-pack':
                    newItemPrice = productItem.dataset.threePackPrice;
                    newFullPrice = productItem.dataset.threeTotalPrice + ' total price to pay';
                    break;
                case '5-pack':
                    newItemPrice = productItem.dataset.fivePackPrice;
                    newFullPrice = productItem.dataset.fiveTotalPrice + ' total price to pay';
                    break;
                default:
                    newItemPrice = productItem.dataset.singlePrice;
                    newFullPrice = 'Save when buying a 3-pack or 5-pack';
            }

            priceElement.textContent = `${newItemPrice} / per item`;
            totalPriceElement.textContent = newFullPrice;
        });
    });

    document.querySelectorAll('.js--product-checkbox').forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            const checked = document.querySelectorAll('.js--product-checkbox:checked').length > 0;
            document.querySelector('#met-button').disabled = !checked;
        });
    });

    document.querySelector('#met-button').addEventListener('click', function (e) {
        e.preventDefault();

        let itemsToAdd = [];

        document.querySelectorAll('.product-item').forEach(function (productItem) {
            const isChecked = productItem.querySelector('.product-checkbox .js--product-checkbox').checked;
            if (isChecked) {
                const selectElement = productItem.querySelector('.product-select');
                const selectedValue = selectElement.value;
                let variantId;
                switch (selectedValue) {
                    case '3-pack':
                        variantId = productItem.dataset[`threeVariantId`];
                        break;
                    case '5-pack':
                        variantId = productItem.dataset[`fiveVariantId`];
                        break;
                    default:
                        variantId = productItem.dataset[`singleVariantId`];
                }
                const quantity = 1;
                itemsToAdd.push({id: variantId, quantity: quantity});
            }
        });

        if(itemsToAdd.length === 0) return;

        let formData = {
            items: itemsToAdd
        }

        fetch('/cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(cart => {
                console.log('Items added:', cart);
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error adding items:', error);
                window.location.reload();
            });
    });
});