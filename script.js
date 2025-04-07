document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const sendToAdmin = document.getElementById("send-to-admin");

    const products = [
        { name: "DHA Walnut", image: "images/dha.jpg", price: 35000, description: " DHA Walnut is a type of omega-3 fatty acid, found in walnuts, is crucial for brain and heart health, supporting cognitive function, reducing inflammation, and potentially managing cholesterol levels. " },
        { name: "Coenzyme Q10", image: "images/coenzyme.webp", price: 28000, description: " Coenzyme Q10 (CoQ10), a naturally occurring antioxidant, is used to support heart health, reduce cell damage, and potentially manage conditions like heart failure, migraines, and certain muscle disorders. " },
        { name: "Ganodema Lucidium", image: "images/ganodema.webp", price: 27000, description: " These compounds have been found to improve insulin sensitivity and lower blood sugar levels in human models of diabetes. " },
        { name: "Coffee with Ginseng", image: "images/coffee.jpg", price: 11000, description: "Ginseng coffee is known for its potential to boost sexual energy and performance in men and women, improve focus, enhance immunity, and reduce stress. " },
        { name: "Swiss GenPerfumetleman", image: "images/gentleman.webp", price: 10000, description: " Perfect fragrance for you as a boss, and only used by important personnels" },
        { name: "Swiss Charming Lady Perfume", image: "images/charming.webp", price: 10000, description: "Perfect fragrance for you as a boss, and only used by important personnels." },
        { name: "Terahetz Blower", image: "images/terahetz.webp", price: 170000, description: "Terahertz Therapy Device is a device that handles partial stroke. It Promotes Muscle Relaxation, Improve Sleep, Eliminate Fatigue/Joint Pain." },
        { name: "GI Vital", image: "images/gi_vital.webp", price: 35000, description: "The benefits of GI Vital Softgel: Healthy Gastrointestinal System, Kills HB Pylori bacteria – healthy GUT, Anti Aging Effects, Boost IMMUNE system." },
        { name: "Vision Vital", image: "images/vision-vital.jpg", price: 35000, description: " It prevents sight loss, macular degeneration( old age related sight loss) & retinitis pigmentosa." },
        { name: "Hyperglycemia Herbal", image: "images/hyperglycemia.jpg", price: 29500, description: "Norland Hypoglycemic Capsule is a naturally formulated capsule that helps solve liver problems, helps detoxify the liver and prevents diabetes." },
        { name: "Propolis lecithin Capsules", image: "images/propolis.webp", price: 25000, description: "It is a natural remedy used to cure a number of cancers, including breast and lung cancer " },
        { name: "B-Caroten", image: "images/bcaroten.webp", price: 24000, description: "Beta-carotene, a precursor to Vitamin A, is used for its potential health benefits, including vision, immune function, and skin health. It's also used to color foods and can be found in supplements to address potential deficiencies." },
        { name: "Cordyceps Coffee", image: "images/cordyceps.jpg", price: 12000, description: " Cordyceps coffee, derived from the Cordyceps fungus, is traditionally used in some cultures for its potential to improve athletic performance, boost immunity, and support overall health, though more scientific evidence is needed to fully support these claims. " },
        { name: "Kuding Tea", image: "images/kuding.jpg", price: 8000, description: "The tea also acts as an anti-ulcer and reduces blood sugar, blood pressure, high bad cholesterol levels, and other cardiovascular diseases." },
        { name: "Male Pad", image: "images/malepad.webp", price: 34000, description: "Norland Male Health Care Pad is for men's sexual health. It Prevents prostrate cancer and it is good for the treatment of prostrate enlargement (BPH)" },
        { name: "Sanitary Anion Napkin", image: "images/sanitorypad.jpg", price: 4000, description: "Norland Anion sanitary napkins, infused with negative ions, are marketed to provide relief from menstrual pain, promote overall health, and combat common issues like yeast infections and vaginal dryness, while also offering antibacterial and anti-inflammatory properties. " },
        { name: "Tootpaste", image: "images/toothpaste.webp", price: 5000, description: "Norland toothpaste, formulated with natural ingredients like mint, neem, basil, cinnamon, and cloves, is designed for long-lasting and complete oral care, helping to clean teeth and gums and freshen breath. " },
        { name: "Titanium Magic Frying Pan", image: "images/magic-pan.webp", price: 98000, description: "The Norland Titanium Magic Frying Pan is marketed as a versatile and healthy cooking tool, designed to allow cooking with little to no oil, while retaining food nutrients and flavors, and is suitable for people with cardiovascular issues. " },
        { name: "Healthy Way Cup", image: "images/healthyway.webp", price: 44000, description: "The Norland Titanium Healthy Way Cup is marketed to convert acidic water into alkaline water, which is claimed to neutralize acidity in the body, increase energy and wellness, and promote overall health by flushing out toxins and strengthening the immune system. " },
        { name: "Hypoglycemic Capsules", image: "images/hypoglycemic.jpg", price: 24000, description: "Health Way Hypoglycemic Capsules are dedicated to stabilizing blood sugar levels and supporting pancreatic function." },
        { name: "Micro-Molecule Peptide", image: "images/micro-molecule.webp", price: 40000, description: "It promotes fat metabolism, cares for bone health, has the functions of relieving alcohol, protecting the liver, lowering blood sugar, lowering blood pressure." },
        { name: "Vital Probiotic Toothpaste(night paste)", image: "images/toothpaste2.webp", price: 5000, description: "Norland Vital Probiotic Toothpaste (Night Paste) is designed for nighttime oral care, offering benefits like balancing the oral microbiome, preventing bad breath and gum issues, and promoting healthy gums and teeth with its patented antibacterial ingredients and natural plant essence. " },
        { name: "Long Vigor Coffee", image: "images/longvigor.webp", price: 30000, description: "Norland LongVigor coffee is made from potent natural ingredients like Red Ginseng used to promote and enhance libido and revive the male erectile system" },
        { name: "Immune Booster+ Capsules", image: "images/immune.jpg", price: 18000, description: "Health benefits of Healthway Immune Plus Capsules · Regulate endocrine and hormones · delay menopause · delay aging · Improves quality sleep and reduces stress." },
        { name: "Sunlit Rollon", image: "images/sunlit.webp", price: 4000, description: "The Norland Sunlit Refreshing Roll-on is primarily used as a deodorant and antiperspirant, offering long-lasting freshness and odor protection, with a focus on natural ingredients and a quick-drying formula. " },
        { name: "Calcium Powder", image: "images/calcium.jpg", price: 12000, description: "Your body needs calcium to build and maintain strong bones. Your heart, muscles and nerves also need calcium to function properly. Calcium along with vitamin D, may have benefits beyond bone health: it also protects against cancer, diabetes and high blood pressure. " }
        
    ];

    // Inject modal HTML
    const modal = document.createElement("div");
    modal.id = "product-modal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2 id="modal-product-name"></h2>
            <p id="modal-product-description"></p>
        </div>
    `;
    document.body.appendChild(modal);

    // Inject modal CSS
    const style = document.createElement("style");
    style.textContent = `
        #product-modal {
            display: none;
            position: fixed;
            z-index: 9999;
            padding-top: 100px;
            left: 0; top: 0;
            width: 100%; height: 100%;
            overflow: auto;
            background-color: rgba(0,0,0,0.6);
        }
        .modal-content {
            background-color: #fff;
            margin: auto;
            padding: 20px;
            border-radius: 10px;
            width: 80%;
            max-width: 400px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            animation: slideIn .3s ease-out;
        }
        @keyframes slideIn {
            from {transform: translateY(-50px); opacity: 0;}
            to {transform: translateY(0); opacity: 1;}
        }
        .close-button {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }
        .close-button:hover {
            color: #333;
        }
    `;
    document.head.appendChild(style);

    const modalElement = document.getElementById("product-modal");
    const modalName = document.getElementById("modal-product-name");
    const modalDesc = document.getElementById("modal-product-description");
    const closeModal = document.querySelector(".close-button");

    closeModal.addEventListener("click", () => modalElement.style.display = "none");
    window.addEventListener("click", e => {
        if (e.target === modalElement) modalElement.style.display = "none";
    });

    if (productList) {
        products.forEach((product, index) => {
            let productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <h4>₦${product.price}</h4>
                <button class="add-to-cart" data-index="${index}">Add to Cart</button>
                <button class="about-product" data-index="${index}">About Product</button>
            `;
            productList.appendChild(productDiv);
        });

        // Add to Cart
        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", function () {
                let index = this.dataset.index;
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                let existingProduct = cart.find(item => item.name === products[index].name);
                if (existingProduct) {
                    existingProduct.quantity += 1;
                } else {
                    let newProduct = { ...products[index], quantity: 1 };
                    cart.push(newProduct);
                }
                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartDisplay();
                updateCartCount();
                alert(`${products[index].name} added to cart!`);
            });
        });

        // ✅ Custom Modal About Product
        document.querySelectorAll(".about-product").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.dataset.index;
                const product = products[index];
                modalName.textContent = product.name;
                modalDesc.textContent = product.description;
                modalElement.style.display = "block";
            });
        });

        updateCartCount();
    }

    function updateCartDisplay() {
        if (cartItems) {
            cartItems.innerHTML = "";
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            if (cart.length === 0) {
                cartItems.innerHTML = "<p>Your cart is empty.</p>";
            } else {
                let totalAmount = 0;
                cart.forEach((product, index) => {
                    let itemTotal = product.price * product.quantity;
                    totalAmount += itemTotal;
                    let cartDiv = document.createElement("div");
                    cartDiv.classList.add("cart-item");
                    cartDiv.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>₦${product.price} x ${product.quantity} = ₦${itemTotal}</p>
                        <div class="quantity-controls">
                            <button class="decrease" data-index="${index}">-</button>
                            <span>${product.quantity}</span>
                            <button class="increase" data-index="${index}">+</button>
                        </div>
                        <button class="remove-from-cart" data-index="${index}">Remove</button>
                    `;
                    cartItems.appendChild(cartDiv);
                });

                const totalDiv = document.createElement("div");
                totalDiv.classList.add("total-amount");
                totalDiv.innerHTML = `<h3>Total: ₦${totalAmount}</h3>`;
                cartItems.appendChild(totalDiv);

                document.querySelectorAll(".increase").forEach(button => {
                    button.addEventListener("click", function () {
                        let index = this.dataset.index;
                        let cart = JSON.parse(localStorage.getItem("cart")) || [];
                        cart[index].quantity += 1;
                        localStorage.setItem("cart", JSON.stringify(cart));
                        updateCartDisplay();
                        updateCartCount();
                    });
                });

                document.querySelectorAll(".decrease").forEach(button => {
                    button.addEventListener("click", function () {
                        let index = this.dataset.index;
                        let cart = JSON.parse(localStorage.getItem("cart")) || [];
                        if (cart[index].quantity > 1) {
                            cart[index].quantity -= 1;
                        } else {
                            cart.splice(index, 1);
                        }
                        localStorage.setItem("cart", JSON.stringify(cart));
                        updateCartDisplay();
                        updateCartCount();
                    });
                });

                document.querySelectorAll(".remove-from-cart").forEach(button => {
                    button.addEventListener("click", function () {
                        let index = this.dataset.index;
                        let cart = JSON.parse(localStorage.getItem("cart")) || [];
                        cart.splice(index, 1);
                        localStorage.setItem("cart", JSON.stringify(cart));
                        updateCartDisplay();
                        updateCartCount();
                    });
                });
            }
        }
    }

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCount) cartCount.textContent = totalItems;
    }

    if (sendToAdmin) {
        sendToAdmin.addEventListener("click", function () {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            if (cart.length === 0) {
                alert("Your cart is empty.");
                return;
            }
            let message = "Order Details:\n";
            cart.forEach(product => {
                message += `✅ ${product.name} (x${product.quantity})\n`;
            });
            window.location.href = `https://wa.me/2348033617281?text=${encodeURIComponent(message)}`;
        });
    }

    updateCartDisplay();
    updateCartCount();

    let index = 0;
    const slides = document.querySelector(".slides");

    function nextSlide() {
        index = (index + 1) % 3;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }
    setInterval(nextSlide, 3000);

    const searchBar = document.getElementById("search-bar");
    if (searchBar) {
        searchBar.addEventListener("input", function () {
            const searchTerm = searchBar.value.toLowerCase();
            const productDivs = document.querySelectorAll(".product");
            productDivs.forEach((productDiv) => {
                const productName = productDiv.querySelector("h3").textContent.toLowerCase();
                productDiv.style.display = productName.includes(searchTerm) ? "block" : "none";
            });
        });
    }
});
