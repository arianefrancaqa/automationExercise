export const productsPage = {
    url: '/products',
    womanCategoryMenuOption: '[href="#Women"]',
    isMenuCollapsed: (value) => `[class="panel-collapse ${value}"]`,
    searchBar: '#search_product',
    submitSearchButton: '#submit_search',
    title: '.title',
    productInfo: '.productinfo.text-center p',
    viewCartModalLink: '[href="/view_cart"]',
    productSelector: (id) => `[data-product-id="${id}"]`,
    product1: '#product-1'
}