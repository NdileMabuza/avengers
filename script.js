const heroData = {
    thor: {
        bio: {
            name: "Thor",
            birth: "Asgard",
            alignment: "Good",
            race: "Asgardian"
        },
        stats: {
            Intelligence: "70%",
            Strength: "100%",
            Speed: "92%",
            Durability: "100%",
            Power: "100%",
            Combat: "100%"
        }
    },
    ironman: {
        bio: {
            name: "Iron Man",
            birth: "New York City",
            alignment: "Good",
            race: "Human"
        },
        stats: {
            Intelligence: "100%",
            Strength: "85%",
            Speed: "58%",
            Durability: "85%",
            Power: "100%",
            Combat: "64%"
        }
    },
    hulk: {
        bio: {
            name: "Hulk",
            birth: "Ohio",
            alignment: "Good",
            gender: "Male",
            race: "Human (Radiation)"
        },
        stats: {
            Intelligence: "88%",
            Strength: "100%",
            Speed: "47%",
            Durability: "100%",
            Power: "52%",
            Combat: "85%"
        }
    },
    blackwidow: {
        bio: {
            name: "Black Widow",
            birth: "Russia",
            alignment: "Good",
            gender: "Female",
            race: "Human"
        },
        stats: {
            Intelligence: "75%",
            Strength: "13%",
            Speed: "27%",
            Durability: "32%",
            Power: "39%",
            Combat: "100%"
        }
    },
    hawkeye: {
        bio: {
            name: "Hawkeye",
            birth: "Iowa",
            alignment: "Good",
            gender: "Male",
            race: "Human"
        },
        stats: {
            Intelligence: "50%",
            Strength: "12%",
            Speed: "23%",
            Durability: "14%",
            Power: "26%",
            Combat: "80%"
        }
    },
    captainamerica: {
        bio: {
            name: "Captain America",
            birth: "America",
            alignment: "Good",
            gender: "Male",
            race: "Human"
        },
        stats: {
            Intelligence: "63%",
            Strength: "19%",
            Speed: "35%",
            Durability: "56%",
            Power: "55%",
            Combat: "100%"
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const heroGrid = document.getElementById('heroGrid');
    const modal = document.getElementById('heroModal');
    const closeBtn = document.querySelector('.close');

    // Create hero cards
    Object.keys(heroData).forEach(heroKey => {
        const hero = heroData[heroKey];
        const heroCard = document.createElement('div');
        heroCard.className = 'hero-card';
        heroCard.innerHTML = `
            <img src="images/${heroKey}.jpg" alt="${hero.bio.name}" />
            <h3>${hero.bio.name}</h3>
            <p>${hero.bio.race}</p>
        `;
        heroCard.addEventListener('click', () => showHeroInfo(heroKey));
        heroGrid.appendChild(heroCard);
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

function showHeroInfo(heroKey) {
    const hero = heroData[heroKey];
    const bioDiv = document.getElementById('bio');
    const statsDiv = document.getElementById('stats');
    const modal = document.getElementById('heroModal');
    const modalContent = document.querySelector('.modal-content');

    bioDiv.innerHTML = `
        <h3>Bio</h3>
        <p><strong>Fighting Name:</strong> ${hero.bio.name}</p>
        <p><strong>Place of Birth:</strong> ${hero.bio.birth}</p>
        <p><strong>Alignment:</strong> ${hero.bio.alignment}</p>
        <p><strong>Race:</strong> ${hero.bio.race}</p>
        ${hero.bio.gender ? `<p><strong>Gender:</strong> ${hero.bio.gender}</p>` : ''}
    `;

    statsDiv.innerHTML = `
        <h3>Power Stats</h3>
        ${Object.entries(hero.stats).map(([key, value]) =>
        `<p><strong>${key}:</strong> ${value}</p>`
    ).join("")}
    `;

    // Set the background image of the modal
    modalContent.style.backgroundImage = `url('images/${heroKey}.jpg')`;

    modal.style.display = 'block';
}
