function registerMember() {

    var name =
        document.getElementById("name").value;

    var email =
        document.getElementById("email").value;

    var phone =
        document.getElementById("phone").value;

    var studentID =
        document.getElementById("studentID").value;

    var birthdate =
        document.getElementById("birthdate").value;

    var game =
        document.getElementById("game").value;

    var experience =
        document.getElementById("experience").value;

    var membership =
        document.getElementById("membership").value;

    if (name == "") {
        alert("Please enter your full name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email address.");
        return false;
    }

    if (phone == "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (studentID == "") {
        alert("Please enter your student ID.");
        return false;
    }

    if (birthdate == "") {
        alert("Please enter your date of birth.");
        return false;
    }

    if (game == "") {
        alert("Please select your favourite game.");
        return false;
    }

    if (experience == "") {
        alert("Please enter your gaming experience.");
        return false;
    }

    if (membership == "") {
        alert("Please select your membership type.");
        return false;
    }

    experience =
        parseInt(experience);

    if (experience < 0) {
        alert(
            "Gaming experience cannot be negative."
        );
        return false;
    }

    var member = {
        name: name,
        email: email,
        phone: phone,
        studentID: studentID,
        birthdate: birthdate,
        game: game,
        experience: experience,
        membership: membership
    };

    var memberJSON =
        JSON.stringify(member);

    sessionStorage.setItem(
        "redXMember",
        memberJSON
    );

    document.getElementById(
        "memberName"
    ).innerHTML = name;

    document.getElementById(
        "success"
    ).style.display = "block";

    displayMember();

    return false;
}

function displayMember() {
    /* Get JSON data */
    var data =
        sessionStorage.getItem("redXMember");

    /* Check whether data exists */

    if (data != null) {

        /* Convert JSON back to object */

        var member =
            JSON.parse(data);


        var sessionSection =
            document.getElementById(
                "sessionSection"
            );


        /* Check whether session section exists */

        if (sessionSection != null) {
            document.getElementById("displayName").innerHTML = member.name;
            document.getElementById("displayEmail").innerHTML = member.email;
            document.getElementById("displayPhone").innerHTML = member.phone;
            document.getElementById("displayStudentID").innerHTML = member.studentID;
            document.getElementById("displayGame").innerHTML = member.game;
            document.getElementById("displayMembership").innerHTML = member.membership;

            /* Show session section */

            sessionSection.style.display =
                "block";
        }
    }
}

function clearSession() {

    /* Remove data */

    sessionStorage.removeItem(
        "redXMember"
    );

    /* Hide session information */

    var sessionSection = document.getElementById("sessionSection")

    /* Hide success message */

    if (sessionSection != null) {
        sessionSection.style.display = "none";
    }

    var success = document.getElementById("success");

    if (sessionSection != null) {
        sessionSection.style.display = "none";
    }

    alert(
        "Session data has been cleared."
    );
}


function loadSession() {
    displayMember();

    var data =
        sessionStorage.getItem("redXMember");


    if (data != null) {

        var member =
            JSON.parse(data);


        /* Fill contact form */

        if (document.getElementById("contactName")) {

            document.getElementById(
                "contactName"
            ).value = member.name;


            document.getElementById(
                "contactEmail"
            ).value = member.email;


            document.getElementById(
                "contactPhone"
            ).value = member.phone;
        }
    }
}

function sendMessage() {

    /* Get input */

    var name =
        document.getElementById(
            "contactName"
        ).value;

    var email =
        document.getElementById(
            "contactEmail"
        ).value;

    var phone =
        document.getElementById(
            "contactPhone"
        ).value;

    var subject =
        document.getElementById(
            "subject"
        ).value;

    var message =
        document.getElementById(
            "messageText"
        ).value;


    if (name == "") {
        alert(
            "Please enter your name."
        );
        return false;
    }

    if (email == "") {
        alert(
            "Please enter your email."
        );
        return false;
    }

    if (phone == "") {
        alert(
            "Please enter your phone number."
        );
        return false;
    }

    if (subject == "") {
        alert(
            "Please enter the subject."
        );
        return false;
    }

    if (message == "") {
        alert(
            "Please enter your message."
        );
        return false;
    }

    document.getElementById(
        "contactSuccess"
    ).style.display = "block";

    alert(
        "Your message has been sent successfully!"
    );

    return false;
}

window.onload = loadSession;

function applyTheme(theme) {

    if (theme === "light") {

        $("body").addClass("light-theme");

        $("#themeButton").html(
            '<i class="bi bi-moon-fill"></i>'
        );

    } else {

        $("body").removeClass("light-theme");

        $("#themeButton").html(
            '<i class="bi bi-sun-fill"></i>'
        );

    }
}

$(document).ready(function () {

    // Get the saved theme. Dark mode is the default.
    const savedTheme = localStorage.getItem("redXTheme") || "dark";
    applyTheme(savedTheme);

    // Store a value for the current browsing session.
    // This also demonstrates sessionStorage for the assignment.
    if (!sessionStorage.getItem("redXSessionStarted")) {
        sessionStorage.setItem("redXSessionStarted", "true");
    }

    $("#themeButton").click(function () {

        const newTheme = $("body").hasClass("light-theme")
            ? "dark"
            : "light";

        applyTheme(newTheme);

        // localStorage persists the theme across pages and refreshes.
        localStorage.setItem("redXTheme", newTheme);

    });

});

// =========================================
// COOKIE CONSENT
// =========================================

$(document).ready(function () {

    // Check if the cookie already exists
    if (document.cookie.includes("redXCookieAccepted=true")) {

        $("#cookieBanner").hide();

    }

    // Accept cookies
    $("#acceptCookies").click(function () {

        document.cookie =
            "redXCookieAccepted=true; max-age=2592000; path=/";

        $("#cookieBanner").fadeOut();

    });

});

// =========================================
// ESPORTS QUOTE API
// =========================================

function loadQuote() {

    $.ajax({
        url: "https://dummyjson.com/quotes/random",
        method: "GET",

        success: function (data) {

            $("#quoteText").text(
                '"' + data.quote + '"'
            );

        },

        error: function () {

            $("#quoteText").text(
                "Keep practising, keep improving, and never give up."
            );

        }
    });

}


$(document).ready(function () {

    loadQuote();

    $("#quoteButton").click(function () {

        loadQuote();

    });

});

/*Member3*/
const GOOGLESHEET_ID = '1MmpYh7WXUINWbYfmV0W4BezX15C2jIBK-MisuIiuaZ4';
const CLUB_NAME = 'RED X';

let allEvents = [];
let currentCategory = 'all';

//Fetch tournament data from Google Sheets API and trigger rendering
async function fetchTournamentData() {
    try{
        const response = await fetch(`https://opensheet.elk.sh/${GOOGLESHEET_ID}/Tournament`);
        const data = await response.json();
        renderTournamentTable(data);
    }catch(error){
        console.error('Cannot get tournament data', error);
    }
}

function renderTournamentTable(data){
    const tbody = document.querySelector('.acm_tournament_body');
    // Guard clause in case element does not exist on current page
    if(!tbody) return;

    // Reverse array to display newest tournaments first
    const reversedData = [...data].reverse();

    // Clear existing table contents
    tbody.innerHTML = '';

    reversedData.forEach(row =>{
        const date = row.Date;
        const name = row.Name;
        const game = row.Game;
        const rank = row.Rank;
        const prize = row.Prize;

        const tr = document.createElement('tr');

        // Highlight first place achievements with special CSS class
        const isFirstPlace = (rank === '1st');

        if (isFirstPlace) {
            tr.classList.add('acm_rank_first');
        }

        tr.innerHTML = `
            <td>${date}</td>
            <td>${name}</td>
            <td>${game}</td>
            <td>${rank}</td>
            <td>${prize}</td>
            `;
            tbody.appendChild(tr);
    });
}

//Fetch club rankings data from Google Sheets API and trigger rendering
async function fetchRankingsData(){
    try{
        const response = await fetch(`https://opensheet.elk.sh/${GOOGLESHEET_ID}/Rankings`);
        const data = await response.json();
        renderRankingsTable(data);
    }catch(error){
        console.error('Cannot get rankings data', error);
    }
}

function renderRankingsTable(data){
    const tbody = document.querySelector('.acm_rankings_body');
    tbody.innerHTML = '';

    data.forEach(row=>{
        const rank = row.Rank;
        const team = row.Team;
        const point = row.Points;

        // Check if row belongs to our club for highlight styling
        const isOurClub = (team === CLUB_NAME);

        const tr = document.createElement('tr');

        if(isOurClub){
            tr.classList.add('acm_our_club');
        }

        tr.innerHTML = `
            <td>${rank}</td>
            <td>${team}</td>
            <td>${point}</td>
        `;
        tbody.appendChild(tr);
    });
}

//Fetch upcoming events from Google Sheets API and save to global array
async function fetchEventsData() {
    try{
        const response = await fetch(`https://opensheet.elk.sh/${GOOGLESHEET_ID}/Events`);
        const data = await response.json();

        // Save fetched data to global array for local searching & filtering
        allEvents = data;
        renderEventsTable(allEvents);
    }catch(error){
        console.error('Cannot get event data', error);
    }
}

function renderEventsTable(data){
    const container = document.querySelector('.ev_list');
    container.innerHTML = '';

    // Render empty state message if no matching events found
    if (data.length === 0) {
        container.innerHTML = `<p class="no_events">No events found.</p>`;
        return;
    }

    data.forEach(row=>{
        const title = row.Title;
        const month = row.Month;
        const day = row.Day;
        const time = row.Time;
        const location = row.Location;
        const category = row.Category;

        const card = document.createElement('div');
        card.classList.add('ev_card');

        // Set custom data attribute for tracking category type
        card.setAttribute('data_category', category);

        card.innerHTML = `
            <div class="ev_date">
                <span class="month">${month}</span>
                <span class="day">${day}</span>
            </div>
            <div class="ev_details">
                <span class="tag tag_${category}">${category.toUpperCase()}</span>
                <h3 class="event_title">${title}</h3>
                <p class="event_meta">
                    <i class="fa-regular fa-clock"></i> ${time} &nbsp;|&nbsp; 
                    <i class="fa-solid fa-location-dot"></i> ${location}
                </p>
            </div>
        `;
        container.appendChild(card);
    });
}

//Filter events based on active search keyword and selected category tag
function filterEvents(){
    const searchInput = document.querySelector('.ev_search').value.toLowerCase().trim();

    const filtered = allEvents.filter(event=> {
        // Search term check against title and location
        const matchesSearch = (event.Title).toLowerCase().includes(searchInput) ||
                            (event.Location).toLowerCase().includes(searchInput);
        // Category tag check
        const eventCategory = (event.Category).toLowerCase();
        const matchesCategory = (currentCategory === 'all') || (eventCategory === currentCategory);

        return matchesSearch && matchesCategory;
    });
    renderEventsTable(filtered);
}

//Dom Content Loaded & Initialization
document.addEventListener('DOMContentLoaded', () => {
    fetchTournamentData();
    fetchRankingsData();

    fetchEventsData();
    // Event listener for search input field
    const searchInput = document.querySelector('.ev_search');
    if (searchInput) {
        searchInput.addEventListener('input', filterEvents);
    }

    // Event listeners for category filter buttons
    const categoryButtons = document.querySelectorAll('.ev_query .filter_btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Toggle 'active' UI class between category buttons
            categoryButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            // Update global category state and re-filter events
            currentCategory = e.target.getAttribute('data_category');
            filterEvents();
        });
    });
});

/*Member2*/
//-- jQuery LocalStorage, Filter & Theme Switcher --
        $(document).ready(function() {
            // --- 2. Committee LocalStorage Logic ---
            const STORAGE_KEY = 'redx_starred_committee';

            function getStarred() {
                return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
            }

            function saveStarred(list) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
                renderStarredUI();
            }

            function renderStarredUI() {
                const list = getStarred();
                $('#savedCount').text(list.length);

                $('.fav-star-icon').each(function() {
                    const id = $(this).data('id');
                    if (list.includes(id)) {
                        $(this).removeClass('bi-star').addClass('bi-star-fill active');
                    } else {
                        $(this).removeClass('bi-star-fill active').addClass('bi-star');
                    }
                });
            }

            renderStarredUI();

            $('.fav-star-icon').on('click', function() {
                const id = $(this).data('id');
                let list = getStarred();

                if (list.includes(id)) {
                    list = list.filter(item => item !== id);
                } else {
                    list.push(id);
                }
                saveStarred(list);
            });

            $('#resetFavBtn').on('click', function() {
                if (confirm('Clear all starred committee members from localStorage?')) {
                    localStorage.removeItem(STORAGE_KEY);
                    renderStarredUI();
                }
            });

            // --- 3. Filter & Live Search ---
            $('#filterButtons .btn-filter').on('click', function() {
                $('#filterButtons .btn-filter').removeClass('btn-danger active').addClass('btn-outline-danger');
                $(this).removeClass('btn-outline-danger').addClass('btn-danger active');
                applyFilterAndSearch();
            });

            $('#committeeSearchInput').on('keyup', function() {
                applyFilterAndSearch();
            });

            function applyFilterAndSearch() {
                const category = $('#filterButtons .btn-filter.active').data('filter');
                const term = $('#committeeSearchInput').val().toLowerCase().trim();
                let matchCount = 0;

                $('.committee-card-wrapper').each(function() {
                    const itemCat = $(this).data('category');
                    const name = $(this).data('name').toLowerCase();
                    const role = $(this).data('role').toLowerCase();

                    const catMatch = (category === 'all' || itemCat === category);
                    const searchMatch = name.includes(term) || role.includes(term);

                    if (catMatch && searchMatch) {
                        $(this).fadeIn(150);
                        matchCount++;
                    } else {
                        $(this).fadeOut(150);
                    }
                });

                if (matchCount === 0) {
                    $('#noMatchMsg').removeClass('d-none');
                } else {
                    $('#noMatchMsg').addClass('d-none');
                }
            }
        });

        $(document).ready(function() {
            // --- 2. Team Division LocalStorage Preference ---
            const STORAGE_KEY = 'redx_fav_division';

            function loadSavedDivision() {
                const fav = localStorage.getItem(STORAGE_KEY);
                if (fav) {
                    $('#favDivisionText').text(fav);
                } else {
                    $('#favDivisionText').text('None selected yet');
                }
            }

            loadSavedDivision();

            $('.set-division-btn').on('click', function(e) {
                e.preventDefault();
                const chosen = $(this).data('division');
                localStorage.setItem(STORAGE_KEY, chosen);
                loadSavedDivision();
            });
        });
