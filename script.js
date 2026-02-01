const districtsByDivision = {
    Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Narsingdi", "Manikganj", "Munshiganj", "Tangail", "Kishoreganj", "Faridpur", "Gopalganj", "Madaripur", "Rajbari", "Shariatpur"],
    Chattogram: ["Chattogram", "Cox's Bazar", "Cumilla", "Brahmanbaria", "Chandpur", "Feni", "Lakshmipur", "Noakhali", "Rangamati", "Bandarban", "Khagrachhari"],
    Rajshahi: ["Rajshahi", "Bogra", "Naogaon", "Natore", "Chapainawabganj", "Joypurhat", "Pabna", "Sirajganj"],
    Khulna: ["Khulna", "Jessore", "Satkhira", "Bagerhat", "Narail", "Jhenaidah", "Magura", "Chuadanga", "Meherpur"],
    Barishal: ["Barishal", "Bhola", "Patuakhali", "Pirojpur", "Jhalokathi", "Barguna"],
    Sylhet: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
    Rangpur: ["Rangpur", "Dinajpur", "Kurigram", "Gaibandha", "Nilphamari", "Lalmonirhat", "Panchagarh", "Thakurgaon"],
    Mymensingh: ["Mymensingh", "Jamalpur", "Sherpur", "Netrokona"]
};

function loadDistricts() {
    const division = document.getElementById("division").value;
    const districtSelect = document.getElementById("district");
    districtSelect.innerHTML = '<option value="">Select District</option>';
    if (division && districtsByDivision[division]) {
        districtsByDivision[division].forEach(district => {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

function showThankYou() {
    alert("✅ Thank you!\nYour data has been recorded.");
}