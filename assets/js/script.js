const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const registerBtn = $('.register__btn')
const loginBtn = $('.login__btn')
const modal = $('.modal')
const returnBtn = $('.modal__return-btn')
const modalName = $('.modal__name')
const modalHeaderRight = $('.modal__header-right')
const submitBtn = $('.modal__submit-btn')
const confirmPassword = $('.modal__input-confirm-password')
const verification = $('.modal__input-verification')
const modalBox = $('.modal__box')
const searchBar = $('.header__search-bar')
const searchHistory = $('.header__search-history')
const app1 = $('.app')
const carList =$('.header__cart-list')
const carQuantity = $('.cart-quantity')
const categoryListItem = $$('.category-item__link')
const filterCategoryBtn = $$('.home-filter__category-btn')
const likeStatus = $$('.product-like')
const unLikeStatus = $$('.product-unlike')
const paginationNumber = $$('.pagination-item.number')
const paginationLink = $$('.pagination-item__link.number')
const preArrow = $('.pagination-item.arrow--prev')
const nextArrow = $('.pagination-item.arrow--next')

const app = {
    itemList: [
        {
            itemName: 'Free Ship [Ảnh Thật] Áo Hoodie Essentials Nỉ Bông Hàng Cao Cấp Ss2021',
            itemPrice: '₫269.000',
            itemImg: 'https://cf.shopee.vn/file/f1a427a3a5781b4840f2a7dc57bff833'
        },
        {
            itemName: 'Free Ship [Ảnh Thật] Áo Hoodie Essentials Nỉ Bông Hàng Cao Cấp Ss2021',
            itemPrice: '₫269.000',
            itemImg: 'https://cf.shopee.vn/file/f1a427a3a5781b4840f2a7dc57bff833'
        },
        {
            itemName: 'Free Ship [Ảnh Thật] Áo Hoodie Essentials Nỉ Bông Hàng Cao Cấp Ss2021',
            itemPrice: '₫269.000',
            itemImg: 'https://cf.shopee.vn/file/f1a427a3a5781b4840f2a7dc57bff833'
        },
        {
            itemName: 'Free Ship [Ảnh Thật] Áo Hoodie Essentials Nỉ Bông Hàng Cao Cấp Ss2021',
            itemPrice: '₫269.000',
            itemImg: 'https://cf.shopee.vn/file/f1a427a3a5781b4840f2a7dc57bff833'
        },
    ],
    renderCart: function() {
        const _this = this
        if(_this.itemList.length == 0){
            carList.innerHTML = `<img src="./assets/img/noItem.png" alt="" class="header__cart-list--noitem-img">`
            carQuantity.style.border = '0'
        }
        else{
            
            const htmls = _this.itemList.map(function(item){
                return `
                <ul class="cart__list-items">
                    <li class="list-item">
                        <img src="${item.itemImg}" alt="" class="item-img">
                        <h4 class="item-name">
                        ${item.itemName}
                        </h4>
                        <p class="item-price">
                            ${item.itemPrice}
                        </p>
                    </li>
                </ul>`
            })
            carQuantity.innerText = _this.itemList.length;
            
            carList.innerHTML = (`${'<p class="cart-list-name">Sản Phẩm Mới Thêm</p>'}`) + htmls.join('')
        }
    },

    handleEvent: function () {
        let currentIndex = 0

        const registerModalOpen = function () {
            modal.style.display = 'flex'
            modalName.textContent = 'Đăng Ký'
            modalHeaderRight.textContent = 'Đăng Nhập'
            submitBtn.textContent = 'ĐĂNG KÝ'
            confirmPassword.style.display = 'block';
            verification.style.display = 'block';
            modalHeaderRight.classList.add('login')
            modalHeaderRight.classList.remove('register')
            modalBox.classList.add('open__modal-animation')
        }
        const loginModalOpen = function () {
            modal.style.display = 'flex'
            modalName.textContent = 'Đăng Nhập'
            modalHeaderRight.textContent = 'Đăng Ký'
            submitBtn.textContent = 'ĐĂNG NHẬP'
            confirmPassword.style.display = 'none';
            verification.style.display = 'none';
            modalHeaderRight.classList.add('register')
            modalHeaderRight.classList.remove('login')
            modalBox.classList.add('open__modal-animation')
        }

        preArrow.onclick = function () {
            currentIndex--
            if(currentIndex == -1){
                currentIndex = 4;
            }
            $('.pagination-item.number.pagination-item__active').classList.remove('pagination-item__active')
            $('.pagination-item__link.number.pagination-item__link-active').classList.remove('pagination-item__link-active')

            paginationNumber[currentIndex].classList.add('pagination-item__active')
            paginationLink[currentIndex].classList.add('pagination-item__link-active')
        }
        nextArrow.onclick = function () {
            currentIndex++
            if(currentIndex == 5){
                currentIndex = 0;
            }
            $('.pagination-item.number.pagination-item__active').classList.remove('pagination-item__active')
            $('.pagination-item__link.number.pagination-item__link-active').classList.remove('pagination-item__link-active')

            paginationNumber[currentIndex].classList.add('pagination-item__active')
            paginationLink[currentIndex].classList.add('pagination-item__link-active')
        }

        paginationNumber.forEach(function (number,index) {
            number.onclick = function() {
                $('.pagination-item.number.pagination-item__active').classList.remove('pagination-item__active')
                $('.pagination-item__link.number.pagination-item__link-active').classList.remove('pagination-item__link-active')

                number.classList.add('pagination-item__active')
                paginationLink[index].classList.add('pagination-item__link-active')
            }

            
        })

        likeStatus.forEach(function(like,index) {
            like.onclick = function () {
                unLikeStatus[index].style.display = 'block';
                like.style.display = 'none';
            }
        })
        unLikeStatus.forEach(function(unlike,index) {
            unlike.onclick = function () {
                likeStatus[index].style.display = 'block';
                unlike.style.display = 'none';
            }
        })
        
        
        
        categoryListItem.forEach(function (item,index) {
            item.onclick = function() {
                $('.category-item__link.category-item--active').classList.remove('category-item--active')
                item.classList.add('category-item--active')
            }
        })
        filterCategoryBtn.forEach(function (btn,index) {
            btn.onclick = function() {
                $('.home-filter__category-btn.home-filter__category-btn--active').classList.remove('home-filter__category-btn--active')
                btn.classList.add('home-filter__category-btn--active')
            }
        })

        searchBar.onclick = function () {
            searchHistory.style.display = 'block'
        }

        app1.onclick = function (e) {
            if (!(e.target.closest('.wrap__search-bar')))
                searchHistory.style.display = 'none'
        }

        modalHeaderRight.onclick = function () {
            if ($('.login')) {
                modalBox.classList.remove('open__modal-animation')
                loginModalOpen()
                modalHeaderRight.classList.add('register')
                modalHeaderRight.classList.remove('login')
            }
            else if ($('.register')) {
                modalBox.classList.remove('open__modal-animation')
                registerModalOpen()
                modalHeaderRight.classList.add('login')
                modalHeaderRight.classList.remove('register')
            }
        }
        modal.onclick = function (e) {
            if (!(e.target.closest('.modal__box'))) {
                modal.style.display = 'none'
            }
        }

        registerBtn.onclick = function () {
            registerModalOpen()
        }

        loginBtn.onclick = function () {
            loginModalOpen()
        }
        returnBtn.onclick = function () {
            modal.style.display = 'none'
        }

    },

    start: function () {
        this.handleEvent()
        this.renderCart()
    }
}
app.start()