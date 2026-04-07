        // --- THEME TOGGLE ---
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeIcon = themeToggleBtn.querySelector('i');
        const body = document.body;

        // Charger le thème au démarrage
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'light') {
            body.classList.add('light-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }

        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            const isLight = body.classList.contains('light-mode');
            
            // Changer l'icône
            if (isLight) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'light');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'dark');
            }
        });

        // --- MODAL DOCUMENTS ---
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");

        function openModal(e, type) {
            if(e) e.stopPropagation();
            modal.style.display = "flex";
            if(type === 'CV') {
                modalImg.src = "annexes/CV-M.TOUIL-Ayoub-9.jpg"; 
            } else {
                modalImg.src = "annexes/LM-M.TOUIL-Ayoub.jpg";
            }
        }
        function closeModal() {
            modal.style.display = "none";
        }

        // --- MODALE STAGE (INFO MODAL) ---
        const stageData = {
            'outs_photos': `
                <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px;">
                    <img src="Photos-outscale/IMG_1553.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 1">
                    <img src="Photos-outscale/IMG_1554.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 2">
                    <img src="Photos-outscale/IMG_1555.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 3">
                    <img src="Photos-outscale/IMG_1556.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 4">
                    <img src="Photos-outscale/IMG_1557.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 5">
                    <img src="Photos-outscale/IMG_1558.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 6">
                    <img src="Photos-outscale/IMG_1559.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 7">
                    <img src="Photos-outscale/IMG_1560.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 8">
                    <img src="Photos-outscale/IMG_1563.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 9">
                    <img src="Photos-outscale/IMG_1564.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 10">
                    <img src="Photos-outscale/IMG_1738.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 11">
                    <img src="Photos-outscale/IMG_1835.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 12">
                    <img src="Photos-outscale/IMG_1836.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 13">
                    <img src="Photos-outscale/IMG_1838.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 14">
                    <img src="Photos-outscale/IMG_1840.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 15">
                    <img src="Photos-outscale/IMG_1841.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 16">
                    <img src="Photos-outscale/IMG_1842.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 17">
                    <img src="Photos-outscale/IMG_3450.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 18">
                    <img src="Photos-outscale/IMG_3451.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Outscale 19">
                </div>
            `,
            'outs_rapport': `
                <div style="display:flex; align-items:center; gap:15px; background:var(--card-glass); padding:18px; border-radius:12px; border:1px solid var(--border-glass);">
                    <i class="fas fa-file-pdf" style="font-size:2.2rem; color:#e74c3c; flex-shrink:0;"></i>
                    <div style="flex:1;">
                        <strong style="font-size:0.95rem;">Rapport de stage — Outscale</strong><br>
                        <span style="font-size:0.8rem; color:var(--text-secondary);">Infrastructure Cloud · Février – Mars 2026</span>
                    </div>
                    <a href="annexes/Rapport de stage Outscale V.F (1).pdf" target="_blank" class="btn-main" style="padding:8px 18px; font-size:0.85rem; flex-shrink:0;">
                        <i class="fas fa-external-link-alt"></i> Ouvrir
                    </a>
                </div>
            `,
            'photos': `
                <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px;">
                    <img src="Photos-fnac-darty/IMG_7218.JPG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Fnac Darty 1">
                    <img src="Photos-fnac-darty/IMG_7239.JPG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Fnac Darty 2">
                    <img src="Photos-fnac-darty/IMG_7240.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Fnac Darty 3">
                    <img src="Photos-fnac-darty/IMG_7241.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Fnac Darty 4">
                    <img src="Photos-fnac-darty/IMG_7335.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Fnac Darty 5">
                    <img src="Photos-fnac-darty/IMG_7359.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Fnac Darty 6">
                    <img src="Photos-fnac-darty/IMG_7406.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Fnac Darty 7">
                    <img src="Photos-fnac-darty/IMG_7408.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Fnac Darty 8">
                    <img src="Photos-fnac-darty/IMG_7519.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Fnac Darty 9">
                    <img src="Photos-fnac-darty/IMG_7520.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Fnac Darty 10">
                    <img src="Photos-fnac-darty/IMG_7528.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Fnac Darty 11">
                    <img src="Photos-fnac-darty/IMG_7698.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Fnac Darty 12">
                    <img src="Photos-fnac-darty/photo-47_singular_display_fullPicture.JPEG" style="width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:8px; cursor:pointer;" onclick="this.requestFullscreen&&this.requestFullscreen()" alt="Fnac Darty 13">
                </div>
            `,
            'rapport': `
                <div style="display:flex; align-items:center; gap:15px; background:var(--card-glass); padding:18px; border-radius:12px; border:1px solid var(--border-glass);">
                    <i class="fas fa-file-pdf" style="font-size:2.2rem; color:#e74c3c; flex-shrink:0;"></i>
                    <div style="flex:1;">
                        <strong style="font-size:0.95rem;">Rapport de stage — Fnac Darty</strong><br>
                        <span style="font-size:0.8rem; color:var(--text-secondary);">Support DSI Siège · Juin – Juillet 2025</span>
                    </div>
                    <a href="annexes/Rapport de stage FNAC V.F .pdf" target="_blank" class="btn-main" style="padding:8px 18px; font-size:0.85rem; flex-shrink:0;">
                        <i class="fas fa-external-link-alt"></i> Ouvrir
                    </a>
                </div>
            `,
            'competences': `
                <ul class="skill-list">
                    <li><i class="fas fa-check" style="color:var(--accent-blue)"></i> <strong>C1.1 :</strong> Gérer le patrimoine informatique</li>
                    <li><i class="fas fa-check" style="color:var(--accent-blue)"></i> <strong>C1.2 :</strong> Répondre aux incidents (GLPI)</li>
                    <li><i class="fas fa-check" style="color:var(--accent-blue)"></i> <strong>C2.1 :</strong> Supervision des réseaux</li>
                </ul>
            `,
            'planning': `
                <p>Planning du déroulement de mon stage de 4 semaines :</p>
                <ul style="list-style:none; margin-top:15px; font-size:0.9rem;">
                    <li style="margin-bottom:10px; border-left:2px solid var(--accent-blue); padding-left:10px;"><strong>Semaine 1 :</strong> Découverte infrastructure & Outils.</li>
                    <li style="margin-bottom:10px; border-left:2px solid var(--accent-blue); padding-left:10px;"><strong>Semaine 2-3 :</strong> Traitement tickets N1/N2.</li>
                    <li style="margin-bottom:10px; border-left:2px solid var(--accent-blue); padding-left:10px;"><strong>Semaine 3 :</strong> Traitement tickets N1/N2, intervention aux étages, inventaire...</li>
                    <li style="margin-bottom:10px; border-left:2px solid var(--accent-blue); padding-left:10px;"><strong>Semaine 4 :</strong> Début du projet MTR, inventaire, reconditionnement d'ordinateurs, traitement de tickets...</li>
                </ul>
            `
        };

        function openInfoModal(type) {
            const infoModal = document.getElementById('infoModal');
            const title = document.getElementById('infoTitle');
            const body = document.getElementById('infoBody');

            title.innerText = type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ');
            body.innerHTML = stageData[type] || "<p>Contenu non disponible.</p>";
            infoModal.style.display = 'flex';
        }

        function closeInfoModal(e) {
            if (e.target.id === 'infoModal') {
                document.getElementById('infoModal').style.display = 'none';
            }
        }

        // --- GESTION DES NOUVELLES MODALES TECHNIQUES ---
        function openTechModal(modalId) {
            const m = document.getElementById(modalId);
            if(m) {
                m.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        }

        // Fermeture fiable : appelable par le bouton X ET par le backdrop
        function closeModalById(id) {
            const m = document.getElementById(id);
            if (m) m.style.display = 'none';
            document.body.style.overflow = '';
        }

        function closeTechModal(e, modalId) {
            if (e.target.id === modalId) {
                closeModalById(modalId);
            }
        }

        // Délégation globale : tout clic sur un .close-modal restaure le scroll
        document.addEventListener('click', function(e) {
            const closer = e.target.closest('.close-modal');
            if (closer) {
                document.body.style.overflow = '';
            }
        });

        // Touche Échap : ferme toute modale ouverte
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal').forEach(function(m) {
                    m.style.display = 'none';
                });
                const fm = document.getElementById('formation-modal');
                if (fm) fm.classList.remove('visible');
                document.body.style.overflow = '';
            }
        });

        // --- MODALE FORMATION COMPLÈTE ---
        function toggleFormationDetails() {
            const modal = document.getElementById('formation-modal');
            modal.classList.add('visible');
            document.body.style.overflow = 'hidden';
            showFormationStep('presentation');
        }

        function closeFormationModal(e) {
            if (!e || e.target.id === 'formation-modal') {
                const modal = document.getElementById('formation-modal');
                modal.classList.remove('visible');
                document.body.style.overflow = '';
            }
        }

        function showFormationStep(step) {
            document.getElementById('step-presentation').classList.remove('active');
            document.getElementById('step-specialties').classList.remove('active');
            
            if (step === 'presentation') {
                document.getElementById('step-presentation').classList.add('active');
            } else if (step === 'specialties') {
                document.getElementById('step-specialties').classList.add('active');
            }
        }
