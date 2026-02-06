/* ==================== CAR DATA ==================== */
const carsDatabase = [
    { id: 1, name: 'Toyota Camry 2020', type: 'Sedan', price: 2500000, km: 45000, location: 'Nairobi', transmission: 'Auto', year: 2020, fuel: 'Petrol', image: '<img src="images/carDb/toyotaCamry.jpg" alt="Toyota Camry" loading="lazy">', description: 'Reliable sedan with excellent fuel efficiency. Perfect for daily commute with comfortable interior and advanced safety features.' },
    { id: 2, name: 'Honda Civic 2019', type: 'Sedan', price: 1800000, km: 52000, location: 'Mombasa', transmission: 'Auto', year: 2019, fuel: 'Petrol', image: '<img src="images/carDb/hondaCivic.jpg" alt="Honda Civic" loading="lazy">', description: 'Stylish compact sedan with smooth handling. Great for city driving with modern infotainment system.' },
    { id: 3, name: 'Toyota Hiace 2018', type: 'Minibus', price: 1950000, km: 78000, location: 'Kisumu', transmission: 'Manual', year: 2018, fuel: 'Diesel', image: '<img src="images/carDb/ToyotaHiace.webp" alt="Toyota Hiace" loading="lazy">', description: 'Spacious minibus ideal for passenger transport or business use. Strong diesel engine with excellent cargo capacity.' },
    { id: 4, name: 'Suzuki Swift 2021', type: 'Hatchback', price: 1600000, km: 35000, location: 'Nairobi', transmission: 'Auto', year: 2021, fuel: 'Petrol', image: '<img src="images/carDb/SuzukiSwift.jpg" alt="suzuki swift" loading="lazy">', description: 'Agile hatchback perfect for young drivers. Low maintenance costs with nimble handling in traffic.' },
    { id: 5, name: 'Mazda CX-5 2020', type: 'SUV', price: 3200000, km: 42000, location: 'Nairobi', transmission: 'Auto', year: 2020, fuel: 'Petrol', image: '<img src="images/carDb/MazdaCX-5.jpg" alt="Mazda Cx" loading="lazy">', description: 'Premium SUV with spacious interior and panoramic sunroof. All-wheel drive capability for any terrain.' },
    { id: 6, name: 'Subaru Outback 2019', type: 'SUV', price: 3500000, km: 55000, location: 'Eldoret', transmission: 'Auto', year: 2019, fuel: 'Petrol', image: '<img src="images/carDb/subaruOutback.jpg" alt="Subaru Outback 2019" loading="lazy">', description: 'Adventure-ready wagon with off-road capability. Standard all-wheel drive and raised ground clearance.' },
    { id: 7, name: 'Isuzu D-Max 2017', type: 'Truck', price: 1500000, km: 95000, location: 'Nakuru', transmission: 'Manual', year: 2017, fuel: 'Diesel', price: 1500000, image: '<img src="images/carDb/IsuzuDmax.jpg" alt="isuzuDmax" loading="lazy">', description: 'Robust pickup truck for cargo transport. Heavy-duty suspension and powerful diesel engine.' },
    { id: 8, name: 'Mitsubishi Outlander 2020', type: 'SUV', price: 2800000, km: 38000, location: 'Mombasa', transmission: 'Auto', year: 2020, fuel: 'Petrol', image: '<img src="images/carDb/MistubishiOulander.jpg" alt="Mistubishi oulander" loading="lazy">', description: 'Modern 7-seater SUV with hybrid option. Excellent safety ratings and family-friendly features.' },
    { id: 9, name: 'Ford Ranger 2018', type: 'Truck', price: 1700000, km: 82000, location: 'Nairobi', transmission: 'Manual', year: 2018, fuel: 'Diesel', image: '<img src="images/carDb/FordRanger.jpg" alt="ford Range" loading="lazy">', description: 'Versatile pickup truck with towing capacity. Durable chassis suitable for tough working conditions.' },
    { id: 10, name: 'Hyundai Elantra 2021', type: 'Sedan', price: 1400000, km: 28000, location: 'Kisumu', transmission: 'Auto', year: 2021, fuel: 'Petrol', image: '<img src="images/carDb/HyundaiElantra.jpg" alt="Hyundai Elantra" loading="lazy">', description: 'Budget-friendly sedan with modern style. Warranty coverage and fuel-efficient engine.' },
    { id: 11, name: 'Kia Sportage 2020', type: 'SUV', price: 2600000, km: 48000, location: 'Eldoret', transmission: 'Auto', year: 2020, fuel: 'Petrol', image: '<img src="images/carDb/KiaSportage.jpg" alt="Kia sportage" loading="lazy">', description: 'Trendy compact SUV with dynamic styling. Connected technology and convenient driving modes.' },
    { id: 12, name: 'Nissan Tiida 2019', type: 'Sedan', price: 1300000, km: 61000, location: 'Nairobi', transmission: 'Auto', year: 2019, fuel: 'Petrol', image: '<img src="images/carDb/NissanTiida.jpg" alt="Nissan Tiida" loading="lazy">', description: 'Economical sedan with spacious boot. Reliable engine and user-friendly controls.' },
    { id: 13, name: 'Bugatti Divo 2019', type: 'Supercar', price: 150000000, km: 5200, location: 'Nairobi', transmission: 'Auto', year: 2019, fuel: 'Petrol', image: '<img src="images/carDb/divo.jpg" alt="Bugatti Divo" loading="lazy">', description: 'Limited edition hypercar with extreme aerodynamics and track-focused performance. Low mileage and full service history.' },
    { id: 14, name: 'Koenigsegg Jesko 2020', type: 'Hypercar', price: 220000000, km: 1500, location: 'Nairobi', transmission: 'Auto', year: 2020, fuel: 'Petrol', image: '<img src="images/carDb/Jesko.jpeg" alt="Koenigsegg Jesko" loading="lazy">', description: 'Record-setting hypercar with a high-revving V8 and advanced active aerodynamics. Pristine condition, ideal for collectors.' },
    { id: 15, name: 'Lamborghini Aventador 2020', type: 'Supercar', price: 120000000, km: 9000, location: 'Mombasa', transmission: 'Auto', year: 2020, fuel: 'Petrol', image: '<img src="images/carDb/tron_lamborghini_aventador-HD.jpg" alt="Lamborghini Aventador" loading="lazy">', description: 'Iconic V12 supercar with sharp styling and thrilling performance. Well-maintained with full service records.' },
    { id: 16, name: 'McLaren 720S 2019', type: 'Supercar', price: 110000000, km: 7000, location: 'Nairobi', transmission: 'Auto', year: 2019, fuel: 'Petrol', image: '<img src="images/carDb/bugatti2.jpg" alt="McLaren 720S" loading="lazy">', description: 'High-performance supercar with lightweight construction and blistering acceleration. Excellent condition and performance package included.' },
    { id: 17, name: 'Ferrari 488 2017', type: 'Supercar', price: 90000000, km: 12000, location: 'Eldoret', transmission: 'Auto', year: 2017, fuel: 'Petrol', image: '<img src="images/carDb/ferrari.jpg" alt="Ferrari 488" loading="lazy">', description: 'Mid-engine Ferrari with razor-sharp handling and intoxicating V8 soundtrack. Collector-grade finish and low ownership history.' },
    { id: 18, name: 'Mercedes-Benz S-Class 2018', type: 'Sedan', price: 8000000, km: 40000, location: 'Nairobi', transmission: 'Auto', year: 2018, fuel: 'Petrol', image: '<img src="images/carDb/mercedes.jpg" alt="Mercedes S-Class" loading="lazy">', description: 'Luxury flagship sedan with premium comfort features and advanced driver assistance. Smooth ride and immaculate interior.' },
    { id: 19, name: 'Porsche 911 Carrera 2018', type: 'Coupe', price: 80000000, km: 25000, location: 'Nairobi', transmission: 'Auto', year: 2018, fuel: 'Petrol', image: '<img src="images/carDb/porsche.jpg" alt="Porsche 911" loading="lazy">', description: 'Sports car icon with precise handling and timeless design. Clean history and performance upgrades available.' },
    { id: 20, name: 'Concept EV (Prototype) 2022', type: 'Electric', price: 50000000, km: 1200, location: 'Kuala Lumpur', transmission: 'Auto', year: 2022, fuel: 'Electric', image: '<img src="images/carDb/ev.jpg" alt="Concept EV" loading="lazy">', description: 'Prototype electric vehicle showcasing advanced design and tech features. Ideal for early adopters or OEM showcases.' },
    { id: 21, name: 'Batmobile (Replica) 2015', type: 'Collector', price: 50000, km: 0, location: 'Kisumu', transmission: 'Manual', year: 2015, fuel: 'N/A', image: '<img src="images/carDb/Batmobile.jpg" alt="Batmobile Replica" loading="lazy">', description: 'Unique collector replica of the Batmobile. Great piece for events, displays, and car shows — attention guaranteed.' },
];

/* ==================== COOKIES MANAGEMENT ==================== */
function setCookie(name, value, days = 30) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    const expiresStr = 'expires=' + expires.toUTCString();
    
    
    document.cookie = name + '=' + encodeURIComponent(value) + ';' + expiresStr + ';path=/';
}

function getCookie(name) {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}

function deleteCookie(name) {
    setCookie(name, '', -1);
}

/* ==================== USER MANAGEMENT ==================== */
function displayUserGreeting() {
    const userData = getCookie('userData');
    const userGreeting = document.getElementById('userGreeting');
    
    if (userData && userGreeting) {
        try {
            const user = JSON.parse(userData);
            userGreeting.textContent = 'Welcome, ' + user.fullName + '! ✓';
            userGreeting.style.display = 'inline-block';
            
            // Add logout functionality
            userGreeting.style.cursor = 'pointer';
            userGreeting.onclick = function(e) {
                if (confirm('Do you want to logout?')) {
                    deleteCookie('userData');
                    alert('Logged out successfully!');
                    window.location.href = 'index.html';
                }
            };
        } catch (e) {
            console.log('Invalid user data cookie');
        }
    }
}

/* ==================== FORM VALIDATION ==================== */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(phone.replace(/\s/g, ''));
}

function validatePassword(password) {
    // Minimum 8 characters, at least one letter and one number
    const re = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,}$/;
    return re.test(password);
}

function validateIdNumber(idNumber) {
    // Kenya ID should be numeric, 6-9 digits or passport format
    const re = /^[0-9]{6,9}$/;
    return re.test(idNumber);
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.textContent = '');
}

/* ==================== REGISTRATION FORM HANDLING ==================== */
function handleRegistration(event) {
    event.preventDefault();
    clearErrors();
    
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const idNumber = document.getElementById('idNumber').value.trim();
    const location = document.getElementById('location').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const privacyAccept = document.getElementById('privacyAccept').checked;
    
    let isValid = true;
    
    // Validate Full Name
    if (fullName.length < 3) {
        document.getElementById('fullNameError').textContent = 'Full name must be at least 3 characters';
        isValid = false;
    }
    
    // Validate Email
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Validate Phone
    if (!validatePhone(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number';
        isValid = false;
    }
    
    // Validate ID Number
    if (!validateIdNumber(idNumber)) {
        document.getElementById('idNumberError').textContent = 'Please enter a valid ID number (6-8 digits)';
        isValid = false;
    }
    
    // Validate Location
    if (!location) {
        document.getElementById('locationError').textContent = 'Please select a location';
        isValid = false;
    }
    
    // Validate Password
    if (!validatePassword(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters with letters and numbers';
        isValid = false;
    }
    
    // Validate Password Confirmation
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }
    
    // Validate Privacy Acceptance
    if (!privacyAccept) {
        document.getElementById('privacyError').textContent = 'You must accept the privacy policy';
        isValid = false;
    }
    
    if (isValid) {
        // Create user object,,, i will   NOT store password  in cookie in real app)
        const userData = {
            fullName: fullName,
            email: email,
            phone: phone,
            idNumber: idNumber,
            location: location,
            registrationDate: new Date().toISOString()
        };
        
        // Set user cookie (secure in production)
        setCookie('userData', JSON.stringify(userData), 30);
        
        // Show success message
        document.getElementById('registrationForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        
        // Log registration (in real app, send to server)
        console.log('User registered:', userData);
    }
}

/* ==================== PRODUCTS PAGE ==================== */
function initializeProducts() {
    displayProducts(carsDatabase);
}

function displayProducts(cars) {
    const carsGrid = document.getElementById('carsGrid');
    const resultCount = document.getElementById('resultCount');
    const noResults = document.getElementById('noResults');
    
    if (!carsGrid) return; // Not on products page
    
    carsGrid.innerHTML = '';
    
    if (cars.length === 0) {
        noResults.style.display = 'block';
        resultCount.textContent = 'No cars found';
        return;
    }
    
    noResults.style.display = 'none';
    resultCount.textContent = cars.length + ' car' + (cars.length !== 1 ? 's' : '') + ' found';
    
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <div class="car-image">${car.image}</div>
            <h3>${car.name}</h3>
            <p class="description">${car.description}</p>
            <p class="price">KES ${car.price.toLocaleString()}</p>
            <p class="specs">${car.type} • ${car.km.toLocaleString()} km • ${car.transmission}</p>
            <p class="specs">Year: ${car.year} • Fuel: ${car.fuel}</p>
            <p class="location"> ${car.location}</p>
            <div class="car-card-actions">
                <button class="btn btn-secondary" onclick="viewDetails(${car.id})">View Details</button>
                <button class="btn btn-primary" onclick="addToCart(${car.id})">🛒 Add to Cart</button>
            </div>
        `;
        carsGrid.appendChild(carCard);
    });
}

function setupFilterListeners() {
    const searchInput = document.getElementById('searchInput');
    const priceFilter = document.getElementById('priceFilter');
    const typeFilter = document.getElementById('typeFilter');
    const locationFilter = document.getElementById('locationFilter');

    // Populate type filter dynamically so new types are searchable
    if (typeFilter) {
        const types = Array.from(new Set(carsDatabase.map(c => c.type))).sort();
        typeFilter.innerHTML = '<option value="">All Types</option>';
        types.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t;
            opt.textContent = t;
            typeFilter.appendChild(opt);
        });
        typeFilter.addEventListener('change', applyFilters);
    }

    // Populate location filter dynamically so new locations are included
    if (locationFilter) {
        const locations = Array.from(new Set(carsDatabase.map(c => c.location))).sort();
        locationFilter.innerHTML = '<option value="">All Locations</option>';
        locations.forEach(l => {
            const opt = document.createElement('option');
            opt.value = l;
            opt.textContent = l;
            locationFilter.appendChild(opt);
        });
        locationFilter.addEventListener('change', applyFilters);
    }

    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }
    if (priceFilter) {
        priceFilter.addEventListener('input', applyFilters);
    }
} 

function applyFilters() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const priceFilter = parseFloat(document.getElementById('priceFilter').value) || Infinity;
    const typeFilter = document.getElementById('typeFilter').value;
    const locationFilter = document.getElementById('locationFilter').value;

    const filteredCars = carsDatabase.filter(car => {
        const searchableText = (car.name + ' ' + (car.description || '') + ' ' + car.type + ' ' + car.location).toLowerCase();
        const matchesSearch = !searchInput || searchableText.includes(searchInput);
        const matchesPrice = car.price <= priceFilter;
        const matchesType = !typeFilter || car.type === typeFilter;
        const matchesLocation = !locationFilter || car.location === locationFilter;

        return matchesSearch && matchesPrice && matchesType && matchesLocation;
    });

    displayProducts(filteredCars);
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('typeFilter').value = '';
    document.getElementById('locationFilter').value = '';
    initializeProducts();
}

function viewDetails(carId) {
    const car = carsDatabase.find(c => c.id == carId);
    if (car) {
        alert(`${car.name}\n\nPrice: KES ${car.price.toLocaleString()}\nMileage: ${car.km.toLocaleString()} km\nTransmission: ${car.transmission}\nLocation: ${car.location}\nFuel: ${car.fuel}\n\nDescription: ${car.description}\n\nContact seller to view or purchase.`);
    }
}

/* ==================== ADDITIONAL UTILITIES ==================== */
// Track user session
function initializeSession() {
    const sessionId = getCookie('sessionId');
    
    if (!sessionId) {
        // Generate unique session ID
        const newSessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        setCookie('sessionId', newSessionId, 1); // 1 day session
    }
}

/* ==================== SHOPPING CART MANAGEMENT ==================== */
function getCart() {
    const cart = getCookie('cart');
    if (cart) {
        try {
            return JSON.parse(cart);
        } catch (e) {
            return [];
        }
    }
    return [];
}

function saveCart(cart) {
    setCookie('cart', JSON.stringify(cart), 30);
}

function addToCart(carId) {
    const car = carsDatabase.find(c => c.id == carId);
    if (!car) return;
    
    let cart = getCart();
    const existingItem = cart.find(item => item.id === carId);
    
    if (existingItem) {
        existingItem.quantity += 1;
        alert(`${car.name} quantity updated to ${existingItem.quantity}`);
    } else {
        cart.push({
            id: carId,
            name: car.name,
            price: car.price,
            quantity: 1,
            image: car.image,
            type: car.type,
            location: car.location
        });
        alert(`${car.name} added to cart!`);
    }
    
    saveCart(cart);
    updateCartBadge();
}

function removeFromCart(carId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== carId);
    saveCart(cart);
    updateCartBadge();
    
    // Refresh cart display if on cart page
    if (document.getElementById('cartTableBody')) {
        displayCartItems();
    }
}

function updateCartQuantity(carId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(carId);
        return;
    }
    
    let cart = getCart();
    const item = cart.find(item => item.id === carId);
    
    if (item) {
        item.quantity = newQuantity;
        saveCart(cart);
        updateCartBadge();
        displayCartItems();
    }
}

function updateCartBadge() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => parseInt(sum) + parseInt(item.quantity), 0);
    const badgeElement = document.getElementById('cartBadge');
    
    if (badgeElement) {
        if (totalItems > 0) {
            badgeElement.textContent = totalItems;
            badgeElement.style.display = 'inline-block';
        } else {
            badgeElement.style.display = 'none';
        }
    }
}

function displayCartItems() {
    const cartTableBody = document.getElementById('cartTableBody');
    const cartTotal = document.getElementById('cartTotal');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const emptyCart = document.getElementById('emptyCart');
    const checkoutSection = document.getElementById('checkoutSection');
    
    if (!cartTableBody) return; // Not on cart page
    
    const cart = getCart();
    cartTableBody.innerHTML = '';
    
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        checkoutSection.style.display = 'none';
        return;
    }
    
    emptyCart.style.display = 'none';
    checkoutSection.style.display = 'block';
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="incart-car-image" data-label="Car Name">${item.image} ${item.name}</td>
            <td data-label="Type">${item.type}</td>
            <td data-label="Location"> ${item.location}</td>
            <td data-label="Unit Price">KES ${item.price.toLocaleString()}</td>
            <td data-label="Quantity">
                <input type="number" min="1" value="${item.quantity}" 
                       onchange="updateCartQuantity(${item.id}, this.value)" 
                       class="quantity-input">
            </td>
            <td data-label="Total">KES ${itemTotal.toLocaleString()}</td>
            <td data-label="Action">
                <button class="btn btn-danger" onclick="removeFromCart(${item.id})">Remove</button>
            </td>
        `;
        cartTableBody.appendChild(row);
    });
    
    const tax = Math.round(subtotal * 0.16); // 16% VAT
    const total = subtotal + tax;
    
    if (cartSubtotal) cartSubtotal.textContent = 'KES ' + subtotal.toLocaleString();
    if (cartTotal) cartTotal.textContent = 'KES ' + total.toLocaleString();
}

function clearCart() {
    if (confirm('Are you sure you want to clear your entire cart?')) {
        deleteCookie('cart');
        updateCartBadge();
        if (document.getElementById('cartTableBody')) {
            displayCartItems();
        }
        alert('Cart cleared!');
    }
}

function proceedToCheckout() {
    const userData = getCookie('userData');
    
    if (!userData) {
        alert('Please register or login to proceed with checkout');
        window.location.href = 'register.html';
        return;
    }
    
    const cart = getCart();
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = Math.round(subtotal * 0.16);
    const total = subtotal + tax;
    
    const message = `Order Summary:\n\nSubtotal: KES ${subtotal.toLocaleString()}\nTax (16%): KES ${tax.toLocaleString()}\nTotal: KES ${total.toLocaleString()}\n\nPlease contact us to complete the purchase and arrange delivery.`;
    alert(message);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeSession();
});
