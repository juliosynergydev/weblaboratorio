document.addEventListener("DOMContentLoaded", () => {
    const categories = {
        estructurales: [
            { 
                name: "DRX", 
                image: "image/new.jpg", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula nulla at neque fermentum, vel interdum velit tristique. Nam ac justo nec nulla fermentum tincidunt a et arcu.",
                equipos: [
                    "Lorem ipsum dolor sit amet",
                    "Curabitur ut est eget nulla egestas sodales",
                    "Integer nec libero eget enim posuere"
                ]
            },
            { 
                name: "MEB", 
                image: "image/new.jpg", 
                description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Curabitur ut est eget nulla egestas sodales. Integer nec libero eget enim posuere feugiat.",
                equipos: [
                    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                    "Integer nec libero eget enim posuere feugiat",
                    "Nulla auctor nisi vitae sem luctus"
                ]
            },
            { 
                name: "MFA", 
                image: "image/new.jpg", 
                description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Aenean lacinia felis vitae orci scelerisque, id volutpat odio facilisis.",
                equipos: [
                    "Ut enim ad minim veniam",
                    "Aenean lacinia felis vitae orci scelerisque",
                    "Sed do eiusmod tempor incididunt ut labore"
                ]
            },
            { 
                name: "Espectroscopia UV-Vis", 
                image: "image/new.jpg", 
                description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Proin tempor risus vitae metus tincidunt, at dictum libero sollicitudin.",
                equipos: [
                    "Excepteur sint occaecat cupidatat non proident",
                    "Proin tempor risus vitae metus tincidunt",
                    "Duis aute irure dolor in reprehenderit"
                ]
            },
        ],
        fisicoquímicas: [
            { 
                name: "Naturaleza óptica y cristalina", 
                image: "image/new.jpg", 
                description: "Excepteur sint occaecat cupidatat non proident. Pellentesque ac lacus ut neque elementum tincidunt at a ligula. Fusce ac quam ac justo malesuada interdum.",
                equipos: [
                    "Excepteur sint occaecat cupidatat non proident",
                    "Pellentesque ac lacus ut neque elementum",
                    "Fusce ac quam ac justo malesuada"
                ]
            },
            { 
                name: "IR", 
                image: "image/new.jpg", 
                description: "Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Integer sit amet augue nec erat sollicitudin varius ut a lorem.",
                equipos: [
                    "Nostrud exercitation ullamco laboris nisi",
                    "Integer sit amet augue nec erat sollicitudin",
                    "Ut a lorem"
                ]
            },
            { 
                name: "DLS", 
                image: "image/new.jpg", 
                description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Etiam nec leo vestibulum, scelerisque ligula id, laoreet ligula.",
                equipos: [
                    "Duis aute irure dolor in reprehenderit",
                    "Etiam nec leo vestibulum, scelerisque ligula",
                    "Laoreet ligula"
                ]
            },
            { 
                name: "Potencial zeta", 
                image: "image/new.jpg", 
                description: "Dolor sit amet, consectetur adipiscing elit. Nulla auctor nisi vitae sem luctus, a viverra odio placerat. Morbi sed leo id sapien feugiat elementum.",
                equipos: [
                    "Dolor sit amet, consectetur adipiscing elit",
                    "Nulla auctor nisi vitae sem luctus",
                    "Morbi sed leo id sapien feugiat"
                ]
            },
            { 
                name: "TGA", 
                image: "image/new.jpg", 
                description: "Nullam ac urna eu felis dapibus condimentum. Integer dictum quam at magna tincidunt, a ullamcorper eros fermentum.",
                equipos: [
                    "Nullam ac urna eu felis dapibus condimentum",
                    "Integer dictum quam at magna tincidunt",
                    "A ullamcorper eros fermentum"
                ]
            },
            { 
                name: "XPS", 
                image: "image/new.jpg", 
                description: "In hac habitasse platea dictumst. Fusce malesuada nisi vitae enim hendrerit, at tincidunt ipsum egestas.",
                equipos: [
                    "In hac habitasse platea dictumst",
                    "Fusce malesuada nisi vitae enim hendrerit",
                    "Tincidunt ipsum egestas"
                ]
            },
            { 
                name: "ICP-MS", 
                image: "image/new.jpg", 
                description: "Integer vehicula ante sed enim commodo. Proin viverra odio non libero cursus, non volutpat nulla vulputate.",
                equipos: [
                    "Integer vehicula ante sed enim commodo",
                    "Proin viverra odio non libero cursus",
                    "Nulla vulputate"
                ]
            },
            { 
                name: "Espectrofotómetro de fluorescencia", 
                image: "image/new.jpg", 
                description: "Sed molestie ligula id lorem tempor. Etiam auctor felis et odio fermentum, a tempor metus volutpat.",
                equipos: [
                    "Sed molestie ligula id lorem tempor",
                    "Etiam auctor felis et odio fermentum",
                    "A tempor metus volutpat"
                ]
            },
        ],
        electroquímicas: [
            { 
                name: "Electrónicas", 
                image: "image/new.jpg", 
                description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nunc aliquet libero vitae nisi iaculis, sed varius turpis volutpat.",
                equipos: [
                    "Duis aute irure dolor in reprehenderit",
                    "Nunc aliquet libero vitae nisi iaculis",
                    "Sed varius turpis volutpat"
                ]
            },
            { 
                name: "Transporte", 
                image: "image/new.jpg", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor nisi at sapien fermentum, ut volutpat turpis euismod.",
                equipos: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    "Nam auctor nisi at sapien fermentum",
                    "Ut volutpat turpis euismod"
                ]
            },
        ],
    };

    const categoryList = document.getElementById("category-list");
    const serviceDetails = document.getElementById("service-details");
    const categorySelect = document.getElementById("categoria");
    const serviceSelect = document.getElementById("servicio");
    const noServicesMessage = document.getElementById("no-services-message");

    let activeCategory = null;

    Object.keys(categories).forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categorySelect.appendChild(option);

        const categoryItem = document.createElement("li");
        categoryItem.classList.add("list-group-item", "category");

        const categoryName = document.createElement("span");
        categoryName.innerHTML = `${category.charAt(0).toUpperCase() + category.slice(1)}`;

        const icon = document.createElement("i");
        icon.classList.add("bi", "bi-chevron-down", "float-end");
        categoryItem.appendChild(categoryName);
        categoryItem.appendChild(icon);

        const serviceList = document.createElement("ul");
        serviceList.classList.add("list-group", "d-none");

        categories[category].forEach(service => {
            const serviceItem = document.createElement("li");
            serviceItem.classList.add("list-group-item");
            serviceItem.innerHTML = service.name;
            serviceItem.addEventListener("click", (event) => {
                event.stopPropagation();
                serviceDetails.innerHTML = `
                    <h3>${service.name}</h3>
                    <img src="${service.image}" alt="${service.name}" class="img-fluid service-image">
                    <br><br>
                    <h5>Descripción:</h5>
                    <p>${service.description}</p>
                    <h5>Equipos:</h5>
                    <ul>
                        ${service.equipos.map(equip => `<li>${equip}</li>`).join('')}
                    </ul>
                    <br><br>
                `;
                noServicesMessage.classList.add("d-none");
            });
            serviceList.appendChild(serviceItem);
        });

        categoryItem.appendChild(serviceList);
        categoryList.appendChild(categoryItem);

        categoryItem.addEventListener("click", () => {
            if (activeCategory === categoryItem) {
                serviceList.classList.toggle("d-none");
                icon.classList.toggle("bi-chevron-down");
                icon.classList.toggle("bi-chevron-up");
            } else {
                if (activeCategory) {
                    activeCategory.querySelector(".list-group").classList.add("d-none");
                    activeCategory.querySelector("i").classList.toggle("bi-chevron-down");
                    activeCategory.querySelector("i").classList.toggle("bi-chevron-up");
                }
                serviceList.classList.remove("d-none");
                icon.classList.toggle("bi-chevron-down");
                icon.classList.toggle("bi-chevron-up");
            }
            activeCategory = categoryItem;
        });
    });

    categorySelect.addEventListener("change", (e) => {
        const selectedCategory = e.target.value;
        const services = categories[selectedCategory];

        serviceSelect.innerHTML = "<option value=''>Seleccione un servicio</option>";
        services.forEach(service => {
            const option = document.createElement("option");
            option.value = service.name;
            option.textContent = service.name;
            serviceSelect.appendChild(option);
        });

        serviceSelect.disabled = false;
    });

    serviceSelect.addEventListener("change", (e) => {
        const selectedServiceName = e.target.value;
        const selectedCategory = categorySelect.value;
        const selectedService = categories[selectedCategory].find(service => service.name === selectedServiceName);

        if (selectedService) {
            serviceDetails.innerHTML = `
                <h3>${selectedService.name}</h3>
                <img src="${selectedService.image}" alt="${selectedService.name}" class="img-fluid service-image">
                <br><br>
                <h5>Descripción:</h5>
                <p>${selectedService.description}</p>
                <h5>Equipos:</h5>
                <ul>
                    ${selectedService.equipos.map(equip => `<li>${equip}</li>`).join('')}
                </ul>
                <br><br>
            `;
            noServicesMessage.classList.add("d-none");
        }
        
    });
});
