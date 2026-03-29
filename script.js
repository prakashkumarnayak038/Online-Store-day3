// ================= CATEGORY ACTIVE BUTTON =================
let buttons = document.querySelectorAll(".category-buttons button");

if (buttons.length > 0) {
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
}

// ================= CART SYSTEM =================
let count = localStorage.getItem("cartCount") || 0;

document.addEventListener("DOMContentLoaded", () => {
    let cartElement = document.getElementById("cart-count");
    if (cartElement) {
        cartElement.innerText = count;
    }

    // ================= PRODUCT PAGE DATA =================
    let name = localStorage.getItem("productName");
    let price = localStorage.getItem("productPrice");

    let nameEl = document.getElementById("product-name");
    let priceEl = document.getElementById("product-price");

    if (nameEl && priceEl) {
        nameEl.innerText = name || "No Product Found";
        priceEl.innerText = price || "";
    }
});

// ================= ADD TO CART =================
function addToCart() {
    count++;
    localStorage.setItem("cartCount", count);

    let cartElement = document.getElementById("cart-count");
    if (cartElement) {
        cartElement.innerText = count;
    }
}

// ================= SEARCH FUNCTION =================
let searchInput = document.getElementById("search");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        let value = searchInput.value.toLowerCase();
        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            let text = card.innerText.toLowerCase();
            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// ================= CATEGORY FILTER =================
let categoryButtons = document.querySelectorAll(".category-buttons button");
let cards = document.querySelectorAll(".card");

if (categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            let category = button.innerText.toLowerCase();

            cards.forEach(card => {
                if (category === "all" || card.dataset.category === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}

// ================= VIEW PRODUCT =================
function viewProduct(name, price) {
    localStorage.setItem("productName", name);
    localStorage.setItem("productPrice", price);
    window.location.href = "product.html";
}