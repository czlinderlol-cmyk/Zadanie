document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("loadDataBtn");
    const tableBody = document.querySelector("#dataTable tbody");

    btn.addEventListener("click", async function () {
        try {
            const response = await fetch("../data/data.json");

            if (!response.ok) {
                throw new Error("JSON not found");
            }

            const data = await response.json();

            tableBody.innerHTML = "";

            data.programs.forEach(program => {
                program.courses.forEach(course => {
                    tableBody.innerHTML += `
                        <tr>
                            <td>${program.name}</td>
                            <td>${program.year}</td>
                            <td>${course.code}</td>
                            <td>${course.title}</td>
                            <td>${course.credits}</td>
                        </tr>
                    `;
                });
            });

        } catch (error) {
            console.error(error);
            alert("Error loading JSON");
        }
    });
});