document.getElementById("foodForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        password: document.getElementById("password").value,
        Energy_kcal: parseFloat(document.getElementById("energy").value),
        Protein_g: parseFloat(document.getElementById("protein").value),
        Fat_g: parseFloat(document.getElementById("fat").value),
        Carb_g: parseFloat(document.getElementById("carb").value),
        // Add other nutrient fields similarly
    };

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
            <h2>Results:</h2>
            <p>Vitamin A Deficiency: ${data.vitamin_a_deficiency ? 'Yes' : 'No'}</p>
            <p>Recommendation: ${data.recommendation}</p>
        `;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
