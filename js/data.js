// js/data.js dengan Firebase

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("list");

function renderData(data) {
    container.innerHTML = "";
    if (!data || Object.keys(data).length === 0) {
    container.innerHTML = "<p class='info-empty'>Belum ada data pemenang.</p>";
    return;
    }

    const entries = Object.values(data);
    entries.forEach((d, i) => {
    const entry = document.createElement("div");
    entry.className = "winner-entry";

    entry.innerHTML = `
        <div class="info"><span class="label">#${i + 1} Nama:</span> ${d.nama}</div>
        <div class="info"><span class="label">Instagram:</span> ${d.ig || '-'}</div>
        <div class="info"><span class="label">Telepon:</span> ${d.telp}</div>
        <div class="info"><span class="label">Level:</span> ${d.level}</div>
        <div class="info"><span class="label">Hadiah:</span> ${d.reward}</div>
        <div class="info"><span class="label">Waktu:</span> ${new Date(d.timestamp).toLocaleString()}</div>
    `;

    if (d.selfie) {
        const img = document.createElement("img");
        img.src = d.selfie;
        img.className = "selfie-image";
        entry.appendChild(img);
    }

    container.appendChild(entry);
    });
}

// Tunggu Firebase siap
const waitFirebase = setInterval(() => {
    if (window.db) {
    clearInterval(waitFirebase);
    db.ref("winners").once("value", snapshot => {
        renderData(snapshot.val());
    });
    }
}, 300);
});
