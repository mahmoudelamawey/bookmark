   let count = 1;

    function btn() {
      const name = document.getElementById("siteName").value.trim();
      const url = document.getElementById("siteUrl").value.trim();
      const tbody = document.querySelector("#bookmarkTable tbody");

      if (!name || !url) {
        alert("Please enter both name and URL.");
        return;
      }

      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${count}</td>
        <td>${name}</td>
        <td>
          <button class="action-btn bt1" onclick="window.open('${url}', '_blank')">Visit</button>
        </td>
        <td> 
          <button class="action-btn bt2" onclick="this.parentElement.parentElement.remove()">Delete</button>
        </td>
      `;

      tbody.appendChild(row);
      count++;

      // Clear inputs
      document.getElementById("siteName").value = "";
      document.getElementById("siteUrl").value = "";
    }